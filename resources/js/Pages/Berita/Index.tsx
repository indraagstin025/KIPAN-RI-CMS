import ScrollReveal from '@/Components/Layout/ScrollReveal';
import LandingLayout from '@/Layouts/LandingLayout';
import { Link } from '@inertiajs/react';
import { ArrowRightIcon, CalendarIcon } from '@radix-ui/react-icons';
import { useMemo, useState } from 'react';
import BeritaHero from './components/BeritaHero';

interface NewsItem {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    featured_image: string | null;
    category: string | null;
    author: string | null;
    published_at: string | null;
}

interface PaginatedNews {
    data: NewsItem[];
    links: { url: string | null; label: string; active: boolean }[];
    from: number;
    to: number;
    total: number;
}

interface BeritaPageProps {
    readonly title: string;
    readonly subtitle: string;
    readonly category: string;
    readonly news: PaginatedNews;
    readonly categories: string[];
    readonly activeCategory: string;
}

export default function BeritaIndex({
    title,
    subtitle,
    category,
    news,
    categories,
    activeCategory,
}: Readonly<BeritaPageProps>) {
    const [activeCat, setActiveCat] = useState(activeCategory);

    const allCategories = useMemo(() => ['Semua', ...categories], [categories]);

    function handleCategoryFilter(cat: string) {
        setActiveCat(cat);
        const url = new URL(window.location.href);
        if (cat === 'Semua') {
            url.searchParams.delete('category');
        } else {
            url.searchParams.set('category', cat);
        }
        window.location.href = url.toString();
    }

    return (
        <LandingLayout
            title={`${title} — KIPAN Republik Indonesia`}
            className="bg-slate-50"
        >
            <BeritaHero category={category} title={title} subtitle={subtitle} />

            <section id="berita-list" className="scroll-mt-24 py-16 lg:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-kipan-blue">
                            Arsip Berita
                        </p>
                        <h2 className="mb-3 text-2xl font-black tracking-tight text-kipan-navy sm:text-3xl">
                            Semua Kabar Aksi
                        </h2>
                        <p className="mb-8 max-w-2xl text-slate-600">
                            Saring berdasarkan tingkatan wilayah untuk melihat aksi kader di daerahmu.
                        </p>
                    </ScrollReveal>

                    {/* Filter Kategori */}
                    {allCategories.length > 1 && (
                        <ScrollReveal delay={0.08}>
                            <div className="mb-10 flex flex-wrap gap-2">
                                {allCategories.map((cat) => (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => handleCategoryFilter(cat)}
                                        className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                                            activeCat === cat || (cat === 'Semua' && !activeCat)
                                                ? 'bg-kipan-navy text-white shadow-sm'
                                                : 'border border-slate-200 bg-white text-slate-600 hover:border-kipan-blue hover:text-kipan-navy'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Kartu Berita */}
                    {news.data.length === 0 ? (
                        <p className="py-12 text-center text-slate-500">
                            Belum ada berita yang dipublikasikan.
                        </p>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {news.data.map((item, idx) => (
                                <ScrollReveal key={item.id} delay={0.05 * (idx % 3)}>
                                    <Link href={`/berita/${item.slug}`}>
                                        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-kipan-blue/40 hover:shadow-md">
                                            <div className="relative h-44 overflow-hidden bg-slate-100">
                                                {item.featured_image ? (
                                                    <img
                                                        src={item.featured_image}
                                                        alt={item.title}
                                                        loading="lazy"
                                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-kipan-navy/10 to-kipan-blue/10">
                                                        <span className="text-3xl">📰</span>
                                                    </div>
                                                )}
                                                {item.category && (
                                                    <span className="absolute left-4 top-4 rounded-full bg-kipan-navy/90 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                                                        {item.category}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex flex-1 flex-col p-5">
                                                <p className="mb-2 flex items-center gap-3 text-[11px] text-slate-500">
                                                    {item.published_at && (
                                                        <span className="inline-flex items-center gap-1">
                                                            <CalendarIcon className="h-3.5 w-3.5 text-kipan-blue" />
                                                            {item.published_at}
                                                        </span>
                                                    )}
                                                </p>
                                                <h3 className="mb-2 font-bold leading-snug text-kipan-navy transition-colors group-hover:text-kipan-blue">
                                                    {item.title}
                                                </h3>
                                                {item.excerpt && (
                                                    <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
                                                        {item.excerpt}
                                                    </p>
                                                )}
                                                <p className="mt-3 text-xs font-semibold text-kipan-blue">
                                                    Baca selengkapnya →
                                                </p>
                                            </div>
                                        </article>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="pb-16 lg:pb-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="relative overflow-hidden rounded-3xl bg-kipan-navy px-6 py-12 text-center sm:p-14">
                            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-kipan-blue/30 blur-3xl" />
                            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-kipan-yellow/20 blur-3xl" />
                            <div className="relative">
                                <h2 className="mb-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                                    Punya Kabar Aksi dari Daerahmu?
                                </h2>
                                <p className="mx-auto mb-8 max-w-xl text-sm text-blue-100/90 sm:text-base">
                                    Kirim dokumentasi dan cerita kegiatan kader di wilayahmu.
                                </p>
                                <Link
                                    href="/kontak"
                                    className="inline-flex items-center gap-2 rounded-full bg-kipan-yellow px-7 py-3.5 text-sm font-black text-kipan-navy shadow-lg transition-colors hover:bg-yellow-300"
                                >
                                    Kirim Kabar Aksi
                                    <ArrowRightIcon className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </LandingLayout>
    );
}
