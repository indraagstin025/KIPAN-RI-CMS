import {
    AdminPagination,
    ConfirmDeleteModal,
    FlashMessage,
    PageHeader,
    SearchBar,
    StatusBadge,
    useDebouncedSearch,
} from '@/Components/Admin/AdminComponents';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { Filter, ImageIcon, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface GalleryItem {
    id: number;
    title: string;
    image: string | null;
    image_url: string | null;
    category: string | null;
    location: string | null;
    status: string;
    created_at: string;
}

interface PaginatedGallery {
    data: GalleryItem[];
    links: { url: string | null; label: string; active: boolean }[];
    from: number;
    to: number;
    total: number;
}

interface Props {
    galleries: PaginatedGallery;
    filters?: { search?: string; status?: string };
}

export default function GalleryIndex({ galleries, filters }: Props) {
    const { flash } = usePage<PageProps>().props;
    const [deleteTarget, setDeleteTarget] = useState<GalleryItem | null>(null);
    const [statusFilter, setStatusFilter] = useState(filters?.status ?? '');
    const deleteForm = useForm({});

    const { value: searchValue, handleChange: handleSearch } = useDebouncedSearch(
        filters?.search ?? '',
        (val) => {
            router.get(
                '/admin/gallery',
                { search: val, status: statusFilter },
                { preserveState: true, replace: true },
            );
        },
    );

    function handleStatusChange(status: string) {
        setStatusFilter(status);
        router.get(
            '/admin/gallery',
            { search: searchValue, status },
            { preserveState: true, replace: true },
        );
    }

    function handleDelete() {
        if (!deleteTarget) return;
        deleteForm.delete(`/admin/gallery/${deleteTarget.id}`, {
            preserveScroll: true,
            onSuccess: () => setDeleteTarget(null),
        });
    }

    return (
        <>
            <Head title="Galeri — KIPAN CMS" />
            <AdminLayout title="Manajemen Galeri">
                <FlashMessage success={flash?.success} error={flash?.error} />

                <PageHeader
                    title="Galeri Dokumentasi"
                    description={`${galleries.total} foto kegiatan tersimpan`}
                    createHref="/admin/gallery/create"
                    createLabel="Upload Foto"
                />

                {/* Search & Status Filters */}
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="w-full sm:max-w-md">
                        <SearchBar
                            value={searchValue}
                            onChange={handleSearch}
                            placeholder="Cari judul, lokasi, atau keterangan foto..."
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 text-slate-400" />
                        <select
                            value={statusFilter}
                            onChange={(e) => handleStatusChange(e.target.value)}
                            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-2xs transition focus:border-kipan-blue focus:outline-none"
                        >
                            <option value="">Semua Status</option>
                            <option value="published">Publik</option>
                            <option value="draft">Draf</option>
                        </select>
                    </div>
                </div>

                {/* Grid Thumbnail */}
                {galleries.data.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white py-20 text-center shadow-xs">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-kipan-navy">
                            <ImageIcon className="h-6 w-6" />
                        </div>
                        <p className="text-sm font-semibold text-slate-700">Tidak ada foto di galeri</p>
                        <p className="mt-1 text-xs text-slate-400">
                            {searchValue || statusFilter
                                ? 'Tidak ada foto yang cocok dengan kriteria pencarian.'
                                : 'Mulai dokumentasikan kegiatan KIPAN dengan mengunggah foto.'}
                        </p>
                        {!searchValue && !statusFilter && (
                            <Link
                                href="/admin/gallery/create"
                                className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-kipan-navy px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-900"
                            >
                                Upload Foto Pertama
                            </Link>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                        {galleries.data.map((item) => (
                            <div
                                key={item.id}
                                className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs transition hover:shadow-md"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-square overflow-hidden bg-slate-100">
                                    {item.image_url ? (
                                        <img
                                            src={item.image_url}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center">
                                            <ImageIcon className="h-8 w-8 text-slate-300" />
                                        </div>
                                    )}

                                    {/* Overlay actions on hover */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-slate-900/50 opacity-0 backdrop-blur-2xs transition-opacity group-hover:opacity-100">
                                        <Link
                                            href={`/admin/gallery/${item.id}/edit`}
                                            className="rounded-full bg-white p-2 text-slate-700 shadow-sm transition hover:bg-blue-50 hover:text-kipan-blue"
                                            title="Edit Foto"
                                        >
                                            <Pencil className="h-3.5 w-3.5" />
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => setDeleteTarget(item)}
                                            className="rounded-full bg-white p-2 text-red-500 shadow-sm transition hover:bg-red-50"
                                            title="Hapus Foto"
                                        >
                                            <Trash2 className="h-3.5 w-3.5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-2.5">
                                    <p className="truncate text-xs font-semibold text-slate-800" title={item.title}>
                                        {item.title}
                                    </p>
                                    {item.location && (
                                        <p className="mt-0.5 truncate text-[11px] text-slate-400">
                                            {item.location}
                                        </p>
                                    )}
                                    <div className="mt-2 flex items-center justify-between gap-1">
                                        <StatusBadge status={item.status} />
                                        <Link
                                            href={`/admin/gallery/${item.id}/${item.status === 'published' ? 'unpublish' : 'publish'}`}
                                            method="patch"
                                            as="button"
                                            preserveScroll
                                            className={`rounded-md px-2 py-0.5 text-[10px] font-semibold transition ${
                                                item.status === 'published'
                                                    ? 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                                                    : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                                            }`}
                                        >
                                            {item.status === 'published' ? 'Arsipkan' : 'Publikasi'}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                <AdminPagination
                    links={galleries.links}
                    from={galleries.from}
                    to={galleries.to}
                    total={galleries.total}
                />

                <ConfirmDeleteModal
                    isOpen={deleteTarget !== null}
                    title="Hapus Foto"
                    message={`Apakah Anda yakin ingin menghapus foto "${deleteTarget?.title}"?`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    processing={deleteForm.processing}
                />
            </AdminLayout>
        </>
    );
}
