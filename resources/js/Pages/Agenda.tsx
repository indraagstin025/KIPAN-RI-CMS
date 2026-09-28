import { useMemo, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowRightIcon,
    CalendarIcon,
    PersonIcon,
} from '@radix-ui/react-icons';
import { SewingPinFilledIcon } from '@radix-ui/react-icons';
import Footer from '@/Components/Landing/Footer';
import Navbar from '@/Components/Landing/Navbar';
import AgendaHero from '@/Components/Landing/AgendaHero';
import ScrollReveal from '@/Components/Landing/ScrollReveal';
import { AGENDA_KEGIATAN } from '@/data/kipan-data';

interface AgendaPageProps {
    title: string;
    subtitle: string;
    category: string;
}

function parseDayMonth(displayDate: string): { day: string; month: string } {
    const match = displayDate.match(/^(\d+)(?:\s*-\s*\d+)?\s+(\w+)/);
    if (match) return { day: match[1], month: match[2].slice(0, 3) };
    return { day: '•', month: '' };
}

export default function Agenda({ title, subtitle, category }: AgendaPageProps) {
    const categories = useMemo(
        () => ['Semua', ...Array.from(new Set(AGENDA_KEGIATAN.map((a) => a.category)))],
        []
    );
    const [activeCategory, setActiveCategory] = useState('Semua');

    const filtered =
        activeCategory === 'Semua'
            ? AGENDA_KEGIATAN
            : AGENDA_KEGIATAN.filter((a) => a.category === activeCategory);

    return (
        <>
            <Head title={`${title} — KIPAN Republik Indonesia`} />
            <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-kipan-text-dark">
                <Navbar />

                <main className="flex-1">
                    {/* ===== Hero ===== */}
                    <AgendaHero category={category} title={title} subtitle={subtitle} />

                    {/* ===== Daftar Agenda ===== */}
                    <section id="agenda-list" className="py-16 lg:py-20 scroll-mt-24">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                            <ScrollReveal>
                                <p className="text-xs font-bold uppercase tracking-widest text-kipan-blue mb-2">
                                    Kalender Kegiatan
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-kipan-navy tracking-tight mb-3">
                                    Jadwal Kegiatan Nasional
                                </h2>
                                <p className="text-slate-600 max-w-2xl mb-8">
                                    Saring berdasarkan kategori dan catat tanggalnya — setiap kegiatan
                                    terbuka untuk kader dan masyarakat umum.
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

                            {/* Kartu Agenda */}
                            <div className="grid gap-5 md:grid-cols-2">
                                {filtered.map((agenda, idx) => {
                                    const { day, month } = parseDayMonth(agenda.displayDate);
                                    return (
                                        <ScrollReveal key={agenda.id} delay={0.05 * (idx % 2)}>
                                            <article className="group h-full bg-white border border-slate-200 rounded-2xl p-6 hover:border-kipan-blue/40 hover:shadow-md transition-all flex gap-5">
                                                {/* Date Block */}
                                                <div className="shrink-0 w-16 h-16 rounded-xl bg-kipan-navy text-white flex flex-col items-center justify-center">
                                                    <span className="text-2xl font-black leading-none">
                                                        {day}
                                                    </span>
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-kipan-yellow mt-1">
                                                        {month}
                                                    </span>
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 flex-wrap mb-2">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-kipan-navy text-[11px] font-bold">
                                                            {agenda.category}
                                                        </span>
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-bold">
                                                            {agenda.status}
                                                        </span>
                                                    </div>
                                                    <h3 className="font-bold text-kipan-navy leading-snug mb-2">
                                                        {agenda.title}
                                                    </h3>
                                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                                        {agenda.description}
                                                    </p>
                                                    <div className="space-y-1.5 text-xs text-slate-500 mb-4">
                                                        <p className="flex items-center gap-1.5">
                                                            <CalendarIcon className="w-3.5 h-3.5 shrink-0 text-kipan-blue" />
                                                            {agenda.displayDate} • {agenda.time}
                                                        </p>
                                                        <p className="flex items-start gap-1.5">
                                                            <SewingPinFilledIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-kipan-blue" />
                                                            {agenda.location}
                                                        </p>
                                                        <p className="flex items-start gap-1.5">
                                                            <PersonIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-kipan-blue" />
                                                            {agenda.organizer}
                                                        </p>
                                                    </div>
                                                    <Link
                                                        href="/pendaftaran"
                                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-kipan-navy hover:text-kipan-blue group/link transition-colors"
                                                    >
                                                        Daftar Ikut Kegiatan
                                                        <ArrowRightIcon className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                                                    </Link>
                                                </div>
                                            </article>
                                        </ScrollReveal>
                                    );
                                })}
                            </div>

                            {filtered.length === 0 && (
                                <p className="text-center text-slate-500 py-12">
                                    Belum ada agenda pada kategori ini.
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
                                            Jangan Lewatkan Aksi Berikutnya
                                        </h2>
                                        <p className="text-blue-100/90 max-w-xl mx-auto mb-8 text-sm sm:text-base">
                                            Daftarkan dirimu sekarang agar mendapat undangan resmi setiap
                                            kegiatan nasional KIPAN di wilayahmu.
                                        </p>
                                        <Link
                                            href="/pendaftaran"
                                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-kipan-yellow hover:bg-yellow-300 text-kipan-navy text-sm font-black transition-colors shadow-lg"
                                        >
                                            Daftar Ikut Kegiatan
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
