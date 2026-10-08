import {
    ConfirmDeleteModal,
    FlashMessage,
    FormCard,
    FormField,
    PageHeader,
    inputClass,
} from '@/Components/Admin/AdminComponents';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { Globe, Plus, Trash2 } from 'lucide-react';
import { FormEvent, useState } from 'react';

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
}

export default function PartnersIndex({ partners }: Props) {
    const { flash } = usePage<PageProps>().props;
    const [deleteTarget, setDeleteTarget] = useState<PartnerItem | null>(null);
    const [showCreate, setShowCreate] = useState(false);

    const createForm = useForm({
        name: '',
        role: '',
        logo: '',
        website: '',
        is_active: true,
        sort_order: partners.length,
    });

    const deleteForm = useForm({});

    function handleCreate(e: FormEvent) {
        e.preventDefault();
        createForm.post('/admin/partners', {
            onSuccess: () => {
                setShowCreate(false);
                createForm.reset();
            },
        });
    }

    function handleDelete() {
        if (!deleteTarget) return;
        deleteForm.delete(`/admin/partners/${deleteTarget.id}`, {
            onSuccess: () => setDeleteTarget(null),
        });
    }

    function toggleActive(partner: PartnerItem) {
        router.patch(`/admin/partners/${partner.id}/toggle`);
    }

    return (
        <>
            <Head title="Mitra — KIPAN CMS" />
            <AdminLayout title="Manajemen Mitra">
                <FlashMessage success={flash?.success} error={flash?.error} />

                <PageHeader title="Mitra & Sponsor" description={`${partners.length} mitra terdaftar`}>
                    <button
                        type="button"
                        onClick={() => setShowCreate(!showCreate)}
                        className="inline-flex items-center gap-2 rounded-xl bg-kipan-navy px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-900"
                    >
                        <Plus className="h-4 w-4" />
                        Tambah Mitra
                    </button>
                </PageHeader>

                {/* Create Form Inline */}
                {showCreate && (
                    <div className="mb-6">
                        <FormCard title="Tambah Mitra Baru">
                            <form onSubmit={handleCreate}>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    <FormField label="Nama Mitra" htmlFor="name" error={createForm.errors.name} required>
                                        <input id="name" type="text" value={createForm.data.name} onChange={(e) => createForm.setData('name', e.target.value)} className={inputClass} placeholder="Nama organisasi/perusahaan" />
                                    </FormField>
                                    <FormField label="Peran / Keterangan" htmlFor="role" error={createForm.errors.role}>
                                        <input id="role" type="text" value={createForm.data.role} onChange={(e) => createForm.setData('role', e.target.value)} className={inputClass} placeholder="Sponsor Utama, dll." />
                                    </FormField>
                                    <FormField label="URL Logo" htmlFor="logo" error={createForm.errors.logo}>
                                        <input id="logo" type="text" value={createForm.data.logo} onChange={(e) => createForm.setData('logo', e.target.value)} className={inputClass} placeholder="https://..." />
                                    </FormField>
                                    <FormField label="Website" htmlFor="website" error={createForm.errors.website}>
                                        <input id="website" type="url" value={createForm.data.website} onChange={(e) => createForm.setData('website', e.target.value)} className={inputClass} placeholder="https://..." />
                                    </FormField>
                                    <FormField label="Urutan" htmlFor="sort_order">
                                        <input id="sort_order" type="number" min={0} value={createForm.data.sort_order} onChange={(e) => createForm.setData('sort_order', Number(e.target.value))} className={inputClass} />
                                    </FormField>
                                </div>
                                <div className="mt-4 flex items-center gap-3">
                                    <label className="flex items-center gap-2 text-sm text-slate-700">
                                        <input
                                            type="checkbox"
                                            checked={createForm.data.is_active}
                                            onChange={(e) => createForm.setData('is_active', e.target.checked)}
                                            className="h-4 w-4 rounded border-slate-300 text-kipan-blue"
                                        />
                                        Aktif (tampil di website)
                                    </label>
                                    <div className="ml-auto flex gap-3">
                                        <button type="button" onClick={() => setShowCreate(false)} className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50">Batal</button>
                                        <button type="submit" disabled={createForm.processing} className="rounded-xl bg-kipan-navy px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900 disabled:opacity-60">
                                            {createForm.processing ? 'Menyimpan...' : 'Simpan Mitra'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </FormCard>
                    </div>
                )}

                {/* Partners Grid */}
                {partners.length === 0 ? (
                    <div className="py-16 text-center text-sm text-slate-400">Belum ada mitra. Tambahkan mitra pertama.</div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {partners.map((partner) => (
                            <div
                                key={partner.id}
                                className={`rounded-2xl border bg-white p-5 shadow-sm transition ${
                                    partner.is_active ? 'border-slate-200' : 'border-slate-100 opacity-60'
                                }`}
                            >
                                {/* Logo */}
                                <div className="mb-3 flex h-16 items-center justify-center overflow-hidden rounded-xl bg-slate-50">
                                    {partner.logo ? (
                                        <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
                                    ) : (
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-lg font-bold text-slate-500">
                                            {partner.name.charAt(0)}
                                        </div>
                                    )}
                                </div>

                                <h3 className="font-semibold text-slate-800">{partner.name}</h3>
                                {partner.role && <p className="text-xs text-slate-500">{partner.role}</p>}

                                <div className="mt-4 flex items-center gap-2">
                                    {partner.website && (
                                        <a href={partner.website} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 p-1.5 text-slate-400 hover:text-kipan-blue">
                                            <Globe className="h-4 w-4" />
                                        </a>
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => toggleActive(partner)}
                                        className={`ml-auto rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                                            partner.is_active
                                                ? 'border-amber-200 text-amber-600 hover:bg-amber-50'
                                                : 'border-emerald-200 text-emerald-600 hover:bg-emerald-50'
                                        }`}
                                    >
                                        {partner.is_active ? 'Nonaktifkan' : 'Aktifkan'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setDeleteTarget(partner)}
                                        className="rounded-lg border border-red-200 p-1.5 text-red-400 hover:bg-red-50"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <ConfirmDeleteModal
                    isOpen={deleteTarget !== null}
                    title="Hapus Mitra"
                    message={`Yakin hapus mitra "${deleteTarget?.name}"?`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    processing={deleteForm.processing}
                />
            </AdminLayout>
        </>
    );
}
