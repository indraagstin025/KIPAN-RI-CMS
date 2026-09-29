import { ArrowRightIcon, PersonIcon, TargetIcon, StarFilledIcon } from '@radix-ui/react-icons';
import { BIDANG_ICONS, BidangItem } from '../data/about-data';

export interface MobileLeaderCardProps {
    badge: string;
    category: string;
    institution: string;
    name: string;
    role: string;
    description: string;
    footerLabel?: string;
    photo?: string;
}

export function MobileLeaderCard({
    badge,
    category,
    institution,
    name,
    role,
    description,
    footerLabel = 'Mandat Kepengurusan',
    photo,
}: MobileLeaderCardProps) {
    return (
        <div className="relative flex w-[86vw] max-w-[320px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[26px] border border-slate-200/90 bg-white p-5 shadow-sm transition-all hover:border-[#0E6CAC]/40">
            {/* Background Watermark Curve */}
            <svg
                className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-slate-100"
                viewBox="0 0 200 200"
                fill="none"
                aria-hidden="true"
            >
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeDasharray="320 120" />
                <path d="M50 150 C80 90, 120 90, 150 50" stroke="currentColor" strokeWidth="20" strokeLinecap="round" />
            </svg>

            <div>
                {/* Header Row: Badge on left, Category on right with clear spacing */}
                <div className="relative z-10 mb-4 flex items-center justify-between gap-2">
                    <span className="rounded-full border border-blue-200/80 bg-blue-50/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0D3F70]">
                        {badge}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0E6CAC]">
                        {category}
                    </span>
                </div>

                {/* Centerpiece Emblem or Photo */}
                <div className="relative z-10 mb-4 flex flex-col items-center">
                    {photo ? (
                        <div className="relative h-28 w-28 overflow-hidden rounded-3xl border-2 border-blue-200 shadow-md">
                            <img
                                src={photo}
                                alt={name}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                    ) : (
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50 to-white text-[#0E6CAC] shadow-sm">
                            <PersonIcon className="h-10 w-10 text-[#0E6CAC]" />
                        </div>
                    )}
                </div>

                {/* Leader Information */}
                <div className="relative z-10 text-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0E6CAC]">
                        {institution}
                    </span>
                    <h4 className="mt-1 text-base font-black leading-snug text-[#0D3F70]">
                        {name}
                    </h4>
                    <div className="mt-1.5 inline-block rounded-md bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-[#0E6CAC]">
                        {role}
                    </div>
                    <p className="mt-3 text-left text-xs leading-relaxed text-slate-600 line-clamp-5">
                        {description}
                    </p>
                </div>
            </div>

            {/* Clean Footer Row */}
            <div className="relative z-10 mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] font-bold text-[#0D3F70]">
                <span>{footerLabel}</span>
                <div className="flex items-center gap-1 text-[#0E6CAC]">
                    <span className="text-[10px] font-black uppercase tracking-wider">KIPAN</span>
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                </div>
            </div>
        </div>
    );
}

export function MobileBidangCard({ bidang }: { bidang: BidangItem }) {
    const IconComponent = BIDANG_ICONS[bidang.id] || TargetIcon;

    return (
        <div className="relative flex w-[86vw] max-w-[320px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[26px] border border-slate-200/90 bg-white p-5 shadow-sm transition-all hover:border-[#0E6CAC]/40">
            {/* Background Watermark Curve */}
            <svg
                className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-slate-100"
                viewBox="0 0 200 200"
                fill="none"
                aria-hidden="true"
            >
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeDasharray="320 120" />
                <path d="M50 150 C80 90, 120 90, 150 50" stroke="currentColor" strokeWidth="20" strokeLinecap="round" />
            </svg>

            <div>
                {/* Header Row */}
                <div className="relative z-10 mb-4 flex items-center justify-between gap-2">
                    <span className="rounded-full border border-blue-200/80 bg-blue-50/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0D3F70]">
                        Divisi {bidang.no}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0E6CAC]">
                        TIM TEKNIS
                    </span>
                </div>

                {/* Photo or Icon */}
                <div className="relative z-10 mb-4 flex flex-col items-center">
                    {bidang.photo ? (
                        <div className="relative h-28 w-28 overflow-hidden rounded-3xl border-2 border-blue-200 shadow-md">
                            <img
                                src={bidang.photo}
                                alt={bidang.name}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                    ) : (
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50 to-white text-[#0E6CAC] shadow-sm">
                            <IconComponent className="h-10 w-10 text-[#0E6CAC]" />
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="relative z-10 text-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0E6CAC]">
                        {bidang.scope}
                    </span>
                    <h4 className="mt-1 text-base font-black leading-snug text-[#0D3F70]">
                        {bidang.name}
                    </h4>
                    <div className="mt-1.5 inline-block rounded-md bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-[#0E6CAC]">
                        {bidang.coordinator || 'Koordinator Bidang'}
                    </div>
                    <p className="mt-3 text-left text-xs leading-relaxed text-slate-600 line-clamp-5">
                        {bidang.focus}
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] font-bold text-[#0D3F70]">
                <span>Fokus Kerja</span>
                <div className="flex items-center gap-1 text-[#0E6CAC]">
                    <span className="text-[10px] font-black uppercase tracking-wider">DIVISI {bidang.no}</span>
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                </div>
            </div>
        </div>
    );
}

export interface MobileDutaCardProps {
    tag: string;
    scope: string;
    title: string;
    role: string;
    mission?: string;
    description?: string;
    photo?: string;
}

export function MobileDutaCard({
    tag,
    scope,
    title,
    role,
    mission,
    description,
    photo,
}: MobileDutaCardProps) {
    return (
        <div className="relative flex w-[86vw] max-w-[320px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[26px] border border-slate-200/90 bg-white p-5 shadow-sm transition-all hover:border-[#0E6CAC]/40">
            {/* Background Watermark Curve */}
            <svg
                className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-slate-100"
                viewBox="0 0 200 200"
                fill="none"
                aria-hidden="true"
            >
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeDasharray="320 120" />
                <path d="M50 150 C80 90, 120 90, 150 50" stroke="currentColor" strokeWidth="20" strokeLinecap="round" />
            </svg>

            <div>
                {/* Header Row */}
                <div className="relative z-10 mb-4 flex items-center justify-between gap-2">
                    <span className="rounded-full border border-blue-200/80 bg-blue-50/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0D3F70]">
                        {tag}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0E6CAC]">
                        DUTA SEBAYA
                    </span>
                </div>

                {/* Photo or Star Icon */}
                <div className="relative z-10 mb-4 flex flex-col items-center">
                    {photo ? (
                        <div className="relative h-28 w-28 overflow-hidden rounded-3xl border-2 border-blue-200 shadow-md">
                            <img
                                src={photo}
                                alt={title}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover object-[center_top]"
                            />
                        </div>
                    ) : (
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50 to-white text-[#0E6CAC] shadow-sm">
                            <StarFilledIcon className="h-10 w-10 text-amber-500" />
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="relative z-10 text-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0E6CAC]">
                        {scope}
                    </span>
                    <h4 className="mt-1 text-base font-black leading-snug text-[#0D3F70]">
                        {title}
                    </h4>
                    <div className="mt-1.5 inline-block rounded-md bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-[#0E6CAC]">
                        {role}
                    </div>
                    <p className="mt-3 text-left text-xs leading-relaxed text-slate-600 line-clamp-5">
                        {mission || description}
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] font-bold text-[#0D3F70]">
                <span>Peran Duta</span>
                <div className="flex items-center gap-1 text-[#0E6CAC]">
                    <span className="text-[10px] font-black uppercase tracking-wider">SEBAYA</span>
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                </div>
            </div>
        </div>
    );
}
