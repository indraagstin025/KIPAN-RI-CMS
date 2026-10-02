<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PartnerController extends Controller
{
    public function index(): Response
    {
        abort_unless(auth()->user()?->can('manage-settings'), 403);

        $partners = Partner::orderBy('sort_order')
            ->get()
            ->map(fn (Partner $item) => [
                'id' => $item->id,
                'name' => $item->name,
                'role' => $item->role,
                'logo' => $item->logo,
                'website' => $item->website,
                'is_active' => $item->is_active,
                'sort_order' => $item->sort_order,
            ]);

        return Inertia::render('Admin/Partners/Index', [
            'partners' => $partners,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        abort_unless(auth()->user()?->can('manage-settings'), 403);

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'role' => ['nullable', 'string', 'max:255'],
            'logo' => ['nullable', 'string', 'max:500'],
            'website' => ['nullable', 'url', 'max:500'],
            'is_active' => ['boolean'],
            'sort_order' => ['integer', 'min:0'],
        ]);

        Partner::create($validated);

        return redirect()->route('admin.partners.index')->with('success', 'Mitra berhasil ditambahkan.');
    }

    public function update(Request $request, Partner $partner): RedirectResponse
    {
        abort_unless(auth()->user()?->can('manage-settings'), 403);

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'role' => ['nullable', 'string', 'max:255'],
            'logo' => ['nullable', 'string', 'max:500'],
            'website' => ['nullable', 'url', 'max:500'],
            'is_active' => ['boolean'],
            'sort_order' => ['integer', 'min:0'],
        ]);

        $partner->update($validated);

        return redirect()->route('admin.partners.index')->with('success', 'Mitra diperbarui.');
    }

    public function destroy(Partner $partner): RedirectResponse
    {
        abort_unless(auth()->user()?->can('manage-settings'), 403);

        $partner->delete();

        return redirect()->route('admin.partners.index')->with('success', 'Mitra dihapus.');
    }

    public function toggle(Partner $partner): RedirectResponse
    {
        abort_unless(auth()->user()?->can('manage-settings'), 403);

        $partner->update(['is_active' => ! $partner->is_active]);

        return back()->with('success', $partner->is_active ? 'Mitra diaktifkan.' : 'Mitra dinonaktifkan.');
    }
}
