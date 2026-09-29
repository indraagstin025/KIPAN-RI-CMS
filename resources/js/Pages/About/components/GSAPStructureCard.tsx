import { ArrowRightIcon, PersonIcon, TargetIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { BIDANG_ICONS, BidangItem } from '../data/about-data';

export interface GSAPLeaderCardProps {
    id: number | string;
    isExpanded: boolean;
    isContracted: boolean;
    onHover: () => void;
    onLeave: () => void;
    badge: string;
    category: string;
    institution: string;
    name: string;
    role: string;
    description: string;
    defaultWidth?: number;
    height?: number;
    drawerWidth?: number;
    footerLabel?: string;
    watermarkLabel?: string;
    photo?: string;
}

export function GSAPLeaderCard({
    id,
    isExpanded,
    isContracted,
    onHover,
    onLeave,
    badge,
    category,
    institution,
    name,
    role,
    description,
    defaultWidth = 270,
    height = 490,
    drawerWidth = 240,
    footerLabel = 'Mandat Kepengurusan',
    watermarkLabel = 'KIPAN • NASIONAL',
    photo,
}: GSAPLeaderCardProps) {
    return (
        <div
            data-id={id}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={() => (isExpanded ? onLeave() : onHover())}
            style={{ width: defaultWidth, height }}
            className={cn(
                "group relative cursor-pointer overflow-hidden rounded-[30px] border snap-center shrink-0 transition-colors duration-300 transform-gpu",
                isExpanded
                    ? "z-30 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] bg-white border-[#0E6CAC]/40 grayscale-0"
                    : isContracted
                      ? "z-10 grayscale bg-slate-100 border-slate-200/90"
                      : "z-10 grayscale bg-[#EEF2F6] border-slate-200/90 shadow-xs hover:border-[#0E6CAC]/30"
            )}
        >
            {/* Background Watermark Curve */}
            <svg
                data-gsap-watermark=""
                className={cn(
                    "pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-slate-300/40",
                    isExpanded && "text-blue-200/60"
                )}
                viewBox="0 0 200 200"
                fill="none"
                aria-hidden="true"
            >
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeDasharray="320 120" />
                <path d="M50 150 C80 90, 120 90, 150 50" stroke="currentColor" strokeWidth="20" strokeLinecap="round" />
            </svg>

            {/* Centerpiece Emblem that Zooms */}
            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden">
                <div
                    data-gsap-emblem=""
                    className="relative z-10 flex flex-col items-center"
                >
                    {photo ? (
                        <div className="mb-4 h-28 w-28 overflow-hidden rounded-3xl border-2 border-blue-200/80 shadow-md">
                            <img
                                src={photo}
                                alt={name}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                    ) : (
                        <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-3xl border border-blue-200/80 bg-white/95 text-[#0E6CAC] shadow-md transition-all duration-500">
                            <PersonIcon className="h-14 w-14 text-[#0E6CAC]" />
                        </div>
                    )}
                    <span className="rounded-full border border-blue-200/60 bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0D3F70] shadow-2xs">
                        {badge}
                    </span>
                </div>
                {/* Soft white gradient on right half when expanded */}
                <div
                    data-gsap-gradient=""
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white opacity-0"
                />
            </div>

            {/* Top Header Tag */}
            <div className="relative z-10 p-5 flex items-center justify-between">
                <span
                    className={cn(
                        "rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 shadow-2xs backdrop-blur-sm",
                        isExpanded
                            ? "border-blue-300 bg-[#0D3F70] text-white"
                            : "border-slate-200/80 bg-white/95 text-[#0D3F70]"
                    )}
                >
                    {badge}
                </span>
                {isExpanded && (
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0E6CAC] animate-in fade-in duration-300">
                        {category}
                    </span>
                )}
            </div>

            {/* Idle State Bottom Name */}
            <div
                data-gsap-idle=""
                className="absolute bottom-5 left-5 right-5 z-10"
            >
                <h4 className="text-sm font-black text-slate-800 leading-tight">
                    {name}
                </h4>
                <p className="text-[11px] font-semibold text-[#0E6CAC] mt-0.5 truncate">
                    {role}
                </p>
            </div>

            {/* Expanded Full Drawer */}
            <div
                data-gsap-drawer=""
                style={{ width: drawerWidth }}
                className="absolute inset-y-0 right-0 z-20 p-5 flex flex-col justify-between opacity-0 pointer-events-none"
            >
                <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0E6CAC]">
                        {institution}
                    </span>
                    <h4 className="mt-1 text-lg font-black leading-snug text-[#0D3F70]">
                        {name}
                    </h4>
                    <div className="mt-1 inline-block rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-[#0E6CAC]">
                        {role}
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-6">
                        {description}
                    </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-bold text-[#0D3F70]">
                    <span>{footerLabel}</span>
                    <ArrowRightIcon className="h-4 w-4 text-[#0E6CAC]" />
                </div>
            </div>

            {/* Bottom Right Logo Watermark */}
            <div
                className={cn(
                    "pointer-events-none absolute bottom-4 right-4 z-10 transition-opacity duration-300",
                    isExpanded ? "opacity-75" : "opacity-0"
                )}
            >
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                    {watermarkLabel}
                </span>
            </div>
        </div>
    );
}

export function GSAPBidangCard({
    bidang,
    isExpanded,
    isContracted,
    onHover,
    onLeave,
}: {
    bidang: BidangItem;
    isExpanded: boolean;
    isContracted: boolean;
    onHover: () => void;
    onLeave: () => void;
}) {
    const IconComponent = BIDANG_ICONS[bidang.id] || TargetIcon;

    return (
        <div
            data-id={bidang.id}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={() => (isExpanded ? onLeave() : onHover())}
            style={{ width: 170, height: 470 }}
            className={cn(
                "group relative cursor-pointer overflow-hidden rounded-[28px] border snap-center shrink-0 transition-colors duration-300 transform-gpu",
                isExpanded
                    ? "z-30 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] bg-white border-[#0E6CAC]/40 grayscale-0"
                    : isContracted
                      ? "z-10 grayscale bg-slate-100 border-slate-200/90"
                      : "z-10 grayscale bg-[#EEF2F6] border-slate-200/90 shadow-xs hover:border-[#0E6CAC]/30"
            )}
        >
            {/* Background Watermark Curve */}
            <svg
                data-gsap-watermark=""
                className={cn(
                    "pointer-events-none absolute -right-8 -top-8 h-56 w-56 text-slate-300/40",
                    isExpanded && "text-blue-200/60"
                )}
                viewBox="0 0 200 200"
                fill="none"
                aria-hidden="true"
            >
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeDasharray="320 120" />
                <path d="M50 150 C80 90, 120 90, 150 50" stroke="currentColor" strokeWidth="20" strokeLinecap="round" />
            </svg>

            {/* Centerpiece Photo or Emblem */}
            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden">
                {bidang.photo ? (
                    <>
                        <img
                            data-gsap-emblem=""
                            src={bidang.photo}
                            alt={bidang.name}
                            loading="lazy"
                            decoding="async"
                            className={cn(
                                "absolute inset-0 h-full w-full object-cover object-top",
                                isExpanded ? "grayscale-0" : "grayscale"
                            )}
                        />
                        <div
                            data-gsap-gradient=""
                            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/85 to-white opacity-0"
                        />
                        <div
                            className={cn(
                                "pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent transition-opacity duration-300",
                                isExpanded ? "opacity-0" : "opacity-100"
                            )}
                        />
                    </>
                ) : (
                    <>
                        <div
                            data-gsap-emblem=""
                            className="relative z-10 flex flex-col items-center"
                        >
                            <div className="mb-3.5 flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-200/80 bg-white/95 text-[#0E6CAC] shadow-md transition-all duration-500">
                                <IconComponent className="h-10 w-10 text-[#0E6CAC]" />
                            </div>
                            <span className="rounded-full border border-blue-200/60 bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0D3F70] shadow-2xs">
                                Divisi {bidang.no}
                            </span>
                        </div>
                        <div
                            data-gsap-gradient=""
                            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white opacity-0"
                        />
                    </>
                )}
            </div>

            {/* Top Header Tag */}
            <div className="relative z-10 p-4 flex items-center justify-between">
                <span
                    className={cn(
                        "rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 shadow-2xs backdrop-blur-sm",
                        isExpanded
                            ? "border-blue-300 bg-[#0D3F70] text-white"
                            : bidang.photo
                              ? "border-white/40 bg-slate-900/80 text-white"
                              : "border-slate-200/80 bg-white/95 text-[#0D3F70]"
                    )}
                >
                    Divisi {bidang.no}
                </span>
                {isExpanded && (
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0E6CAC] animate-in fade-in duration-300">
                        TIM TEKNIS
                    </span>
                )}
            </div>

            {/* Idle State Bottom Name */}
            <div
                data-gsap-idle=""
                className="absolute bottom-4 left-3.5 right-3.5 z-10"
            >
                <h4
                    className={cn(
                        "text-xs font-black leading-tight",
                        bidang.photo ? "text-white drop-shadow-md" : "text-slate-800"
                    )}
                >
                    {bidang.name.replace('Bidang ', '')}
                </h4>
                <p
                    className={cn(
                        "text-[10px] font-semibold mt-0.5 truncate",
                        bidang.photo ? "text-blue-100 drop-shadow-sm" : "text-[#0E6CAC]"
                    )}
                >
                    {bidang.scope}
                </p>
            </div>

            {/* Expanded Full Drawer */}
            <div
                data-gsap-drawer=""
                className="absolute inset-y-0 right-0 z-20 w-[185px] p-4 flex flex-col justify-between opacity-0 pointer-events-none"
            >
                <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#0E6CAC]">
                        {bidang.scope}
                    </span>
                    <h4 className="mt-1 text-sm font-black leading-snug text-[#0D3F70]">
                        {bidang.name}
                    </h4>
                    <div className="mt-1 inline-block rounded-md bg-blue-50 px-2 py-0.5 text-[9px] font-bold text-[#0E6CAC]">
                        {bidang.coordinator || 'Koordinator Bidang'}
                    </div>
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-600 line-clamp-6">
                        {bidang.focus}
                    </p>
                </div>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] font-bold text-[#0D3F70]">
                    <span>Rencana Kerja</span>
                    <ArrowRightIcon className="h-3.5 w-3.5 text-[#0E6CAC]" />
                </div>
            </div>

            {/* Bottom Right Logo Watermark */}
            <div
                className={cn(
                    "pointer-events-none absolute bottom-3 right-3 z-10 transition-opacity duration-300",
                    isExpanded ? "opacity-75" : "opacity-0"
                )}
            >
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">
                    KIPAN • DIV {bidang.no}
                </span>
            </div>
        </div>
    );
}

export function GSAPDutaCard({
    id,
    isExpanded,
    isContracted,
    onHover,
    onLeave,
    tag,
    scope,
    title,
    role,
    mission,
    photo,
    hashtags,
}: {
    id: string;
    isExpanded: boolean;
    isContracted: boolean;
    onHover: () => void;
    onLeave: () => void;
    tag: string;
    scope: string;
    title: string;
    role: string;
    mission: string;
    photo?: string;
    hashtags?: string[];
}) {
    return (
        <div
            data-id={id}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={() => (isExpanded ? onLeave() : onHover())}
            style={{ width: 215, height: 500 }}
            className={cn(
                "group relative cursor-pointer overflow-hidden rounded-[30px] border snap-center shrink-0 transition-colors duration-300 transform-gpu",
                isExpanded
                    ? "z-30 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] bg-white border-[#0E6CAC]/40 grayscale-0"
                    : isContracted
                      ? "z-10 grayscale bg-slate-100 border-slate-200/90"
                      : "z-10 grayscale bg-[#EEF2F6] border-slate-200/90 shadow-xs hover:border-[#0E6CAC]/30"
            )}
        >
            {/* Background Watermark Curve */}
            <svg
                data-gsap-watermark=""
                className={cn(
                    "pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-slate-300/40",
                    isExpanded && "text-blue-200/60"
                )}
                viewBox="0 0 200 200"
                fill="none"
                aria-hidden="true"
            >
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeDasharray="320 120" />
                <path d="M50 150 C80 90, 120 90, 150 50" stroke="currentColor" strokeWidth="20" strokeLinecap="round" />
            </svg>

            {/* Centerpiece Photo or Star Icon */}
            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden">
                {photo ? (
                    <div className="absolute inset-0 h-full w-full overflow-hidden">
                        <img
                            data-gsap-emblem=""
                            src={photo}
                            alt={title}
                            loading="lazy"
                            decoding="async"
                            className={cn(
                                "h-full w-full object-cover object-[center_top]",
                                isExpanded ? "grayscale-0" : "grayscale"
                            )}
                        />
                        <div
                            data-gsap-gradient=""
                            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/85 to-white opacity-0"
                        />
                    </div>
                ) : (
                    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden">
                        <div
                            data-gsap-emblem=""
                            className="relative z-10 flex flex-col items-center"
                        >
                            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-3xl border border-blue-200/80 bg-white/95 text-[#0E6CAC] shadow-md transition-all duration-500">
                                <PersonIcon className="h-12 w-12 text-[#0E6CAC]" />
                            </div>
                            <span className="rounded-full border border-blue-200/60 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0D3F70] shadow-2xs">
                                {tag}
                            </span>
                        </div>
                        <div
                            data-gsap-gradient=""
                            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white opacity-0"
                        />
                    </div>
                )}
            </div>

            {/* Top Header Tag */}
            <div className="relative z-10 p-5 flex items-center justify-between">
                <span
                    className={cn(
                        "rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 shadow-2xs backdrop-blur-sm",
                        isExpanded
                            ? "border-blue-300 bg-[#0D3F70] text-white"
                            : photo
                              ? "border-white/40 bg-slate-900/80 text-white"
                              : "border-slate-200/80 bg-white/95 text-[#0D3F70]"
                    )}
                >
                    {tag}
                </span>
                {isExpanded && (
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0E6CAC] animate-in fade-in duration-300">
                        DUTA SEBAYA
                    </span>
                )}
            </div>

            {/* Idle State Bottom Name */}
            <div
                data-gsap-idle=""
                className="absolute bottom-5 left-5 right-5 z-10"
            >
                <h4
                    className={cn(
                        "text-sm font-black leading-tight",
                        photo ? "text-white drop-shadow-md" : "text-slate-800"
                    )}
                >
                    {title}
                </h4>
                <p
                    className={cn(
                        "text-[11px] font-semibold mt-0.5 truncate",
                        photo ? "text-blue-100 drop-shadow-sm" : "text-[#0E6CAC]"
                    )}
                >
                    {role}
                </p>
            </div>

            {/* Expanded Full Drawer */}
            <div
                data-gsap-drawer=""
                className="absolute inset-y-0 right-0 z-20 w-[205px] p-5 flex flex-col justify-between opacity-0 pointer-events-none"
            >
                <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0E6CAC]">
                        {scope}
                    </span>
                    <h4 className="mt-1 text-base font-black leading-snug text-[#0D3F70]">
                        {title}
                    </h4>
                    <div className="mt-1 inline-block rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-[#0E6CAC]">
                        {role}
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-600 line-clamp-3">
                        {mission}
                    </p>

                    {hashtags && hashtags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1">
                            {hashtags.map((hTag) => (
                                <span
                                    key={hTag}
                                    className="rounded-md border border-slate-200/80 bg-slate-100/90 px-2 py-0.5 text-[9px] font-semibold text-slate-700"
                                >
                                    {hTag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-bold text-[#0D3F70]">
                    <span>Profil Duta</span>
                    <ArrowRightIcon className="h-4 w-4 text-[#0E6CAC]" />
                </div>
            </div>

            {/* Bottom Right Logo Watermark */}
            <div
                className={cn(
                    "pointer-events-none absolute bottom-4 right-4 z-10 transition-opacity duration-300",
                    isExpanded ? "opacity-75" : "opacity-0"
                )}
            >
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                    KIPAN • DUTA
                </span>
            </div>
        </div>
    );
}
