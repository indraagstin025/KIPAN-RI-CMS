<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * Display a listing of CMS user accounts.
     */
    public function index(Request $request): Response
    {
        abort_unless($request->user()?->can('manage-users'), 403, 'Akses ditolak.');

        $query = User::latest();

        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $users = $query->paginate(15)->withQueryString()->through(fn (User $user) => [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'created_at' => $user->created_at?->format('d M Y, H:i') ?? '-',
            'is_current_user' => $user->id === $request->user()->id,
        ]);

        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
            'filters' => $request->only(['search']),
        ]);
    }

    /**
     * Store a newly created CMS user.
     * All users in this CMS module have the role of verifying / approving submissions.
     */
    public function store(Request $request): RedirectResponse
    {
        abort_unless($request->user()?->can('manage-users'), 403, 'Akses ditolak.');

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'confirmed', Password::min(8)],
        ], [
            'name.required' => 'Nama lengkap wajib diisi.',
            'email.required' => 'Alamat email wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'email.unique' => 'Email ini sudah terdaftar.',
            'password.required' => 'Kata sandi wajib diisi.',
            'password.confirmed' => 'Konfirmasi kata sandi tidak cocok.',
            'password.min' => 'Kata sandi minimal 8 karakter.',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        // Default role for CMS verifier / approver
        $user->assignRole('admin');

        return redirect()->route('admin.users.index')->with('success', "Pengguna {$user->name} berhasil ditambahkan sebagai Verifikator CMS.");
    }

    /**
     * Update the specified CMS user.
     */
    public function update(Request $request, User $user): RedirectResponse
    {
        abort_unless($request->user()?->can('manage-users'), 403, 'Akses ditolak.');

        $rules = [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users', 'email')->ignore($user->id)],
        ];

        $messages = [
            'name.required' => 'Nama lengkap wajib diisi.',
            'email.required' => 'Alamat email wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'email.unique' => 'Email ini sudah digunakan oleh akun lain.',
        ];

        if ($request->filled('password')) {
            $rules['password'] = ['confirmed', Password::min(8)];
            $messages['password.confirmed'] = 'Konfirmasi kata sandi baru tidak cocok.';
            $messages['password.min'] = 'Kata sandi baru minimal 8 karakter.';
        }

        $validated = $request->validate($rules, $messages);

        $user->name = $validated['name'];
        $user->email = $validated['email'];

        if ($request->filled('password')) {
            $user->password = Hash::make($validated['password']);
        }

        $user->save();

        return redirect()->route('admin.users.index')->with('success', "Data pengguna {$user->name} berhasil diperbarui.");
    }

    /**
     * Remove the specified CMS user.
     */
    public function destroy(Request $request, User $user): RedirectResponse
    {
        abort_unless($request->user()?->can('manage-users'), 403, 'Akses ditolak.');

        // Prevent self-deletion
        if ($user->id === $request->user()->id) {
            return back()->with('error', 'Anda tidak dapat menghapus akun Anda sendiri yang sedang aktif.');
        }

        // Prevent deleting the only remaining user
        if (User::count() <= 1) {
            return back()->with('error', 'Tidak dapat menghapus akun terakhir dalam sistem.');
        }

        $userName = $user->name;
        $user->delete();

        return redirect()->route('admin.users.index')->with('success', "Akun pengguna {$userName} berhasil dihapus.");
    }
}
