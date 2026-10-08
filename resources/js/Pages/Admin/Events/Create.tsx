import {
    FlashMessage,
    FormCard,
    FormField,
    ImageUploader,
    inputClass,
    selectClass,
    textareaClass,
} from '@/Components/Admin/AdminComponents';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { FormEvent } from 'react';

export default function EventCreate() {
    const { flash } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm<{
        title: string;
        description: string;
        event_date: string;
        start_time: string;
        end_time: string;
        location: string;
        status: string;
        image: File | null;
    }>({
        title: '',
        description: '',
        event_date: '',
        start_time: '',
        end_time: '',
        location: '',
        status: 'draft',
        image: null,
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post('/admin/events', { forceFormData: true });
    }

    return (
        <>
            <Head title="Tambah Agenda — KIPAN CMS" />
            <AdminLayout title="Tambah Agenda Baru">
                <FlashMessage success={flash?.success} error={flash?.error} />

                <div className="mb-6">
                    <Link href="/admin/events" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800">
                        <ArrowLeft className="h-4 w-4" />
                        Kembali ke Daftar Agenda
                    </Link>
                </div>

                <form onSubmit={submit}>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-2">
                            <FormCard title="Detail Agenda">
                                <FormField label="Judul Agenda" htmlFor="title" error={errors.title} required>
                                    <input
                                        id="title"
                                        type="text"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className={inputClass}
                                        placeholder="Nama kegiatan..."
                                    />
                                </FormField>

                                <FormField label="Deskripsi" htmlFor="description" error={errors.description}>
                                    <textarea
                                        id="description"
                                        rows={5}
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        className={textareaClass}
                                        placeholder="Deskripsi kegiatan, siapa yang boleh ikut, tujuan kegiatan..."
                                    />
                                </FormField>

                                <FormField label="Lokasi" htmlFor="location" error={errors.location}>
                                    <input
                                        id="location"
                                        type="text"
                                        value={data.location}
                                        onChange={(e) => setData('location', e.target.value)}
                                        className={inputClass}
                                        placeholder="Jakarta, Online via Zoom, dll."
                                    />
                                </FormField>
                            </FormCard>
                        </div>

                        <div className="space-y-6">
                            <FormCard title="Jadwal & Status">
                                <FormField label="Tanggal Kegiatan" htmlFor="event_date" error={errors.event_date} required>
                                    <input
                                        id="event_date"
                                        type="date"
                                        value={data.event_date}
                                        onChange={(e) => setData('event_date', e.target.value)}
                                        className={inputClass}
                                    />
                                </FormField>

                                <div className="grid grid-cols-2 gap-3">
                                    <FormField label="Mulai" htmlFor="start_time" error={errors.start_time}>
                                        <input
                                            id="start_time"
                                            type="time"
                                            value={data.start_time}
                                            onChange={(e) => setData('start_time', e.target.value)}
                                            className={inputClass}
                                        />
                                    </FormField>
                                    <FormField label="Selesai" htmlFor="end_time" error={errors.end_time}>
                                        <input
                                            id="end_time"
                                            type="time"
                                            value={data.end_time}
                                            onChange={(e) => setData('end_time', e.target.value)}
                                            className={inputClass}
                                        />
                                    </FormField>
                                </div>

                                <FormField label="Status" htmlFor="status" error={errors.status}>
                                    <select
                                        id="status"
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className={selectClass}
                                    >
                                        <option value="draft">Draf</option>
                                        <option value="published">Publik</option>
                                        <option value="archived">Arsip</option>
                                    </select>
                                </FormField>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full rounded-xl bg-kipan-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-900 disabled:opacity-60"
                                >
                                    {processing ? 'Menyimpan...' : 'Simpan Agenda'}
                                </button>
                            </FormCard>

                            <ImageUploader
                                label="Gambar Agenda"
                                currentUrl={null}
                                onChange={(file) => setData('image', file)}
                                error={errors.image}
                            />
                        </div>
                    </div>
                </form>
            </AdminLayout>
        </>
    );
}
