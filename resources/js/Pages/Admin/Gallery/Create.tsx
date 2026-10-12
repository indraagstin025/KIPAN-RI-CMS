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

interface Props {
    categories: Category[];
}

export default function GalleryCreate({ categories }: Props) {
    const { flash } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm<{
        title: string;
        caption: string;
        category_id: string;
        location: string;
        status: string;
        source: string;
        external_url: string;
        image: File | null;
    }>({
        title: '',
        caption: '',
        category_id: '',
        location: '',
        status: 'published',
        source: 'link',
        external_url: '',
        image: null,
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post('/admin/gallery', { forceFormData: true });
    }

    return (
        <>
            <Head title="Upload Foto — KIPAN CMS" />
            <AdminLayout title="Upload Foto Baru">
                <FlashMessage success={flash?.success} error={flash?.error} />

                <div className="mb-6">
                    <Link href="/admin/gallery" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800">
                        <ArrowLeft className="h-4 w-4" /> Kembali ke Galeri
                    </Link>
                </div>

                <form onSubmit={submit}>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <FormCard title="Sumber Konten">
                                <FormField label="Jenis Sumber" htmlFor="source" error={errors.source} required>
                                    <select id="source" value={data.source} onChange={(e) => setData('source', e.target.value)} className={selectClass}>
                                        <option value="link">Tautan (Instagram / YouTube / Drive) — disarankan</option>
                                        <option value="upload">Upload Foto</option>
                                    </select>
                                </FormField>
                                {data.source === 'link' ? (
                                    <FormField label="URL Tautan" htmlFor="external_url" error={errors.external_url} required>
                                        <input id="external_url" type="url" value={data.external_url} onChange={(e) => setData('external_url', e.target.value)} className={inputClass} placeholder="https://instagram.com/p/... atau https://youtu.be/... atau https://drive.google.com/..." />
                                        <p className="mt-1 text-xs text-slate-500">Hanya Instagram, YouTube, Google Drive (https).</p>
                                    </FormField>
                                ) : (
                                    <ImageUploader
                                        label="Foto (Wajib)"
                                        currentUrl={null}
                                        onChange={(file) => setData('image', file)}
                                        error={errors.image}
                                        hint="JPG, PNG, WebP. Maks 4MB."
                                    />
                                )}
                            </FormCard>
                        </div>

                        <div className="space-y-6">
                            <FormCard title="Info Foto">
                                <FormField label="Judul Foto" htmlFor="title" error={errors.title} required>
                                    <input id="title" type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} className={inputClass} placeholder="Nama atau judul foto..." />
                                </FormField>

                                <FormField label="Keterangan (Caption)" htmlFor="caption" error={errors.caption}>
                                    <textarea id="caption" rows={3} value={data.caption} onChange={(e) => setData('caption', e.target.value)} className={textareaClass} placeholder="Deskripsi singkat foto..." maxLength={500} />
                                </FormField>

                                <FormField label="Lokasi" htmlFor="location" error={errors.location}>
                                    <input id="location" type="text" value={data.location} onChange={(e) => setData('location', e.target.value)} className={inputClass} placeholder="Jakarta, Surabaya, dll." />
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
                                    {processing ? 'Menyimpan...' : 'Simpan Galeri'}
                                </button>
                            </FormCard>
                        </div>
                    </div>
                </form>
            </AdminLayout>
        </>
    );
}
