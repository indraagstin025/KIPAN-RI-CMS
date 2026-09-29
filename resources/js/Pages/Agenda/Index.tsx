import ScrollReveal from '@/Components/Layout/ScrollReveal';
import LandingLayout from '@/Layouts/LandingLayout';
import { AGENDA_KEGIATAN } from '@/data/kipan-data';
import { Link } from '@inertiajs/react';
import {
    ArrowRightIcon,
    CalendarIcon,
    PersonIcon,
    SewingPinFilledIcon,
} from '@radix-ui/react-icons';
import { useMemo, useState } from 'react';
import AgendaHero from './components/AgendaHero';

interface AgendaPageProps {
    readonly title: string;
    readonly subtitle: string;
    readonly category: string;
}

function parseDayMonth(displayDate: string): { day: string; month: string } {
    const match = displayDate.match(/^(\d+)(?:\s*-\s*\d+)?\s+(\w+)/);
    if (match) return { day: match[1], month: match[2].slice(0, 3) };
    return { day: '•', month: '' };
}

export default function AgendaIndex({
    title,
    subtitle,
    category,
}: Readonly<AgendaPageProps>) {
    const categories = useMemo(
        () => [
            'Semua',
            ...Array.from(new Set(AGENDA_KEGIATAN.map((a) => a.category))),
        ],
        [],
    );
    const [activeCategory, setActiveCategory] = useState('Semua');

    const filtered =
        activeCategory === 'Semua'
            ? AGENDA_KEGIATAN
            : AGENDA_KEGIATAN.filter((a) => a.category === activeCategory);

    return (
        <LandingLayout
            title={`${title} — KIPAN Republik Indonesia`}
            className="bg-slate-50"
        >
            {/* ===== Hero ===== */}
            <AgendaHero category={category} title={title} subtitle={subtitle} />

            {/* ===== Daftar Agenda ===== */}
            <section id="agenda-list" className="scroll-mt-24 py-16 lg:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-kipan-blue">
                            Kalender Kegiatan
                        </p>
                        <h2 className="mb-3 text-2xl font-black tracking-tight text-kipan-navy sm:text-3xl">
                            Jadwal Kegiatan Nasional
                        </h2>
                        <p className="mb-8 max-w-2xl text-slate-600">
                            Saring berdasarkan kategori dan catat tanggalnya —
                            setiap kegiatan terbuka untuk kader dan masyarakat
                            umum.
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

                    {/* Kartu Agenda */}
                    <div className="grid gap-5 md:grid-cols-2">
                        {filtered.map((agenda, idx) => {
                            const { day, month } = parseDayMonth(
                                agenda.displayDate,
                            );
                            return (
                                <ScrollReveal
                                    key={agenda.id}
                                    delay={0.05 * (idx % 2)}
                                >
                                    <article className="group flex h-full gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-kipan-blue/40 hover:shadow-md">
                                        {/* Date Block */}
                                        <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-kipan-navy text-white">
                                            <span className="text-2xl font-black leading-none">
                                                {day}
                                            </span>
                                            <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-kipan-yellow">
                                                {month}
                                            </span>
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <div className="mb-2 flex flex-wrap items-center gap-2">
                                                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100/70 px-2.5 py-1 text-[11px] font-bold text-kipan-navy">
                                                    {agenda.category}
                                                </span>
                                                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                                                    {agenda.status}
                                                </span>
                                            </div>
                                            <h3 className="mb-2 font-bold leading-snug text-kipan-navy">
                                                {agenda.title}
                                            </h3>
                                            <p className="mb-4 text-sm leading-relaxed text-slate-600">
                                                {agenda.description}
                                            </p>
                                            <div className="mb-4 space-y-1.5 text-xs text-slate-500">
                                                <p className="flex items-center gap-1.5">
                                                    <CalendarIcon className="h-3.5 w-3.5 shrink-0 text-kipan-blue" />
                                                    {agenda.displayDate} •{' '}
                                                    {agenda.time}
                                                </p>
                                                <p className="flex items-start gap-1.5">
                                                    <SewingPinFilledIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-kipan-blue" />
                                                    {agenda.location}
                                                </p>
                                                <p className="flex items-start gap-1.5">
                                                    <PersonIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-kipan-blue" />
                                                    {agenda.organizer}
                                                </p>
                                            </div>
                                            <Link
                                                href="/pendaftaran"
                                                className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-kipan-navy transition-colors hover:text-kipan-blue"
                                            >
                                                Daftar Ikut Kegiatan
                                                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                        </div>
                                    </article>
                                </ScrollReveal>
                            );
                        })}
                    </div>

                    {filtered.length === 0 && (
                        <p className="py-12 text-center text-slate-500">
                            Belum ada agenda pada kategori ini.
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
                                    Jangan Lewatkan Aksi Berikutnya
                                </h2>
                                <p className="mx-auto mb-8 max-w-xl text-sm text-blue-100/90 sm:text-base">
                                    Daftarkan dirimu sekarang agar mendapat
                                    undangan resmi setiap kegiatan nasional
                                    KIPAN di wilayahmu.
                                </p>
                                <Link
                                    href="/pendaftaran"
                                    className="inline-flex items-center gap-2 rounded-full bg-kipan-yellow px-7 py-3.5 text-sm font-black text-kipan-navy shadow-lg transition-colors hover:bg-yellow-300"
                                >
                                    Daftar Ikut Kegiatan
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
