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
import { Calendar, CalendarDays, Filter, MapPin, User, X } from 'lucide-react';
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
    filters?: { search?: string; status?: string };
}

export default function EventsIndex({ events, filters }: Props) {
    const { flash } = usePage<PageProps>().props;
    const [deleteTarget, setDeleteTarget] = useState<EventItem | null>(null);
    const [statusFilter, setStatusFilter] = useState(filters?.status ?? '');
    const deleteForm = useForm({});

    const { value: searchValue, handleChange: handleSearch } = useDebouncedSearch(
        filters?.search ?? '',
        (val) => {
            router.get(
                '/admin/events',
                { search: val, status: statusFilter },
                { preserveState: true, replace: true },
            );
        },
    );

    function handleStatusChange(status: string) {
        setStatusFilter(status);
        router.get(
            '/admin/events',
            { search: searchValue, status },
            { preserveState: true, replace: true },
        );
    }

    function handleDelete() {
        if (!deleteTarget) return;
        deleteForm.delete(`/admin/events/${deleteTarget.id}`, {
            preserveScroll: true,
            onSuccess: () => setDeleteTarget(null),
        });
    }

    return (
        <>
            <Head title="Agenda — KIPAN CMS" />
            <AdminLayout title="Manajemen Agenda">
                <FlashMessage success={flash?.success} error={flash?.error} />

                <PageHeader
                    title="Agenda & Kegiatan"
                    description={`${events.total} agenda tercatat dalam sistem`}
                    createHref="/admin/events/create"
                    createLabel="Tambah Agenda"
                />

                {/* Filter and Search Bar */}
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="w-full sm:max-w-md">
                        <SearchBar
                            value={searchValue}
                            onChange={handleSearch}
                            placeholder="Cari judul atau lokasi agenda..."
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
                            <AdminTh>Judul Kegiatan</AdminTh>
                            <AdminTh>Tanggal Pelaksanaan</AdminTh>
                            <AdminTh>Lokasi</AdminTh>
                            <AdminTh>Status</AdminTh>
                            <AdminTh>Penyelenggara</AdminTh>
                            <AdminTh className="text-right">Aksi</AdminTh>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {events.data.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="py-14 text-center">
                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <CalendarDays className="h-8 w-8 text-slate-300" />
                                        <p className="text-sm font-semibold text-slate-700">Tidak ada agenda ditemukan</p>
                                        <p className="text-xs text-slate-400">
                                            {searchValue || statusFilter
                                                ? 'Tidak ada agenda yang cocok dengan filter pencarian.'
                                                : 'Mulai jadwalkan agenda kegiatan KIPAN yang baru.'}
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            events.data.map((item) => (
                                <tr key={item.id} className="transition hover:bg-slate-50/70">
                                    <AdminTd>
                                        <p className="max-w-xs font-semibold text-slate-900 line-clamp-2">
                                            {item.title}
                                        </p>
                                    </AdminTd>
                                    <AdminTd>
                                        <div className="flex items-center gap-1.5 whitespace-nowrap text-xs font-medium text-slate-700">
                                            <Calendar className="h-3.5 w-3.5 text-slate-400" />
                                            <span>{item.event_date}</span>
                                        </div>
                                    </AdminTd>
                                    <AdminTd>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                            <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                                            <span className="truncate max-w-[180px]">{item.location ?? '—'}</span>
                                        </div>
                                    </AdminTd>
                                    <AdminTd>
                                        <StatusBadge status={item.status} />
                                    </AdminTd>
                                    <AdminTd>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                            <User className="h-3.5 w-3.5 text-slate-400" />
                                            <span>{item.creator ?? 'Admin'}</span>
                                        </div>
                                    </AdminTd>
                                    <AdminTd className="text-right">
                                        <div className="flex items-center justify-end gap-1.5">
                                            <Link
                                                href={`/admin/events/${item.id}/${item.status === 'published' ? 'unpublish' : 'publish'}`}
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
                                            <EditButton href={`/admin/events/${item.id}/edit`} />
                                            <DeleteButton onClick={() => setDeleteTarget(item)} />
                                        </div>
                                    </AdminTd>
                                </tr>
                            ))
                        )}
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
                    message={`Apakah Anda yakin ingin menghapus agenda "${deleteTarget?.title}"?`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    processing={deleteForm.processing}
                />
            </AdminLayout>
        </>
    );
}
