import ScrollReveal from './ScrollReveal';

interface PartnerInstitution {
    id: string;
    shortName: string;
    fullName: string;
    roleTag: string;
    level: 'Pusat' | 'Daerah';
    emblemType: 'kemenpora' | 'bnn' | 'pmk' | 'dispora' | 'bnnp' | 'bakesbangpol' | 'pemda';
}

const SUPPORTING_INSTITUTIONS: PartnerInstitution[] = [
    {
        id: 'kemenpora',
        shortName: 'KEMENPORA RI',
        fullName: 'Kementerian Pemuda dan Olahraga',
        roleTag: 'Penggagas & Penanggung Jawab',
        level: 'Pusat',
        emblemType: 'kemenpora',
    },
    {
        id: 'bnn',
        shortName: 'BNN RI',
        fullName: 'Badan Narkotika Nasional',
        roleTag: 'Pembina Teknis P4GN',
        level: 'Pusat',
        emblemType: 'bnn',
    },
    {
        id: 'pmk',
        shortName: 'KEMENKO PMK',
        fullName: 'Kemenko Pembangunan Manusia & Kebudayaan',
        roleTag: 'Koordinator Nasional',
        level: 'Pusat',
        emblemType: 'pmk',
    },
    {
        id: 'dispora',
        shortName: 'DISPORA DAERAH',
        fullName: 'Dinas Pemuda & Olahraga 38 Provinsi',
        roleTag: 'Pembina Wilayah Daerah',
        level: 'Daerah',
        emblemType: 'dispora',
    },
    {
        id: 'bnnp',
        shortName: 'BNNP / BNNK',
        fullName: 'BNN Provinsi & Kabupaten/Kota',
        roleTag: 'Pengawas Teknis Lapangan',
        level: 'Daerah',
        emblemType: 'bnnp',
    },
    {
        id: 'bakesbangpol',
        shortName: 'BAKESBANGPOL',
        fullName: 'Badan Kesatuan Bangsa dan Politik',
        roleTag: 'Ketahanan Ideologi & Ormas',
        level: 'Daerah',
        emblemType: 'bakesbangpol',
    },
    {
        id: 'pemda',
        shortName: 'PEMERINTAH DAERAH',
        fullName: 'Pemprov & Pemkab / Pemkot',
        roleTag: 'Fasilitator Wilayah',
        level: 'Daerah',
        emblemType: 'pemda',
    },
];

function PartnerEmblem({ type }: { type: PartnerInstitution['emblemType'] }) {
    switch (type) {
        case 'kemenpora':
            return (
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mb-2 group-hover:scale-105 transition-transform">
                    {/* Official Kemenpora Torch Silhouette */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-600 fill-current" aria-hidden="true">
                        <path d="M12 2C10.5 4.5 9 6 9 8.5C9 10.5 10.5 12 12 12C13.5 12 15 10.5 15 8.5C15 6 13.5 4.5 12 2ZM8 14H16V16C16 17.5 14.5 19 12 19C9.5 19 8 17.5 8 16V14ZM10 20H14V22H10V20Z" />
                    </svg>
                </div>
            );
        case 'bnn':
            return (
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mb-2 group-hover:scale-105 transition-transform overflow-hidden p-1">
                    <img
                        src="/logo-bnn.jpg"
                        alt="BNN RI"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                            // Fallback if image not loaded
                            (e.currentTarget as HTMLElement).style.display = 'none';
                        }}
                    />
                </div>
            );
        case 'pmk':
            return (
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 mb-2 group-hover:scale-105 transition-transform">
                    {/* Garuda Shield Silhouette */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-600 fill-current" aria-hidden="true">
                        <path d="M12 2L15 5H19V9L22 12L19 15V19H15L12 22L9 19H5V15L2 12L5 9V5H9L12 2ZM12 6L10.5 9H13.5L12 6ZM8 11H16V14C16 16.2 14.2 18 12 18C9.8 18 8 16.2 8 14V11Z" />
                    </svg>
                </div>
            );
        case 'dispora':
            return (
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 mb-2 group-hover:scale-105 transition-transform">
                    {/* Youth & Sports Emblem */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-sky-600 fill-current" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C14.76 4 17.15 5.56 18.32 7.85L12 11.5L5.68 7.85C6.85 5.56 9.24 4 12 4ZM4.26 9.77L11 13.66V20C6.96 19.5 3.8 15.65 4.26 9.77ZM13 20V13.66L19.74 9.77C20.2 15.65 17.04 19.5 13 20Z" />
                    </svg>
                </div>
            );
        case 'bnnp':
            return (
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mb-2 group-hover:scale-105 transition-transform">
                    {/* Regional Security / Shield */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-kipan-navy fill-current" aria-hidden="true">
                        <path d="M12 2L4 5V11C4 16.55 7.42 21.74 12 23C16.58 21.74 20 16.55 20 11V5L12 2ZM12 6.5C13.93 6.5 15.5 8.07 15.5 10C15.5 11.93 13.93 13.5 12 13.5C10.07 13.5 8.5 11.93 8.5 10C8.5 8.07 10.07 6.5 12 6.5ZM12 15C14.67 15 17 16.34 17 18.5V19.34C15.56 20.45 13.84 21.14 12 21.14C10.16 21.14 8.44 20.45 7 19.34V18.5C7 16.34 9.33 15 12 15Z" />
                    </svg>
                </div>
            );
        case 'bakesbangpol':
            return (
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mb-2 group-hover:scale-105 transition-transform">
                    {/* Unity Emblem */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-600 fill-current" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                    </svg>
                </div>
            );
        case 'pemda':
            return (
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 mb-2 group-hover:scale-105 transition-transform">
                    {/* Government Pillar */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-indigo-600 fill-current" aria-hidden="true">
                        <path d="M12 2L2 7V9H22V7L12 2ZM4 11H7V18H4V11ZM10 11H13V18H10V11ZM16 11H19V18H16V11ZM2 20H22V22H2V20Z" />
                    </svg>
                </div>
            );
    }
}

const MARQUEE_ITEMS = [
    ...SUPPORTING_INSTITUTIONS,
    ...SUPPORTING_INSTITUTIONS,
    ...SUPPORTING_INSTITUTIONS,
];

export default function PartnersSection() {
    return (
        <section id="mitra-pemerintah" className="py-14 sm:py-18 bg-white border-b border-slate-200/90 overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header (Inspired by reference screenshot) */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
                        {/* Kicker Tag */}
                        <span className="text-xs font-bold text-lime-600 sm:text-[#7cb342] uppercase tracking-widest block mb-2 font-mono">
                            PARTNERS &amp; SUPPORTERS
                        </span>

                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-kipan-navy tracking-tight">
                            Partner dalam Membangun Masa Depan
                        </h2>

                        {/* Subtitle */}
                        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-2xl mx-auto leading-relaxed">
                            Didukung secara sinergis oleh 7 instansi kementerian, lembaga negara, dan pemerintah daerah yang memiliki komitmen kuat dalam membina generasi muda Indonesia Bersinar.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Infinite Auto-Scrolling Marquee Track of 7 Official Rounded Cards */}
                <ScrollReveal direction="up" delay={0.12}>
                    <div className="relative w-full overflow-hidden py-2">
                        {/* Left & Right Soft Fade Gradients */}
                        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

                        {/* Auto-scrolling Track */}
                        <div className="animate-marquee gap-5 flex items-center py-2">
                            {MARQUEE_ITEMS.map((inst, idx) => (
                                <div
                                    key={`${inst.id}-${idx}`}
                                    className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs hover:border-kipan-blue hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 w-[175px] sm:w-[195px] h-[160px] sm:h-[175px] shrink-0 flex flex-col items-center justify-between text-center group cursor-default select-none"
                                >
                                    {/* Level badge */}
                                    <div className="w-full flex justify-between items-center text-[10px] font-semibold text-slate-400">
                                        <span className="uppercase tracking-wider font-mono text-[9px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">
                                            {inst.level}
                                        </span>
                                    </div>

                                    {/* Central Emblem & Name */}
                                    <div className="flex flex-col items-center my-auto">
                                        <PartnerEmblem type={inst.emblemType} />
                                        <h3 className="font-extrabold text-xs sm:text-sm text-kipan-navy group-hover:text-kipan-blue transition-colors leading-tight mb-1">
                                            {inst.shortName}
                                        </h3>
                                        <span className="text-[10px] text-slate-500 font-medium line-clamp-1">
                                            {inst.fullName}
                                        </span>
                                    </div>

                                    {/* Role Tag Footer */}
                                    <div className="w-full pt-2 border-t border-slate-100 text-[10px] font-bold text-kipan-blue truncate">
                                        {inst.roleTag}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
