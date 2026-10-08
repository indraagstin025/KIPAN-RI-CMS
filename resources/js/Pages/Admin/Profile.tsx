import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { CheckCircle, KeyRound, ShieldCheck, User } from 'lucide-react';
import { FormEvent } from 'react';

interface ProfileUser {
    id: number;
    name: string;
    email: string;
    roles: string[];
}

interface ProfileProps {
    user: ProfileUser;
}

const ROLE_LABELS: Record<string, string> = {
    'super-admin': 'Super Admin',
    admin: 'Admin',
    editor: 'Editor',
    author: 'Author',
    viewer: 'Viewer',
};

export default function Profile({ user }: ProfileProps) {
    const { flash } = usePage<PageProps>().props;

    /* ---- Info form ---- */
    const infoForm = useForm({
        name: user.name,
        email: user.email,
    });

    function submitInfo(e: FormEvent) {
        e.preventDefault();
        infoForm.patch('/admin/profile');
    }

    /* ---- Password form ---- */
    const passwordForm = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    function submitPassword(e: FormEvent) {
        e.preventDefault();
        passwordForm.put('/admin/profile/password', {
            onSuccess: () => {
                passwordForm.reset();
            },
        });
    }

    return (
        <>
            <Head title="Profil Saya — KIPAN CMS" />
            <AdminLayout title="Profil Saya">
                <div className="mx-auto max-w-2xl space-y-6">
                    {/* Flash message */}
                    {flash?.success && (
                        <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4">
                            <CheckCircle className="h-5 w-5 shrink-0 text-emerald-500" />
                            <p className="text-sm font-medium text-emerald-800">{flash.success}</p>
                        </div>
                    )}

                    {/* Role badge header */}
                    <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#061C33] to-[#0D3F70] px-6 py-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-kipan-yellow/20 text-2xl font-black text-kipan-yellow uppercase">
                            {user.name.charAt(0)}
                        </div>
                        <div>
                            <div className="text-base font-bold text-white">{user.name}</div>
                            <div className="mt-0.5 text-sm text-blue-200">{user.email}</div>
                            <div className="mt-1.5 flex flex-wrap gap-1.5">
                                {user.roles.map((role) => (
                                    <span
                                        key={role}
                                        className="inline-flex items-center gap-1 rounded-full bg-kipan-yellow/20 px-2.5 py-0.5 text-xs font-semibold text-kipan-yellow"
                                    >
                                        <ShieldCheck className="h-3 w-3" />
                                        {ROLE_LABELS[role] ?? role}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ---- Info form ---- */}
                    <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                        <div className="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
                            <User className="h-5 w-5 text-blue-500" />
                            <h2 className="text-sm font-semibold text-slate-800">Informasi Akun</h2>
                        </div>

                        <form onSubmit={submitInfo} className="space-y-5 p-6">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-1.5 block text-sm font-medium text-slate-700"
                                >
                                    Nama Lengkap
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={infoForm.data.name}
                                    onChange={(e) => infoForm.setData('name', e.target.value)}
                                    required
                                    className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 transition focus:border-kipan-blue focus:outline-none focus:ring-2 focus:ring-kipan-blue/20"
                                />
                                {infoForm.errors.name && (
                                    <p className="mt-1 text-xs text-red-500">{infoForm.errors.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-1.5 block text-sm font-medium text-slate-700"
                                >
                                    Alamat Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={infoForm.data.email}
                                    onChange={(e) => infoForm.setData('email', e.target.value)}
                                    required
                                    className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 transition focus:border-kipan-blue focus:outline-none focus:ring-2 focus:ring-kipan-blue/20"
                                />
                                {infoForm.errors.email && (
                                    <p className="mt-1 text-xs text-red-500">{infoForm.errors.email}</p>
                                )}
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={infoForm.processing}
                                    className="rounded-xl bg-kipan-blue px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue disabled:opacity-60"
                                >
                                    {infoForm.processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* ---- Password form ---- */}
                    <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                        <div className="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
                            <KeyRound className="h-5 w-5 text-amber-500" />
                            <h2 className="text-sm font-semibold text-slate-800">Ganti Kata Sandi</h2>
                        </div>

                        <form onSubmit={submitPassword} className="space-y-5 p-6">
                            {/* Current password */}
                            <div>
                                <label
                                    htmlFor="current_password"
                                    className="mb-1.5 block text-sm font-medium text-slate-700"
                                >
                                    Kata Sandi Saat Ini
                                </label>
                                <input
                                    id="current_password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={passwordForm.data.current_password}
                                    onChange={(e) =>
                                        passwordForm.setData('current_password', e.target.value)
                                    }
                                    required
                                    className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 transition focus:border-kipan-blue focus:outline-none focus:ring-2 focus:ring-kipan-blue/20"
                                    placeholder="Masukkan kata sandi lama"
                                />
                                {passwordForm.errors.current_password && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {passwordForm.errors.current_password}
                                    </p>
                                )}
                            </div>

                            {/* New password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-1.5 block text-sm font-medium text-slate-700"
                                >
                                    Kata Sandi Baru
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    autoComplete="new-password"
                                    value={passwordForm.data.password}
                                    onChange={(e) => passwordForm.setData('password', e.target.value)}
                                    required
                                    className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 transition focus:border-kipan-blue focus:outline-none focus:ring-2 focus:ring-kipan-blue/20"
                                    placeholder="Min. 8 karakter, huruf besar, huruf kecil, angka"
                                />
                                {passwordForm.errors.password && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {passwordForm.errors.password}
                                    </p>
                                )}
                                <p className="mt-1 text-xs text-slate-400">
                                    Minimal 8 karakter, mengandung huruf besar, huruf kecil, dan angka.
                                </p>
                            </div>

                            {/* Confirm password */}
                            <div>
                                <label
                                    htmlFor="password_confirmation"
                                    className="mb-1.5 block text-sm font-medium text-slate-700"
                                >
                                    Konfirmasi Kata Sandi Baru
                                </label>
                                <input
                                    id="password_confirmation"
                                    type="password"
                                    autoComplete="new-password"
                                    value={passwordForm.data.password_confirmation}
                                    onChange={(e) =>
                                        passwordForm.setData('password_confirmation', e.target.value)
                                    }
                                    required
                                    className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 transition focus:border-kipan-blue focus:outline-none focus:ring-2 focus:ring-kipan-blue/20"
                                    placeholder="Ulangi kata sandi baru"
                                />
                                {passwordForm.errors.password_confirmation && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {passwordForm.errors.password_confirmation}
                                    </p>
                                )}
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={passwordForm.processing}
                                    className="rounded-xl bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:opacity-60"
                                >
                                    {passwordForm.processing ? 'Memproses...' : 'Ganti Kata Sandi'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
