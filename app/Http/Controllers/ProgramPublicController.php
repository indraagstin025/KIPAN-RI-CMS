<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Inertia\Inertia;
use Inertia\Response;

class ProgramPublicController extends Controller
{
    public function index(): Response
    {
        $programs = Program::where('status', 'published')
            ->orderBy('created_at', 'desc')
            ->paginate(12)
            ->through(fn (Program $item) => [
                'id' => $item->id,
                'title' => $item->title,
                'slug' => $item->slug,
                'description' => $item->description,
                'image' => $item->image ? asset('storage/'.$item->image) : null,
            ]);

        return Inertia::render('Program/Index', [
            'title' => 'Program & Aksi Kepemudaan',
            'subtitle' => 'Pelatihan kader inti pemuda, workshop deteksi dini P4GN, advokasi sebaya.',
            'category' => 'Program & Aksi',
            'programs' => $programs,
        ]);
    }

    public function show(string $slug): Response
    {
        $program = Program::where('status', 'published')
            ->where('slug', $slug)
            ->firstOrFail();

        return Inertia::render('Program/Show', [
            'program' => [
                'id' => $program->id,
                'title' => $program->title,
                'description' => $program->description,
                'content' => $program->content,
                'image' => $program->image ? asset('storage/'.$program->image) : null,
            ],
        ]);
    }
}
