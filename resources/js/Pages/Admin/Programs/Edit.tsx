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

interface ProgramData {
    id: number;
    title: string;
    description: string | null;
    content: string | null;
    image: string | null;
    status: string;
}

interface Props {
    program: ProgramData;
}

export default function ProgramEdit({ program }: Props) {
    const { flash } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm<{
        _method: string;
        title: string;
        description: string;
        content: string;
        status: string;
        image: File | null;
    }>({
        _method: 'PUT',
        title: program.title,
        description: program.description ?? '',
        content: program.content ?? '',
        status: program.status,
        image: null,
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post(`/admin/programs/${program.id}`, { forceFormData: true });
    }

    return (
        <>
            <Head title={`Edit Program — ${program.title}`} />
            <AdminLayout title="Edit Program">
                <FlashMessage success={flash?.success} error={flash?.error} />
                <div className="mb-6">
                    <Link href="/admin/programs" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800">
                        <ArrowLeft className="h-4 w-4" /> Kembali ke Daftar Program
                    </Link>
                </div>
                <form onSubmit={submit}>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-2">
                            <FormCard title="Detail Program">
                                <FormField label="Judul Program" htmlFor="title" error={errors.title} required>
                                    <input id="title" type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} className={inputClass} />
                                </FormField>
                                <FormField label="Deskripsi Singkat" htmlFor="description" error={errors.description}>
                                    <textarea id="description" rows={3} value={data.description} onChange={(e) => setData('description', e.target.value)} className={textareaClass} maxLength={500} />
                                </FormField>
                                <FormField label="Konten" htmlFor="content" error={errors.content}>
                                    <textarea id="content" rows={12} value={data.content} onChange={(e) => setData('content', e.target.value)} className={`${textareaClass} font-mono`} />
                                </FormField>
                            </FormCard>
                        </div>
                        <div className="space-y-6">
                            <FormCard title="Status">
                                <FormField label="Status" htmlFor="status" error={errors.status}>
                                    <select id="status" value={data.status} onChange={(e) => setData('status', e.target.value)} className={selectClass}>
                                        <option value="draft">Draf</option>
                                        <option value="published">Publik</option>
                                        <option value="archived">Arsip</option>
                                    </select>
                                </FormField>
                                <button type="submit" disabled={processing} className="w-full rounded-xl bg-kipan-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-900 disabled:opacity-60">
                                    {processing ? 'Menyimpan...' : 'Perbarui Program'}
                                </button>
                            </FormCard>
                            <ImageUploader label="Gambar Program" currentUrl={program.image ? `/storage/${program.image}` : null} onChange={(file) => setData('image', file)} error={errors.image} />
                        </div>
                    </div>
                </form>
            </AdminLayout>
        </>
    );
}
