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

interface NewsData {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    featured_image: string | null;
    category_id: number | null;
    status: string;
    published_at: string | null;
}

interface Props {
    news: NewsData;
    categories: Category[];
}

export default function NewsEdit({ news, categories }: Props) {
    const { flash } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm<{
        _method: string;
        title: string;
        excerpt: string;
        content: string;
        category_id: string;
        status: string;
        featured_image: File | null;
    }>({
        _method: 'PUT',
        title: news.title,
        excerpt: news.excerpt ?? '',
        content: news.content,
        category_id: news.category_id?.toString() ?? '',
        status: news.status,
        featured_image: null,
    });

    const imageUrl = news.featured_image
        ? `/storage/${news.featured_image}`
        : null;

    function submit(e: FormEvent) {
        e.preventDefault();
        post(`/admin/news/${news.id}`, { forceFormData: true });
    }

    return (
        <>
            <Head title={`Edit Berita — ${news.title}`} />
            <AdminLayout title="Edit Berita">
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
                                    />
                                </FormField>

                                <FormField label="Slug" htmlFor="slug">
                                    <input
                                        id="slug"
                                        type="text"
                                        value={news.slug}
                                        disabled
                                        className={`${inputClass} bg-slate-50 text-slate-400 cursor-not-allowed`}
                                    />
                                    <p className="mt-1 text-xs text-slate-400">
                                        Slug tidak dapat diubah untuk menghindari broken links.
                                    </p>
                                </FormField>

                                <FormField
                                    label="Ringkasan (Excerpt)"
                                    htmlFor="excerpt"
                                    error={errors.excerpt}
                                >
                                    <textarea
                                        id="excerpt"
                                        rows={3}
                                        value={data.excerpt}
                                        onChange={(e) => setData('excerpt', e.target.value)}
                                        className={textareaClass}
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
                                    />
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

                                {news.published_at && (
                                    <p className="text-xs text-slate-400">
                                        Dipublikasikan: {news.published_at}
                                    </p>
                                )}

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
                                        {processing ? 'Menyimpan...' : 'Perbarui Berita'}
                                    </button>
                                </div>
                            </FormCard>

                            <ImageUploader
                                label="Gambar Utama"
                                currentUrl={imageUrl}
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
