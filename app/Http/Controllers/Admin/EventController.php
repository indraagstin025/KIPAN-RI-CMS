<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    public function index(): Response
    {
        $events = Event::with('creator')
            ->orderBy('event_date', 'desc')
            ->paginate(20)
            ->through(fn (Event $item) => [
                'id' => $item->id,
                'title' => $item->title,
                'event_date' => $item->event_date->format('d M Y'),
                'location' => $item->location,
                'status' => $item->status,
                'creator' => $item->creator?->name,
            ]);

        return Inertia::render('Admin/Events/Index', [
            'events' => $events,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Events/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'event_date' => ['required', 'date'],
            'start_time' => ['nullable', 'date_format:H:i'],
            'end_time' => ['nullable', 'date_format:H:i'],
            'location' => ['nullable', 'string', 'max:255'],
            'status' => ['required', 'in:draft,published,archived'],
            'image' => ['nullable', 'image', 'mimes:jpeg,png,webp', 'max:2048'],
        ]);

        $slug = Str::slug($validated['title']);
        $originalSlug = $slug;
        $counter = 1;
        while (Event::where('slug', $slug)->exists()) {
            $slug = $originalSlug.'-'.$counter++;
        }

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('events', 'public');
        }

        $validated['slug'] = $slug;
        $validated['created_by'] = $request->user()->id;

        Event::create($validated);

        return redirect()->route('admin.events.index')
            ->with('success', 'Agenda berhasil dibuat.');
    }

    public function edit(Event $event): Response
    {
        return Inertia::render('Admin/Events/Edit', [
            'event' => [
                'id' => $event->id,
                'title' => $event->title,
                'slug' => $event->slug,
                'description' => $event->description,
                'event_date' => $event->event_date->format('Y-m-d'),
                'start_time' => $event->start_time,
                'end_time' => $event->end_time,
                'location' => $event->location,
                'image' => $event->image,
                'status' => $event->status,
            ],
        ]);
    }

    public function update(Request $request, Event $event): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'event_date' => ['required', 'date'],
            'start_time' => ['nullable', 'date_format:H:i'],
            'end_time' => ['nullable', 'date_format:H:i'],
            'location' => ['nullable', 'string', 'max:255'],
            'status' => ['required', 'in:draft,published,archived'],
            'image' => ['nullable', 'image', 'mimes:jpeg,png,webp', 'max:2048'],
        ]);

        if ($request->hasFile('image')) {
            if ($event->image) {
                Storage::disk('public')->delete($event->image);
            }
            $validated['image'] = $request->file('image')->store('events', 'public');
        } else {
            unset($validated['image']);
        }

        $event->update($validated);

        return redirect()->route('admin.events.index')
            ->with('success', 'Agenda berhasil diperbarui.');
    }

    public function destroy(Event $event): RedirectResponse
    {
        if ($event->image) {
            Storage::disk('public')->delete($event->image);
        }

        $event->delete();

        return redirect()->route('admin.events.index')
            ->with('success', 'Agenda berhasil dihapus.');
    }

    public function publish(Event $event): RedirectResponse
    {
        $event->update(['status' => 'published']);

        return back()->with('success', 'Agenda berhasil dipublish.');
    }

    public function unpublish(Event $event): RedirectResponse
    {
        $event->update(['status' => 'draft']);

        return back()->with('success', 'Agenda berhasil di-unpublish.');
    }
}
