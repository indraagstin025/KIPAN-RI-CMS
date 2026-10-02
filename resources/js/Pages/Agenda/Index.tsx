import ScrollReveal from '@/Components/Layout/ScrollReveal';
import LandingLayout from '@/Layouts/LandingLayout';
import { Link } from '@inertiajs/react';
import {
    ArrowRightIcon,
    CalendarIcon,
    SewingPinFilledIcon,
} from '@radix-ui/react-icons';
import AgendaHero from './components/AgendaHero';

interface AgendaItem {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    event_date: string;
    day: string;
    month: string;
    start_time: string | null;
    end_time: string | null;
    location: string | null;
    image: string | null;
    status: string;
}

interface PaginatedEvents {
    data: AgendaItem[];
    links: { url: string | null; label: string; active: boolean }[];
    from: number;
    to: number;
    total: number;
}

interface Props {
    readonly title: string;
    readonly subtitle: string;
    readonly category: string;
    readonly events: PaginatedEvents;
}

export default function AgendaIndex({ title, subtitle, category, events }: Readonly<Props>) {
    return (
        <LandingLayout
            title={`${title} — KIPAN Republik Indonesia`}
            className="bg-slate-50"
        >
            <AgendaHero category={category} title={title} subtitle={subtitle} />

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
                            Catat tanggalnya — setiap kegiatan terbuka untuk kader dan masyarakat umum.
                        </p>
                    </ScrollReveal>

                    {events.data.length === 0 ? (
                        <p className="py-12 text-center text-slate-500">
                            Belum ada agenda yang dijadwalkan.
                        </p>
                    ) : (
                        <div className="grid gap-5 md:grid-cols-2">
                            {events.data.map((agenda, idx) => (
                                <ScrollReveal key={agenda.id} delay={0.05 * (idx % 2)}>
                                    <article className="group flex h-full gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-kipan-blue/40 hover:shadow-md">
                                        {/* Date Block */}
                                        <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-kipan-navy text-white">
                                            <span className="text-2xl font-black leading-none">{agenda.day}</span>
                                            <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-kipan-yellow">
                                                {agenda.month}
                                            </span>
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <div className="mb-2 flex flex-wrap items-center gap-2">
                                                <span
                                                    className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-bold ${
                                                        agenda.status === 'Akan Datang'
                                                            ? 'border-emerald-200 bg-emerald-100 text-emerald-800'
                                                            : 'border-slate-200 bg-slate-100 text-slate-500'
                                                    }`}
                                                >
                                                    {agenda.status}
                                                </span>
                                            </div>
                                            <h3 className="mb-2 font-bold leading-snug text-kipan-navy">{agenda.title}</h3>
                                            {agenda.description && (
                                                <p className="mb-4 text-sm leading-relaxed text-slate-600 line-clamp-2">
                                                    {agenda.description}
                                                </p>
                                            )}
                                            <div className="space-y-1.5 text-xs text-slate-500">
                                                <p className="flex items-center gap-1.5">
                                                    <CalendarIcon className="h-3.5 w-3.5 shrink-0 text-kipan-blue" />
                                                    {agenda.event_date}
                                                    {agenda.start_time && ` • ${agenda.start_time}`}
                                                    {agenda.end_time && `–${agenda.end_time}`}
                                                </p>
                                                {agenda.location && (
                                                    <p className="flex items-start gap-1.5">
                                                        <SewingPinFilledIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-kipan-blue" />
                                                        {agenda.location}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </article>
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
                                    Jangan Lewatkan Aksi Berikutnya
                                </h2>
                                <p className="mx-auto mb-8 max-w-xl text-sm text-blue-100/90 sm:text-base">
                                    Daftarkan dirimu sekarang agar mendapat undangan resmi setiap kegiatan nasional KIPAN.
                                </p>
                                <Link
                                    href="/kontak"
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
