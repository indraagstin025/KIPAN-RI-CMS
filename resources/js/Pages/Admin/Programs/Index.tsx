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
import { Award, Calendar, Filter, User } from 'lucide-react';
import { useState } from 'react';

interface ProgramItem {
    id: number;
    title: string;
    status: string;
    creator: string | null;
    created_at: string;
}

interface PaginatedPrograms {
    data: ProgramItem[];
    links: { url: string | null; label: string; active: boolean }[];
    from: number;
    to: number;
    total: number;
}

interface Props {
    programs: PaginatedPrograms;
    filters?: { search?: string; status?: string };
}

export default function ProgramsIndex({ programs, filters }: Props) {
    const { flash } = usePage<PageProps>().props;
    const [deleteTarget, setDeleteTarget] = useState<ProgramItem | null>(null);
    const [statusFilter, setStatusFilter] = useState(filters?.status ?? '');
    const deleteForm = useForm({});

    const { value: searchValue, handleChange: handleSearch } = useDebouncedSearch(
        filters?.search ?? '',
        (val) => {
            router.get(
                '/admin/programs',
                { search: val, status: statusFilter },
                { preserveState: true, replace: true },
            );
        },
    );

    function handleStatusChange(status: string) {
        setStatusFilter(status);
        router.get(
            '/admin/programs',
            { search: searchValue, status },
            { preserveState: true, replace: true },
        );
    }

    function handleDelete() {
        if (!deleteTarget) return;
        deleteForm.delete(`/admin/programs/${deleteTarget.id}`, {
            preserveScroll: true,
            onSuccess: () => setDeleteTarget(null),
        });
    }

    return (
        <>
            <Head title="Program — KIPAN CMS" />
            <AdminLayout title="Manajemen Program">
                <FlashMessage success={flash?.success} error={flash?.error} />

                <PageHeader
                    title="Program & Inisiatif"
                    description={`${programs.total} program terdaftar dalam sistem`}
                    createHref="/admin/programs/create"
                    createLabel="Tambah Program"
                />

                {/* Filter and Search Bar */}
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="w-full sm:max-w-md">
                        <SearchBar
                            value={searchValue}
                            onChange={handleSearch}
                            placeholder="Cari judul atau isi program..."
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
                            <option value="archived">Arsip</option>
                        </select>
                    </div>
                </div>

                <AdminTable>
                    <thead>
                        <tr>
                            <AdminTh>Judul Program</AdminTh>
                            <AdminTh>Status</AdminTh>
                            <AdminTh>Dibuat Oleh</AdminTh>
                            <AdminTh>Tanggal Dibuat</AdminTh>
                            <AdminTh className="text-right">Aksi</AdminTh>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {programs.data.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="py-14 text-center">
                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <Award className="h-8 w-8 text-slate-300" />
                                        <p className="text-sm font-semibold text-slate-700">Tidak ada program ditemukan</p>
                                        <p className="text-xs text-slate-400">
                                            {searchValue || statusFilter
                                                ? 'Tidak ada program yang cocok dengan filter pencarian.'
                                                : 'Mulai buat program dan inisiatif baru untuk pemuda KIPAN.'}
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            programs.data.map((item) => (
                                <tr key={item.id} className="transition hover:bg-slate-50/70">
                                    <AdminTd>
                                        <p className="max-w-md font-semibold text-slate-900 line-clamp-2">
                                            {item.title}
                                        </p>
                                    </AdminTd>
                                    <AdminTd>
                                        <StatusBadge status={item.status} />
                                    </AdminTd>
                                    <AdminTd>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                            <User className="h-3.5 w-3.5 text-slate-400" />
                                            <span>{item.creator ?? 'Admin'}</span>
                                        </div>
                                    </AdminTd>
                                    <AdminTd>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                            <Calendar className="h-3.5 w-3.5 text-slate-400" />
                                            <span>{item.created_at}</span>
                                        </div>
                                    </AdminTd>
                                    <AdminTd className="text-right">
                                        <div className="flex items-center justify-end gap-1.5">
                                            <Link
                                                href={`/admin/programs/${item.id}/${item.status === 'published' ? 'unpublish' : 'publish'}`}
                                                method="patch"
                                                as="button"
                                                preserveScroll
                                                className={`rounded-lg border px-2.5 py-1.5 text-xs font-medium transition ${
                                                    item.status === 'published'
                                                        ? 'border-amber-200 bg-white text-amber-600 hover:bg-amber-50'
                                                        : 'border-emerald-200 bg-white text-emerald-600 hover:bg-emerald-50'
                                                }`}
                                            >
                                                {item.status === 'published' ? 'Unpublish' : 'Publish'}
                                            </Link>
                                            <EditButton href={`/admin/programs/${item.id}/edit`} />
                                            <DeleteButton onClick={() => setDeleteTarget(item)} />
                                        </div>
                                    </AdminTd>
                                </tr>
                            ))
                        )}
                    </tbody>
                </AdminTable>

                <AdminPagination
                    links={programs.links}
                    from={programs.from}
                    to={programs.to}
                    total={programs.total}
                />

                <ConfirmDeleteModal
                    isOpen={deleteTarget !== null}
                    title="Hapus Program"
                    message={`Apakah Anda yakin ingin menghapus program "${deleteTarget?.title}"?`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    processing={deleteForm.processing}
                />
            </AdminLayout>
        </>
    );
}
