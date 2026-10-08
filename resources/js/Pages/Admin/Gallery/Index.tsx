import {
    ConfirmDeleteModal,
    FlashMessage,
    PageHeader,
    StatusBadge,
} from '@/Components/Admin/AdminComponents';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, ImageIcon, Pencil, Trash2 } from 'lucide-react';
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
}

export default function GalleryIndex({ galleries }: Props) {
    const { flash } = usePage<PageProps>().props;
    const [deleteTarget, setDeleteTarget] = useState<GalleryItem | null>(null);
    const deleteForm = useForm({});

    function handleDelete() {
        if (!deleteTarget) return;
        deleteForm.delete(`/admin/gallery/${deleteTarget.id}`, {
            onSuccess: () => setDeleteTarget(null),
        });
    }

    return (
        <>
            <Head title="Galeri — KIPAN CMS" />
            <AdminLayout title="Manajemen Galeri">
                <FlashMessage success={flash?.success} error={flash?.error} />

                <PageHeader
                    title="Galeri Foto"
                    description={`${galleries.total} total foto`}
                    createHref="/admin/gallery/create"
                    createLabel="Upload Foto"
                />

                {/* Grid Thumbnail */}
                {galleries.data.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 py-20 text-center">
                        <ImageIcon className="mb-3 h-12 w-12 text-slate-300" />
                        <p className="text-sm font-medium text-slate-500">Belum ada foto di galeri</p>
                        <Link
                            href="/admin/gallery/create"
                            className="mt-4 rounded-xl bg-kipan-navy px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900"
                        >
                            Upload Foto Pertama
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                        {galleries.data.map((item) => (
                            <div
                                key={item.id}
                                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
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

                                    {/* Overlay actions */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                                        <Link
                                            href={`/admin/gallery/${item.id}/edit`}
                                            className="rounded-full bg-white p-2 shadow transition hover:bg-blue-50 hover:text-kipan-blue"
                                            title="Edit"
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => setDeleteTarget(item)}
                                            className="rounded-full bg-white p-2 shadow transition hover:bg-red-50 hover:text-red-500"
                                            title="Hapus"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-2.5">
                                    <p className="truncate text-xs font-medium text-slate-700">{item.title}</p>
                                    <div className="mt-1.5 flex items-center justify-between gap-1">
                                        <StatusBadge status={item.status} />
                                        <Link
                                            href={`/admin/gallery/${item.id}/${item.status === 'published' ? 'unpublish' : 'publish'}`}
                                            method="patch"
                                            as="button"
                                            preserveScroll
                                            className={`rounded-md px-2 py-0.5 text-[10px] font-medium transition ${
                                                item.status === 'published'
                                                    ? 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                                                    : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                                            }`}
                                        >
                                            {item.status === 'published' ? 'Sembunyikan' : 'Tampilkan'}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {galleries.total > 0 && (
                    <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
                        <p className="text-xs text-slate-500">
                            Menampilkan <strong>{galleries.from}</strong>–<strong>{galleries.to}</strong> dari{' '}
                            <strong>{galleries.total}</strong> foto
                        </p>
                        <div className="flex items-center gap-1">
                            {galleries.links.map((link, i) => {
                                if (link.label.includes('Previous')) {
                                    return (
                                        <button key={i} type="button" disabled={!link.url} onClick={() => link.url && router.visit(link.url)} className="rounded-lg border border-slate-200 p-2 text-slate-500 disabled:opacity-40 hover:bg-slate-50">
                                            <ChevronLeft className="h-4 w-4" />
                                        </button>
                                    );
                                }
                                if (link.label.includes('Next')) {
                                    return (
                                        <button key={i} type="button" disabled={!link.url} onClick={() => link.url && router.visit(link.url)} className="rounded-lg border border-slate-200 p-2 text-slate-500 disabled:opacity-40 hover:bg-slate-50">
                                            <ChevronRight className="h-4 w-4" />
                                        </button>
                                    );
                                }
                                if (link.label === '...') return <span key={i} className="px-1 text-slate-400">…</span>;
                                return (
                                    <button key={i} type="button" onClick={() => link.url && router.visit(link.url)} className={`rounded-lg border px-3 py-1.5 text-xs font-medium ${link.active ? 'border-kipan-navy bg-kipan-navy text-white' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}>
                                        {link.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                <ConfirmDeleteModal
                    isOpen={deleteTarget !== null}
                    title="Hapus Foto"
                    message={`Yakin hapus foto "${deleteTarget?.title}"?`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    processing={deleteForm.processing}
                />
            </AdminLayout>
        </>
    );
}
