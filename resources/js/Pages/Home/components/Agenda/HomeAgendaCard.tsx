import ScrollReveal from '@/Components/Layout/ScrollReveal';
import { AgendaItem } from '@/data/landing-content';
import {
    ArrowRightIcon,
    ClockIcon,
    PersonIcon,
    SewingPinIcon,
} from '@radix-ui/react-icons';

interface HomeAgendaCardProps {
    readonly item: AgendaItem;
    readonly index: number;
}

export default function HomeAgendaCard({
    item,
    index,
}: Readonly<HomeAgendaCardProps>) {
    const isOpened = item.status === 'Dibuka';

    return (
        <ScrollReveal key={item.id} direction="up" delay={0.06 + index * 0.05}>
            <div className="shadow-xs group flex h-full flex-col items-start justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-kipan-blue hover:shadow-lg sm:flex-row sm:items-center sm:p-6">
                {/* Left: Refined Date Ticket Badge */}
                <div className="shadow-xs group-hover:scale-102 flex w-full shrink-0 items-center justify-between rounded-xl border border-blue-900/60 bg-gradient-to-b from-[#0D3F70] to-[#0A2E52] p-3 text-white transition-all duration-300 group-hover:border-kipan-blue sm:h-28 sm:w-24 sm:flex-col sm:justify-center sm:p-2">
                    <div className="flex items-center gap-2 sm:flex-col sm:gap-0">
                        <span className="font-mono text-2xl font-black leading-none text-amber-400 sm:text-3xl">
                            {item.day}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-100 sm:mt-1 sm:text-[11px]">
                            {item.month}
                        </span>
                    </div>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-blue-200/80 sm:mt-1">
                        2026
                    </span>
                </div>

                {/* Center/Right: Information Details */}
                <div className="flex h-full w-full min-w-0 flex-1 flex-col justify-between">
                    <div>
                        {/* Tag & Status Row */}
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-kipan-blue">
                                {item.category}
                            </span>
                            <span
                                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${
                                    isOpened
                                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                                        : 'border-amber-200 bg-amber-50 text-amber-700'
                                }`}
                            >
                                <span className="relative mr-1.5 flex h-2 w-2">
                                    {isOpened && (
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                    )}
                                    <span
                                        className={`relative inline-flex h-2 w-2 rounded-full ${
                                            isOpened
                                                ? 'bg-emerald-500'
                                                : 'bg-amber-500'
                                        }`}
                                    ></span>
                                </span>
                                {isOpened
                                    ? 'Pendaftaran Dibuka'
                                    : 'Segera Dibuka'}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="line-clamp-2 text-base font-bold leading-snug text-kipan-navy transition-colors group-hover:text-kipan-blue sm:text-lg">
                            {item.title}
                        </h3>

                        {/* Meta Items with Icons */}
                        <div className="mt-3 space-y-1.5 text-xs text-slate-500">
                            <div className="flex items-center gap-2">
                                <ClockIcon className="h-3.5 w-3.5 shrink-0 text-kipan-blue" />
                                <span className="font-medium text-slate-700">
                                    {item.time}
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <SewingPinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-kipan-blue" />
                                <span className="line-clamp-1">
                                    {item.location}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Action link */}
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                        <span className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                            <PersonIcon className="h-3 w-3 text-slate-400" />
                            Terbuka untuk Kader &amp; Umum
                        </span>
                        <a
                            href="/agenda"
                            className="inline-flex items-center gap-1 text-xs font-bold text-kipan-blue transition-colors hover:text-kipan-navy group-hover:underline"
                        >
                            <span>Detail</span>
                            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </a>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
}
