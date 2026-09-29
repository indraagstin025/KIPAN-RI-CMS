import ScrollReveal from '@/Components/Layout/ScrollReveal';
import LandingLayout from '@/Layouts/LandingLayout';
import { BERITA } from '@/data/kipan-data';
import { Link } from '@inertiajs/react';
import {
    ArrowRightIcon,
    CalendarIcon,
    SewingPinFilledIcon,
} from '@radix-ui/react-icons';
import { useMemo, useState } from 'react';
import BeritaHero from './components/BeritaHero';

interface BeritaPageProps {
    readonly title: string;
    readonly subtitle: string;
    readonly category: string;
}

export default function BeritaIndex({
    title,
    subtitle,
    category,
}: Readonly<BeritaPageProps>) {
    const categories = useMemo(
        () => ['Semua', ...Array.from(new Set(BERITA.map((b) => b.category)))],
        [],
    );
    const [activeCategory, setActiveCategory] = useState('Semua');

    const filtered =
        activeCategory === 'Semua'
            ? BERITA
            : BERITA.filter((b) => b.category === activeCategory);

    return (
        <LandingLayout
            title={`${title} — KIPAN Republik Indonesia`}
            className="bg-slate-50"
        >
            {/* ===== Hero ===== */}
            <BeritaHero category={category} title={title} subtitle={subtitle} />

            {/* ===== Daftar Berita ===== */}
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
                            Saring berdasarkan tingkatan wilayah untuk melihat
                            aksi kader di daerahmu.
                        </p>
                    </ScrollReveal>

                    {/* Filter Kategori */}
                    <ScrollReveal delay={0.08}>
                        <div className="mb-10 flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setActiveCategory(cat)}
                                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                                        activeCategory === cat
                                            ? 'bg-kipan-navy text-white shadow-sm'
                                            : 'border border-slate-200 bg-white text-slate-600 hover:border-kipan-blue hover:text-kipan-navy'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Kartu Berita */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((item, idx) => (
                            <ScrollReveal
                                key={item.id}
                                delay={0.05 * (idx % 3)}
                            >
                                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-kipan-blue/40 hover:shadow-md">
                                    <div className="relative h-44 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <span className="absolute left-4 top-4 rounded-full bg-kipan-navy/90 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 flex-col p-5">
                                        <p className="mb-2 flex items-center gap-3 text-[11px] text-slate-500">
                                            <span className="inline-flex items-center gap-1">
                                                <CalendarIcon className="h-3.5 w-3.5 text-kipan-blue" />
                                                {item.date}
                                            </span>
                                            <span className="inline-flex items-center gap-1">
                                                <SewingPinFilledIcon className="h-3.5 w-3.5 text-kipan-blue" />
                                                {item.location}
                                            </span>
                                        </p>
                                        <h3 className="mb-2 font-bold leading-snug text-kipan-navy transition-colors group-hover:text-kipan-blue">
                                            {item.title}
                                        </h3>
                                        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
                                            {item.excerpt}
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <p className="py-12 text-center text-slate-500">
                            Belum ada berita pada kategori ini.
                        </p>
                    )}
                </div>
            </section>

            {/* ===== CTA ===== */}
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
                                    Kirim dokumentasi dan cerita kegiatan kader
                                    di wilayahmu — kabar terbaik akan kami
                                    tayangkan di sini.
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
