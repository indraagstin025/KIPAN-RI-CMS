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
import { FormEvent, useEffect } from 'react';

interface Category {
    id: number;
    name: string;
}

interface Props {
    categories: Category[];
}

export default function NewsCreate({ categories }: Props) {
    const { flash } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors, transform } = useForm<{
        title: string;
        excerpt: string;
        content: string;
        category_id: string;
        status: string;
        featured_image: File | null;
    }>({
        title: '',
        excerpt: '',
        content: '',
        category_id: '',
        status: 'draft',
        featured_image: null,
    });

    // Auto-generate slug preview from title
    const slugPreview = data.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .slice(0, 80);

    function submit(e: FormEvent) {
        e.preventDefault();
        post('/admin/news', {
            forceFormData: true,
        });
    }

    return (
        <>
            <Head title="Tulis Berita — KIPAN CMS" />
            <AdminLayout title="Tulis Berita Baru">
                <FlashMessage success={flash?.success} error={flash?.error} />

                <div className="mb-6">
                    <Link
                        href="/admin/news"
                        className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-800"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali ke Daftar Berita
                    </Link>
                </div>

                <form onSubmit={submit}>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {/* Main content */}
                        <div className="space-y-6 lg:col-span-2">
                            <FormCard title="Konten Berita">
                                <FormField label="Judul Berita" htmlFor="title" error={errors.title} required>
                                    <input
                                        id="title"
                                        type="text"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className={inputClass}
                                        placeholder="Masukkan judul berita yang menarik..."
                                    />
                                </FormField>

                                {data.title && (
                                    <p className="text-xs text-slate-400">
                                        Slug:{' '}
                                        <span className="font-mono text-slate-600">{slugPreview}</span>
                                    </p>
                                )}

                                <FormField
                                    label="Ringkasan (Excerpt)"
                                    htmlFor="excerpt"
                                    error={errors.excerpt}
                                    hint="Opsional. Ringkasan singkat untuk tampilan di halaman daftar berita."
                                >
                                    <textarea
                                        id="excerpt"
                                        rows={3}
                                        value={data.excerpt}
                                        onChange={(e) => setData('excerpt', e.target.value)}
                                        className={textareaClass}
                                        placeholder="Ringkasan singkat berita..."
                                        maxLength={500}
                                    />
                                </FormField>

                                <FormField label="Konten" htmlFor="content" error={errors.content} required>
                                    <textarea
                                        id="content"
                                        rows={16}
                                        value={data.content}
                                        onChange={(e) => setData('content', e.target.value)}
                                        className={`${textareaClass} font-mono`}
                                        placeholder="Tulis konten berita di sini. Gunakan baris baru untuk paragraf baru..."
                                    />
                                    <p className="mt-1 text-xs text-slate-400">
                                        Gunakan baris kosong untuk memisahkan paragraf.
                                    </p>
                                </FormField>
                            </FormCard>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <FormCard title="Penerbitan">
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

                                <FormField
                                    label="Kategori"
                                    htmlFor="category_id"
                                    error={errors.category_id}
                                >
                                    <select
                                        id="category_id"
                                        value={data.category_id}
                                        onChange={(e) => setData('category_id', e.target.value)}
                                        className={selectClass}
                                    >
                                        <option value="">— Pilih Kategori —</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                </FormField>

                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="flex-1 rounded-xl bg-kipan-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-900 disabled:opacity-60"
                                    >
                                        {processing ? 'Menyimpan...' : 'Simpan Berita'}
                                    </button>
                                </div>
                            </FormCard>

                            <ImageUploader
                                label="Gambar Utama"
                                currentUrl={null}
                                onChange={(file) => setData('featured_image', file)}
                                error={errors.featured_image}
                            />
                        </div>
                    </div>
                </form>
            </AdminLayout>
        </>
    );
}
