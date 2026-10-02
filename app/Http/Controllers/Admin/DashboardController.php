<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\Gallery;
use App\Models\News;
use App\Models\Program;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $stats = [
            'news_total' => News::count(),
            'news_published' => News::where('status', 'published')->count(),
            'events_total' => Event::count(),
            'events_upcoming' => Event::published()->upcoming()->count(),
            'programs_total' => Program::count(),
            'programs_published' => Program::where('status', 'published')->count(),
            'galleries_total' => Gallery::count(),
        ];

        $recentNews = News::with('author')
            ->latest()
            ->limit(5)
            ->get()
            ->map(fn (News $item) => [
                'id' => $item->id,
                'title' => $item->title,
                'status' => $item->status,
                'author' => $item->author?->name,
                'created_at' => $item->created_at->diffForHumans(),
            ]);

        $upcomingEvents = Event::published()
            ->upcoming()
            ->orderBy('event_date')
            ->limit(5)
            ->get()
            ->map(fn (Event $item) => [
                'id' => $item->id,
                'title' => $item->title,
                'event_date' => $item->event_date->format('d M Y'),
                'location' => $item->location,
            ]);

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
            'recentNews' => $recentNews,
            'upcomingEvents' => $upcomingEvents,
        ]);
    }
}
