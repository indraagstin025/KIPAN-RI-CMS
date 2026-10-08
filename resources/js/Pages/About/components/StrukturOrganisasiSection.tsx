import { useGsapAccordion } from '@/hooks/useGsapAccordion';
import { useState } from 'react';
import {
    BIDANG_KERJA,
    DEWAN_PEMBINA,
    DEWAN_PENGARAH,
    PENGURUS_PUSAT,
    LeaderPerson
} from '../data/about-data';
import { GSAPBidangCard, GSAPLeaderCard } from './GSAPStructureCard';
import { MobileBidangCard, MobileLeaderCard } from './MobileStructureCard';
import { MapPin } from 'lucide-react';

import { WILAYAH_LIST, Wilayah } from '@/data/wilayah';

// Simulasi data daerah yang sudah memiliki kepengurusan (Bisa diganti dengan data API asli nanti)
const REGIONS_WITH_PENGURUS = [
    'Jawa Barat',
    'DKI Jakarta', 
    'Banten',
    'Jawa Tengah',
    'Jawa Timur',
    'Sumatera Utara',
    'Sulawesi Selatan',
    'Kota Bandung',
    'Kota Bogor',
    'Kota Surabaya',
    'Kota Semarang'
];

export default function StrukturOrganisasiSection() {
    const [hoveredPembinaId, setHoveredPembinaId] = useState<number | null>(
        null,
    );
    const [hoveredPengarahId, setHoveredPengarahId] = useState<number | null>(
        null,
    );
    const [hoveredPusatId, setHoveredPusatId] = useState<number | null>(null);
    const [hoveredBidangId, setHoveredBidangId] = useState<string | null>(null);

    const [selectedProv, setSelectedProv] = useState<string>('');
    const [selectedCity, setSelectedCity] = useState<string>('');

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

    const getDynamicPengurus = (): LeaderPerson[] => {
        if (!selectedProv) return PENGURUS_PUSAT;

        const regionName = selectedCity || selectedProv;
        
        return [
            {
                name: `Ketua Umum`,
                title: `Ketua Umum KIPAN ${regionName}`,
                role: 'Pimpinan Eksekutif Wilayah',
                institution: `KIPAN ${regionName}`,
                level: 'daerah',
                badge: 'Ketua Umum',
                photo: '/logo-kipan.jpg',
                description: `Memimpin roda organisasi dan gerakan KIPAN di wilayah ${regionName}.`,
            },
            {
                name: `Wakil Ketua Umum`,
                title: `Wakil Ketua Umum KIPAN ${regionName}`,
                role: 'Wakil Pimpinan Eksekutif',
                institution: `KIPAN ${regionName}`,
                level: 'daerah',
                badge: 'Wakil Ketua',
                photo: '/logo-kipan.jpg',
                description: `Membantu Ketua Umum dalam supervisi operasional dan koordinasi harian di ${regionName}.`,
            },
            {
                name: `Sekretaris Jenderal`,
                title: `Sekretaris Jenderal KIPAN ${regionName}`,
                role: 'Tata Kelola Administrasi',
                institution: `KIPAN ${regionName}`,
                level: 'daerah',
                badge: 'Sekretaris',
                photo: '/logo-kipan.jpg',
                description: `Mengelola administrasi, keanggotaan, dan tata kelola organisasi di ${regionName}.`,
            },
            {
                name: `Bendahara Umum`,
                title: `Bendahara Umum KIPAN ${regionName}`,
                role: 'Manajemen Keuangan',
                institution: `KIPAN ${regionName}`,
                level: 'daerah',
                badge: 'Bendahara',
                photo: '/logo-kipan.jpg',
                description: `Mengelola keuangan, transparansi, dan akuntabilitas anggaran di ${regionName}.`,
            },
        ];
    };

    const isPusat = !selectedProv;
    const currentRegionName = selectedCity || selectedProv;
    const hasPengurus = isPusat || REGIONS_WITH_PENGURUS.includes(currentRegionName);
    const currentPengurus = hasPengurus ? getDynamicPengurus() : [];
    
    const pengurusTitle = isPusat 
        ? "Pengurus Pusat (Sekretariat Nasional)"
        : `Pengurus KIPAN ${currentRegionName}`;

    return (
        <section
            id="struktur"
            className="scroll-mt-20 border-b border-slate-200 bg-slate-50/60 py-16 sm:py-24"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Sesuai Gaya Youth Innovation */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0E6CAC]">
                        <span>Bagan Kepengurusan Nasional & Daerah</span>
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-[#0D3F70] sm:text-4xl lg:text-5xl">
                        Struktur Organisasi
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#0E6CAC]" />
                    <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                        Bagan struktur kepengurusan yang memadukan
                        pembinaan strategis pemerintah pusat dengan kepemimpinan
                        eksekutif pemuda di tingkat nasional, provinsi, hingga kabupaten/kota.
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
                    <div className="flex w-full snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-2 pb-4 pt-2 lg:hidden">
                        {DEWAN_PEMBINA.map((leader) => (
                            <MobileLeaderCard
                                key={leader.name}
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
                    <p className="mb-4 mt-1 text-center text-xs font-medium text-slate-400 lg:hidden">
                        ← Geser kartu untuk melihat pembina lainnya →
                    </p>

                    {/* Desktop View: Interactive GSAP Accordion */}
                    <div
                        ref={pembinaContainerRef}
                        className="hidden w-full items-center justify-center gap-5 overflow-visible px-2 pb-8 pt-2 lg:flex"
                    >
                        {DEWAN_PEMBINA.map((leader, idx) => (
                            <GSAPLeaderCard
                                key={leader.name}
                                id={idx}
                                isExpanded={hoveredPembinaId === idx}
                                isContracted={
                                    hoveredPembinaId !== null &&
                                    hoveredPembinaId !== idx
                                }
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
                    <div className="flex w-full snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-2 pb-4 pt-2 lg:hidden">
                        {DEWAN_PENGARAH.map((leader) => (
                            <MobileLeaderCard
                                key={leader.name}
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
                    <p className="mb-4 mt-1 text-center text-xs font-medium text-slate-400 lg:hidden">
                        ← Geser kartu untuk melihat pengarah lainnya →
                    </p>

                    {/* Desktop View: Interactive GSAP Accordion */}
                    <div
                        ref={pengarahContainerRef}
                        className="hidden w-full items-center justify-center gap-5 overflow-visible px-2 pb-8 pt-2 lg:flex"
                    >
                        {DEWAN_PENGARAH.map((leader, idx) => (
                            <GSAPLeaderCard
                                key={leader.name}
                                id={idx}
                                isExpanded={hoveredPengarahId === idx}
                                isContracted={
                                    hoveredPengarahId !== null &&
                                    hoveredPengarahId !== idx
                                }
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

                {/* TINGKAT 3: PENGURUS PUSAT/DAERAH */}
                <div className="mb-16">
                    <div className="mb-8 flex items-center justify-center gap-4">
                        <div className="h-px grow bg-slate-200" />
                        <h3 className="shrink-0 px-4 text-xl font-bold text-[#0D3F70] sm:text-2xl text-center">
                            {pengurusTitle}
                        </h3>
                        <div className="h-px grow bg-slate-200" />
                    </div>

                    {/* Filter Wilayah */}
                    <div className="mx-auto mb-10 flex max-w-2xl flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-end">
                        <div className="flex items-center gap-2 sm:hidden mb-2 text-[#0D3F70] font-semibold text-sm">
                            <MapPin className="h-4 w-4" /> Filter Wilayah
                        </div>
                        <div className="flex-1">
                            <label className="mb-1.5 block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                Provinsi
                            </label>
                            <select
                                value={selectedProv}
                                onChange={(e) => {
                                    setSelectedProv(e.target.value);
                                    setSelectedCity(''); // reset city when prov changes
                                    setHoveredPusatId(null);
                                }}
                                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 focus:border-[#0E6CAC] focus:outline-none focus:ring-1 focus:ring-[#0E6CAC]"
                            >
                                <option value="">-- Nasional (Pengurus Pusat) --</option>
                                {WILAYAH_LIST.map((wilayah: Wilayah) => (
                                    <option key={wilayah.provinsi} value={wilayah.provinsi}>
                                        {wilayah.provinsi}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex-1">
                            <label className="mb-1.5 block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                Kabupaten / Kota
                            </label>
                            <select
                                value={selectedCity}
                                onChange={(e) => {
                                    setSelectedCity(e.target.value);
                                    setHoveredPusatId(null);
                                }}
                                disabled={!selectedProv}
                                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 disabled:opacity-50 disabled:bg-slate-100 focus:border-[#0E6CAC] focus:outline-none focus:ring-1 focus:ring-[#0E6CAC]"
                            >
                                <option value="">Semua Kab/Kota di Provinsi Ini</option>
                                {selectedProv && WILAYAH_LIST.find((w: Wilayah) => w.provinsi === selectedProv)?.kota.map((city: string) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {!hasPengurus ? (
                        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-[#0E6CAC]">
                                <MapPin className="h-8 w-8" />
                            </div>
                            <h4 className="mb-2 text-lg font-bold text-slate-800">Struktur Belum Tersedia</h4>
                            <p className="text-sm leading-relaxed text-slate-500">
                                Kepengurusan KIPAN untuk wilayah <strong>{currentRegionName}</strong> saat ini masih dalam tahap pembentukan dan belum tercatat di dalam sistem informasi.
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* Mobile View: Clean Swipeable Cards */}
                            <div className="flex w-full snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-2 pb-4 pt-2 lg:hidden">
                                {currentPengurus.map((leader) => (
                                    <MobileLeaderCard
                                        key={leader.name + leader.title}
                                        badge={leader.badge}
                                        category={isPusat ? "PENGURUS HARIAN" : "PENGURUS DAERAH"}
                                        institution={leader.institution}
                                        name={leader.name}
                                        role={leader.role}
                                        description={leader.description}
                                        footerLabel={isPusat ? "Mandat Eksekutif" : "Mandat Daerah"}
                                    />
                                ))}
                            </div>
                            <p className="mb-4 mt-1 text-center text-xs font-medium text-slate-400 lg:hidden">
                                ← Geser kartu untuk melihat pengurus lainnya →
                            </p>

                            {/* Desktop View: Interactive GSAP Accordion */}
                            <div
                                ref={pusatContainerRef}
                                className="hidden w-full items-center justify-center gap-4 overflow-visible px-2 pb-8 pt-2 lg:flex lg:gap-5"
                            >
                                {currentPengurus.map((leader, idx) => (
                                    <GSAPLeaderCard
                                        key={leader.name + leader.title}
                                        id={idx}
                                        isExpanded={hoveredPusatId === idx}
                                        isContracted={
                                            hoveredPusatId !== null &&
                                            hoveredPusatId !== idx
                                        }
                                        onHover={() => setHoveredPusatId(idx)}
                                        onLeave={() => setHoveredPusatId(null)}
                                        badge={leader.badge}
                                        category={isPusat ? "PENGURUS HARIAN" : "PENGURUS DAERAH"}
                                        institution={leader.institution}
                                        name={leader.name}
                                        role={leader.role}
                                        description={leader.description}
                                        defaultWidth={215}
                                        height={500}
                                        drawerWidth={215}
                                        footerLabel={isPusat ? "Mandat Eksekutif" : "Mandat Daerah"}
                                        watermarkLabel={isPusat ? "KIPAN • EKSEKUTIF" : "KIPAN • DAERAH"}
                                        photo={leader.photo}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* TINGKAT 4: BIDANG KERJA & TIM TEKNIS (Hanya Tampil di Tingkat Pusat) */}
                {isPusat && (
                    <div>
                        <div className="mb-10 flex items-center justify-center gap-4">
                            <div className="h-px grow bg-slate-200" />
                            <h3 className="shrink-0 px-4 text-xl font-bold text-[#0D3F70] sm:text-2xl">
                                Bidang Kerja &amp; Tim Teknis
                            </h3>
                            <div className="h-px grow bg-slate-200" />
                        </div>

                        {/* Mobile View */}
                        <div className="flex w-full snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-2 pb-4 pt-2 lg:hidden">
                            {BIDANG_KERJA.map((bidang) => (
                                <MobileBidangCard key={bidang.id} bidang={bidang} />
                            ))}
                        </div>
                        <p className="mb-4 mt-1 text-center text-xs font-medium text-slate-400 lg:hidden">
                            ← Geser kartu untuk melihat divisi bidang kerja →
                        </p>

                        {/* Desktop View */}
                        <div
                            ref={bidangContainerRef}
                            className="hidden w-full items-center justify-center gap-3.5 overflow-visible px-2 pb-8 pt-2 lg:flex lg:gap-4"
                        >
                            {BIDANG_KERJA.map((bidang) => (
                                <GSAPBidangCard
                                    key={bidang.id}
                                    bidang={bidang}
                                    isExpanded={hoveredBidangId === bidang.id}
                                    isContracted={
                                        hoveredBidangId !== null &&
                                        hoveredBidangId !== bidang.id
                                    }
                                    onHover={() => setHoveredBidangId(bidang.id)}
                                    onLeave={() => setHoveredBidangId(null)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
