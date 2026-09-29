import { useState } from 'react';
import {
    DEWAN_PEMBINA,
    DEWAN_PENGARAH,
    PENGURUS_PUSAT,
    BIDANG_KERJA,
} from '../data/about-data';
import { MobileLeaderCard, MobileBidangCard } from './MobileStructureCard';
import { GSAPLeaderCard, GSAPBidangCard } from './GSAPStructureCard';
import { useGsapAccordion } from '@/hooks/useGsapAccordion';

export default function StrukturOrganisasiSection() {
    const [hoveredPembinaId, setHoveredPembinaId] = useState<number | null>(null);
    const [hoveredPengarahId, setHoveredPengarahId] = useState<number | null>(null);
    const [hoveredPusatId, setHoveredPusatId] = useState<number | null>(null);
    const [hoveredBidangId, setHoveredBidangId] = useState<string | null>(null);

    // GSAP Accordion Hooks for each level
    const pembinaContainerRef = useGsapAccordion(hoveredPembinaId, {
        defaultWidth: 270,
        expandedWidth: 440,
        contractedWidth: 200,
        emblemShift: -72,
    });

    const pengarahContainerRef = useGsapAccordion(hoveredPengarahId, {
        defaultWidth: 270,
        expandedWidth: 440,
        contractedWidth: 200,
        emblemShift: -72,
    });

    const pusatContainerRef = useGsapAccordion(hoveredPusatId, {
        defaultWidth: 215,
        expandedWidth: 380,
        contractedWidth: 175,
        emblemShift: -64,
    });

    const bidangContainerRef = useGsapAccordion(hoveredBidangId, {
        defaultWidth: 170,
        expandedWidth: 350,
        contractedWidth: 140,
        emblemShift: -60,
    });

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

                    {/* Mobile View: Clean Swipeable Cards (Zero Text Collision) */}
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

                    {/* Desktop View: Interactive GSAP Accordion */}
                    <div
                        ref={pembinaContainerRef}
                        className="hidden lg:flex w-full items-center justify-center gap-5 overflow-visible pb-8 pt-2 px-2"
                    >
                        {DEWAN_PEMBINA.map((leader, idx) => (
                            <GSAPLeaderCard
                                key={idx}
                                id={idx}
                                isExpanded={hoveredPembinaId === idx}
                                isContracted={hoveredPembinaId !== null && hoveredPembinaId !== idx}
                                onHover={() => setHoveredPembinaId(idx)}
                                onLeave={() => setHoveredPembinaId(null)}
                                badge={leader.badge}
                                category="DEWAN PEMBINA"
                                institution={leader.institution}
                                name={leader.name}
                                role={leader.role}
                                description={leader.description}
                                defaultWidth={270}
                                height={490}
                                drawerWidth={240}
                                footerLabel="Mandat Pembinaan"
                                watermarkLabel="KIPAN • PEMBINA"
                                photo={leader.photo}
                            />
                        ))}
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

                    {/* Mobile View: Clean Swipeable Cards (Zero Text Collision) */}
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
                                footerLabel="Arahan Strategis"
                            />
                        ))}
                    </div>
                    <p className="mt-1 mb-4 text-center text-xs font-medium text-slate-400 lg:hidden">
                        ← Geser kartu untuk melihat pengarah lainnya →
                    </p>

                    {/* Desktop View: Interactive GSAP Accordion */}
                    <div
                        ref={pengarahContainerRef}
                        className="hidden lg:flex w-full items-center justify-center gap-5 overflow-visible pb-8 pt-2 px-2"
                    >
                        {DEWAN_PENGARAH.map((leader, idx) => (
                            <GSAPLeaderCard
                                key={idx}
                                id={idx}
                                isExpanded={hoveredPengarahId === idx}
                                isContracted={hoveredPengarahId !== null && hoveredPengarahId !== idx}
                                onHover={() => setHoveredPengarahId(idx)}
                                onLeave={() => setHoveredPengarahId(null)}
                                badge={leader.badge}
                                category="DEWAN PENGARAH"
                                institution={leader.institution}
                                name={leader.name}
                                role={leader.role}
                                description={leader.description}
                                defaultWidth={270}
                                height={490}
                                drawerWidth={240}
                                footerLabel="Arahan Strategis"
                                watermarkLabel="KIPAN • PENGARAH"
                                photo={leader.photo}
                            />
                        ))}
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

                    {/* Mobile View: Clean Swipeable Cards (Zero Text Collision) */}
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

                    {/* Desktop View: Interactive GSAP Accordion */}
                    <div
                        ref={pusatContainerRef}
                        className="hidden lg:flex w-full items-center justify-center gap-4 lg:gap-5 overflow-visible pb-8 pt-2 px-2"
                    >
                        {PENGURUS_PUSAT.map((leader, idx) => (
                            <GSAPLeaderCard
                                key={idx}
                                id={idx}
                                isExpanded={hoveredPusatId === idx}
                                isContracted={hoveredPusatId !== null && hoveredPusatId !== idx}
                                onHover={() => setHoveredPusatId(idx)}
                                onLeave={() => setHoveredPusatId(null)}
                                badge={leader.badge}
                                category="PENGURUS HARIAN"
                                institution={leader.institution}
                                name={leader.name}
                                role={leader.role}
                                description={leader.description}
                                defaultWidth={215}
                                height={500}
                                drawerWidth={215}
                                footerLabel="Mandat Eksekutif"
                                watermarkLabel="KIPAN • EKSEKUTIF"
                                photo={leader.photo}
                            />
                        ))}
                    </div>
                </div>

                {/* TINGKAT 4: BIDANG KERJA & TIM TEKNIS */}
                <div>
                    <div className="mb-10 flex items-center justify-center gap-4">
                        <div className="h-px grow bg-slate-200" />
                        <h3 className="shrink-0 px-4 text-xl font-bold text-[#0D3F70] sm:text-2xl">
                            Bidang Kerja &amp; Tim Teknis
                        </h3>
                        <div className="h-px grow bg-slate-200" />
                    </div>

                    {/* Mobile View: Clean Swipeable Cards (Zero Text Collision) */}
                    <div className="flex lg:hidden w-full items-stretch gap-4 overflow-x-auto pb-4 pt-2 px-2 snap-x snap-mandatory">
                        {BIDANG_KERJA.map((bidang) => (
                            <MobileBidangCard key={bidang.id} bidang={bidang} />
                        ))}
                    </div>
                    <p className="mt-1 mb-4 text-center text-xs font-medium text-slate-400 lg:hidden">
                        ← Geser kartu untuk melihat 9 divisi bidang kerja →
                    </p>

                    {/* Desktop View: Interactive GSAP Accordion */}
                    <div
                        ref={bidangContainerRef}
                        className="hidden lg:flex w-full items-center justify-center gap-3.5 lg:gap-4 overflow-visible pb-8 pt-2 px-2"
                    >
                        {BIDANG_KERJA.map((bidang) => (
                            <GSAPBidangCard
                                key={bidang.id}
                                bidang={bidang}
                                isExpanded={hoveredBidangId === bidang.id}
                                isContracted={hoveredBidangId !== null && hoveredBidangId !== bidang.id}
                                onHover={() => setHoveredBidangId(bidang.id)}
                                onLeave={() => setHoveredBidangId(null)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
