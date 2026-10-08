<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Program;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ProgramController extends Controller
{
    public function index(): Response
    {
        $programs = Program::with('creator')
            ->latest()
            ->paginate(20)
            ->through(fn (Program $item) => [
                'id' => $item->id,
                'title' => $item->title,
                'status' => $item->status,
                'creator' => $item->creator?->name,
                'created_at' => $item->created_at->format('d M Y'),
            ]);

        return Inertia::render('Admin/Programs/Index', [
            'programs' => $programs,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Programs/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:500'],
            'content' => ['nullable', 'string'],
            'status' => ['required', 'in:draft,published,archived'],
            'image' => ['nullable', 'image', 'mimes:jpeg,png,webp', 'max:2048'],
        ]);

        $slug = Str::slug($validated['title']);
        $originalSlug = $slug;
        $counter = 1;
        while (Program::where('slug', $slug)->exists()) {
            $slug = $originalSlug.'-'.$counter++;
        }

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('programs', 'public');
        }

        $validated['slug'] = $slug;
        $validated['created_by'] = $request->user()->id;

        Program::create($validated);

        return redirect()->route('admin.programs.index')
            ->with('success', 'Program berhasil dibuat.');
    }

    public function edit(Program $program): Response
    {
        return Inertia::render('Admin/Programs/Edit', [
            'program' => [
                'id' => $program->id,
                'title' => $program->title,
                'description' => $program->description,
                'content' => $program->content,
                'image' => $program->image,
                'status' => $program->status,
            ],
        ]);
    }

    public function update(Request $request, Program $program): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:500'],
            'content' => ['nullable', 'string'],
            'status' => ['required', 'in:draft,published,archived'],
            'image' => ['nullable', 'image', 'mimes:jpeg,png,webp', 'max:2048'],
        ]);

        if ($request->hasFile('image')) {
            if ($program->image) {
                Storage::disk('public')->delete($program->image);
            }
            $validated['image'] = $request->file('image')->store('programs', 'public');
        } else {
            unset($validated['image']);
        }

        $program->update($validated);

        return redirect()->route('admin.programs.index')
            ->with('success', 'Program berhasil diperbarui.');
    }

    public function destroy(Program $program): RedirectResponse
    {
        if ($program->image) {
            Storage::disk('public')->delete($program->image);
        }

        $program->delete();

        return redirect()->route('admin.programs.index')
            ->with('success', 'Program berhasil dihapus.');
    }

    public function publish(Program $program): RedirectResponse
    {
        $program->update(['status' => 'published', 'published_at' => $program->published_at ?? now()]);

        return back()->with('success', 'Program berhasil dipublish.');
    }

    public function unpublish(Program $program): RedirectResponse
    {
        $program->update(['status' => 'draft']);

        return back()->with('success', 'Program berhasil di-unpublish.');
    }
}
