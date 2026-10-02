import {
    AdminPagination,
    AdminTable,
    AdminTd,
    AdminTh,
    ConfirmDeleteModal,
    DeleteButton,
    EditButton,
    FlashMessage,
    PageHeader,
    SearchBar,
    StatusBadge,
    useDebouncedSearch,
} from '@/Components/Admin/AdminComponents';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

interface NewsItem {
    id: number;
    title: string;
    slug: string;
    status: string;
    category: string | null;
    author: string | null;
    published_at: string | null;
    created_at: string;
}

interface PaginatedNews {
    data: NewsItem[];
    links: { url: string | null; label: string; active: boolean }[];
    from: number;
    to: number;
    total: number;
    current_page: number;
    last_page: number;
}

interface Props {
    news: PaginatedNews;
    filters: { search?: string; status?: string };
}

export default function NewsIndex({ news, filters }: Props) {
    const { flash } = usePage<PageProps>().props;
    const [deleteTarget, setDeleteTarget] = useState<NewsItem | null>(null);
    const [statusFilter, setStatusFilter] = useState(filters.status ?? '');

    const deleteForm = useForm({});

    const { value: searchValue, handleChange: handleSearch } = useDebouncedSearch(
        filters.search ?? '',
        (val) =>
            router.get(
                '/admin/news',
                { search: val, status: statusFilter },
                { preserveState: true, replace: true },
            ),
    );

    function applyStatusFilter(status: string) {
        setStatusFilter(status);
        router.get(
            '/admin/news',
            { search: searchValue, status },
            { preserveState: true, replace: true },
        );
    }

    function handleDelete() {
        if (!deleteTarget) return;
        deleteForm.delete(`/admin/news/${deleteTarget.id}`, {
            onSuccess: () => setDeleteTarget(null),
        });
    }

    return (
        <>
            <Head title="Berita — KIPAN CMS" />
            <AdminLayout title="Manajemen Berita">
                <FlashMessage success={flash?.success} error={flash?.error} />

                <PageHeader
                    title="Berita"
                    description={`${news.total} total berita`}
                    createHref="/admin/news/create"
                    createLabel="Tulis Berita"
                />

                {/* Toolbar */}
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="w-full sm:w-72">
                        <SearchBar
                            value={searchValue}
                            onChange={handleSearch}
                            placeholder="Cari judul berita..."
                        />
                    </div>
                    <div className="flex gap-2">
                        {['', 'draft', 'published', 'archived'].map((s) => (
                            <button
                                key={s}
                                type="button"
                                onClick={() => applyStatusFilter(s)}
                                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                                    statusFilter === s
                                        ? 'border-kipan-navy bg-kipan-navy text-white'
                                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                                }`}
                            >
                                {s === '' ? 'Semua' : s === 'draft' ? 'Draf' : s === 'published' ? 'Publik' : 'Arsip'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table */}
                <AdminTable>
                    <thead>
                        <tr>
                            <AdminTh>Judul</AdminTh>
                            <AdminTh>Kategori</AdminTh>
                            <AdminTh>Author</AdminTh>
                            <AdminTh>Status</AdminTh>
                            <AdminTh>Tanggal</AdminTh>
                            <AdminTh className="text-right">Aksi</AdminTh>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {news.data.length === 0 && (
                            <tr>
                                <td colSpan={6} className="py-12 text-center text-sm text-slate-400">
                                    Belum ada berita.{' '}
                                    <a href="/admin/news/create" className="text-kipan-blue underline">
                                        Tulis berita pertama
                                    </a>
                                </td>
                            </tr>
                        )}
                        {news.data.map((item) => (
                            <tr key={item.id} className="group hover:bg-slate-50/60">
                                <AdminTd>
                                    <div className="max-w-xs">
                                        <p className="font-medium text-slate-800 line-clamp-2">{item.title}</p>
                                        <p className="text-xs text-slate-400 mt-0.5">{item.slug}</p>
                                    </div>
                                </AdminTd>
                                <AdminTd>
                                    <span className="text-xs text-slate-500">{item.category ?? '—'}</span>
                                </AdminTd>
                                <AdminTd>
                                    <span className="text-xs text-slate-500">{item.author ?? '—'}</span>
                                </AdminTd>
                                <AdminTd>
                                    <StatusBadge status={item.status} />
                                </AdminTd>
                                <AdminTd>
                                    <span className="text-xs text-slate-500">
                                        {item.published_at ?? item.created_at}
                                    </span>
                                </AdminTd>
                                <AdminTd className="text-right">
                                    <div className="flex items-center justify-end gap-1.5">
                                        <Link
                                            href={`/admin/news/${item.id}/${item.status === 'published' ? 'unpublish' : 'publish'}`}
                                            method="patch"
                                            as="button"
                                            preserveScroll
                                            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                                                item.status === 'published'
                                                    ? 'border-amber-200 bg-white text-amber-600 hover:bg-amber-50'
                                                    : 'border-emerald-200 bg-white text-emerald-600 hover:bg-emerald-50'
                                            }`}
                                        >
                                            {item.status === 'published' ? 'Unpublish' : 'Publish'}
                                        </Link>
                                        <EditButton href={`/admin/news/${item.id}/edit`} />
                                        <DeleteButton onClick={() => setDeleteTarget(item)} />
                                    </div>
                                </AdminTd>
                            </tr>
                        ))}
                    </tbody>
                </AdminTable>

                <AdminPagination
                    links={news.links}
                    from={news.from}
                    to={news.to}
                    total={news.total}
                />

                <ConfirmDeleteModal
                    isOpen={deleteTarget !== null}
                    title="Hapus Berita"
                    message={`Yakin hapus "${deleteTarget?.title}"? Tindakan ini tidak dapat dibatalkan.`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    processing={deleteForm.processing}
                />
            </AdminLayout>
        </>
    );
}
