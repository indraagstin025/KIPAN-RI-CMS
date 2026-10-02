<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BeritaController extends Controller
{
    public function index(Request $request): Response
    {
        $query = News::with(['author', 'category'])
            ->published()
            ->latest('published_at');

        if ($category = $request->input('category')) {
            $query->whereHas('category', fn ($q) => $q->where('name', $category));
        }

        $news = $query->paginate(12)->withQueryString()->through(fn (News $item) => [
            'id' => $item->id,
            'title' => $item->title,
            'slug' => $item->slug,
            'excerpt' => $item->excerpt,
            'featured_image' => $item->featured_image
                ? asset('storage/'.$item->featured_image)
                : null,
            'category' => $item->category?->name,
            'author' => $item->author?->name,
            'published_at' => $item->published_at?->translatedFormat('d F Y'),
        ]);

        // Get distinct categories for filter
        $categories = Category::whereHas('news', fn ($q) => $q->published())
            ->where('type', 'news')
            ->pluck('name');

        return Inertia::render('Berita/Index', [
            'title' => 'Berita & Kabar Aksi Daerah',
            'subtitle' => 'Publikasi, siaran pers, dan liputan aksi nyata kader KIPAN di berbagai provinsi.',
            'category' => 'Berita',
            'news' => $news,
            'categories' => $categories,
            'activeCategory' => $request->input('category', ''),
        ]);
    }

    public function show(string $slug): Response
    {
        $news = News::with(['author', 'category'])
            ->published()
            ->where('slug', $slug)
            ->firstOrFail();

        $related = News::with(['author', 'category'])
            ->published()
            ->where('id', '!=', $news->id)
            ->when($news->category_id, fn ($q) => $q->where('category_id', $news->category_id))
            ->latest('published_at')
            ->limit(3)
            ->get()
            ->map(fn (News $item) => [
                'id' => $item->id,
                'title' => $item->title,
                'slug' => $item->slug,
                'excerpt' => $item->excerpt,
                'featured_image' => $item->featured_image
                    ? asset('storage/'.$item->featured_image)
                    : null,
                'published_at' => $item->published_at?->translatedFormat('d F Y'),
            ]);

        return Inertia::render('Berita/Show', [
            'news' => [
                'id' => $news->id,
                'title' => $news->title,
                'slug' => $news->slug,
                'content' => $news->content,
                'excerpt' => $news->excerpt,
                'featured_image' => $news->featured_image
                    ? asset('storage/'.$news->featured_image)
                    : null,
                'category' => $news->category?->name,
                'author' => $news->author?->name,
                'published_at' => $news->published_at?->translatedFormat('d F Y'),
            ],
            'related' => $related,
        ]);
    }
}
