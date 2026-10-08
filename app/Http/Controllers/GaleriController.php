<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Inertia\Inertia;
use Inertia\Response;

class GaleriController extends Controller
{
    public function index(): Response
    {
        $galleries = Gallery::published()
            ->with('category')
            ->latest()
            ->paginate(24)
            ->through(fn (Gallery $item) => [
                'id' => $item->id,
                'title' => $item->title,
                'caption' => $item->caption,
                'image' => asset('storage/'.$item->image),
                'location' => $item->location,
                'category' => $item->category?->name,
            ]);

        return Inertia::render('Galeri/Index', [
            'title' => 'Galeri Dokumentasi Pemuda',
            'subtitle' => 'Dokumentasi foto dan video kegiatan kaderisasi, aksi lapangan, jambore pemuda.',
            'category' => 'Galeri',
            'galleries' => $galleries,
        ]);
    }
}
