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
    StatusBadge,
} from '@/Components/Admin/AdminComponents';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
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
}

export default function ProgramsIndex({ programs }: Props) {
    const { flash } = usePage<PageProps>().props;
    const [deleteTarget, setDeleteTarget] = useState<ProgramItem | null>(null);
    const deleteForm = useForm({});

    function handleDelete() {
        if (!deleteTarget) return;
        deleteForm.delete(`/admin/programs/${deleteTarget.id}`, {
            onSuccess: () => setDeleteTarget(null),
        });
    }

    return (
        <>
            <Head title="Program — KIPAN CMS" />
            <AdminLayout title="Manajemen Program">
                <FlashMessage success={flash?.success} error={flash?.error} />

                <PageHeader
                    title="Program"
                    description={`${programs.total} total program`}
                    createHref="/admin/programs/create"
                    createLabel="Tambah Program"
                />

                <AdminTable>
                    <thead>
                        <tr>
                            <AdminTh>Judul</AdminTh>
                            <AdminTh>Status</AdminTh>
                            <AdminTh>Dibuat Oleh</AdminTh>
                            <AdminTh>Tanggal</AdminTh>
                            <AdminTh className="text-right">Aksi</AdminTh>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {programs.data.length === 0 && (
                            <tr>
                                <td colSpan={5} className="py-12 text-center text-sm text-slate-400">
                                    Belum ada program.
                                </td>
                            </tr>
                        )}
                        {programs.data.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50/60">
                                <AdminTd>
                                    <p className="max-w-sm font-medium text-slate-800 line-clamp-2">{item.title}</p>
                                </AdminTd>
                                <AdminTd>
                                    <StatusBadge status={item.status} />
                                </AdminTd>
                                <AdminTd>
                                    <span className="text-xs text-slate-500">{item.creator ?? '—'}</span>
                                </AdminTd>
                                <AdminTd>
                                    <span className="text-xs text-slate-500">{item.created_at}</span>
                                </AdminTd>
                                <AdminTd className="text-right">
                                    <div className="flex items-center justify-end gap-1.5">
                                        <Link
                                            href={`/admin/programs/${item.id}/${item.status === 'published' ? 'unpublish' : 'publish'}`}
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
                                        <EditButton href={`/admin/programs/${item.id}/edit`} />
                                        <DeleteButton onClick={() => setDeleteTarget(item)} />
                                    </div>
                                </AdminTd>
                            </tr>
                        ))}
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
                    message={`Yakin hapus "${deleteTarget?.title}"?`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    processing={deleteForm.processing}
                />
            </AdminLayout>
        </>
    );
}
