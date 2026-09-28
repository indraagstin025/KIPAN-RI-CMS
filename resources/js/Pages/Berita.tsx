import { useMemo, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { ArrowRightIcon, CalendarIcon } from '@radix-ui/react-icons';
import { SewingPinFilledIcon } from '@radix-ui/react-icons';
import Footer from '@/Components/Landing/Footer';
import Navbar from '@/Components/Landing/Navbar';
import BeritaHero from '@/Components/Landing/BeritaHero';
import ScrollReveal from '@/Components/Landing/ScrollReveal';
import { BERITA } from '@/data/kipan-data';

interface BeritaPageProps {
    title: string;
    subtitle: string;
    category: string;
}

export default function Berita({ title, subtitle, category }: BeritaPageProps) {
    const categories = useMemo(
        () => ['Semua', ...Array.from(new Set(BERITA.map((b) => b.category)))],
        []
    );
    const [activeCategory, setActiveCategory] = useState('Semua');

    const filtered =
        activeCategory === 'Semua'
            ? BERITA
            : BERITA.filter((b) => b.category === activeCategory);

    return (
        <>
            <Head title={`${title} — KIPAN Republik Indonesia`} />
            <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-kipan-text-dark">
                <Navbar />

                <main className="flex-1">
                    {/* ===== Hero ===== */}
                    <BeritaHero category={category} title={title} subtitle={subtitle} />

                    {/* ===== Daftar Berita ===== */}
                    <section id="berita-list" className="py-16 lg:py-20 scroll-mt-24">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                            <ScrollReveal>
                                <p className="text-xs font-bold uppercase tracking-widest text-kipan-blue mb-2">
                                    Arsip Berita
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-kipan-navy tracking-tight mb-3">
                                    Semua Kabar Aksi
                                </h2>
                                <p className="text-slate-600 max-w-2xl mb-8">
                                    Saring berdasarkan tingkatan wilayah untuk melihat aksi kader di
                                    daerahmu.
                                </p>
                            </ScrollReveal>

                            {/* Filter Kategori */}
                            <ScrollReveal delay={0.08}>
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            type="button"
                                            onClick={() => setActiveCategory(cat)}
                                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                                                activeCategory === cat
                                                    ? 'bg-kipan-navy text-white shadow-sm'
                                                    : 'bg-white text-slate-600 border border-slate-200 hover:border-kipan-blue hover:text-kipan-navy'
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
                                    <ScrollReveal key={item.id} delay={0.05 * (idx % 3)}>
                                        <article className="group h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-kipan-blue/40 hover:shadow-md transition-all flex flex-col">
                                            <div className="relative h-44 overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-kipan-navy/90 backdrop-blur text-white text-[11px] font-bold">
                                                    {item.category}
                                                </span>
                                            </div>
                                            <div className="p-5 flex flex-col flex-1">
                                                <p className="flex items-center gap-3 text-[11px] text-slate-500 mb-2">
                                                    <span className="inline-flex items-center gap-1">
                                                        <CalendarIcon className="w-3.5 h-3.5 text-kipan-blue" />
                                                        {item.date}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1">
                                                        <SewingPinFilledIcon className="w-3.5 h-3.5 text-kipan-blue" />
                                                        {item.location}
                                                    </span>
                                                </p>
                                                <h3 className="font-bold text-kipan-navy leading-snug mb-2 group-hover:text-kipan-blue transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
                                                    {item.excerpt}
                                                </p>
                                            </div>
                                        </article>
                                    </ScrollReveal>
                                ))}
                            </div>

                            {filtered.length === 0 && (
                                <p className="text-center text-slate-500 py-12">
                                    Belum ada berita pada kategori ini.
                                </p>
                            )}
                        </div>
                    </section>

                    {/* ===== CTA ===== */}
                    <section className="pb-16 lg:pb-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                            <ScrollReveal>
                                <div className="relative overflow-hidden rounded-3xl bg-kipan-navy px-6 py-12 sm:p-14 text-center">
                                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-kipan-blue/30 blur-3xl" />
                                    <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-kipan-yellow/20 blur-3xl" />
                                    <div className="relative">
                                        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                                            Punya Kabar Aksi dari Daerahmu?
                                        </h2>
                                        <p className="text-blue-100/90 max-w-xl mx-auto mb-8 text-sm sm:text-base">
                                            Kirim dokumentasi dan cerita kegiatan kader di wilayahmu —
                                            kabar terbaik akan kami tayangkan di sini.
                                        </p>
                                        <Link
                                            href="/kontak"
                                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-kipan-yellow hover:bg-yellow-300 text-kipan-navy text-sm font-black transition-colors shadow-lg"
                                        >
                                            Kirim Kabar Aksi
                                            <ArrowRightIcon className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
