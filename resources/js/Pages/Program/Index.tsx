import ScrollReveal from '@/Components/Layout/ScrollReveal';
import LandingLayout from '@/Layouts/LandingLayout';
import { PROGRAMS } from '@/data/kipan-data';
import { Link } from '@inertiajs/react';
import { ArrowRightIcon, CheckCircledIcon } from '@radix-ui/react-icons';
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
import ProgramHero from './components/ProgramHero';

interface ProgramPageProps {
    readonly title: string;
    readonly subtitle: string;
    readonly category: string;
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

function ProgramIcon({
    name,
    className,
}: Readonly<{
    name: string;
    className?: string;
}>) {
    const Icon = iconMap[name] ?? LayoutGrid;
    return <Icon className={className} />;
}

export default function ProgramIndex({
    title,
    subtitle,
    category,
}: Readonly<ProgramPageProps>) {
    return (
        <LandingLayout
            title={`${title} — KIPAN Republik Indonesia`}
            className="bg-slate-50"
        >
            {/* ===== Hero ===== */}
            <ProgramHero
                category={category}
                title={title}
                subtitle={subtitle}
            />

            {/* ===== Daftar Program ===== */}
            <section id="program-list" className="scroll-mt-24 py-16 lg:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-kipan-blue">
                            Program Unggulan
                        </p>
                        <h2 className="mb-3 text-2xl font-black tracking-tight text-kipan-navy sm:text-3xl">
                            Aksi Nyata di Lapangan
                        </h2>
                        <p className="mb-10 max-w-2xl text-slate-600">
                            Setiap program dirancang untuk menyentuh langsung
                            masyarakat — dari ruang kelas hingga pelosok desa.
                        </p>
                    </ScrollReveal>

                    <div className="grid gap-6 md:grid-cols-2">
                        {PROGRAMS.map((program, idx) => (
                            <ScrollReveal
                                key={program.id}
                                delay={0.06 * (idx % 2)}
                            >
                                <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-kipan-blue/40 hover:shadow-md">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={program.image}
                                            alt={program.title}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-kipan-navy/60 via-transparent to-transparent" />
                                        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-kipan-yellow px-3 py-1 text-xs font-black text-kipan-navy">
                                            {program.number}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-3 flex items-start gap-3">
                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-kipan-navy text-white">
                                                <ProgramIcon
                                                    name={program.icon}
                                                    className="h-5 w-5"
                                                />
                                            </span>
                                            <div>
                                                <h3 className="text-lg font-bold leading-snug text-kipan-navy">
                                                    {program.title}
                                                </h3>
                                                <p className="mt-0.5 text-xs text-slate-500">
                                                    {program.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mb-4 text-sm leading-relaxed text-slate-600">
                                            {program.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {program.features.map((feature) => (
                                                <li
                                                    key={feature}
                                                    className="flex items-start gap-2 text-sm text-slate-600"
                                                >
                                                    <CheckCircledIcon className="mt-0.5 h-4 w-4 shrink-0 text-kipan-blue" />
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

            {/* ===== CTA ===== */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="relative overflow-hidden rounded-3xl bg-kipan-navy px-6 py-12 text-center sm:p-14">
                            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-kipan-blue/30 blur-3xl" />
                            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-kipan-yellow/20 blur-3xl" />
                            <div className="relative">
                                <h2 className="mb-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                                    Siap Jadi Bagian dari Gerakan?
                                </h2>
                                <p className="mx-auto mb-8 max-w-xl text-sm text-blue-100/90 sm:text-base">
                                    Daftarkan dirimu sebagai kader KIPAN dan
                                    ikuti pembekalan gelombang berikutnya di
                                    wilayahmu.
                                </p>
                                <Link
                                    href="/pendaftaran"
                                    className="inline-flex items-center gap-2 rounded-full bg-kipan-yellow px-7 py-3.5 text-sm font-black text-kipan-navy shadow-lg transition-colors hover:bg-yellow-300"
                                >
                                    Daftar Sebagai Kader
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
