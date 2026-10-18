import {
    ConfirmDeleteModal,
    FlashMessage,
    FormField,
    PageHeader,
    SearchBar,
    inputClass,
    useDebouncedSearch,
} from '@/Components/Admin/AdminComponents';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import {
    Building2,
    ExternalLink,
    Globe,
    Pencil,
    Plus,
    Power,
    Trash2,
    X,
} from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';

interface PartnerItem {
    id: number;
    name: string;
    role: string | null;
    logo: string | null;
    website: string | null;
    is_active: boolean;
    sort_order: number;
}

interface Props {
    partners: PartnerItem[];
    filters?: { search?: string };
}

export default function PartnersIndex({ partners, filters }: Props) {
    const { flash } = usePage<PageProps>().props;

    const [showCreate, setShowCreate] = useState(false);
    const [editingPartner, setEditingPartner] = useState<PartnerItem | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<PartnerItem | null>(null);

    // Search bar
    const { value: searchValue, handleChange: handleSearch } = useDebouncedSearch(
        filters?.search ?? '',
        (val) => {
            router.get(
                '/admin/partners',
                { search: val },
                { preserveState: true, replace: true },
            );
        },
    );

    // Create form
    const createForm = useForm({
        name: '',
        role: '',
        logo: '',
        website: '',
        is_active: true,
        sort_order: partners.length,
    });

    // Edit form
    const editForm = useForm({
        name: '',
        role: '',
        logo: '',
        website: '',
        is_active: true,
        sort_order: 0,
    });

    const deleteForm = useForm({});

    useEffect(() => {
        if (editingPartner) {
            editForm.setData({
                name: editingPartner.name,
                role: editingPartner.role ?? '',
                logo: editingPartner.logo ?? '',
                website: editingPartner.website ?? '',
                is_active: editingPartner.is_active,
                sort_order: editingPartner.sort_order,
            });
            editForm.clearErrors();
        }
    }, [editingPartner]);

    function handleCreate(e: FormEvent) {
        e.preventDefault();
        createForm.post('/admin/partners', {
            preserveScroll: true,
            onSuccess: () => {
                setShowCreate(false);
                createForm.reset();
            },
        });
    }

    function handleUpdate(e: FormEvent) {
        e.preventDefault();
        if (!editingPartner) return;

        editForm.put(`/admin/partners/${editingPartner.id}`, {
            preserveScroll: true,
            onSuccess: () => {
                setEditingPartner(null);
                editForm.reset();
            },
        });
    }

    function handleDelete() {
        if (!deleteTarget) return;
        deleteForm.delete(`/admin/partners/${deleteTarget.id}`, {
            preserveScroll: true,
            onSuccess: () => setDeleteTarget(null),
        });
    }

    function toggleActive(partner: PartnerItem) {
        router.patch(`/admin/partners/${partner.id}/toggle`, {}, { preserveScroll: true });
    }

    return (
        <>
            <Head title="Mitra — KIPAN CMS" />
            <AdminLayout title="Manajemen Mitra">
                <FlashMessage success={flash?.success} error={flash?.error} />

                <PageHeader
                    title="Mitra & Kolaborator"
                    description={`${partners.length} mitra terdaftar`}
                >
                    <button
                        type="button"
                        onClick={() => {
                            createForm.reset();
                            createForm.clearErrors();
                            setShowCreate(true);
                        }}
                        className="inline-flex items-center gap-2 rounded-xl bg-kipan-navy px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-navy"
                    >
                        <Plus className="h-4 w-4" />
                        Tambah Mitra
                    </button>
                </PageHeader>

                {/* Search Bar */}
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="w-full sm:max-w-md">
                        <SearchBar
                            value={searchValue}
                            onChange={handleSearch}
                            placeholder="Cari nama mitra atau peran..."
                        />
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <Building2 className="h-4 w-4 text-slate-400" />
                        <span>{partners.length} data mitra</span>
                    </div>
                </div>

                {/* Partners Grid */}
                {partners.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white py-16 text-center shadow-xs">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-kipan-navy">
                            <Building2 className="h-6 w-6" />
                        </div>
                        <p className="text-sm font-semibold text-slate-700">Belum ada mitra ditemukan</p>
                        <p className="mt-1 text-xs text-slate-400">
                            {searchValue ? 'Tidak ada mitra yang cocok dengan pencarian.' : 'Tambahkan mitra atau sponsor pertama Anda.'}
                        </p>
                        {!searchValue && (
                            <button
                                type="button"
                                onClick={() => setShowCreate(true)}
                                className="mt-4 rounded-xl bg-kipan-navy px-4 py-2 text-xs font-semibold text-white hover:bg-blue-900"
                            >
                                Tambah Mitra Baru
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {partners.map((partner) => (
                            <div
                                key={partner.id}
                                className={`group flex flex-col justify-between rounded-2xl border bg-white p-5 shadow-xs transition-all hover:shadow-md ${
                                    partner.is_active ? 'border-slate-200/90' : 'border-slate-200/50 bg-slate-50/50 opacity-70'
                                }`}
                            >
                                <div>
                                    {/* Logo & Status Badge */}
                                    <div className="mb-4 flex items-start justify-between gap-3">
                                        <div className="flex h-16 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-2">
                                            {partner.logo ? (
                                                <img
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    className="max-h-full max-w-full object-contain"
                                                    onError={(e) => {
                                                        // Fallback to letter
                                                        (e.target as HTMLElement).style.display = 'none';
                                                    }}
                                                />
                                            ) : (
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-kipan-navy/10 text-base font-bold text-kipan-navy">
                                                    {partner.name.charAt(0).toUpperCase()}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Title & Role */}
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="font-bold text-slate-900 line-clamp-1">{partner.name}</h3>
                                        <span
                                            className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                                                partner.is_active
                                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                                                    : 'bg-slate-100 text-slate-500'
                                            }`}
                                        >
                                            {partner.is_active ? 'Aktif' : 'Nonaktif'}
                                        </span>
                                    </div>
                                    <p className="mt-0.5 text-xs text-slate-500 line-clamp-1">
                                        {partner.role || 'Mitra Strategis'}
                                    </p>
                                    <p className="mt-1 text-[11px] text-slate-400">
                                        Urutan: #{partner.sort_order}
                                    </p>
                                </div>

                                {/* Actions footer */}
                                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
                                    <div className="flex items-center gap-1.5">
                                        {partner.website && (
                                            <a
                                                href={partner.website}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-lg border border-slate-200 p-1.5 text-slate-500 transition hover:border-kipan-blue hover:text-kipan-blue"
                                                title="Buka Website"
                                            >
                                                <ExternalLink className="h-3.5 w-3.5" />
                                            </a>
                                        )}
                                        <button
                                            type="button"
                                            onClick={() => toggleActive(partner)}
                                            className={`rounded-lg border p-1.5 transition ${
                                                partner.is_active
                                                    ? 'border-emerald-200 text-emerald-600 hover:bg-emerald-50'
                                                    : 'border-slate-200 text-slate-400 hover:bg-slate-100'
                                            }`}
                                            title={partner.is_active ? 'Klik untuk Nonaktifkan' : 'Klik untuk Aktifkan'}
                                        >
                                            <Power className="h-3.5 w-3.5" />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <button
                                            type="button"
                                            onClick={() => setEditingPartner(partner)}
                                            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-2xs transition hover:border-slate-300 hover:bg-slate-50 hover:text-kipan-blue"
                                        >
                                            <Pencil className="h-3 w-3" />
                                            <span>Edit</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setDeleteTarget(partner)}
                                            className="rounded-lg border border-red-200 bg-white p-1.5 text-red-500 shadow-2xs transition hover:bg-red-50"
                                            title="Hapus Mitra"
                                        >
                                            <Trash2 className="h-3.5 w-3.5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ============================================================ */}
                {/* MODAL: TAMBAH MITRA */}
                {/* ============================================================ */}
                {showCreate && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
                            onClick={() => !createForm.processing && setShowCreate(false)}
                            aria-hidden="true"
                        />
                        <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl transition-all sm:p-7">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-kipan-navy">
                                        <Building2 className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900">Tambah Mitra Baru</h3>
                                        <p className="text-xs text-slate-500">Tambahkan organisasi, sponsor, atau partner pendukung</p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setShowCreate(false)}
                                    disabled={createForm.processing}
                                    className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <form onSubmit={handleCreate} className="mt-5 space-y-4">
                                <FormField label="Nama Mitra / Lembaga" htmlFor="create-name" error={createForm.errors.name} required>
                                    <input
                                        id="create-name"
                                        type="text"
                                        value={createForm.data.name}
                                        onChange={(e) => createForm.setData('name', e.target.value)}
                                        className={inputClass}
                                        placeholder="Contoh: BNN RI, Kemenpora"
                                        required
                                    />
                                </FormField>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <FormField label="Peran / Kategori" htmlFor="create-role" error={createForm.errors.role}>
                                        <input
                                            id="create-role"
                                            type="text"
                                            value={createForm.data.role}
                                            onChange={(e) => createForm.setData('role', e.target.value)}
                                            className={inputClass}
                                            placeholder="Sponsor Utama, Mitra Teknis"
                                        />
                                    </FormField>

                                    <FormField label="Urutan Tampil" htmlFor="create-sort">
                                        <input
                                            id="create-sort"
                                            type="number"
                                            min={0}
                                            value={createForm.data.sort_order}
                                            onChange={(e) => createForm.setData('sort_order', Number(e.target.value))}
                                            className={inputClass}
                                        />
                                    </FormField>
                                </div>

                                <FormField label="URL Logo Gambar" htmlFor="create-logo" error={createForm.errors.logo} hint="Link langsung ke gambar logo (PNG/SVG/WebP)">
                                    <input
                                        id="create-logo"
                                        type="text"
                                        value={createForm.data.logo}
                                        onChange={(e) => createForm.setData('logo', e.target.value)}
                                        className={inputClass}
                                        placeholder="https://example.com/logo.png"
                                    />
                                </FormField>

                                <FormField label="Website Resmi" htmlFor="create-website" error={createForm.errors.website}>
                                    <input
                                        id="create-website"
                                        type="url"
                                        value={createForm.data.website}
                                        onChange={(e) => createForm.setData('website', e.target.value)}
                                        className={inputClass}
                                        placeholder="https://mitra.or.id"
                                    />
                                </FormField>

                                <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
                                    <label className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={createForm.data.is_active}
                                            onChange={(e) => createForm.setData('is_active', e.target.checked)}
                                            className="h-4 w-4 rounded border-slate-300 text-kipan-navy focus:ring-kipan-blue"
                                        />
                                        <span>Publikasikan dan tampilkan mitra ini di website</span>
                                    </label>
                                </div>

                                <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowCreate(false)}
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
                                        {createForm.processing ? 'Menyimpan...' : 'Simpan Mitra'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* MODAL: EDIT MITRA */}
                {/* ============================================================ */}
                {editingPartner && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
                            onClick={() => !editForm.processing && setEditingPartner(null)}
                            aria-hidden="true"
                        />
                        <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl transition-all sm:p-7">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-kipan-navy">
                                        <Pencil className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900">Edit Data Mitra</h3>
                                        <p className="text-xs text-slate-500">Perbarui profil mitra {editingPartner.name}</p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setEditingPartner(null)}
                                    disabled={editForm.processing}
                                    className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <form onSubmit={handleUpdate} className="mt-5 space-y-4">
                                <FormField label="Nama Mitra / Lembaga" htmlFor="edit-name" error={editForm.errors.name} required>
                                    <input
                                        id="edit-name"
                                        type="text"
                                        value={editForm.data.name}
                                        onChange={(e) => editForm.setData('name', e.target.value)}
                                        className={inputClass}
                                        required
                                    />
                                </FormField>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <FormField label="Peran / Kategori" htmlFor="edit-role" error={editForm.errors.role}>
                                        <input
                                            id="edit-role"
                                            type="text"
                                            value={editForm.data.role}
                                            onChange={(e) => editForm.setData('role', e.target.value)}
                                            className={inputClass}
                                        />
                                    </FormField>

                                    <FormField label="Urutan Tampil" htmlFor="edit-sort">
                                        <input
                                            id="edit-sort"
                                            type="number"
                                            min={0}
                                            value={editForm.data.sort_order}
                                            onChange={(e) => editForm.setData('sort_order', Number(e.target.value))}
                                            className={inputClass}
                                        />
                                    </FormField>
                                </div>

                                <FormField label="URL Logo Gambar" htmlFor="edit-logo" error={editForm.errors.logo} hint="Link langsung ke gambar logo">
                                    <input
                                        id="edit-logo"
                                        type="text"
                                        value={editForm.data.logo}
                                        onChange={(e) => editForm.setData('logo', e.target.value)}
                                        className={inputClass}
                                    />
                                </FormField>

                                <FormField label="Website Resmi" htmlFor="edit-website" error={editForm.errors.website}>
                                    <input
                                        id="edit-website"
                                        type="url"
                                        value={editForm.data.website}
                                        onChange={(e) => editForm.setData('website', e.target.value)}
                                        className={inputClass}
                                    />
                                </FormField>

                                <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
                                    <label className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={editForm.data.is_active}
                                            onChange={(e) => editForm.setData('is_active', e.target.checked)}
                                            className="h-4 w-4 rounded border-slate-300 text-kipan-navy focus:ring-kipan-blue"
                                        />
                                        <span>Aktifkan (tampil di halaman publik website)</span>
                                    </label>
                                </div>

                                <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setEditingPartner(null)}
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
                    title="Hapus Mitra"
                    message={`Apakah Anda yakin ingin menghapus data mitra "${deleteTarget?.name}"?`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    processing={deleteForm.processing}
                />
            </AdminLayout>
        </>
    );
}
