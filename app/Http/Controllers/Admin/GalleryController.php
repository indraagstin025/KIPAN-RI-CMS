<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Gallery;
use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class GalleryController extends Controller
{
    // Host yang diizinkan untuk galeri tautan (IG/YouTube/Drive). Di luar
    // ini (termasuk javascript:) ditolak — validasi oleh host, bukan pola.
    private const LINK_HOSTS = [
        'instagram.com' => 'instagram',
        'www.instagram.com' => 'instagram',
        'youtube.com' => 'youtube',
        'www.youtube.com' => 'youtube',
        'youtu.be' => 'youtube',
        'www.youtu.be' => 'youtube',
        'drive.google.com' => 'drive',
    ];

    // providerForUrl menurunkan provider dari host secara otoritatif
    // (input client TIDAK dipercaya).
    private function providerForUrl(string $url): ?string
    {
        $host = strtolower((string) parse_url(trim($url), PHP_URL_HOST));

        return self::LINK_HOSTS[$host] ?? null;
    }

    public function index(): Response
    {
        $galleries = Gallery::with(['creator', 'category'])
            ->latest()
            ->paginate(24)
            ->through(fn (Gallery $item) => [
                'id' => $item->id,
                'title' => $item->title,
                'image' => $item->image,
                'image_url' => $item->image ? asset('storage/'.$item->image) : null,
                'source' => $item->source,
                'external_url' => $item->external_url,
                'provider' => $item->provider,
                'category' => $item->category?->name,
                'location' => $item->location,
                'status' => $item->status,
                'created_at' => $item->created_at->format('d M Y'),
            ]);

        return Inertia::render('Admin/Gallery/Index', [
            'galleries' => $galleries,
        ]);
    }

    public function create(): Response
    {
        $categories = Category::whereIn('type', ['gallery', 'news'])->orderBy('name')->get(['id', 'name']);

        return Inertia::render('Admin/Gallery/Create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'caption' => ['nullable', 'string', 'max:500'],
            'category_id' => ['nullable', 'exists:categories,id'],
            'location' => ['nullable', 'string', 'max:255'],
            'status' => ['required', 'in:draft,published'],
            'source' => ['required', 'in:upload,link'],
            'image' => ['prohibited_if:source,link', 'required_if:source,upload', 'image', 'mimes:jpeg,png,webp', 'max:4096'],
            'external_url' => ['prohibited_if:source,upload', 'required_if:source,link', 'string', 'max:500', 'url:https', function (string $attribute, mixed $value, Closure $fail): void {
                if ($this->providerForUrl((string) $value) === null) {
                    $fail('Tautan harus dari Instagram, YouTube, atau Google Drive (https).');
                }
            }],
        ]);

        if ($validated['source'] === 'link') {
            $validated['provider'] = $this->providerForUrl($validated['external_url']);
            $validated['image'] = null;
        } else {
            $validated['image'] = $request->file('image')->store('gallery', 'public');
            $validated['external_url'] = null;
            $validated['provider'] = null;
        }
        $validated['created_by'] = $request->user()->id;

        Gallery::create($validated);

        return redirect()->route('admin.gallery.index')
            ->with('success', $validated['source'] === 'link' ? 'Tautan galeri berhasil ditambahkan.' : 'Foto berhasil diupload.');
    }

    public function edit(Gallery $gallery): Response
    {
        $categories = Category::whereIn('type', ['gallery', 'news'])->orderBy('name')->get(['id', 'name']);

        return Inertia::render('Admin/Gallery/Edit', [
            'gallery' => [
                'id' => $gallery->id,
                'title' => $gallery->title,
                'caption' => $gallery->caption,
                'category_id' => $gallery->category_id,
                'location' => $gallery->location,
                'status' => $gallery->status,
                'source' => $gallery->source ?? 'upload',
                'external_url' => $gallery->external_url,
                'provider' => $gallery->provider,
                'image_url' => $gallery->image ? asset('storage/'.$gallery->image) : null,
            ],
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, Gallery $gallery): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'caption' => ['nullable', 'string', 'max:500'],
            'category_id' => ['nullable', 'exists:categories,id'],
            'location' => ['nullable', 'string', 'max:255'],
            'status' => ['required', 'in:draft,published'],
            'source' => ['required', 'in:upload,link'],
            'image' => ['prohibited_if:source,link', 'image', 'mimes:jpeg,png,webp', 'max:4096'],
            'external_url' => ['prohibited_if:source,upload', 'required_if:source,link', 'string', 'max:500', 'url:https', function (string $attribute, mixed $value, Closure $fail): void {
                if ($this->providerForUrl((string) $value) === null) {
                    $fail('Tautan harus dari Instagram, YouTube, atau Google Drive (https).');
                }
            }],
        ]);

        if ($validated['source'] === 'link') {
            // Berkas lama dibuang (tanpa yatim) karena sumber berganti.
            if ($gallery->image) {
                Storage::disk('public')->delete($gallery->image);
            }
            $validated['provider'] = $this->providerForUrl($validated['external_url']);
            $validated['image'] = null;
        } else {
            if ($request->hasFile('image')) {
                if ($gallery->image) {
                    Storage::disk('public')->delete($gallery->image);
                }
                $validated['image'] = $request->file('image')->store('gallery', 'public');
            } else {
                unset($validated['image']);
            }
            $validated['external_url'] = null;
            $validated['provider'] = null;
        }

        $gallery->update($validated);

        return redirect()->route('admin.gallery.index')
            ->with('success', 'Galeri berhasil diperbarui.');
    }

    public function destroy(Gallery $gallery): RedirectResponse
    {
        if ($gallery->image) {
            Storage::disk('public')->delete($gallery->image);
        }

        $gallery->delete();

        return redirect()->route('admin.gallery.index')
            ->with('success', 'Foto berhasil dihapus.');
    }

    public function publish(Gallery $gallery): RedirectResponse
    {
        $gallery->update(['status' => 'published']);

        return back()->with('success', 'Foto berhasil dipublish.');
    }

    public function unpublish(Gallery $gallery): RedirectResponse
    {
        $gallery->update(['status' => 'draft']);

        return back()->with('success', 'Foto berhasil di-unpublish.');
    }
}
