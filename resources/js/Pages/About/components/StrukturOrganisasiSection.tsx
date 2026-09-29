import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRightIcon, PersonIcon, TargetIcon } from '@radix-ui/react-icons';
import {
    DEWAN_PEMBINA,
    DEWAN_PENGARAH,
    PENGURUS_PUSAT,
    BIDANG_KERJA,
    BIDANG_ICONS,
} from '../data/about-data';
import { MobileLeaderCard, MobileBidangCard } from './MobileStructureCard';

export default function StrukturOrganisasiSection() {
    const [hoveredPembinaId, setHoveredPembinaId] = useState<number | null>(null);
    const [hoveredPengarahId, setHoveredPengarahId] = useState<number | null>(null);
    const [hoveredPusatId, setHoveredPusatId] = useState<number | null>(null);
    const [hoveredBidangId, setHoveredBidangId] = useState<string | null>(null);

    return (
        <section
            id="struktur"
            className="scroll-mt-20 border-b border-slate-200 bg-slate-50/60 py-16 sm:py-24"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Sesuai Gaya Youth Innovation */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0E6CAC]">
                        <span>Bagan Kepengurusan Nasional</span>
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-[#0D3F70] sm:text-4xl lg:text-5xl">
                        Struktur Organisasi
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#0E6CAC]" />
                    <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                        Bagan struktur kepengurusan nasional yang memadukan pembinaan strategis pemerintah pusat
                        dengan kepemimpinan eksekutif pemuda di 38 provinsi di seluruh Nusantara.
                    </p>
                </div>

                {/* TINGKAT 1: DEWAN PEMBINA */}
                <div className="mb-16">
                    <div className="mb-10 flex items-center justify-center gap-4">
                        <div className="h-px grow bg-slate-200" />
                        <h3 className="shrink-0 px-4 text-xl font-bold text-[#0D3F70] sm:text-2xl">
                            Dewan Pembina
                        </h3>
                        <div className="h-px grow bg-slate-200" />
                    </div>

                    {/* Mobile View: Clean Swipeable Cards (No Text Collision) */}
                    <div className="flex lg:hidden w-full items-stretch gap-4 overflow-x-auto pb-4 pt-2 px-2 snap-x snap-mandatory">
                        {DEWAN_PEMBINA.map((leader, idx) => (
                            <MobileLeaderCard
                                key={idx}
                                badge={leader.badge}
                                category="DEWAN PEMBINA"
                                institution={leader.institution}
                                name={leader.name}
                                role={leader.role}
                                description={leader.description}
                                footerLabel="Mandat Pembinaan"
                            />
                        ))}
                    </div>
                    <p className="mt-1 mb-4 text-center text-xs font-medium text-slate-400 lg:hidden">
                        ← Geser kartu untuk melihat pembina lainnya →
                    </p>

                    {/* Desktop View: Interactive Accordion */}
                    <div className="hidden lg:flex w-full items-center justify-center gap-5 overflow-visible pb-8 pt-2 px-2">
                        {DEWAN_PEMBINA.map((leader, idx) => {
                            const isExpanded = hoveredPembinaId === idx;
                            const isContracted = hoveredPembinaId !== null && !isExpanded;

                            return (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setHoveredPembinaId(idx)}
                                    onMouseLeave={() => setHoveredPembinaId(null)}
                                    onClick={() => setHoveredPembinaId(isExpanded ? null : idx)}
                                    className={cn(
                                        "group relative h-[490px] cursor-pointer overflow-hidden rounded-[30px] border snap-center transition-[width,transform,opacity,box-shadow] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu will-change-[width,transform] shrink-0",
                                        isExpanded
                                            ? "w-[440px] scale-[1.02] z-30 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] bg-white border-[#0E6CAC]/40 grayscale-0"
                                            : isContracted
                                              ? "w-[210px] scale-[0.98] z-10 opacity-70 grayscale bg-slate-100 border-slate-200/90"
                                              : "w-[270px] scale-100 z-10 grayscale bg-[#EEF2F6] border-slate-200/90 shadow-xs hover:border-[#0E6CAC]/30"
                                    )}
                                >
                                    {/* Background Watermark Curve */}
                                    <svg
                                        className={cn(
                                            "pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-slate-300/40 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                            isExpanded ? "scale-115 text-blue-200/60 rotate-12" : "scale-100"
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
                                            className={cn(
                                                "relative z-10 flex flex-col items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                                isExpanded ? "scale-115 -translate-x-16" : "scale-100 translate-x-0"
                                            )}
                                        >
                                            <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-3xl border border-blue-200/80 bg-white/95 text-[#0E6CAC] shadow-md transition-all duration-500">
                                                <PersonIcon className="h-14 w-14 text-[#0E6CAC]" />
                                            </div>
                                            <span className="rounded-full border border-blue-200/60 bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0D3F70] shadow-2xs">
                                                {leader.badge}
                                            </span>
                                        </div>
                                        {/* Soft white gradient on right half when expanded */}
                                        <div
                                            className={cn(
                                                "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                                isExpanded ? "opacity-100" : "opacity-0"
                                            )}
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
                                            {leader.badge}
                                        </span>
                                        {isExpanded && (
                                            <span className="text-[10px] font-black uppercase tracking-wider text-[#0E6CAC] animate-in fade-in duration-300">
                                                DEWAN PEMBINA
                                            </span>
                                        )}
                                    </div>

                                    {/* Idle State Bottom Name */}
                                    <div
                                        className={cn(
                                            "absolute bottom-5 left-5 right-5 z-10 transition-all duration-300",
                                            isExpanded ? "opacity-0 translate-y-3 pointer-events-none" : "opacity-100 translate-y-0"
                                        )}
                                    >
                                        <h4 className="text-sm font-black text-slate-800 leading-tight">
                                            {leader.name}
                                        </h4>
                                        <p className="text-[11px] font-semibold text-[#0E6CAC] mt-0.5 truncate">
                                            {leader.role}
                                        </p>
                                    </div>

                                    {/* Expanded Full Drawer */}
                                    <div
                                        className={cn(
                                            "absolute inset-y-0 right-0 z-20 w-[240px] p-5 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] delay-75",
                                            isExpanded
                                                ? "opacity-100 translate-x-0"
                                                : "opacity-0 translate-x-6 pointer-events-none"
                                        )}
                                    >
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-[#0E6CAC]">
                                                {leader.institution}
                                            </span>
                                            <h4 className="mt-1 text-lg font-black leading-snug text-[#0D3F70]">
                                                {leader.name}
                                            </h4>
                                            <div className="mt-1 inline-block rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-[#0E6CAC]">
                                                {leader.role}
                                            </div>
                                            <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-6">
                                                {leader.description}
                                            </p>
                                        </div>

                                        <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-bold text-[#0D3F70]">
                                            <span>Mandat Pembinaan</span>
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
                                            KIPAN • PEMBINA
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* TINGKAT 2: DEWAN PENGARAH */}
                <div className="mb-16">
                    <div className="mb-10 flex items-center justify-center gap-4">
                        <div className="h-px grow bg-slate-200" />
                        <h3 className="shrink-0 px-4 text-xl font-bold text-[#0D3F70] sm:text-2xl">
                            Dewan Pengarah
                        </h3>
                        <div className="h-px grow bg-slate-200" />
                    </div>

                    {/* Mobile View: Clean Swipeable Cards (No Text Collision) */}
                    <div className="flex lg:hidden w-full items-stretch gap-4 overflow-x-auto pb-4 pt-2 px-2 snap-x snap-mandatory">
                        {DEWAN_PENGARAH.map((leader, idx) => (
                            <MobileLeaderCard
                                key={idx}
                                badge={leader.badge}
                                category="DEWAN PENGARAH"
                                institution={leader.institution}
                                name={leader.name}
                                role={leader.role}
                                description={leader.description}
                                footerLabel="Mandat Pengarah"
                            />
                        ))}
                    </div>
                    <p className="mt-1 mb-4 text-center text-xs font-medium text-slate-400 lg:hidden">
                        ← Geser kartu untuk melihat pengarah lainnya →
                    </p>

                    {/* Desktop View: Interactive Accordion */}
                    <div className="hidden lg:flex w-full items-center justify-center gap-5 overflow-visible pb-8 pt-2 px-2">
                        {DEWAN_PENGARAH.map((leader, idx) => {
                            const isExpanded = hoveredPengarahId === idx;
                            const isContracted = hoveredPengarahId !== null && !isExpanded;

                            return (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setHoveredPengarahId(idx)}
                                    onMouseLeave={() => setHoveredPengarahId(null)}
                                    onClick={() => setHoveredPengarahId(isExpanded ? null : idx)}
                                    className={cn(
                                        "group relative h-[490px] cursor-pointer overflow-hidden rounded-[30px] border snap-center transition-[width,transform,opacity,box-shadow] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu will-change-[width,transform] shrink-0",
                                        isExpanded
                                            ? "w-[440px] scale-[1.02] z-30 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] bg-white border-[#0E6CAC]/40 grayscale-0"
                                            : isContracted
                                              ? "w-[210px] scale-[0.98] z-10 opacity-70 grayscale bg-slate-100 border-slate-200/90"
                                              : "w-[270px] scale-100 z-10 grayscale bg-[#EEF2F6] border-slate-200/90 shadow-xs hover:border-[#0E6CAC]/30"
                                    )}
                                >
                                    {/* Background Watermark Curve */}
                                    <svg
                                        className={cn(
                                            "pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-slate-300/40 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                            isExpanded ? "scale-115 text-blue-200/60 rotate-12" : "scale-100"
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
                                            className={cn(
                                                "relative z-10 flex flex-col items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                                isExpanded ? "scale-115 -translate-x-16" : "scale-100 translate-x-0"
                                            )}
                                        >
                                            <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-3xl border border-blue-200/80 bg-white/95 text-[#0E6CAC] shadow-md transition-all duration-500">
                                                <PersonIcon className="h-14 w-14 text-[#0E6CAC]" />
                                            </div>
                                            <span className="rounded-full border border-blue-200/60 bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0D3F70] shadow-2xs">
                                                {leader.badge}
                                            </span>
                                        </div>
                                        {/* Soft white gradient on right half when expanded */}
                                        <div
                                            className={cn(
                                                "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                                isExpanded ? "opacity-100" : "opacity-0"
                                            )}
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
                                            {leader.badge}
                                        </span>
                                        {isExpanded && (
                                            <span className="text-[10px] font-black uppercase tracking-wider text-[#0E6CAC] animate-in fade-in duration-300">
                                                DEWAN PENGARAH
                                            </span>
                                        )}
                                    </div>

                                    {/* Idle State Bottom Name */}
                                    <div
                                        className={cn(
                                            "absolute bottom-5 left-5 right-5 z-10 transition-all duration-300",
                                            isExpanded ? "opacity-0 translate-y-3 pointer-events-none" : "opacity-100 translate-y-0"
                                        )}
                                    >
                                        <h4 className="text-sm font-black text-slate-800 leading-tight">
                                            {leader.name}
                                        </h4>
                                        <p className="text-[11px] font-semibold text-[#0E6CAC] mt-0.5 truncate">
                                            {leader.role}
                                        </p>
                                    </div>

                                    {/* Expanded Full Drawer */}
                                    <div
                                        className={cn(
                                            "absolute inset-y-0 right-0 z-20 w-[240px] p-5 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] delay-75",
                                            isExpanded
                                                ? "opacity-100 translate-x-0"
                                                : "opacity-0 translate-x-6 pointer-events-none"
                                        )}
                                    >
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-[#0E6CAC]">
                                                {leader.institution}
                                            </span>
                                            <h4 className="mt-1 text-lg font-black leading-snug text-[#0D3F70]">
                                                {leader.name}
                                            </h4>
                                            <div className="mt-1 inline-block rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-[#0E6CAC]">
                                                {leader.role}
                                            </div>
                                            <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-6">
                                                {leader.description}
                                            </p>
                                        </div>

                                        <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-bold text-[#0D3F70]">
                                            <span>Arahan Strategis</span>
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
                                            KIPAN • PENGARAH
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* TINGKAT 3: PENGURUS PUSAT (SEKRETARIAT NASIONAL) */}
                <div className="mb-16">
                    <div className="mb-10 flex items-center justify-center gap-4">
                        <div className="h-px grow bg-slate-200" />
                        <h3 className="shrink-0 px-4 text-xl font-bold text-[#0D3F70] sm:text-2xl">
                            Pengurus Pusat (Sekretariat Nasional)
                        </h3>
                        <div className="h-px grow bg-slate-200" />
                    </div>

                    {/* Mobile View: Clean Swipeable Cards (No Text Collision) */}
                    <div className="flex lg:hidden w-full items-stretch gap-4 overflow-x-auto pb-4 pt-2 px-2 snap-x snap-mandatory">
                        {PENGURUS_PUSAT.map((leader, idx) => (
                            <MobileLeaderCard
                                key={idx}
                                badge={leader.badge}
                                category="PENGURUS HARIAN"
                                institution={leader.institution}
                                name={leader.name}
                                role={leader.role}
                                description={leader.description}
                                footerLabel="Mandat Eksekutif"
                            />
                        ))}
                    </div>
                    <p className="mt-1 mb-4 text-center text-xs font-medium text-slate-400 lg:hidden">
                        ← Geser kartu untuk melihat pengurus harian lainnya →
                    </p>

                    {/* Desktop View: Interactive Accordion */}
                    <div className="hidden lg:flex w-full items-center justify-center gap-4 lg:gap-5 overflow-visible pb-8 pt-2 px-2">
                        {PENGURUS_PUSAT.map((leader, idx) => {
                            const isExpanded = hoveredPusatId === idx;
                            const isContracted = hoveredPusatId !== null && !isExpanded;

                            return (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setHoveredPusatId(idx)}
                                    onMouseLeave={() => setHoveredPusatId(null)}
                                    onClick={() => setHoveredPusatId(isExpanded ? null : idx)}
                                    className={cn(
                                        "group relative h-[500px] cursor-pointer overflow-hidden rounded-[30px] border snap-center transition-[width,transform,opacity,box-shadow] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu will-change-[width,transform] shrink-0",
                                        isExpanded
                                            ? "w-[360px] scale-[1.03] z-30 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] bg-white border-[#0E6CAC]/40 grayscale-0"
                                            : isContracted
                                              ? "w-[185px] scale-[0.98] z-10 opacity-70 grayscale bg-slate-100 border-slate-200/90"
                                              : "w-[215px] scale-100 z-10 grayscale bg-[#EEF2F6] border-slate-200/90 shadow-xs hover:border-[#0E6CAC]/30"
                                    )}
                                >
                                    {/* Background Watermark Curve */}
                                    <svg
                                        className={cn(
                                            "pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-slate-300/40 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                            isExpanded ? "scale-115 text-blue-200/60 rotate-12" : "scale-100"
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
                                            className={cn(
                                                "relative z-10 flex flex-col items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                                isExpanded ? "scale-115 -translate-x-12" : "scale-100 translate-x-0"
                                            )}
                                        >
                                            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-3xl border border-blue-200/80 bg-white/95 text-[#0E6CAC] shadow-md transition-all duration-500">
                                                <PersonIcon className="h-12 w-12 text-[#0E6CAC]" />
                                            </div>
                                            <span className="rounded-full border border-blue-200/60 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0D3F70] shadow-2xs">
                                                {leader.badge}
                                            </span>
                                        </div>
                                        {/* Soft white gradient on right half when expanded */}
                                        <div
                                            className={cn(
                                                "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                                isExpanded ? "opacity-100" : "opacity-0"
                                            )}
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
                                            {leader.badge}
                                        </span>
                                        {isExpanded && (
                                            <span className="text-[10px] font-black uppercase tracking-wider text-[#0E6CAC] animate-in fade-in duration-300">
                                                PENGURUS HARIAN
                                            </span>
                                        )}
                                    </div>

                                    {/* Idle State Bottom Name */}
                                    <div
                                        className={cn(
                                            "absolute bottom-5 left-5 right-5 z-10 transition-all duration-300",
                                            isExpanded ? "opacity-0 translate-y-3 pointer-events-none" : "opacity-100 translate-y-0"
                                        )}
                                    >
                                        <h4 className="text-sm font-black text-slate-800 leading-tight">
                                            {leader.name}
                                        </h4>
                                        <p className="text-[11px] font-semibold text-[#0E6CAC] mt-0.5 truncate">
                                            {leader.role}
                                        </p>
                                    </div>

                                    {/* Expanded Full Drawer */}
                                    <div
                                        className={cn(
                                            "absolute inset-y-0 right-0 z-20 w-[200px] p-5 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] delay-75",
                                            isExpanded
                                                ? "opacity-100 translate-x-0"
                                                : "opacity-0 translate-x-6 pointer-events-none"
                                        )}
                                    >
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-[#0E6CAC]">
                                                {leader.institution}
                                            </span>
                                            <h4 className="mt-1 text-base font-black leading-snug text-[#0D3F70]">
                                                {leader.name}
                                            </h4>
                                            <div className="mt-1 inline-block rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-[#0E6CAC]">
                                                {leader.role}
                                            </div>
                                            <p className="mt-2.5 text-xs leading-relaxed text-slate-600 line-clamp-6">
                                                {leader.description}
                                            </p>
                                        </div>

                                        <div className="pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-bold text-[#0D3F70]">
                                            <span>Rincian Mandat</span>
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
                                            KIPAN • PUSAT
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* TINGKAT 4: 6 BIDANG KERJA STRATEGIS */}
                <div className="mb-16">
                    <div className="mb-10 flex items-center justify-center gap-4">
                        <div className="h-px grow bg-slate-200" />
                        <h3 className="shrink-0 px-4 text-xl font-bold text-[#0D3F70] sm:text-2xl">
                            Bidang Kerja &amp; Tim Teknis
                        </h3>
                        <div className="h-px grow bg-slate-200" />
                    </div>

                    {/* Mobile View: Clean Swipeable Cards (No Text Collision) */}
                    <div className="flex lg:hidden w-full items-stretch gap-4 overflow-x-auto pb-4 pt-2 px-2 snap-x snap-mandatory">
                        {BIDANG_KERJA.map((bidang) => (
                            <MobileBidangCard key={bidang.id} bidang={bidang} />
                        ))}
                    </div>
                    <p className="mt-1 mb-4 text-center text-xs font-medium text-slate-400 lg:hidden">
                        ← Geser kartu untuk melihat 9 divisi bidang kerja →
                    </p>

                    {/* Desktop View: Interactive Accordion */}
                    <div className="hidden lg:flex w-full items-center justify-center gap-3.5 lg:gap-4 overflow-visible pb-8 pt-2 px-2">
                        {BIDANG_KERJA.map((bidang) => {
                            const isExpanded = hoveredBidangId === bidang.id;
                            const isContracted = hoveredBidangId !== null && !isExpanded;
                            const IconComponent = BIDANG_ICONS[bidang.id] || TargetIcon;

                            return (
                                <div
                                    key={bidang.id}
                                    onMouseEnter={() => setHoveredBidangId(bidang.id)}
                                    onMouseLeave={() => setHoveredBidangId(null)}
                                    onClick={() => setHoveredBidangId(isExpanded ? null : bidang.id)}
                                    className={cn(
                                        "group relative h-[470px] cursor-pointer overflow-hidden rounded-[28px] border snap-center transition-[width,transform,opacity,box-shadow] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu will-change-[width,transform] shrink-0",
                                        isExpanded
                                            ? "w-[340px] scale-[1.03] z-30 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] bg-white border-[#0E6CAC]/40 grayscale-0"
                                            : isContracted
                                              ? "w-[145px] scale-[0.98] z-10 opacity-70 grayscale bg-slate-100 border-slate-200/90"
                                              : "w-[170px] scale-100 z-10 grayscale bg-[#EEF2F6] border-slate-200/90 shadow-xs hover:border-[#0E6CAC]/30"
                                    )}
                                >
                                    {/* Background Watermark Curve */}
                                    <svg
                                        className={cn(
                                            "pointer-events-none absolute -right-8 -top-8 h-56 w-56 text-slate-300/40 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                            isExpanded ? "scale-115 text-blue-200/60 rotate-12" : "scale-100"
                                        )}
                                        viewBox="0 0 200 200"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeDasharray="320 120" />
                                        <path d="M50 150 C80 90, 120 90, 150 50" stroke="currentColor" strokeWidth="20" strokeLinecap="round" />
                                    </svg>

                                    {/* Centerpiece Photo or Emblem that Zooms */}
                                    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden">
                                        {bidang.photo ? (
                                            <>
                                                <img
                                                    src={bidang.photo}
                                                    alt={bidang.name}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className={cn(
                                                        "absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                                        isExpanded
                                                            ? "scale-115 -translate-x-14 grayscale-0"
                                                            : "scale-100 translate-x-0 grayscale"
                                                    )}
                                                />
                                                {/* Soft white gradient on right half when expanded */}
                                                <div
                                                    className={cn(
                                                        "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/85 to-white transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                                        isExpanded ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                {/* Dark gradient at bottom in idle resting state for text readability */}
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
                                                    className={cn(
                                                        "relative z-10 flex flex-col items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                                        isExpanded ? "scale-115 -translate-x-12" : "scale-100 translate-x-0"
                                                    )}
                                                >
                                                    <div className="mb-3.5 flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-200/80 bg-white/95 text-[#0E6CAC] shadow-md transition-all duration-500">
                                                        <IconComponent className="h-10 w-10 text-[#0E6CAC]" />
                                                    </div>
                                                    <span className="rounded-full border border-blue-200/60 bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0D3F70] shadow-2xs">
                                                        Divisi {bidang.no}
                                                    </span>
                                                </div>
                                                <div
                                                    className={cn(
                                                        "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                                        isExpanded ? "opacity-100" : "opacity-0"
                                                    )}
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
                                        className={cn(
                                            "absolute bottom-4 left-3.5 right-3.5 z-10 transition-all duration-300",
                                            isExpanded ? "opacity-0 translate-y-3 pointer-events-none" : "opacity-100 translate-y-0"
                                        )}
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
                                        className={cn(
                                            "absolute inset-y-0 right-0 z-20 w-[185px] p-4 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] delay-75",
                                            isExpanded
                                                ? "opacity-100 translate-x-0"
                                                : "opacity-0 translate-x-6 pointer-events-none"
                                        )}
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
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
