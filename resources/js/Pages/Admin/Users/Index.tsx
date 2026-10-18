import {
    AdminPagination,
    AdminTable,
    AdminTd,
    AdminTh,
    ConfirmDeleteModal,
    FlashMessage,
    PageHeader,
    SearchBar,
    inputClass,
    useDebouncedSearch,
} from '@/Components/Admin/AdminComponents';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import {
    Eye,
    EyeOff,
    Info,
    KeyRound,
    Pencil,
    ShieldCheck,
    Trash2,
    UserCheck,
    UserPlus,
    Users,
    X,
} from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';

interface UserItem {
    id: number;
    name: string;
    email: string;
    created_at: string;
    is_current_user: boolean;
}

interface PaginatedUsers {
    data: UserItem[];
    links: { url: string | null; label: string; active: boolean }[];
    from: number;
    to: number;
    total: number;
    current_page: number;
    last_page: number;
}

interface Props {
    users: PaginatedUsers;
    filters: { search?: string };
}

export default function UsersIndex({ users, filters }: Props) {
    const { flash, auth } = usePage<PageProps>().props;

    // Modals state
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<UserItem | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<UserItem | null>(null);

    // Password visibility toggles
    const [showCreatePass, setShowCreatePass] = useState(false);
    const [showCreateConfirm, setShowCreateConfirm] = useState(false);
    const [showEditPass, setShowEditPass] = useState(false);
    const [showEditConfirm, setShowEditConfirm] = useState(false);

    // Search hook
    const { value: searchValue, handleChange: handleSearch } = useDebouncedSearch(
        filters.search ?? '',
        (val) => {
            router.get(
                '/admin/users',
                { search: val },
                { preserveState: true, replace: true },
            );
        },
    );

    // Create form
    const createForm = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    // Edit form
    const editForm = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    // Delete form
    const deleteForm = useForm({});

    // Populate edit form when an user is selected
    useEffect(() => {
        if (editingUser) {
            editForm.setData({
                name: editingUser.name,
                email: editingUser.email,
                password: '',
                password_confirmation: '',
            });
            editForm.clearErrors();
        }
    }, [editingUser]);

    function handleCreate(e: FormEvent) {
        e.preventDefault();
        createForm.post('/admin/users', {
            preserveScroll: true,
            onSuccess: () => {
                setIsCreateOpen(false);
                createForm.reset();
            },
        });
    }

    function handleUpdate(e: FormEvent) {
        e.preventDefault();
        if (!editingUser) return;

        editForm.put(`/admin/users/${editingUser.id}`, {
            preserveScroll: true,
            onSuccess: () => {
                setEditingUser(null);
                editForm.reset();
            },
        });
    }

    function handleDelete() {
        if (!deleteTarget) return;

        deleteForm.delete(`/admin/users/${deleteTarget.id}`, {
            preserveScroll: true,
            onSuccess: () => setDeleteTarget(null),
        });
    }

    // Helper to extract initials for avatar
    function getInitials(name: string): string {
        return name
            .split(' ')
            .map((n) => n[0])
            .slice(0, 2)
            .join('')
            .toUpperCase();
    }

    return (
        <>
            <Head title="Manajemen Pengguna — KIPAN CMS" />

            <AdminLayout title="Manajemen Pengguna">
                <FlashMessage success={flash?.success} error={flash?.error} />

                {/* Header */}
                <PageHeader
                    title="Pengguna & Verifikator"
                    description={`${users.total} akun pengelola CMS terdaftar`}
                >
                    <button
                        type="button"
                        onClick={() => {
                            createForm.reset();
                            createForm.clearErrors();
                            setIsCreateOpen(true);
                        }}
                        className="inline-flex items-center gap-2 rounded-xl bg-kipan-navy px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-navy"
                    >
                        <UserPlus className="h-4 w-4" />
                        Tambah Pengguna
                    </button>
                </PageHeader>

                {/* Context Information Notice */}
                <div className="mb-6 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/80 via-white to-blue-50/40 p-4.5 shadow-xs">
                    <div className="flex items-start gap-3.5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-kipan-navy text-white shadow-xs">
                            <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div className="flex-1 text-sm">
                            <div className="flex items-center gap-2">
                                <h2 className="font-bold text-slate-800">
                                    Akses Pengguna Modul CMS
                                </h2>
                                <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-semibold text-kipan-navy">
                                    Verifikator / ACC
                                </span>
                            </div>
                            <p className="mt-1 leading-relaxed text-slate-600">
                                Seluruh akun yang terdaftar pada modul CMS ini memiliki satu fungsi utama: bertindak sebagai{' '}
                                <strong className="text-slate-800">Verifikator CMS</strong> yang berwenang meninjau, menyetujui (meng-ACC) pengajuan pemantauan/agenda, serta mengelola konten informasi secara menyeluruh.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Search & Filter Bar */}
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="w-full sm:max-w-md">
                        <SearchBar
                            value={searchValue}
                            onChange={handleSearch}
                            placeholder="Cari nama atau email pengguna..."
                        />
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <Users className="h-4 w-4 text-slate-400" />
                        <span>Menampilkan {users.data.length} dari {users.total} akun</span>
                    </div>
                </div>

                {/* Users Table */}
                <AdminTable>
                    <thead>
                        <tr>
                            <AdminTh>Pengguna</AdminTh>
                            <AdminTh>Peran & Tanggung Jawab</AdminTh>
                            <AdminTh>Terdaftar Sejak</AdminTh>
                            <AdminTh className="text-right">Aksi</AdminTh>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {users.data.length === 0 ? (
                            <tr>
                                <td className="py-12 text-center text-slate-400" colSpan={4}>
                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <Users className="h-8 w-8 text-slate-300" />
                                        <p className="text-sm font-medium text-slate-600">Tidak ada data pengguna</p>
                                        <p className="text-xs text-slate-400">
                                            {searchValue ? 'Tidak ada pengguna yang cocok dengan kata kunci pencarian.' : 'Belum ada pengguna terdaftar.'}
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            users.data.map((user) => (
                                <tr
                                    key={user.id}
                                    className={`transition hover:bg-slate-50/70 ${
                                        user.is_current_user ? 'bg-blue-50/20' : ''
                                    }`}
                                >
                                    {/* User Profile */}
                                    <AdminTd>
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-kipan-navy to-kipan-blue font-semibold text-white shadow-xs">
                                                {getInitials(user.name)}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold text-slate-900">
                                                        {user.name}
                                                    </span>
                                                    {user.is_current_user && (
                                                        <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-800">
                                                            Anda
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-xs text-slate-500">{user.email}</p>
                                            </div>
                                        </div>
                                    </AdminTd>

                                    {/* Role & Responsibility */}
                                    <AdminTd>
                                        <div className="flex flex-col gap-1">
                                            <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/60">
                                                <UserCheck className="h-3.5 w-3.5 text-emerald-600" />
                                                <span>Verifikator CMS</span>
                                            </div>
                                            <span className="text-[11px] text-slate-500">
                                                Meninjau & ACC Pengajuan
                                            </span>
                                        </div>
                                    </AdminTd>

                                    {/* Created Date */}
                                    <AdminTd>
                                        <span className="text-xs text-slate-600">
                                            {user.created_at}
                                        </span>
                                    </AdminTd>

                                    {/* Actions */}
                                    <AdminTd className="text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setEditingUser(user)}
                                                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-2xs transition hover:border-slate-300 hover:bg-slate-50 hover:text-kipan-blue"
                                                title="Edit Akun"
                                            >
                                                <Pencil className="h-3.5 w-3.5" />
                                                <span>Edit</span>
                                            </button>

                                            {user.is_current_user ? (
                                                <span
                                                    className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-400"
                                                    title="Anda tidak dapat menghapus akun Anda sendiri"
                                                >
                                                    <Trash2 className="h-3.5 w-3.5" />
                                                    <span>Hapus</span>
                                                </span>
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={() => setDeleteTarget(user)}
                                                    className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-white px-3 py-1.5 text-xs font-medium text-red-600 shadow-2xs transition hover:border-red-300 hover:bg-red-50"
                                                    title="Hapus Akun"
                                                >
                                                    <Trash2 className="h-3.5 w-3.5" />
                                                    <span>Hapus</span>
                                                </button>
                                            )}
                                        </div>
                                    </AdminTd>
                                </tr>
                            ))
                        )}
                    </tbody>
                </AdminTable>

                {/* Pagination */}
                <AdminPagination
                    links={users.links}
                    from={users.from}
                    to={users.to}
                    total={users.total}
                />

                {/* ============================================================ */}
                {/* MODAL: TAMBAH PENGGUNA */}
                {/* ============================================================ */}
                {isCreateOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
                            onClick={() => !createForm.processing && setIsCreateOpen(false)}
                            aria-hidden="true"
                        />
                        <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl transition-all sm:p-7">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-kipan-navy">
                                        <UserPlus className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900">
                                            Tambah Pengguna Baru
                                        </h3>
                                        <p className="text-xs text-slate-500">
                                            Daftarkan akun pengelola dengan akses Verifikator CMS
                                        </p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIsCreateOpen(false)}
                                    disabled={createForm.processing}
                                    className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <form onSubmit={handleCreate} className="mt-5 space-y-4">
                                {/* Role Notice */}
                                <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3 text-xs text-slate-600 flex items-center gap-2">
                                    <Info className="h-4 w-4 shrink-0 text-kipan-blue" />
                                    <span>
                                        Akun baru otomatis ditetapkan sebagai <strong>Verifikator CMS</strong> (bertugas meninjau & meng-ACC pengajuan).
                                    </span>
                                </div>

                                {/* Name */}
                                <div>
                                    <label htmlFor="create-name" className="mb-1.5 block text-xs font-semibold text-slate-700">
                                        Nama Lengkap <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="create-name"
                                        type="text"
                                        value={createForm.data.name}
                                        onChange={(e) => createForm.setData('name', e.target.value)}
                                        className={inputClass}
                                        placeholder="Contoh: Ahmad Fauzi"
                                        autoComplete="name"
                                        required
                                    />
                                    {createForm.errors.name && (
                                        <p className="mt-1 text-xs text-red-500">{createForm.errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="create-email" className="mb-1.5 block text-xs font-semibold text-slate-700">
                                        Alamat Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="create-email"
                                        type="email"
                                        value={createForm.data.email}
                                        onChange={(e) => createForm.setData('email', e.target.value)}
                                        className={inputClass}
                                        placeholder="nama@kipan.or.id"
                                        autoComplete="email"
                                        required
                                    />
                                    {createForm.errors.email && (
                                        <p className="mt-1 text-xs text-red-500">{createForm.errors.email}</p>
                                    )}
                                </div>

                                {/* Password */}
                                <div>
                                    <label htmlFor="create-password" className="mb-1.5 block text-xs font-semibold text-slate-700">
                                        Kata Sandi <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="create-password"
                                            type={showCreatePass ? 'text' : 'password'}
                                            value={createForm.data.password}
                                            onChange={(e) => createForm.setData('password', e.target.value)}
                                            className={`${inputClass} pr-10`}
                                            placeholder="Minimal 8 karakter"
                                            autoComplete="new-password"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowCreatePass(!showCreatePass)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                        >
                                            {showCreatePass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                    {createForm.errors.password && (
                                        <p className="mt-1 text-xs text-red-500">{createForm.errors.password}</p>
                                    )}
                                </div>

                                {/* Password Confirmation */}
                                <div>
                                    <label htmlFor="create-password-confirmation" className="mb-1.5 block text-xs font-semibold text-slate-700">
                                        Konfirmasi Kata Sandi <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="create-password-confirmation"
                                            type={showCreateConfirm ? 'text' : 'password'}
                                            value={createForm.data.password_confirmation}
                                            onChange={(e) => createForm.setData('password_confirmation', e.target.value)}
                                            className={`${inputClass} pr-10`}
                                            placeholder="Ulangi kata sandi"
                                            autoComplete="new-password"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowCreateConfirm(!showCreateConfirm)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                        >
                                            {showCreateConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                    {createForm.errors.password_confirmation && (
                                        <p className="mt-1 text-xs text-red-500">{createForm.errors.password_confirmation}</p>
                                    )}
                                </div>

                                {/* Modal Actions */}
                                <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsCreateOpen(false)}
                                        disabled={createForm.processing}
                                        className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={createForm.processing}
                                        className="inline-flex items-center gap-2 rounded-xl bg-kipan-navy px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-900 disabled:opacity-60"
                                    >
                                        {createForm.processing ? 'Menyimpan...' : 'Simpan Pengguna'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* MODAL: EDIT PENGGUNA */}
                {/* ============================================================ */}
                {editingUser && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
                            onClick={() => !editForm.processing && setEditingUser(null)}
                            aria-hidden="true"
                        />
                        <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl transition-all sm:p-7">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-kipan-navy">
                                        <Pencil className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900">
                                            Edit Data Pengguna
                                        </h3>
                                        <p className="text-xs text-slate-500">
                                            Perbarui informasi akun {editingUser.name}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setEditingUser(null)}
                                    disabled={editForm.processing}
                                    className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <form onSubmit={handleUpdate} className="mt-5 space-y-4">
                                {/* Name */}
                                <div>
                                    <label htmlFor="edit-name" className="mb-1.5 block text-xs font-semibold text-slate-700">
                                        Nama Lengkap <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="edit-name"
                                        type="text"
                                        value={editForm.data.name}
                                        onChange={(e) => editForm.setData('name', e.target.value)}
                                        className={inputClass}
                                        required
                                    />
                                    {editForm.errors.name && (
                                        <p className="mt-1 text-xs text-red-500">{editForm.errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="edit-email" className="mb-1.5 block text-xs font-semibold text-slate-700">
                                        Alamat Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="edit-email"
                                        type="email"
                                        value={editForm.data.email}
                                        onChange={(e) => editForm.setData('email', e.target.value)}
                                        className={inputClass}
                                        required
                                    />
                                    {editForm.errors.email && (
                                        <p className="mt-1 text-xs text-red-500">{editForm.errors.email}</p>
                                    )}
                                </div>

                                {/* Password Reset Option (Optional) */}
                                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 space-y-3.5">
                                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                        <KeyRound className="h-4 w-4 text-slate-400" />
                                        <span>Ganti Kata Sandi (Opsional)</span>
                                    </div>
                                    <p className="text-[11px] text-slate-500">
                                        Biarkan kosong jika tidak ingin mengganti kata sandi pengguna ini.
                                    </p>

                                    <div>
                                        <label htmlFor="edit-password" className="mb-1 block text-xs font-medium text-slate-600">
                                            Kata Sandi Baru
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="edit-password"
                                                type={showEditPass ? 'text' : 'password'}
                                                value={editForm.data.password}
                                                onChange={(e) => editForm.setData('password', e.target.value)}
                                                className={`${inputClass} pr-10`}
                                                placeholder="Kosongkan jika tidak diubah"
                                                autoComplete="new-password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowEditPass(!showEditPass)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                            >
                                                {showEditPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                        {editForm.errors.password && (
                                            <p className="mt-1 text-xs text-red-500">{editForm.errors.password}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="edit-password-confirmation" className="mb-1 block text-xs font-medium text-slate-600">
                                            Ulangi Kata Sandi Baru
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="edit-password-confirmation"
                                                type={showEditConfirm ? 'text' : 'password'}
                                                value={editForm.data.password_confirmation}
                                                onChange={(e) => editForm.setData('password_confirmation', e.target.value)}
                                                className={`${inputClass} pr-10`}
                                                placeholder="Ulangi kata sandi baru"
                                                autoComplete="new-password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowEditConfirm(!showEditConfirm)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                            >
                                                {showEditConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                        {editForm.errors.password_confirmation && (
                                            <p className="mt-1 text-xs text-red-500">{editForm.errors.password_confirmation}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Modal Actions */}
                                <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setEditingUser(null)}
                                        disabled={editForm.processing}
                                        className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={editForm.processing}
                                        className="inline-flex items-center gap-2 rounded-xl bg-kipan-navy px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-900 disabled:opacity-60"
                                    >
                                        {editForm.processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* MODAL: KONFIRMASI HAPUS */}
                {/* ============================================================ */}
                <ConfirmDeleteModal
                    isOpen={deleteTarget !== null}
                    title="Hapus Pengguna"
                    message={`Apakah Anda yakin ingin menghapus akun pengguna "${deleteTarget?.name}" (${deleteTarget?.email})? Akun ini tidak akan dapat mengakses modul CMS lagi.`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    processing={deleteForm.processing}
                />
            </AdminLayout>
        </>
    );
}
