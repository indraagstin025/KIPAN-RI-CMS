<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\News;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class NewsController extends Controller
{
    public function index(Request $request): Response
    {
        $query = News::with(['author', 'category'])->latest();

        if ($search = $request->input('search')) {
            $query->where('title', 'ilike', '%'.$search.'%');
        }

        if ($status = $request->input('status')) {
            $query->where('status', $status);
        }

        $news = $query->paginate(20)->withQueryString()->through(fn (News $item) => [
            'id' => $item->id,
            'title' => $item->title,
            'slug' => $item->slug,
            'status' => $item->status,
            'category' => $item->category?->name,
            'author' => $item->author?->name,
            'published_at' => $item->published_at?->format('d M Y'),
            'created_at' => $item->created_at->format('d M Y'),
        ]);

        return Inertia::render('Admin/News/Index', [
            'news' => $news,
            'filters' => $request->only(['search', 'status']),
        ]);
    }

    public function create(): Response
    {
        $categories = Category::where('type', 'news')->orderBy('name')->get(['id', 'name']);

        return Inertia::render('Admin/News/Create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'content' => ['required', 'string'],
            'category_id' => ['nullable', 'exists:categories,id'],
            'status' => ['required', 'in:draft,published,archived'],
            'featured_image' => ['nullable', 'image', 'mimes:jpeg,png,webp', 'max:2048'],
        ]);

        $slug = Str::slug($validated['title']);
        $originalSlug = $slug;
        $counter = 1;
        while (News::where('slug', $slug)->exists()) {
            $slug = $originalSlug.'-'.$counter++;
        }

        if ($request->hasFile('featured_image')) {
            $path = $request->file('featured_image')->store('news', 'public');
            $validated['featured_image'] = $path;
        }

        $validated['slug'] = $slug;
        $validated['author_id'] = $request->user()->id;

        if ($validated['status'] === 'published') {
            $validated['published_at'] = now();
        }

        News::create($validated);

        return redirect()->route('admin.news.index')
            ->with('success', 'Berita berhasil dibuat.');
    }

    public function edit(News $news): Response
    {
        $categories = Category::where('type', 'news')->orderBy('name')->get(['id', 'name']);

        return Inertia::render('Admin/News/Edit', [
            'news' => [
                'id' => $news->id,
                'title' => $news->title,
                'slug' => $news->slug,
                'excerpt' => $news->excerpt,
                'content' => $news->content,
                'featured_image' => $news->featured_image,
                'category_id' => $news->category_id,
                'status' => $news->status,
                'published_at' => $news->published_at?->format('Y-m-d'),
            ],
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, News $news): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'content' => ['required', 'string'],
            'category_id' => ['nullable', 'exists:categories,id'],
            'status' => ['required', 'in:draft,published,archived'],
            'featured_image' => ['nullable', 'image', 'mimes:jpeg,png,webp', 'max:2048'],
        ]);

        if ($request->hasFile('featured_image')) {
            if ($news->featured_image) {
                Storage::disk('public')->delete($news->featured_image);
            }
            $validated['featured_image'] = $request->file('featured_image')->store('news', 'public');
        } else {
            unset($validated['featured_image']);
        }

        if ($validated['status'] === 'published' && $news->status !== 'published') {
            $validated['published_at'] = now();
        }

        $news->update($validated);

        return redirect()->route('admin.news.index')
            ->with('success', 'Berita berhasil diperbarui.');
    }

    public function destroy(News $news): RedirectResponse
    {
        if ($news->featured_image) {
            Storage::disk('public')->delete($news->featured_image);
        }

        $news->delete();

        return redirect()->route('admin.news.index')
            ->with('success', 'Berita berhasil dihapus.');
    }

    public function publish(News $news): RedirectResponse
    {
        abort_unless(auth()->user()?->can('manage-news'), 403);

        $news->update([
            'status' => 'published',
            'published_at' => $news->published_at ?? now(),
        ]);

        return back()->with('success', 'Berita berhasil dipublish.');
    }

    public function unpublish(News $news): RedirectResponse
    {
        abort_unless(auth()->user()?->can('manage-news'), 403);

        $news->update(['status' => 'draft']);

        return back()->with('success', 'Berita berhasil di-unpublish.');
    }
}
