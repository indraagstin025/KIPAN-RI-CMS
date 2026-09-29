import { ArrowRightIcon, CalendarIcon } from '@radix-ui/react-icons';
import { NewsEventCard as NewsEventCardType } from '../../constants/newsEvents';

interface NewsEventCardProps {
    item: NewsEventCardType;
}

export default function NewsEventCard({ item }: NewsEventCardProps) {
    return (
        <div className="shadow-xs group flex w-[290px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[22px] border border-slate-200/90 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-kipan-blue hover:shadow-xl sm:w-[340px] lg:w-[365px]">
            {/* Card Poster Header (Youth Innovation Card Poster Style) */}
            <div
                className={`relative h-[200px] w-full overflow-hidden bg-gradient-to-br sm:h-[220px] ${item.posterTheme} flex flex-col justify-between p-5 text-white`}
            >
                {/* Subtle Grid Graphic Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-15 [background-size:16px_16px]" />

                {/* Top Row: Pill Badge ("BERITA" or "ACARA") + Logo */}
                <div className="relative z-10 flex items-center justify-between">
                    <span
                        className={`shadow-xs rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${item.badgeColor}`}
                    >
                        {item.type}
                    </span>

                    <div className="h-7 w-7 shrink-0 rounded-full bg-white p-0.5 shadow-sm">
                        <img
                            src="/logo-kipan.jpg"
                            alt="KIPAN"
                            className="h-full w-full rounded-full object-cover"
                        />
                    </div>
                </div>

                {/* Poster Main Text / Visual Highlight */}
                <div className="relative z-10 my-auto py-2 text-center">
                    <div className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-200">
                        {item.category}
                    </div>
                    <div className="text-lg font-black leading-snug tracking-tight text-kipan-yellow drop-shadow-sm transition-transform duration-300 group-hover:scale-105 sm:text-xl">
                        {item.posterHighlight}
                    </div>
                    <div className="mt-1 text-[11px] text-white/90">
                        {item.posterSubtitle}
                    </div>
                </div>

                {/* Poster Footer Accent */}
                <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-blue-200/80">
                    <span>KIPAN RI</span>
                    <span>P4GN Pemuda</span>
                </div>
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                    {/* Date */}
                    <div className="mb-2.5 flex items-center gap-1.5 text-xs font-medium text-slate-400">
                        <CalendarIcon className="h-3.5 w-3.5 text-kipan-blue" />
                        <span>{item.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 line-clamp-2 text-sm font-bold uppercase leading-snug tracking-tight text-kipan-navy transition-colors group-hover:text-kipan-blue sm:text-base">
                        {item.title}
                    </h3>
                </div>

                {/* Action Link */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <a
                        href={item.href}
                        className="inline-flex items-center gap-1 text-xs font-bold text-kipan-blue transition-colors group-hover:text-blue-700"
                    >
                        <span>Baca Selengkapnya</span>
                        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                    </a>

                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        {item.type}
                    </span>
                </div>
            </div>
        </div>
    );
}
