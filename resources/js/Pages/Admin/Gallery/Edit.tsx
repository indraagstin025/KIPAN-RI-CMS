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

interface Category {
    id: number;
    name: string;
}

interface GalleryData {
    id: number;
    title: string;
    caption: string | null;
    category_id: number | null;
    location: string | null;
    status: string;
    image_url: string | null;
}

interface Props {
    gallery: GalleryData;
    categories: Category[];
}

export default function GalleryEdit({ gallery, categories }: Props) {
    const { flash } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm<{
        _method: string;
        title: string;
        caption: string;
        category_id: string;
        location: string;
        status: string;
        image: File | null;
    }>({
        _method: 'PUT',
        title: gallery.title,
        caption: gallery.caption ?? '',
        category_id: gallery.category_id?.toString() ?? '',
        location: gallery.location ?? '',
        status: gallery.status,
        image: null,
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post(`/admin/gallery/${gallery.id}`, { forceFormData: true });
    }

    return (
        <>
            <Head title={`Edit Foto — ${gallery.title}`} />
            <AdminLayout title="Edit Foto">
                <FlashMessage success={flash?.success} error={flash?.error} />
                <div className="mb-6">
                    <Link href="/admin/gallery" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800">
                        <ArrowLeft className="h-4 w-4" /> Kembali ke Galeri
                    </Link>
                </div>
                <form onSubmit={submit}>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <ImageUploader label="Ganti Foto (Opsional)" currentUrl={gallery.image_url} onChange={(file) => setData('image', file)} error={errors.image} hint="Kosongkan jika tidak ingin mengganti foto." />
                        </div>
                        <div className="space-y-6">
                            <FormCard title="Info Foto">
                                <FormField label="Judul Foto" htmlFor="title" error={errors.title} required>
                                    <input id="title" type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} className={inputClass} />
                                </FormField>
                                <FormField label="Keterangan (Caption)" htmlFor="caption" error={errors.caption}>
                                    <textarea id="caption" rows={3} value={data.caption} onChange={(e) => setData('caption', e.target.value)} className={textareaClass} maxLength={500} />
                                </FormField>
                                <FormField label="Lokasi" htmlFor="location" error={errors.location}>
                                    <input id="location" type="text" value={data.location} onChange={(e) => setData('location', e.target.value)} className={inputClass} />
                                </FormField>
                                <FormField label="Kategori" htmlFor="category_id" error={errors.category_id}>
                                    <select id="category_id" value={data.category_id} onChange={(e) => setData('category_id', e.target.value)} className={selectClass}>
                                        <option value="">— Pilih Kategori —</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </FormField>
                                <FormField label="Status" htmlFor="status" error={errors.status}>
                                    <select id="status" value={data.status} onChange={(e) => setData('status', e.target.value)} className={selectClass}>
                                        <option value="published">Publik</option>
                                        <option value="draft">Draf</option>
                                    </select>
                                </FormField>
                                <button type="submit" disabled={processing} className="w-full rounded-xl bg-kipan-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-900 disabled:opacity-60">
                                    {processing ? 'Menyimpan...' : 'Perbarui Foto'}
                                </button>
                            </FormCard>
                        </div>
                    </div>
                </form>
            </AdminLayout>
        </>
    );
}
