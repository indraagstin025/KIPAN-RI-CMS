import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { BookOpen, CalendarDays, Clock, FileText, BarChart3, Image, TrendingUp } from 'lucide-react';

interface NewsItem {
    id: number;
    title: string;
    status: string;
    author: string | null;
    created_at: string;
}

interface EventItem {
    id: number;
    title: string;
    event_date: string;
    location: string;
}

interface Stats {
    news_total: number;
    news_published: number;
    events_total: number;
    events_upcoming: number;
    programs_total: number;
    programs_published: number;
    galleries_total: number;
}

interface DashboardProps {
    stats: Stats;
    recentNews: NewsItem[];
    upcomingEvents: EventItem[];
}

interface StatCardProps {
    label: string;
    value: number;
    sub: string;
    subValue: number;
    icon: React.ReactNode;
    color: string;
    href: string;
}

function StatCard({ label, value, sub, subValue, icon, color, href }: StatCardProps) {
    return (
        <Link
            href={href}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-slate-200/80 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-500">{label}</p>
                    <p className="mt-1 text-3xl font-black text-slate-900">{value}</p>
                    <p className="mt-1 text-xs text-slate-400">
                        <span className="font-semibold text-slate-600">{subValue}</span> {sub}
                    </p>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color} transition-transform duration-200 group-hover:scale-110`}>
                    {icon}
                </div>
            </div>
            {/* Subtle accent bar */}
            <div className={`absolute bottom-0 left-0 h-0.5 w-0 ${color} transition-all duration-300 group-hover:w-full`} />
        </Link>
    );
}

function StatusBadge({ status }: { status: string }) {
    const styles: Record<string, string> = {
        published: 'bg-emerald-100 text-emerald-700',
        draft: 'bg-slate-100 text-slate-600',
        review: 'bg-amber-100 text-amber-700',
        archived: 'bg-red-100 text-red-600',
        scheduled: 'bg-blue-100 text-blue-700',
    };

    const labels: Record<string, string> = {
        published: 'Publik',
        draft: 'Draf',
        review: 'Review',
        archived: 'Arsip',
        scheduled: 'Terjadwal',
    };

    return (
        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${styles[status] ?? 'bg-slate-100 text-slate-600'}`}>
            {labels[status] ?? status}
        </span>
    );
}

export default function Dashboard({ stats, recentNews, upcomingEvents }: DashboardProps) {
    const statCards: StatCardProps[] = [
        {
            label: 'Total Berita',
            value: stats.news_total,
            sub: 'dipublikasikan',
            subValue: stats.news_published,
            icon: <BookOpen className="h-6 w-6 text-white" />,
            color: 'bg-blue-500',
            href: '/admin/news',
        },
        {
            label: 'Total Agenda',
            value: stats.events_total,
            sub: 'akan datang',
            subValue: stats.events_upcoming,
            icon: <CalendarDays className="h-6 w-6 text-white" />,
            color: 'bg-violet-500',
            href: '/admin/events',
        },
        {
            label: 'Total Program',
            value: stats.programs_total,
            sub: 'aktif',
            subValue: stats.programs_published,
            icon: <BarChart3 className="h-6 w-6 text-white" />,
            color: 'bg-emerald-500',
            href: '/admin/programs',
        },
        {
            label: 'Total Galeri',
            value: stats.galleries_total,
            sub: 'item media',
            subValue: stats.galleries_total,
            icon: <Image className="h-6 w-6 text-white" />,
            color: 'bg-amber-500',
            href: '/admin/gallery',
        },
    ];

    return (
        <>
            <Head title="Dashboard — KIPAN CMS" />
            <AdminLayout title="Dashboard">
                {/* Welcome banner */}
                <div className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#061C33] to-[#0D3F70] px-8 py-6 shadow-lg">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-bold text-white">
                                Selamat datang di KIPAN CMS
                            </h2>
                            <p className="mt-1 text-sm text-blue-200">
                                Kelola konten website KIPAN Indonesia dari satu panel terpusat.
                            </p>
                        </div>
                        <TrendingUp className="h-12 w-12 shrink-0 text-kipan-yellow/60" />
                    </div>
                </div>

                {/* Stats grid */}
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {statCards.map((card) => (
                        <StatCard key={card.label} {...card} />
                    ))}
                </div>

                {/* Two-column detail panels */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Recent News */}
                    <div className="rounded-2xl bg-white shadow-sm border border-slate-200/80">
                        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                            <div className="flex items-center gap-2">
                                <FileText className="h-5 w-5 text-blue-500" />
                                <h3 className="text-sm font-semibold text-slate-800">Berita Terbaru</h3>
                            </div>
                            <Link
                                href="/admin/news"
                                className="text-xs font-medium text-blue-500 transition hover:text-blue-700"
                            >
                                Lihat semua
                            </Link>
                        </div>

                        {recentNews.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <FileText className="mb-3 h-8 w-8 text-slate-300" />
                                <p className="text-sm text-slate-400">Belum ada berita.</p>
                                <Link
                                    href="/admin/news/create"
                                    className="mt-3 rounded-lg bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-blue-100"
                                >
                                    Tulis berita pertama
                                </Link>
                            </div>
                        ) : (
                            <ul className="divide-y divide-slate-100">
                                {recentNews.map((item) => (
                                    <li key={item.id} className="flex items-start justify-between gap-3 px-6 py-3.5">
                                        <div className="min-w-0">
                                            <p className="truncate text-sm font-medium text-slate-800">{item.title}</p>
                                            <div className="mt-0.5 flex items-center gap-2 text-xs text-slate-400">
                                                <Clock className="h-3 w-3" />
                                                <span>{item.created_at}</span>
                                                {item.author && <span>· {item.author}</span>}
                                            </div>
                                        </div>
                                        <StatusBadge status={item.status} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Upcoming Events */}
                    <div className="rounded-2xl bg-white shadow-sm border border-slate-200/80">
                        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                            <div className="flex items-center gap-2">
                                <CalendarDays className="h-5 w-5 text-violet-500" />
                                <h3 className="text-sm font-semibold text-slate-800">Agenda Mendatang</h3>
                            </div>
                            <Link
                                href="/admin/events"
                                className="text-xs font-medium text-violet-500 transition hover:text-violet-700"
                            >
                                Lihat semua
                            </Link>
                        </div>

                        {upcomingEvents.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <CalendarDays className="mb-3 h-8 w-8 text-slate-300" />
                                <p className="text-sm text-slate-400">Belum ada agenda mendatang.</p>
                                <Link
                                    href="/admin/events/create"
                                    className="mt-3 rounded-lg bg-violet-50 px-4 py-1.5 text-xs font-medium text-violet-600 transition hover:bg-violet-100"
                                >
                                    Tambah agenda
                                </Link>
                            </div>
                        ) : (
                            <ul className="divide-y divide-slate-100">
                                {upcomingEvents.map((item) => (
                                    <li key={item.id} className="flex items-start gap-4 px-6 py-3.5">
                                        <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-xl bg-violet-50 text-center">
                                            <span className="text-[10px] font-medium uppercase text-violet-400 leading-none">
                                                {item.event_date.split(' ')[1]}
                                            </span>
                                            <span className="text-base font-black text-violet-700 leading-none">
                                                {item.event_date.split(' ')[0]}
                                            </span>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="truncate text-sm font-medium text-slate-800">{item.title}</p>
                                            <p className="mt-0.5 truncate text-xs text-slate-400">{item.location}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
