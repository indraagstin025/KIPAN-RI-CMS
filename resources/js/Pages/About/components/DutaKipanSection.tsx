import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRightIcon, CheckCircledIcon, StarFilledIcon } from '@radix-ui/react-icons';
import {
    DUTA_KIPAN_CATEGORIES,
    DUTA_KIPAN_PILLARS,
} from '../data/about-data';

export default function DutaKipanSection() {
    const [hoveredDutaId, setHoveredDutaId] = useState<string | null>(null);

    return (
        <section
            id="duta"
            className="scroll-mt-20 border-b border-slate-200 bg-white py-16 sm:py-24"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Sesuai Gaya Youth Innovation */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0E6CAC]">
                        <StarFilledIcon className="h-3.5 w-3.5 text-amber-500" />
                        <span>Ikon &amp; Role Model Generasi Bersinar</span>
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-[#0D3F70] sm:text-4xl lg:text-5xl">
                        Duta KIPAN Republik Indonesia
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#0E6CAC]" />
                    <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                        Representasi pemuda inspiratif terpilih dari berbagai latar belakang strategis
                        sebagai garda komunikasi sebaya, pelopor gaya hidup sehat, dan katalisator
                        gerakan pencegahan narkotika di kalangan generasi muda Indonesia.
                    </p>
                </div>

                {/* Grid Interaktif Duta KIPAN (Accordion Expand on Hover/Click) */}
                <div className="mb-16">
                    <div className="mb-8 flex items-center justify-center gap-4">
                        <div className="h-px grow bg-slate-200" />
                        <h3 className="shrink-0 px-4 text-xl font-bold text-[#0D3F70] sm:text-2xl">
                            Kategori Duta Pemuda Sebaya
                        </h3>
                        <div className="h-px grow bg-slate-200" />
                    </div>

                    <div className="flex w-full items-center justify-start lg:justify-center gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible pb-8 pt-2 px-2 snap-x">
                        {DUTA_KIPAN_CATEGORIES.map((duta) => {
                            const isExpanded = hoveredDutaId === duta.id;
                            const isContracted = hoveredDutaId !== null && !isExpanded;

                            return (
                                <div
                                    key={duta.id}
                                    onMouseEnter={() => setHoveredDutaId(duta.id)}
                                    onMouseLeave={() => setHoveredDutaId(null)}
                                    onClick={() => setHoveredDutaId(isExpanded ? null : duta.id)}
                                    className={cn(
                                        "group relative h-[500px] cursor-pointer overflow-hidden rounded-[30px] border snap-center transition-[width,transform,opacity,box-shadow] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-[width,transform] shrink-0",
                                        isExpanded
                                            ? "w-[360px] scale-[1.03] z-30 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] bg-white border-[#0E6CAC]/40 grayscale-0"
                                            : isContracted
                                                ? "w-[185px] scale-[0.98] z-10 opacity-70 grayscale bg-slate-100 border-slate-200/90"
                                                : "w-[215px] scale-100 z-10 grayscale bg-[#EEF2F6] border-slate-200/90 shadow-xs hover:border-[#0E6CAC]/30"
                                    )}
                                >
                                    {/* Background Watermark Curve (Matches Youth Innovation style) */}
                                    <svg
                                        className={cn(
                                            "pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-slate-300/40 transition-transform duration-400 ease-out",
                                            isExpanded ? "scale-115 text-blue-200/60 rotate-12" : "scale-100"
                                        )}
                                        viewBox="0 0 200 200"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeDasharray="320 120" />
                                        <path d="M50 150 C80 90, 120 90, 150 50" stroke="currentColor" strokeWidth="20" strokeLinecap="round" />
                                    </svg>

                                    {/* Visual: Studio Portrait with Zoom or Artistic Placeholder */}
                                    {duta.photo ? (
                                        <div className="absolute inset-0 h-full w-full overflow-hidden">
                                            <img
                                                src={duta.photo}
                                                alt={duta.title}
                                                loading="lazy"
                                                decoding="async"
                                                className={cn(
                                                    "h-full w-full object-cover object-[center_top] transition-transform duration-400 ease-out",
                                                    isExpanded
                                                        ? "scale-115 -translate-x-12 grayscale-0"
                                                        : "scale-100 translate-x-0 grayscale"
                                                )}
                                            />
                                            {/* Soft white gradient on right half when expanded for crystal-clear text readability */}
                                            <div
                                                className={cn(
                                                    "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/85 to-white transition-opacity duration-400",
                                                    isExpanded ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden">
                                            <div
                                                className={cn(
                                                    "relative z-10 flex flex-col items-center transition-transform duration-400 ease-out",
                                                    isExpanded ? "scale-115 -translate-x-12" : "scale-100 translate-x-0"
                                                )}
                                            >
                                                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-3xl border border-blue-200/80 bg-white/95 text-[#0E6CAC] shadow-md transition-all duration-500">
                                                    <StarFilledIcon className="h-12 w-12 text-amber-500" />
                                                </div>
                                                <span className="rounded-full border border-blue-200/60 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0D3F70] shadow-2xs">
                                                    {duta.tag}
                                                </span>
                                            </div>
                                            <div
                                                className={cn(
                                                    "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white transition-opacity duration-400",
                                                    isExpanded ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                        </div>
                                    )}

                                    {/* Top Header Tag */}
                                    <div className="relative z-10 p-5 flex items-center justify-between">
                                        <span
                                            className={cn(
                                                "rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 shadow-2xs backdrop-blur-sm",
                                                isExpanded
                                                    ? "border-blue-300 bg-[#0D3F70] text-white"
                                                    : duta.photo
                                                      ? "border-white/40 bg-slate-900/80 text-white"
                                                      : "border-slate-200/80 bg-white/95 text-[#0D3F70]"
                                            )}
                                        >
                                            {duta.tag}
                                        </span>
                                        {isExpanded && (
                                            <span className="text-[10px] font-black uppercase tracking-wider text-[#0E6CAC] animate-in fade-in duration-300">
                                                DUTA SEBAYA
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
                                        <h4
                                            className={cn(
                                                "text-sm font-black leading-tight",
                                                duta.photo ? "text-white drop-shadow-md" : "text-slate-800"
                                            )}
                                        >
                                            {duta.title}
                                        </h4>
                                        <p
                                            className={cn(
                                                "text-[11px] font-semibold mt-0.5 truncate",
                                                duta.photo ? "text-blue-100 drop-shadow-sm" : "text-[#0E6CAC]"
                                            )}
                                        >
                                            {duta.role}
                                        </p>
                                    </div>

                                    {/* Expanded Full Drawer (Detailed Information) */}
                                    <div
                                        className={cn(
                                            "absolute inset-y-0 right-0 z-20 w-[205px] p-5 flex flex-col justify-between transition-all duration-400 ease-out",
                                            isExpanded
                                                ? "opacity-100 translate-x-0"
                                                : "opacity-0 translate-x-6 pointer-events-none"
                                        )}
                                    >
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-[#0E6CAC]">
                                                {duta.scope}
                                            </span>
                                            <h4 className="mt-1 text-base font-black leading-snug text-[#0D3F70]">
                                                {duta.title}
                                            </h4>
                                            <div className="mt-1 inline-block rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-[#0E6CAC]">
                                                {duta.role}
                                            </div>
                                            <p className="mt-2.5 text-[11px] leading-relaxed text-slate-600 line-clamp-3">
                                                {duta.mission}
                                            </p>

                                            {duta.hashtags && (
                                                <div className="mt-3 flex flex-wrap gap-1">
                                                    {duta.hashtags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="rounded-md border border-slate-200/80 bg-slate-100/90 px-2 py-0.5 text-[9px] font-semibold text-slate-700"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="mt-4 flex items-center justify-between border-t border-slate-150 pt-2 text-[10px] font-bold text-slate-400">
                                                <span className="text-[10px] uppercase tracking-wider text-slate-500">
                                                    Sasaran: {duta.target.split(',')[0]}
                                                </span>
                                                <ArrowRightIcon className="h-3.5 w-3.5 text-[#0E6CAC] transition-transform duration-300 group-hover:translate-x-1" />
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
                                                KIPAN • KEMENPORA
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 4 Pilar Gerakan Duta KIPAN */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 lg:p-10">
                    <div className="mb-8 text-center sm:text-left">
                        <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#0E6CAC]">
                            Peran &amp; Tanggung Jawab
                        </span>
                        <h3 className="text-xl font-black text-[#0D3F70] sm:text-2xl">
                            4 Pilar Gerakan Duta KIPAN
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {DUTA_KIPAN_PILLARS.map((pillar) => (
                            <div
                                key={pillar.no}
                                className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs transition-all hover:border-[#0E6CAC]/40 hover:shadow-md"
                            >
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-black text-[#0E6CAC]">
                                        {pillar.no}
                                    </span>
                                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                                        {pillar.tag}
                                    </span>
                                </div>
                                <h4 className="mb-2 text-sm font-bold text-slate-800">
                                    {pillar.title}
                                </h4>
                                <p className="text-xs leading-relaxed text-slate-600">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nilai Utama & Kualifikasi Duta */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-xs font-medium text-slate-700 sm:gap-8">
                    <span className="flex items-center gap-2">
                        <CheckCircledIcon className="h-4 w-4 text-[#0E6CAC]" />
                        Bebas Narkoba (Uji Tes Urin Resmi)
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircledIcon className="h-4 w-4 text-[#0E6CAC]" />
                        Integritas &amp; Jiwa Kepemimpinan Sebaya
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircledIcon className="h-4 w-4 text-[#0E6CAC]" />
                        Komitmen Aksi Nyata P4GN Berkelanjutan
                    </span>
                </div>
            </div>
        </section>
    );
}
