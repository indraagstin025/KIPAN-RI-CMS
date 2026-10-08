<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AgendaController extends Controller
{
    public function index(Request $request): Response
    {
        $events = Event::published()
            ->orderBy('event_date', 'asc')
            ->paginate(12)
            ->withQueryString()
            ->through(fn (Event $item) => [
                'id' => $item->id,
                'title' => $item->title,
                'slug' => $item->slug,
                'description' => $item->description,
                'event_date' => $item->event_date->translatedFormat('d F Y'),
                'event_date_raw' => $item->event_date->format('Y-m-d'),
                'day' => $item->event_date->format('d'),
                'month' => $item->event_date->translatedFormat('M'),
                'start_time' => $item->start_time,
                'end_time' => $item->end_time,
                'location' => $item->location,
                'image' => $item->image ? asset('storage/'.$item->image) : null,
                'status' => $item->event_date->isPast() ? 'Selesai' : 'Akan Datang',
            ]);

        return Inertia::render('Agenda/Index', [
            'title' => 'Agenda & Kalender Kegiatan Nasional',
            'subtitle' => 'Jadwal pelatihan nasional, jambore pemuda bersinar, sosialisasi sekolah/kampus.',
            'category' => 'Agenda',
            'events' => $events,
        ]);
    }

    public function show(string $slug): Response
    {
        $event = Event::published()
            ->where('slug', $slug)
            ->firstOrFail();

        return Inertia::render('Agenda/Show', [
            'event' => [
                'id' => $event->id,
                'title' => $event->title,
                'description' => $event->description,
                'event_date' => $event->event_date->translatedFormat('d F Y'),
                'start_time' => $event->start_time,
                'end_time' => $event->end_time,
                'location' => $event->location,
                'image' => $event->image ? asset('storage/'.$event->image) : null,
            ],
        ]);
    }
}
