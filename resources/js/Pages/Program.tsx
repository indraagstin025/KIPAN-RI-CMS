import { Head, Link } from '@inertiajs/react';
import {
    ArrowRightIcon,
    CalendarIcon,
    CheckCircledIcon,
    SewingPinFilledIcon,
} from '@radix-ui/react-icons';
import {
    Award,
    BadgeCheck,
    Building2,
    Calendar,
    ClipboardCheck,
    FileText,
    GraduationCap,
    HandHeart,
    HeartPulse,
    IdCard,
    Landmark,
    LayoutGrid,
    Map,
    MapPin,
    Megaphone,
    Presentation,
    Radio,
    School,
    ScrollText,
    Users,
    type LucideIcon,
} from 'lucide-react';
import Footer from '@/Components/Landing/Footer';
import Navbar from '@/Components/Landing/Navbar';
import ScrollReveal from '@/Components/Landing/ScrollReveal';
import { AGENDA_KEGIATAN, PROGRAMS, STATS } from '@/data/kipan-data';

interface ProgramPageProps {
    title: string;
    subtitle: string;
    category: string;
}

const iconMap: Record<string, LucideIcon> = {
    Award,
    BadgeCheck,
    Building2,
    Calendar,
    ClipboardCheck,
    FileText,
    GraduationCap,
    HandHeart,
    HeartPulse,
    IdCard,
    Landmark,
    Map,
    MapPin,
    Megaphone,
    Presentation,
    Radio,
    School,
    ScrollText,
    Users,
};

function ProgramIcon({ name, className }: { name: string; className?: string }) {
    const Icon = iconMap[name] ?? LayoutGrid;
    return <Icon className={className} />;
}

export default function Program({ title, subtitle, category }: ProgramPageProps) {
    const upcomingAgenda = AGENDA_KEGIATAN.filter((a) => a.status !== 'Selesai').slice(0, 6);

    return (
        <>
            <Head title={`${title} — KIPAN Republik Indonesia`} />
            <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-kipan-text-dark">
                <Navbar />

                <main className="flex-1">
                    {/* ===== Hero ===== */}
                    <section className="pt-36 pb-14 bg-white border-b border-kipan-border overflow-hidden">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                            <ScrollReveal>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/70 border border-blue-200 rounded-full text-xs font-bold text-kipan-navy uppercase tracking-wider mb-5">
                                    <span className="w-2 h-2 rounded-full bg-kipan-blue" />
                                    <span>{category}</span>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.08}>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-kipan-navy tracking-tight leading-tight mb-4 max-w-3xl">
                                    {title}
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={0.14}>
                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                                    {subtitle}
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <div className="flex flex-wrap gap-3">
                                    <Link
                                        href="/pendaftaran"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-kipan-navy hover:bg-kipan-blue text-white text-sm font-bold transition-colors shadow-sm"
                                    >
                                        Daftar Sebagai Kader
                                        <ArrowRightIcon className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href="#agenda"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 hover:border-kipan-blue text-kipan-navy text-sm font-bold transition-colors"
                                    >
                                        <CalendarIcon className="w-4 h-4" />
                                        Lihat Agenda
                                    </a>
                                </div>
                            </ScrollReveal>

                            {/* Stats */}
                            <ScrollReveal delay={0.24}>
                                <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl">
                                    {STATS.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="bg-kipan-soft-blue border border-blue-100 rounded-2xl px-4 py-5 text-center"
                                        >
                                            <p className="text-2xl sm:text-3xl font-black text-kipan-navy">
                                                {stat.value}
                                            </p>
                                            <p className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>

                    {/* ===== Daftar Program ===== */}
                    <section className="py-16 lg:py-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                            <ScrollReveal>
                                <p className="text-xs font-bold uppercase tracking-widest text-kipan-blue mb-2">
                                    Program Unggulan
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-kipan-navy tracking-tight mb-3">
                                    Aksi Nyata di Lapangan
                                </h2>
                                <p className="text-slate-600 max-w-2xl mb-10">
                                    Setiap program dirancang untuk menyentuh langsung masyarakat — dari ruang
                                    kelas hingga pelosok desa.
                                </p>
                            </ScrollReveal>

                            <div className="grid gap-6 md:grid-cols-2">
                                {PROGRAMS.map((program, idx) => (
                                    <ScrollReveal key={program.id} delay={0.06 * (idx % 2)}>
                                        <article className="group h-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-kipan-blue/40 transition-all">
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={program.image}
                                                    alt={program.title}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-kipan-navy/60 via-transparent to-transparent" />
                                                <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-kipan-yellow text-kipan-navy text-xs font-black">
                                                    {program.number}
                                                </span>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-start gap-3 mb-3">
                                                    <span className="shrink-0 w-11 h-11 rounded-xl bg-kipan-navy text-white flex items-center justify-center">
                                                        <ProgramIcon name={program.icon} className="w-5 h-5" />
                                                    </span>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-kipan-navy leading-snug">
                                                            {program.title}
                                                        </h3>
                                                        <p className="text-xs text-slate-500 mt-0.5">
                                                            {program.subtitle}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                                    {program.description}
                                                </p>
                                                <ul className="space-y-2">
                                                    {program.features.map((feature) => (
                                                        <li
                                                            key={feature}
                                                            className="flex items-start gap-2 text-sm text-slate-600"
                                                        >
                                                            <CheckCircledIcon className="w-4 h-4 mt-0.5 shrink-0 text-kipan-blue" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </article>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ===== Agenda ===== */}
                    <section id="agenda" className="py-16 lg:py-20 bg-white border-y border-kipan-border">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                            <ScrollReveal>
                                <p className="text-xs font-bold uppercase tracking-widest text-kipan-blue mb-2">
                                    Kalender Kegiatan
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-kipan-navy tracking-tight mb-3">
                                    Agenda Mendatang
                                </h2>
                                <p className="text-slate-600 max-w-2xl mb-10">
                                    Catat tanggalnya dan ikut berpartisipasi dalam gerakan nasional.
                                </p>
                            </ScrollReveal>

                            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                                {upcomingAgenda.map((agenda, idx) => (
                                    <ScrollReveal key={agenda.id} delay={0.06 * (idx % 3)}>
                                        <article className="h-full bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-kipan-blue/40 hover:shadow-md transition-all flex flex-col">
                                            <div className="flex items-center gap-2 flex-wrap mb-3">
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-kipan-navy text-[11px] font-bold">
                                                    {agenda.category}
                                                </span>
                                                <span
                                                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                                        agenda.status === 'Sedang Berlangsung'
                                                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                                            : 'bg-white text-slate-600 border border-slate-200'
                                                    }`}
                                                >
                                                    {agenda.status}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-kipan-navy leading-snug mb-3 flex-1">
                                                {agenda.title}
                                            </h3>
                                            <div className="space-y-1.5 text-xs text-slate-500">
                                                <p className="flex items-center gap-1.5">
                                                    <CalendarIcon className="w-3.5 h-3.5 shrink-0 text-kipan-blue" />
                                                    {agenda.displayDate} • {agenda.time}
                                                </p>
                                                <p className="flex items-start gap-1.5">
                                                    <SewingPinFilledIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-kipan-blue" />
                                                    {agenda.location}
                                                </p>
                                            </div>
                                        </article>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ===== CTA ===== */}
                    <section className="py-16 lg:py-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                            <ScrollReveal>
                                <div className="relative overflow-hidden rounded-3xl bg-kipan-navy px-6 py-12 sm:p-14 text-center">
                                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-kipan-blue/30 blur-3xl" />
                                    <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-kipan-yellow/20 blur-3xl" />
                                    <div className="relative">
                                        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                                            Siap Jadi Bagian dari Gerakan?
                                        </h2>
                                        <p className="text-blue-100/90 max-w-xl mx-auto mb-8 text-sm sm:text-base">
                                            Daftarkan dirimu sebagai kader KIPAN dan ikuti pembekalan gelombang
                                            berikutnya di wilayahmu.
                                        </p>
                                        <Link
                                            href="/pendaftaran"
                                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-kipan-yellow hover:bg-yellow-300 text-kipan-navy text-sm font-black transition-colors shadow-lg"
                                        >
                                            Daftar Sebagai Kader
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
