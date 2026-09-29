import { cn } from '@/lib/utils';
import {
    ArrowRightIcon,
    PersonIcon,
    StarFilledIcon,
    TargetIcon,
} from '@radix-ui/react-icons';
import { KeyboardEvent } from 'react';
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
}: Readonly<GSAPLeaderCardProps>) {
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (isExpanded) {
                onLeave();
            } else {
                onHover();
            }
        }
    };

    let cardVariantClass =
        'shadow-xs z-10 border-slate-200/90 bg-[#EEF2F6] grayscale hover:border-[#0E6CAC]/30';
    if (isExpanded) {
        cardVariantClass =
            'z-30 border-[#0E6CAC]/40 bg-white shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] grayscale-0';
    } else if (isContracted) {
        cardVariantClass = 'z-10 border-slate-200/90 bg-slate-100 grayscale';
    }

    const badgeVariantClass = isExpanded
        ? 'border-blue-300 bg-[#0D3F70] text-white'
        : 'border-slate-200/80 bg-white/95 text-[#0D3F70]';

    return (
        <div
            data-id={id}
            role="button"
            tabIndex={0}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={() => (isExpanded ? onLeave() : onHover())}
            onKeyDown={handleKeyDown}
            style={{ width: defaultWidth, height }}
            className={cn(
                'group relative shrink-0 transform-gpu cursor-pointer snap-center overflow-hidden rounded-[30px] border transition-colors duration-300',
                cardVariantClass,
            )}
        >
            {/* Background Watermark Curve */}
            <svg
                data-gsap-watermark=""
                className={cn(
                    'pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-slate-300/40',
                    isExpanded && 'text-blue-200/60',
                )}
                viewBox="0 0 200 200"
                fill="none"
                aria-hidden="true"
            >
                <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="24"
                    strokeLinecap="round"
                    strokeDasharray="320 120"
                />
                <path
                    d="M50 150 C80 90, 120 90, 150 50"
                    stroke="currentColor"
                    strokeWidth="20"
                    strokeLinecap="round"
                />
            </svg>

            {/* Centerpiece Emblem that Zooms */}
            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden">
                <div
                    data-gsap-emblem=""
                    className="relative z-10 flex flex-col items-center"
                >
                    {photo ? (
                        <div className="h-28 w-28 overflow-hidden rounded-3xl border-2 border-blue-200/80 shadow-md">
                            <img
                                src={photo}
                                alt={name}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                    ) : (
                        <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-blue-200/80 bg-white/95 text-[#0E6CAC] shadow-md transition-all duration-500">
                            <PersonIcon className="h-14 w-14 text-[#0E6CAC]" />
                        </div>
                    )}
                </div>
                {/* Soft white gradient on right half when expanded */}
                <div
                    data-gsap-gradient=""
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white opacity-0"
                />
            </div>

            {/* Top Header Tag - Left Aligned Only */}
            <div className="pointer-events-none relative z-10 flex items-center justify-between p-5">
                <span
                    className={cn(
                        'shadow-2xs rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm transition-colors duration-300',
                        badgeVariantClass,
                    )}
                >
                    {badge}
                </span>
            </div>

            {/* Idle State Bottom Name */}
            <div
                data-gsap-idle=""
                className="absolute bottom-5 left-5 right-5 z-10"
            >
                <h4 className="text-sm font-black leading-tight text-slate-800">
                    {name}
                </h4>
                <p className="mt-0.5 truncate text-[11px] font-semibold text-[#0E6CAC]">
                    {role}
                </p>
            </div>

            {/* Expanded Full Drawer */}
            <div
                data-gsap-drawer=""
                style={{ width: drawerWidth }}
                className="pointer-events-none absolute inset-y-0 right-0 z-20 flex flex-col justify-between p-5 opacity-0"
            >
                <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-[#0E6CAC]">
                        {category}
                    </span>
                    <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {institution}
                    </span>
                    <h4 className="mt-1.5 text-base font-black leading-snug text-[#0D3F70]">
                        {name}
                    </h4>
                    <div className="mt-1 inline-block rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-[#0E6CAC]">
                        {role}
                    </div>
                    <p className="mt-2.5 line-clamp-5 text-xs leading-relaxed text-slate-600">
                        {description}
                    </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200/80 pt-3 text-[11px] font-bold text-[#0D3F70]">
                    <span>{footerLabel}</span>
                    <ArrowRightIcon className="h-4 w-4 text-[#0E6CAC]" />
                </div>
            </div>

            {/* Bottom Right Logo Watermark */}
            <div
                className={cn(
                    'pointer-events-none absolute bottom-4 right-4 z-10 transition-opacity duration-300',
                    isExpanded ? 'opacity-75' : 'opacity-0',
                )}
            >
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                    {watermarkLabel}
                </span>
            </div>
        </div>
    );
}

export interface GSAPBidangCardProps {
    bidang: BidangItem;
    isExpanded: boolean;
    isContracted: boolean;
    onHover: () => void;
    onLeave: () => void;
}

export function GSAPBidangCard({
    bidang,
    isExpanded,
    isContracted,
    onHover,
    onLeave,
}: Readonly<GSAPBidangCardProps>) {
    const IconComponent = BIDANG_ICONS[bidang.id] || TargetIcon;

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (isExpanded) {
                onLeave();
            } else {
                onHover();
            }
        }
    };

    let cardVariantClass =
        'shadow-xs z-10 border-slate-200/90 bg-[#EEF2F6] grayscale hover:border-[#0E6CAC]/30';
    if (isExpanded) {
        cardVariantClass =
            'z-30 border-[#0E6CAC]/40 bg-white shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] grayscale-0';
    } else if (isContracted) {
        cardVariantClass = 'z-10 border-slate-200/90 bg-slate-100 grayscale';
    }

    let headerBadgeClass = 'border-slate-200/80 bg-white/95 text-[#0D3F70]';
    if (isExpanded) {
        headerBadgeClass = 'border-blue-300 bg-[#0D3F70] text-white';
    } else if (bidang.photo) {
        headerBadgeClass = 'border-white/40 bg-slate-900/80 text-white';
    }

    const titleColorClass = bidang.photo
        ? 'text-white drop-shadow-md'
        : 'text-slate-800';
    const subtitleColorClass = bidang.photo
        ? 'text-blue-100 drop-shadow-sm'
        : 'text-[#0E6CAC]';

    return (
        <div
            data-id={bidang.id}
            role="button"
            tabIndex={0}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={() => (isExpanded ? onLeave() : onHover())}
            onKeyDown={handleKeyDown}
            style={{ width: 170, height: 470 }}
            className={cn(
                'group relative shrink-0 transform-gpu cursor-pointer snap-center overflow-hidden rounded-[28px] border transition-colors duration-300',
                cardVariantClass,
            )}
        >
            {/* Background Watermark Curve */}
            <svg
                data-gsap-watermark=""
                className={cn(
                    'pointer-events-none absolute -right-8 -top-8 h-56 w-56 text-slate-300/40',
                    isExpanded && 'text-blue-200/60',
                )}
                viewBox="0 0 200 200"
                fill="none"
                aria-hidden="true"
            >
                <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="24"
                    strokeLinecap="round"
                    strokeDasharray="320 120"
                />
                <path
                    d="M50 150 C80 90, 120 90, 150 50"
                    stroke="currentColor"
                    strokeWidth="20"
                    strokeLinecap="round"
                />
            </svg>

            {/* Centerpiece Photo or Emblem that Zooms */}
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
                                'absolute inset-0 h-full w-full object-cover object-top',
                                isExpanded ? 'grayscale-0' : 'grayscale',
                            )}
                        />
                        <div
                            data-gsap-gradient=""
                            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/85 to-white opacity-0"
                        />
                        <div
                            className={cn(
                                'pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent transition-opacity duration-300',
                                isExpanded ? 'opacity-0' : 'opacity-100',
                            )}
                        />
                    </>
                ) : (
                    <>
                        <div
                            data-gsap-emblem=""
                            className="relative z-10 flex flex-col items-center"
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-200/80 bg-white/95 text-[#0E6CAC] shadow-md transition-all duration-500">
                                <IconComponent className="h-10 w-10 text-[#0E6CAC]" />
                            </div>
                        </div>
                        <div
                            data-gsap-gradient=""
                            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white opacity-0"
                        />
                    </>
                )}
            </div>

            {/* Top Header Tag - Left Aligned Only */}
            <div className="pointer-events-none relative z-10 flex items-center justify-between p-4">
                <span
                    className={cn(
                        'shadow-2xs rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm transition-colors duration-300',
                        headerBadgeClass,
                    )}
                >
                    Divisi {bidang.no}
                </span>
            </div>

            {/* Idle State Bottom Name */}
            <div
                data-gsap-idle=""
                className="absolute bottom-4 left-3.5 right-3.5 z-10"
            >
                <h4
                    className={cn(
                        'text-xs font-black leading-tight',
                        titleColorClass,
                    )}
                >
                    {bidang.name.replace('Bidang ', '')}
                </h4>
                <p
                    className={cn(
                        'mt-0.5 truncate text-[10px] font-semibold',
                        subtitleColorClass,
                    )}
                >
                    {bidang.scope}
                </p>
            </div>

            {/* Expanded Full Drawer */}
            <div
                data-gsap-drawer=""
                className="pointer-events-none absolute inset-y-0 right-0 z-20 flex w-[190px] flex-col justify-between p-4 opacity-0"
            >
                <div>
                    <div className="flex items-center justify-between gap-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#0E6CAC]">
                            TIM TEKNIS
                        </span>
                        <span className="text-[9px] font-bold text-slate-400">
                            DIV {bidang.no}
                        </span>
                    </div>
                    <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {bidang.scope}
                    </span>
                    <h4 className="mt-1 text-sm font-black leading-snug text-[#0D3F70]">
                        {bidang.name}
                    </h4>
                    <div className="mt-1 inline-block rounded-md bg-blue-50 px-2 py-0.5 text-[9px] font-bold text-[#0E6CAC]">
                        {bidang.coordinator || 'Koordinator Bidang'}
                    </div>
                    <p className="mt-2 line-clamp-5 text-[11px] leading-relaxed text-slate-600">
                        {bidang.focus}
                    </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200/80 pt-2 text-[10px] font-bold text-[#0D3F70]">
                    <span>Rencana Kerja</span>
                    <ArrowRightIcon className="h-3.5 w-3.5 text-[#0E6CAC]" />
                </div>
            </div>

            {/* Bottom Right Logo Watermark */}
            <div
                className={cn(
                    'pointer-events-none absolute bottom-3 right-3 z-10 transition-opacity duration-300',
                    isExpanded ? 'opacity-75' : 'opacity-0',
                )}
            >
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">
                    KIPAN • DIV {bidang.no}
                </span>
            </div>
        </div>
    );
}

export interface GSAPDutaCardProps {
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
    target?: string;
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
    target,
}: Readonly<GSAPDutaCardProps>) {
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (isExpanded) {
                onLeave();
            } else {
                onHover();
            }
        }
    };

    let cardVariantClass =
        'shadow-xs z-10 border-slate-200/90 bg-[#EEF2F6] grayscale hover:border-[#0E6CAC]/30';
    if (isExpanded) {
        cardVariantClass =
            'z-30 border-[#0E6CAC]/40 bg-white shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] grayscale-0';
    } else if (isContracted) {
        cardVariantClass = 'z-10 border-slate-200/90 bg-slate-100 grayscale';
    }

    let headerBadgeClass = 'border-slate-200/80 bg-white/95 text-[#0D3F70]';
    if (isExpanded) {
        headerBadgeClass = 'border-blue-300 bg-[#0D3F70] text-white';
    } else if (photo) {
        headerBadgeClass = 'border-white/40 bg-slate-900/80 text-white';
    }

    const titleColorClass = photo
        ? 'text-white drop-shadow-md'
        : 'text-slate-800';
    const subtitleColorClass = photo
        ? 'text-blue-100 drop-shadow-sm'
        : 'text-[#0E6CAC]';

    return (
        <div
            data-id={id}
            role="button"
            tabIndex={0}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={() => (isExpanded ? onLeave() : onHover())}
            onKeyDown={handleKeyDown}
            style={{ width: 215, height: 500 }}
            className={cn(
                'group relative shrink-0 transform-gpu cursor-pointer snap-center overflow-hidden rounded-[30px] border transition-colors duration-300',
                cardVariantClass,
            )}
        >
            {/* Background Watermark Curve */}
            <svg
                data-gsap-watermark=""
                className={cn(
                    'pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-slate-300/40',
                    isExpanded && 'text-blue-200/60',
                )}
                viewBox="0 0 200 200"
                fill="none"
                aria-hidden="true"
            >
                <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="24"
                    strokeLinecap="round"
                    strokeDasharray="320 120"
                />
                <path
                    d="M50 150 C80 90, 120 90, 150 50"
                    stroke="currentColor"
                    strokeWidth="20"
                    strokeLinecap="round"
                />
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
                                'h-full w-full object-cover object-[center_top]',
                                isExpanded ? 'grayscale-0' : 'grayscale',
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
                            <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-blue-200/80 bg-white/95 text-[#0E6CAC] shadow-md transition-all duration-500">
                                <StarFilledIcon className="h-12 w-12 text-amber-500" />
                            </div>
                        </div>
                        <div
                            data-gsap-gradient=""
                            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white opacity-0"
                        />
                    </div>
                )}
            </div>

            {/* Top Header Tag - Left Aligned Only (No duplicate right tag) */}
            <div className="pointer-events-none relative z-10 flex items-center justify-between p-5">
                <span
                    className={cn(
                        'shadow-2xs rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm transition-colors duration-300',
                        headerBadgeClass,
                    )}
                >
                    {tag}
                </span>
            </div>

            {/* Idle State Bottom Name */}
            <div
                data-gsap-idle=""
                className="absolute bottom-5 left-5 right-5 z-10"
            >
                <h4
                    className={cn(
                        'text-sm font-black leading-tight',
                        titleColorClass,
                    )}
                >
                    {title}
                </h4>
                <p
                    className={cn(
                        'mt-0.5 truncate text-[11px] font-semibold',
                        subtitleColorClass,
                    )}
                >
                    {role}
                </p>
            </div>

            {/* Expanded Full Drawer */}
            <div
                data-gsap-drawer=""
                className="pointer-events-none absolute inset-y-0 right-0 z-20 flex w-[220px] flex-col justify-between p-5 opacity-0"
            >
                <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-[#0E6CAC]">
                        DUTA SEBAYA
                    </span>
                    <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {scope}
                    </span>
                    <h4 className="mt-1.5 text-base font-black leading-snug text-[#0D3F70]">
                        {title}
                    </h4>
                    <div className="mt-1 inline-block rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-[#0E6CAC]">
                        {role}
                    </div>
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-600">
                        {mission}
                    </p>

                    {hashtags && hashtags.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-1">
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

                <div className="border-t border-slate-200/80 pt-2.5">
                    {target && (
                        <p className="mb-1 truncate text-[9px] font-bold uppercase tracking-wider text-slate-400">
                            Sasaran: {target.split(',')[0]}
                        </p>
                    )}
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#0D3F70]">
                        <span>Profil Duta</span>
                        <ArrowRightIcon className="h-4 w-4 text-[#0E6CAC]" />
                    </div>
                </div>
            </div>

            {/* Bottom Right Logo Watermark */}
            <div
                className={cn(
                    'pointer-events-none absolute bottom-4 right-4 z-10 transition-opacity duration-300',
                    isExpanded ? 'opacity-75' : 'opacity-0',
                )}
            >
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                    KIPAN • DUTA
                </span>
            </div>
        </div>
    );
}
