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

interface EventItem {
    id: number;
    title: string;
    event_date: string;
    location: string | null;
    status: string;
    creator: string | null;
}

interface PaginatedEvents {
    data: EventItem[];
    links: { url: string | null; label: string; active: boolean }[];
    from: number;
    to: number;
    total: number;
}

interface Props {
    events: PaginatedEvents;
}

export default function EventsIndex({ events }: Props) {
    const { flash } = usePage<PageProps>().props;
    const [deleteTarget, setDeleteTarget] = useState<EventItem | null>(null);
    const deleteForm = useForm({});

    function handleDelete() {
        if (!deleteTarget) return;
        deleteForm.delete(`/admin/events/${deleteTarget.id}`, {
            onSuccess: () => setDeleteTarget(null),
        });
    }

    return (
        <>
            <Head title="Agenda — KIPAN CMS" />
            <AdminLayout title="Manajemen Agenda">
                <FlashMessage success={flash?.success} error={flash?.error} />

                <PageHeader
                    title="Agenda"
                    description={`${events.total} total agenda`}
                    createHref="/admin/events/create"
                    createLabel="Tambah Agenda"
                />

                <AdminTable>
                    <thead>
                        <tr>
                            <AdminTh>Judul</AdminTh>
                            <AdminTh>Tanggal</AdminTh>
                            <AdminTh>Lokasi</AdminTh>
                            <AdminTh>Status</AdminTh>
                            <AdminTh>Dibuat Oleh</AdminTh>
                            <AdminTh className="text-right">Aksi</AdminTh>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {events.data.length === 0 && (
                            <tr>
                                <td colSpan={6} className="py-12 text-center text-sm text-slate-400">
                                    Belum ada agenda.
                                </td>
                            </tr>
                        )}
                        {events.data.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50/60">
                                <AdminTd>
                                    <p className="max-w-xs font-medium text-slate-800 line-clamp-2">{item.title}</p>
                                </AdminTd>
                                <AdminTd>
                                    <span className="whitespace-nowrap text-xs font-medium text-slate-700">{item.event_date}</span>
                                </AdminTd>
                                <AdminTd>
                                    <span className="text-xs text-slate-500">{item.location ?? '—'}</span>
                                </AdminTd>
                                <AdminTd>
                                    <StatusBadge status={item.status} />
                                </AdminTd>
                                <AdminTd>
                                    <span className="text-xs text-slate-500">{item.creator ?? '—'}</span>
                                </AdminTd>
                                <AdminTd className="text-right">
                                    <div className="flex items-center justify-end gap-1.5">
                                        <Link
                                            href={`/admin/events/${item.id}/${item.status === 'published' ? 'unpublish' : 'publish'}`}
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
                                        <EditButton href={`/admin/events/${item.id}/edit`} />
                                        <DeleteButton onClick={() => setDeleteTarget(item)} />
                                    </div>
                                </AdminTd>
                            </tr>
                        ))}
                    </tbody>
                </AdminTable>

                <AdminPagination
                    links={events.links}
                    from={events.from}
                    to={events.to}
                    total={events.total}
                />

                <ConfirmDeleteModal
                    isOpen={deleteTarget !== null}
                    title="Hapus Agenda"
                    message={`Yakin hapus "${deleteTarget?.title}"?`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    processing={deleteForm.processing}
                />
            </AdminLayout>
        </>
    );
}
