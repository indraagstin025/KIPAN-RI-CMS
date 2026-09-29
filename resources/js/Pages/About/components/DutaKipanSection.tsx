import { useState } from 'react';
import { CheckCircledIcon, StarFilledIcon } from '@radix-ui/react-icons';
import {
    DUTA_KIPAN_CATEGORIES,
    DUTA_KIPAN_PILLARS,
} from '../data/about-data';
import { MobileDutaCard } from './MobileStructureCard';
import { GSAPDutaCard } from './GSAPStructureCard';
import { useGsapAccordion } from '@/hooks/useGsapAccordion';

export default function DutaKipanSection() {
    const [hoveredDutaId, setHoveredDutaId] = useState<string | null>(null);

    const dutaContainerRef = useGsapAccordion(hoveredDutaId, {
        defaultWidth: 215,
        expandedWidth: 380,
        contractedWidth: 175,
        emblemShift: -64,
    });

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

                    {/* Mobile View: Clean Swipeable Cards (Zero Text Collision) */}
                    <div className="flex lg:hidden w-full items-stretch gap-4 overflow-x-auto pb-4 pt-2 px-2 snap-x snap-mandatory">
                        {DUTA_KIPAN_CATEGORIES.map((duta) => (
                            <MobileDutaCard
                                key={duta.id}
                                tag={duta.tag}
                                scope={duta.scope}
                                title={duta.title}
                                role={duta.role}
                                mission={duta.mission}
                                photo={duta.photo}
                            />
                        ))}
                    </div>
                    <p className="mt-1 mb-4 text-center text-xs font-medium text-slate-400 lg:hidden">
                        ← Geser kartu untuk melihat duta pemuda lainnya →
                    </p>

                    {/* Desktop View: Interactive GSAP Accordion */}
                    <div
                        ref={dutaContainerRef}
                        className="hidden lg:flex w-full items-center justify-center gap-4 lg:gap-5 overflow-visible pb-8 pt-2 px-2"
                    >
                        {DUTA_KIPAN_CATEGORIES.map((duta) => (
                            <GSAPDutaCard
                                key={duta.id}
                                id={duta.id}
                                isExpanded={hoveredDutaId === duta.id}
                                isContracted={hoveredDutaId !== null && hoveredDutaId !== duta.id}
                                onHover={() => setHoveredDutaId(duta.id)}
                                onLeave={() => setHoveredDutaId(null)}
                                tag={duta.tag}
                                scope={duta.scope}
                                title={duta.title}
                                role={duta.role}
                                mission={duta.mission}
                                photo={duta.photo}
                                hashtags={duta.hashtags}
                                target={duta.target}
                            />
                        ))}
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
