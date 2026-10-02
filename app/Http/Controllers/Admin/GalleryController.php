<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Gallery;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class GalleryController extends Controller
{
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
            'image' => ['required', 'image', 'mimes:jpeg,png,webp', 'max:4096'],
        ]);

        $validated['image'] = $request->file('image')->store('gallery', 'public');
        $validated['created_by'] = $request->user()->id;

        Gallery::create($validated);

        return redirect()->route('admin.gallery.index')
            ->with('success', 'Foto berhasil diupload.');
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
            'image' => ['nullable', 'image', 'mimes:jpeg,png,webp', 'max:4096'],
        ]);

        if ($request->hasFile('image')) {
            if ($gallery->image) {
                Storage::disk('public')->delete($gallery->image);
            }
            $validated['image'] = $request->file('image')->store('gallery', 'public');
        } else {
            unset($validated['image']);
        }

        $gallery->update($validated);

        return redirect()->route('admin.gallery.index')
            ->with('success', 'Foto berhasil diperbarui.');
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
