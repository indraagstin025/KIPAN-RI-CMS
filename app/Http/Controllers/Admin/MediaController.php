<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Media;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class MediaController extends Controller
{
    public function index(Request $request): Response
    {
        abort_unless(auth()->user()?->can('manage-media'), 403);

        $query = Media::latest();

        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('file_name', 'like', "%{$search}%")
                    ->orWhere('alt_text', 'like', "%{$search}%");
            });
        }

        if ($type = $request->input('type')) {
            if ($type === 'image') {
                $query->where('mime_type', 'like', 'image/%');
            } elseif ($type === 'video') {
                $query->where('mime_type', 'like', 'video/%');
            } elseif ($type === 'document') {
                $query->where('mime_type', 'not like', 'image/%')
                    ->where('mime_type', 'not like', 'video/%');
            }
        }

        $media = $query->paginate(24)
            ->withQueryString()
            ->through(fn (Media $item) => [
                'id' => $item->id,
                'file_name' => $item->file_name,
                'url' => asset('storage/'.$item->file_path),
                'mime_type' => $item->mime_type,
                'size' => $item->size,
                'alt_text' => $item->alt_text,
                'created_at' => $item->created_at->format('d M Y, H:i'),
            ]);

        return Inertia::render('Admin/Media/Index', [
            'media' => $media,
            'filters' => $request->only(['search', 'type']),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        abort_unless(auth()->user()?->can('manage-media'), 403);

        $request->validate([
            'file' => ['required', 'file', 'max:10240', 'mimes:jpg,jpeg,png,gif,webp,svg,pdf,mp4,mov'],
            'alt_text' => ['nullable', 'string', 'max:255'],
        ]);

        $file = $request->file('file');
        $path = $file->store('media', 'public');

        Media::create([
            'disk' => 'public',
            'file_path' => $path,
            'file_name' => $file->getClientOriginalName(),
            'mime_type' => $file->getMimeType(),
            'size' => $file->getSize(),
            'alt_text' => $request->input('alt_text'),
            'uploaded_by' => $request->user()->id,
        ]);

        return back()->with('success', 'File berhasil diunggah.');
    }

    public function update(Request $request, Media $medium): RedirectResponse
    {
        abort_unless(auth()->user()?->can('manage-media'), 403);

        $request->validate([
            'alt_text' => ['nullable', 'string', 'max:255'],
        ]);

        $medium->update(['alt_text' => $request->input('alt_text')]);

        return back()->with('success', 'Media diperbarui.');
    }

    public function destroy(Media $medium): RedirectResponse
    {
        abort_unless(auth()->user()?->can('manage-media'), 403);

        Storage::disk($medium->disk)->delete($medium->file_path);
        $medium->delete();

        return back()->with('success', 'Media dihapus.');
    }
}
