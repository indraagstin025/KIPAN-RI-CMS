import { useState } from 'react';
import LandingLayout from '@/Layouts/LandingLayout';
import { cn } from '@/lib/utils';
import {
    ArrowRightIcon,
    CheckCircledIcon,
    FileTextIcon,
    GlobeIcon,
    HeartIcon,
    IdCardIcon,
    PersonIcon,
    ReaderIcon,
    RocketIcon,
    StarFilledIcon,
    TargetIcon,
    VideoIcon,
} from '@radix-ui/react-icons';

// Data Struktur Organisasi KIPAN RI
interface LeaderPerson {
    name: string;
    title: string;
    role: string;
    institution: string;
    level: 'pembina' | 'pusat' | 'bidang' | 'daerah';
    badge: string;
    photo: string;
    description: string;
}

const DEWAN_PEMBINA: LeaderPerson[] = [
    {
        name: 'Menteri Pemuda & Olahraga RI',
        title: 'Menteri Pemuda dan Olahraga Republik Indonesia',
        role: 'Pembina Utama Nasional',
        institution: 'Kementerian Pemuda dan Olahraga RI',
        level: 'pembina',
        badge: 'Pemerintah Pusat',
        photo: '/logo-kipan.jpg',
        description:
            'Penanggung jawab pembinaan generasi muda, kepemimpinan pemuda nasional, dan fasilitasi program strategis KIPAN RI.',
    },
    {
        name: 'Kepala Badan Narkotika Nasional RI',
        title: 'Kepala BNN Republik Indonesia',
        role: 'Pembina Teknis P4GN',
        institution: 'Badan Narkotika Nasional (BNN RI)',
        level: 'pembina',
        badge: 'Instansi Teknis Pembina',
        photo: '/logo-bnn.jpg',
        description:
            'Pembina materi edukasi, standardisasi kurikulum pelatihan kader, modul deteksi dini narkoba, dan rujukan rehabilitasi.',
    },
];

const DEWAN_PENGARAH: LeaderPerson[] = [
    {
        name: 'Deputi Bidang Pemberdayaan Pemuda',
        title: 'Deputi Pemberdayaan Pemuda Kemenpora RI',
        role: 'Dewan Pengarah Kepemudaan',
        institution: 'Kemenpora RI',
        level: 'pembina',
        badge: 'Pengarah Teknis',
        photo: '/logo-kipan.jpg',
        description:
            'Mengarahkan standardisasi kaderisasi, alokasi program kepemudaan nasional, dan sinergi bersama Dispora seluruh Indonesia.',
    },
    {
        name: 'Deputi Bidang Pencegahan BNN RI',
        title: 'Deputi Pencegahan BNN Republik Indonesia',
        role: 'Dewan Pengarah P4GN',
        institution: 'BNN RI',
        level: 'pembina',
        badge: 'Pengarah P4GN',
        photo: '/logo-bnn.jpg',
        description:
            'Mengawasi sinkronisasi rencana aksi nasional P4GN ke dalam program edukasi sebaya dan kurikulum Training of Trainers (ToT).',
    },
];

const PENGURUS_PUSAT: LeaderPerson[] = [
    {
        name: 'Koordinator Nasional (Kornas)',
        title: 'Koordinator Nasional KIPAN Republik Indonesia',
        role: 'Pimpinan Eksekutif Gerakan',
        institution: 'Sekretariat Nasional KIPAN RI',
        level: 'pusat',
        badge: 'Presidium Pusat',
        photo: '/logo-kipan.jpg',
        description:
            'Memimpin roda organisasi secara nasional, mengoordinasikan 38 koordinator wilayah, dan menjaga arah strategis gerakan.',
    },
    {
        name: 'Wakil Koordinator Nasional',
        title: 'Wakil Koordinator Nasional KIPAN RI',
        role: 'Wakil Pimpinan Eksekutif',
        institution: 'Sekretariat Nasional KIPAN RI',
        level: 'pusat',
        badge: 'Presidium Pusat',
        photo: '/logo-kipan.jpg',
        description:
            'Membantu Kornas dalam supervisi operasional, evaluasi program kerja lintas bidang, dan koordinasi harian.',
    },
    {
        name: 'Sekretaris Jenderal',
        title: 'Sekretaris Jenderal KIPAN RI',
        role: 'Tata Kelola Administrasi & Jaringan',
        institution: 'Sekretariat Nasional KIPAN RI',
        level: 'pusat',
        badge: 'Administrasi & Legal',
        photo: '/logo-kipan.jpg',
        description:
            'Mengelola database keanggotaan kader nasional, legalitas, persuratan resmi, dan tata kelola organisasi.',
    },
    {
        name: 'Bendahara Umum',
        title: 'Bendahara Umum KIPAN RI',
        role: 'Akuntabilitas & Manajemen Keuangan',
        institution: 'Sekretariat Nasional KIPAN RI',
        level: 'pusat',
        badge: 'Keuangan & Aset',
        photo: '/logo-kipan.jpg',
        description:
            'Mengelola anggaran kerja sama, transparansi keuangan gerakan, serta akuntabilitas program pemberdayaan pemuda.',
    },
];

const BIDANG_KERJA: Array<{
    id: string;
    no: string;
    name: string;
    focus: string;
    scope: string;
    photo?: string;
    coordinator?: string;
}> = [
    {
        id: 'kaderisasi',
        no: '01',
        name: 'Bidang Kaderisasi & Pelatihan Pemuda',
        focus: 'Training of Trainers (ToT), standardisasi instruktur daerah, sertifikasi kader inti pemuda, dan modul kepemimpinan nasional.',
        scope: 'Standardisasi Kaderisasi Nasional',
        photo: '/kipan_organisasi.png',
        coordinator: 'Koordinator Kaderisasi & Pelatihan',
    },
    {
        id: 'edukasi',
        no: '02',
        name: 'Bidang Edukasi & Sosialisasi Sebaya',
        focus: 'Program KIPAN Goes to School, Goes to Campus, workshop deteksi dini zat adiktif, dan edukasi komunitas anak muda.',
        scope: 'Edukasi Lingkungan Pendidikan',
    },
    {
        id: 'advokasi',
        no: '03',
        name: 'Bidang Advokasi & Perlindungan Pemuda',
        focus: 'Layanan pendampingan sebaya (peer counseling), fasilitasi rujukan rehabilitasi sukarela tanpa stigma bersama balai BNN RI.',
        scope: 'Pendampingan Konseling Sebaya',
    },
    {
        id: 'sinergi',
        no: '04',
        name: 'Bidang Hubungan Antar Lembaga & Kemitraan',
        focus: 'Membangun sinergi kolaboratif bersama Kemenpora, BNN, Dispora 38 Provinsi, POLRI, perguruan tinggi, dan organisasi pemuda.',
        scope: 'Sinergi Lintas Sektor & Pemda',
    },
    {
        id: 'media',
        no: '05',
        name: 'Bidang Media, Digital & Komunikasi Publik',
        focus: 'Pengelolaan portal resmi KIPAN RI, kampanye digital kreatif di media sosial, publikasi kabar aksi daerah, dan verifikasi data.',
        scope: 'Komunikasi Publik & Kampanye Sehat',
    },
    {
        id: 'pemberdayaan',
        no: '06',
        name: 'Bidang Minat, Bakat, Seni & Wirausaha Muda',
        focus: 'Penyaluran energi pemuda ke kegiatan positif alternatif: kompetisi olahraga sehat, festival karya kreatif, dan inkubasi usaha.',
        scope: 'Kanalisasi Bakat & Karya Nyata',
    },
];

// Data Duta KIPAN Republik Indonesia
interface DutaPillar {
    no: string;
    title: string;
    description: string;
    tag: string;
}

interface DutaCategory {
    id: string;
    title: string;
    scope: string;
    role: string;
    target: string;
    mission: string;
    tag: string;
    photo?: string;
    hashtags?: string[];
}

const DUTA_KIPAN_PILLARS: DutaPillar[] = [
    {
        no: '01',
        title: 'Inspirator & Role Model Sebaya',
        description:
            'Menjadi teladan nyata gaya hidup sehat, berprestasi, dan berintegritas tanpa jeratan narkotika di kalangan pemuda.',
        tag: 'Keteladanan',
    },
    {
        no: '02',
        title: 'Edukator & Komunikator Publik',
        description:
            'Menyampaikan literasi pencegahan bahaya zat adiktif secara komunikatif, relevan, dan mudah dipahami teman sebaya.',
        tag: 'Sosialisasi',
    },
    {
        no: '03',
        title: 'Konselor & Sahabat Pendamping',
        description:
            'Membuka ruang dengar ramah pemuda (peer support) serta memfasilitasi akses pemulihan dan rehabilitasi sukarela tanpa stigma.',
        tag: 'Advokasi Sebaya',
    },
    {
        no: '04',
        title: 'Penggerak Karya & Aksi Positif',
        description:
            'Mengajak generasi muda aktif menyalurkan bakat ke bidang olahraga, seni budaya, kreativitas digital, dan kerelawanan.',
        tag: 'Pemberdayaan',
    },
];

const DUTA_KIPAN_CATEGORIES: DutaCategory[] = [
    {
        id: 'kampus',
        title: 'Duta KIPAN Perguruan Tinggi',
        scope: 'Kampus & Sivitas Akademika',
        role: 'Pelopor Kampus Bersinar',
        target: 'Mahasiswa, BEM & Lembaga Riset Kampus',
        mission:
            'Membangun ekosistem kampus bebas narkoba melalui kajian ilmiah, edukasi ospek/maba, dan deteksi dini sebaya.',
        tag: 'Akademisi & Riset',
        photo: '/duta-sample.jpg',
        hashtags: ['#KampusBersinar', '#PeerCounselor', '#RisetPemuda'],
    },
    {
        id: 'sekolah',
        title: 'Duta KIPAN Pelajar & Remaja',
        scope: 'SMP, SMA & SMK Sederajat',
        role: 'Garda Teman Sebaya',
        target: 'Pelajar, Pengurus OSIS & Pramuka',
        mission:
            'Membentengi pelajar dari bujuk rayu narkotika di sekolah melalui dialog interaktif dan kampanye anti-narkoba.',
        tag: 'Lingkungan Sekolah',
        hashtags: ['#KIPANGoesToSchool', '#GenerasiSehat', '#SahabatPelajar'],
    },
    {
        id: 'digital',
        title: 'Duta KIPAN Digital & Kreator',
        scope: 'Ruang Digital & Media Sosial',
        role: 'Suara Positif Media',
        target: 'Netizen Muda & Komunitas Digital',
        mission:
            'Memproduksi konten visual edukatif, video inspiratif, dan kampanye media sosial untuk mengikis tren berbahaya.',
        tag: 'Kreativitas Digital',
        hashtags: ['#KontenPositif', '#KreatorBebasNarkoba', '#SuaraMuda'],
    },
    {
        id: 'komunitas',
        title: 'Duta KIPAN Komunitas & Sosial',
        scope: 'Masyarakat & Akar Rumput',
        role: 'Aktivis Sosial Pemuda',
        target: 'Pemuda Karang Taruna & Desa/Kelurahan',
        mission:
            'Menggerakkan pemuda lewat kegiatan olahraga komunitas, bakti sosial, festival karya seni, dan kewirausahaan.',
        tag: 'Aksi Lapangan',
        hashtags: ['#KarangTarunaKIPAN', '#AksiNyataPemuda', '#DesaBersinar'],
    },
];


const BIDANG_ICONS: Record<string, React.ElementType> = {
    kaderisasi: IdCardIcon,
    edukasi: ReaderIcon,
    advokasi: HeartIcon,
    sinergi: GlobeIcon,
    media: VideoIcon,
    pemberdayaan: RocketIcon,
};

export default function About() {
    const [hoveredPembinaId, setHoveredPembinaId] = useState<number | null>(null);
    const [hoveredPengarahId, setHoveredPengarahId] = useState<number | null>(null);
    const [hoveredPusatId, setHoveredPusatId] = useState<number | null>(null);
    const [hoveredBidangId, setHoveredBidangId] = useState<string | null>(null);
    const [hoveredDutaId, setHoveredDutaId] = useState<string | null>(null);

    return (
        <LandingLayout
            title="Tentang KIPAN RI: Struktur Organisasi, Visi Misi & Profil Lengkap"
            className="bg-slate-50 text-slate-800"
        >
            {/* ========================================================= */}
            {/* HERO SECTION: FOKUS, TENANG, OTENTIK INSTITUSIONAL        */}
            {/* ========================================================= */}
            <section
                className="relative border-b border-blue-950 pb-16 pt-36 text-white sm:pb-20 sm:pt-40"
                style={{
                    backgroundColor: '#0D3F70',
                    backgroundImage:
                        'linear-gradient(180deg, #07223D 0%, #0D3F70 100%)',
                }}
            >
                <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav
                        aria-label="Breadcrumb"
                        className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-blue-100"
                    >
                        <a
                            href="/"
                            className="rounded-sm text-blue-100 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                        >
                            Beranda
                        </a>
                        <span className="text-blue-300/60" aria-hidden="true">
                            /
                        </span>
                        <span
                            className="font-semibold text-amber-300"
                            aria-current="page"
                        >
                            Tentang Kami
                        </span>
                    </nav>

                    {/* Title */}
                    <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Tentang KIPAN Republik Indonesia
                    </h1>

                    {/* Subtitle */}
                    <p className="mx-auto max-w-2xl text-sm font-normal leading-relaxed text-blue-100/90 sm:text-base">
                        Gerakan kepemudaan strategis binaan resmi Kementerian
                        Pemuda dan Olahraga (Kemenpora RI) bersama Badan
                        Narkotika Nasional (BNN RI) untuk menggerakkan pemuda
                        sebagai garda terdepan pencegahan narkotika di 38
                        provinsi.
                    </p>
                </div>
            </section>
            {/* ========================================================= */}
            {/* BAGIAN 1: STRUKTUR ORGANISASI (Gaya Youth Innovation)      */}
            {/* ========================================================= */}
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
                            Bagan struktur kepengurusan nasional yang memadukan
                            pembinaan strategis pemerintah pusat dengan
                            kepemimpinan eksekutif pemuda di 38 provinsi di
                            seluruh Nusantara.
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

                        <div className="flex w-full items-center justify-center gap-5 overflow-x-auto lg:overflow-visible pb-8 pt-2 px-2 snap-x">
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
                                            "group relative h-[490px] cursor-pointer overflow-hidden rounded-[30px] border snap-center transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shrink-0",
                                            isExpanded
                                                ? "w-[440px] scale-[1.05] z-30 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] bg-white border-[#0E6CAC]/40 grayscale-0 contrast-100"
                                                : isContracted
                                                  ? "w-[210px] scale-[0.98] z-10 opacity-70 grayscale contrast-[1.05] bg-slate-100 border-slate-200/90"
                                                  : "w-[270px] scale-100 z-10 grayscale contrast-[1.05] bg-[#EEF2F6] border-slate-200/90 shadow-xs hover:border-[#0E6CAC]/30"
                                        )}
                                    >
                                        {/* Background Watermark Curve */}
                                        <svg
                                            className={cn(
                                                "pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-slate-300/40 transition-all duration-700 ease-out",
                                                isExpanded ? "scale-120 text-blue-200/60 rotate-12" : "scale-100"
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
                                                    "relative z-10 flex flex-col items-center transition-all duration-700 ease-out",
                                                    isExpanded ? "scale-120 -translate-x-16" : "scale-100 translate-x-0"
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
                                                    "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white transition-opacity duration-500",
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

                                        {/* Idle Resting Pill (Unhovered) */}
                                        <div
                                            className={cn(
                                                "absolute bottom-5 left-4 right-4 z-10 text-center transition-all duration-300",
                                                isExpanded ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"
                                            )}
                                        >
                                            <div className="rounded-2xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-sm backdrop-blur-md">
                                                <p className="truncate text-xs font-black text-slate-800">
                                                    {leader.name}
                                                </p>
                                                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-[#0E6CAC]">
                                                    {leader.role}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Expanded Information Column on the Right */}
                                        <div
                                            className={cn(
                                                "absolute bottom-6 right-5 top-16 z-20 w-[215px] flex flex-col justify-center text-left transition-all duration-500 ease-out",
                                                isExpanded
                                                    ? "pointer-events-auto translate-x-0 opacity-100"
                                                    : "pointer-events-none translate-x-6 opacity-0"
                                            )}
                                        >
                                            <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#0E6CAC]">
                                                {leader.institution}
                                            </span>
                                            <h4 className="text-lg font-black leading-tight text-[#0D3F70]">
                                                {leader.name}
                                            </h4>
                                            <p className="mt-1 text-xs font-black uppercase tracking-wide text-emerald-600">
                                                {leader.role}
                                            </p>
                                            <p className="mt-2.5 text-[11px] leading-relaxed text-slate-600 line-clamp-4">
                                                {leader.description}
                                            </p>

                                            <div className="mt-4 flex items-center justify-between border-t border-slate-150 pt-2 text-[10px] font-bold text-slate-400">
                                                <span className="uppercase tracking-widest text-slate-500">
                                                    Fokus Pembinaan
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

                        <div className="flex w-full items-center justify-center gap-5 overflow-x-auto lg:overflow-visible pb-8 pt-2 px-2 snap-x">
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
                                            "group relative h-[490px] cursor-pointer overflow-hidden rounded-[30px] border snap-center transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shrink-0",
                                            isExpanded
                                                ? "w-[440px] scale-[1.05] z-30 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] bg-white border-[#0E6CAC]/40 grayscale-0 contrast-100"
                                                : isContracted
                                                  ? "w-[210px] scale-[0.98] z-10 opacity-70 grayscale contrast-[1.05] bg-slate-100 border-slate-200/90"
                                                  : "w-[270px] scale-100 z-10 grayscale contrast-[1.05] bg-[#EEF2F6] border-slate-200/90 shadow-xs hover:border-[#0E6CAC]/30"
                                        )}
                                    >
                                        {/* Background Watermark Curve */}
                                        <svg
                                            className={cn(
                                                "pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-slate-300/40 transition-all duration-700 ease-out",
                                                isExpanded ? "scale-120 text-blue-200/60 rotate-12" : "scale-100"
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
                                                    "relative z-10 flex flex-col items-center transition-all duration-700 ease-out",
                                                    isExpanded ? "scale-120 -translate-x-16" : "scale-100 translate-x-0"
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
                                                    "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white transition-opacity duration-500",
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

                                        {/* Idle Resting Pill (Unhovered) */}
                                        <div
                                            className={cn(
                                                "absolute bottom-5 left-4 right-4 z-10 text-center transition-all duration-300",
                                                isExpanded ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"
                                            )}
                                        >
                                            <div className="rounded-2xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-sm backdrop-blur-md">
                                                <p className="truncate text-xs font-black text-slate-800">
                                                    {leader.name}
                                                </p>
                                                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-[#0E6CAC]">
                                                    {leader.role}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Expanded Information Column on the Right */}
                                        <div
                                            className={cn(
                                                "absolute bottom-6 right-5 top-16 z-20 w-[215px] flex flex-col justify-center text-left transition-all duration-500 ease-out",
                                                isExpanded
                                                    ? "pointer-events-auto translate-x-0 opacity-100"
                                                    : "pointer-events-none translate-x-6 opacity-0"
                                            )}
                                        >
                                            <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#0E6CAC]">
                                                {leader.institution}
                                            </span>
                                            <h4 className="text-lg font-black leading-tight text-[#0D3F70]">
                                                {leader.name}
                                            </h4>
                                            <p className="mt-1 text-xs font-black uppercase tracking-wide text-emerald-600">
                                                {leader.role}
                                            </p>
                                            <p className="mt-2.5 text-[11px] leading-relaxed text-slate-600 line-clamp-4">
                                                {leader.description}
                                            </p>

                                            <div className="mt-4 flex items-center justify-between border-t border-slate-150 pt-2 text-[10px] font-bold text-slate-400">
                                                <span className="uppercase tracking-widest text-slate-500">
                                                    Fokus Pengarah
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

                        <div className="flex w-full items-center justify-start lg:justify-center gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible pb-8 pt-2 px-2 snap-x">
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
                                            "group relative h-[500px] cursor-pointer overflow-hidden rounded-[30px] border snap-center transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shrink-0",
                                            isExpanded
                                                ? "w-[360px] scale-[1.06] z-30 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] bg-white border-[#0E6CAC]/40 grayscale-0 contrast-100"
                                                : isContracted
                                                  ? "w-[185px] scale-[0.98] z-10 opacity-70 grayscale contrast-[1.05] bg-slate-100 border-slate-200/90"
                                                  : "w-[215px] scale-100 z-10 grayscale contrast-[1.05] bg-[#EEF2F6] border-slate-200/90 shadow-xs hover:border-[#0E6CAC]/30"
                                        )}
                                    >
                                        {/* Background Watermark Curve */}
                                        <svg
                                            className={cn(
                                                "pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-slate-300/40 transition-all duration-700 ease-out",
                                                isExpanded ? "scale-120 text-blue-200/60 rotate-12" : "scale-100"
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
                                                    "relative z-10 flex flex-col items-center transition-all duration-700 ease-out",
                                                    isExpanded ? "scale-120 -translate-x-12" : "scale-100 translate-x-0"
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
                                                    "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white transition-opacity duration-500",
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
                                                    KIPAN RI
                                                </span>
                                            )}
                                        </div>

                                        {/* Idle Resting Pill (Unhovered) */}
                                        <div
                                            className={cn(
                                                "absolute bottom-5 left-4 right-4 z-10 text-center transition-all duration-300",
                                                isExpanded ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"
                                            )}
                                        >
                                            <div className="rounded-2xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-sm backdrop-blur-md">
                                                <p className="truncate text-xs font-black text-slate-800">
                                                    {leader.name}
                                                </p>
                                                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-[#0E6CAC]">
                                                    {leader.role}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Expanded Information Column on the Right */}
                                        <div
                                            className={cn(
                                                "absolute bottom-6 right-5 top-16 z-20 w-[185px] flex flex-col justify-center text-left transition-all duration-500 ease-out",
                                                isExpanded
                                                    ? "pointer-events-auto translate-x-0 opacity-100"
                                                    : "pointer-events-none translate-x-6 opacity-0"
                                            )}
                                        >
                                            <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#0E6CAC]">
                                                {leader.institution}
                                            </span>
                                            <h4 className="text-lg font-black leading-tight text-[#0D3F70]">
                                                {leader.name}
                                            </h4>
                                            <p className="mt-1 text-xs font-black uppercase tracking-wide text-emerald-600">
                                                {leader.role}
                                            </p>
                                            <p className="mt-2.5 text-[11px] leading-relaxed text-slate-600 line-clamp-3">
                                                {leader.description}
                                            </p>

                                            <div className="mt-4 flex items-center justify-between border-t border-slate-150 pt-2 text-[10px] font-bold text-slate-400">
                                                <span className="text-[10px] uppercase tracking-wider text-slate-500">
                                                    Presidium Pusat
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

                        <div className="flex w-full items-center justify-start lg:justify-center gap-3.5 lg:gap-4 overflow-x-auto lg:overflow-visible pb-8 pt-2 px-2 snap-x">
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
                                            "group relative h-[470px] cursor-pointer overflow-hidden rounded-[28px] border snap-center transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shrink-0",
                                            isExpanded
                                                ? "w-[340px] scale-[1.05] z-30 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] bg-white border-[#0E6CAC]/40 grayscale-0 contrast-100"
                                                : isContracted
                                                  ? "w-[145px] scale-[0.98] z-10 opacity-70 grayscale contrast-[1.05] bg-slate-100 border-slate-200/90"
                                                  : "w-[170px] scale-100 z-10 grayscale contrast-[1.05] bg-[#EEF2F6] border-slate-200/90 shadow-xs hover:border-[#0E6CAC]/30"
                                        )}
                                    >
                                        {/* Background Watermark Curve */}
                                        <svg
                                            className={cn(
                                                "pointer-events-none absolute -right-8 -top-8 h-56 w-56 text-slate-300/40 transition-all duration-700 ease-out",
                                                isExpanded ? "scale-120 text-blue-200/60 rotate-12" : "scale-100"
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
                                                        className={cn(
                                                            "absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ease-out",
                                                            isExpanded
                                                                ? "scale-115 -translate-x-14 grayscale-0 contrast-100"
                                                                : "scale-100 translate-x-0 grayscale contrast-105"
                                                        )}
                                                    />
                                                    {/* Soft white gradient on right half when expanded */}
                                                    <div
                                                        className={cn(
                                                            "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/85 to-white transition-opacity duration-500",
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
                                                            "relative z-10 flex flex-col items-center transition-all duration-700 ease-out",
                                                            isExpanded ? "scale-120 -translate-x-12" : "scale-100 translate-x-0"
                                                        )}
                                                    >
                                                        <div className="mb-3.5 flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-200/80 bg-white/95 text-[#0E6CAC] shadow-md transition-all duration-500">
                                                            <IconComponent className="h-10 w-10 text-[#0E6CAC]" />
                                                        </div>
                                                        <span className="rounded-full border border-blue-200/60 bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0D3F70] shadow-2xs">
                                                            Divisi {bidang.no}
                                                        </span>
                                                    </div>
                                                    {/* Soft white gradient on right half when expanded */}
                                                    <div
                                                        className={cn(
                                                            "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white transition-opacity duration-500",
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
                                                    "rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider transition-colors duration-300 shadow-2xs backdrop-blur-sm",
                                                    isExpanded
                                                        ? "border-blue-300 bg-[#0D3F70] text-white"
                                                        : "border-slate-200/80 bg-white/95 text-[#0D3F70]"
                                                )}
                                            >
                                                {bidang.no}
                                            </span>
                                            {isExpanded && (
                                                <span className="text-[9px] font-black uppercase tracking-wider text-[#0E6CAC] animate-in fade-in duration-300">
                                                    TIM TEKNIS
                                                </span>
                                            )}
                                        </div>

                                        {/* Idle Resting Pill (Unhovered) */}
                                        <div
                                            className={cn(
                                                "absolute bottom-4 left-3 right-3 z-10 text-center transition-all duration-300",
                                                isExpanded ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"
                                            )}
                                        >
                                            <div className="rounded-xl border border-white/80 bg-white/95 px-2.5 py-2 shadow-sm backdrop-blur-md">
                                                <p className="truncate text-[11px] font-black text-slate-800">
                                                    {bidang.name.replace('Bidang ', '')}
                                                </p>
                                                <p className="mt-0.5 truncate text-[9px] font-bold uppercase tracking-wide text-[#0E6CAC]">
                                                    {bidang.scope}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Expanded Information Column on the Right */}
                                        <div
                                            className={cn(
                                                "absolute bottom-5 right-4 top-14 z-20 w-[175px] flex flex-col justify-center text-left transition-all duration-500 ease-out",
                                                isExpanded
                                                    ? "pointer-events-auto translate-x-0 opacity-100"
                                                    : "pointer-events-none translate-x-6 opacity-0"
                                            )}
                                        >
                                            <span className="mb-0.5 text-[9px] font-bold uppercase tracking-widest text-[#0E6CAC]">
                                                DIVISI {bidang.no}
                                            </span>
                                            <h4 className="text-sm font-black leading-tight text-[#0D3F70]">
                                                {bidang.name}
                                            </h4>
                                            {bidang.coordinator && (
                                                <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-700">
                                                    {bidang.coordinator}
                                                </p>
                                            )}
                                            <p className="mt-1 text-[11px] font-black uppercase tracking-wide text-emerald-600">
                                                {bidang.scope}
                                            </p>
                                            <p className="mt-2 text-[10.5px] leading-relaxed text-slate-600 line-clamp-4">
                                                {bidang.focus}
                                            </p>

                                            <div className="mt-3 flex items-center justify-between border-t border-slate-150 pt-2 text-[9px] font-bold text-slate-400">
                                                <span className="uppercase tracking-widest text-slate-500">
                                                    Fokus Kerja
                                                </span>
                                                <ArrowRightIcon className="h-3 w-3 text-[#0E6CAC] transition-transform duration-300 group-hover:translate-x-1" />
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
                                                KIPAN RI
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* BAGIAN 2: DUTA KIPAN REPUBLIK INDONESIA                   */}
            {/* ========================================================= */}
            <section
                id="duta-kipan"
                className="scroll-mt-20 border-b border-slate-200 bg-white py-16 sm:py-24"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0E6CAC]">
                            <StarFilledIcon className="h-3.5 w-3.5 text-amber-500" />
                            <span>Figur Teladan &amp; Ikon Gerakan</span>
                        </div>
                        <h2 className="text-3xl font-black tracking-tight text-[#0D3F70] sm:text-4xl lg:text-5xl">
                            Duta KIPAN Republik Indonesia
                        </h2>
                        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#0E6CAC]" />
                        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                            Representasi generasi muda pelopor yang bertugas
                            sebagai teladan (*role model*), komunikator publik
                            sebaya, dan penggerak utama gaya hidup sehat
                            berprestasi tanpa narkoba di seluruh Indonesia.
                        </p>
                    </div>

                    {/* Ranah Pengabdian & Kategori Duta KIPAN (TANPA FOTO sesuai permintaan) */}
                    <div className="mb-16">
                        <div className="mb-10 flex items-center justify-center gap-4">
                            <div className="h-px grow bg-slate-200" />
                            <h3 className="shrink-0 px-4 text-xl font-bold text-[#0D3F70] sm:text-2xl">
                                Kategori &amp; Ranah Pengabdian Duta
                            </h3>
                            <div className="h-px grow bg-slate-200" />
                        </div>

                        {/* Horizontal Expanding Accordion Slider (Exact Youth Innovation "Tim Kami" Motion & Zoom) */}
                        <div className="flex w-full items-center justify-start lg:justify-center gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible pb-8 pt-4 px-2 snap-x">
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
                                            "group relative h-[500px] cursor-pointer overflow-hidden rounded-[30px] border snap-center transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shrink-0",
                                            // Dynamic width expansion matching Youth Innovation (215px -> 360px)
                                            isExpanded
                                                ? "w-[360px] scale-[1.06] z-30 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] bg-white border-[#0E6CAC]/40 grayscale-0 contrast-100"
                                                : isContracted
                                                  ? "w-[185px] scale-[0.98] z-10 opacity-70 grayscale contrast-[1.05] bg-slate-100 border-slate-200/90"
                                                  : "w-[215px] scale-100 z-10 grayscale contrast-[1.05] bg-[#EEF2F6] border-slate-200/90 shadow-xs hover:border-[#0E6CAC]/30"
                                        )}
                                    >
                                        {/* Background Watermark Curve (Matches Youth Innovation style) */}
                                        <svg
                                            className={cn(
                                                "pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-slate-300/40 transition-all duration-700 ease-out",
                                                isExpanded ? "scale-120 text-blue-200/60 rotate-12" : "scale-100"
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
                                                    className={cn(
                                                        "h-full w-full object-cover object-[center_top] transition-all duration-700 ease-out",
                                                        // Photo Zooms In & shifts to the left when expanded!
                                                        isExpanded
                                                            ? "scale-120 -translate-x-12 grayscale-0 contrast-100"
                                                            : "scale-100 translate-x-0 grayscale contrast-[1.05]"
                                                    )}
                                                />
                                                {/* Soft white gradient on right half when expanded for crystal-clear text readability */}
                                                <div
                                                    className={cn(
                                                        "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/85 to-white transition-opacity duration-500",
                                                        isExpanded ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                            </div>
                                        ) : (
                                            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden">
                                                <div
                                                    className={cn(
                                                        "relative z-10 flex flex-col items-center transition-all duration-700 ease-out",
                                                        isExpanded
                                                            ? "scale-120 -translate-x-12"
                                                            : "scale-100 translate-x-0"
                                                    )}
                                                >
                                                    <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-3xl border border-blue-200/80 bg-white/95 text-[#0E6CAC] shadow-md transition-all duration-500">
                                                        <PersonIcon className="h-12 w-12 text-[#0E6CAC]" />
                                                    </div>
                                                    <span className="rounded-full border border-blue-200/60 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0D3F70] shadow-2xs">
                                                        {duta.tag}
                                                    </span>
                                                </div>
                                                {/* Soft white gradient on right half when expanded */}
                                                <div
                                                    className={cn(
                                                        "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-white transition-opacity duration-500",
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
                                                        : "border-slate-200/80 bg-white/95 text-[#0D3F70]"
                                                )}
                                            >
                                                {duta.tag}
                                            </span>
                                            {isExpanded && (
                                                <span className="text-[10px] font-black uppercase tracking-wider text-[#0E6CAC] animate-in fade-in duration-300">
                                                    KIPAN RI
                                                </span>
                                            )}
                                        </div>

                                        {/* Idle Resting Pill (Visible when unhovered, hides on expansion) */}
                                        <div
                                            className={cn(
                                                "absolute bottom-5 left-4 right-4 z-10 text-center transition-all duration-300",
                                                isExpanded ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"
                                            )}
                                        >
                                            <div className="rounded-2xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-sm backdrop-blur-md">
                                                <p className="truncate text-xs font-black text-slate-800">
                                                    {duta.title}
                                                </p>
                                                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-[#0E6CAC]">
                                                    {duta.role}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Expanded Information Column on the Right (Exact Youth Innovation Placement) */}
                                        <div
                                            className={cn(
                                                "absolute bottom-6 right-5 top-16 z-20 w-[185px] flex flex-col justify-center text-left transition-all duration-500 ease-out",
                                                isExpanded
                                                    ? "pointer-events-auto translate-x-0 opacity-100"
                                                    : "pointer-events-none translate-x-6 opacity-0"
                                            )}
                                        >
                                            <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#0E6CAC]">
                                                {duta.scope}
                                            </span>
                                            <h4 className="text-lg font-black leading-tight text-[#0D3F70]">
                                                {duta.title}
                                            </h4>
                                            <p className="mt-1 text-xs font-black uppercase tracking-wide text-emerald-600">
                                                {duta.role}
                                            </p>
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

            {/* ========================================================= */}
            {/* BAGIAN 3: LANDASAN HUKUM & LEGALITAS NEGARA               */}
            {/* ========================================================= */}
            <section
                id="legalitas"
                className="scroll-mt-20 border-y border-slate-200 bg-white py-16 sm:py-20"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 max-w-3xl">
                        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D3F70]">
                            <FileTextIcon className="h-3.5 w-3.5 text-[#0E6CAC]" />
                            <span>Dasar Hukum &amp; Legalitas Resmi</span>
                        </div>
                        <h2 className="text-2xl font-extrabold tracking-tight text-[#0D3F70] sm:text-3xl">
                            Payung Regulasi Gerakan KIPAN RI
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                            KIPAN bukan sekadar komunitas sukarela, melainkan
                            gerakan resmi yang didasarkan pada regulasi negara
                            dan mandat undang-undang republik.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-slate-300">
                            <div>
                                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-xs font-bold text-[#0D3F70]">
                                    UU
                                </div>
                                <h3 className="mb-2 text-base font-bold leading-snug text-[#0D3F70]">
                                    UU No. 40 Tahun 2009 tentang Kepemudaan
                                </h3>
                                <p className="mb-4 text-xs leading-relaxed text-slate-600">
                                    Menegaskan peran strategis pemuda sebagai
                                    subjek pembangunan nasional dan agen moral
                                    dalam menjaga ketahanan bangsa dari bahaya
                                    destruktif peredaran gelap narkoba.
                                </p>
                            </div>
                            <span className="border-t border-slate-200/80 pt-3 text-[11px] font-semibold uppercase tracking-wider text-[#0E6CAC]">
                                Mandat Undang-Undang RI
                            </span>
                        </div>

                        <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-slate-300">
                            <div>
                                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-xs font-bold text-amber-900">
                                    INPRES
                                </div>
                                <h3 className="mb-2 text-base font-bold leading-snug text-[#0D3F70]">
                                    Inpres No. 2 Tahun 2020 tentang Rencana Aksi
                                    Nasional P4GN
                                </h3>
                                <p className="mb-4 text-xs leading-relaxed text-slate-600">
                                    Menginstruksikan seluruh kementerian,
                                    lembaga, dan pemerintah daerah untuk
                                    melaksanakan aksi pencegahan, deteksi dini,
                                    dan pemberantasan penyalahgunaan narkotika
                                    bersama masyarakat.
                                </p>
                            </div>
                            <span className="border-t border-slate-200/80 pt-3 text-[11px] font-semibold uppercase tracking-wider text-amber-800">
                                Instruksi Presiden Republik Indonesia
                            </span>
                        </div>

                        <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-slate-300">
                            <div>
                                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-xs font-bold text-emerald-900">
                                    MOU
                                </div>
                                <h3 className="mb-2 text-base font-bold leading-snug text-[#0D3F70]">
                                    Perjanjian Kerja Sama Kemenpora RI &amp; BNN
                                    RI
                                </h3>
                                <p className="mb-4 text-xs leading-relaxed text-slate-600">
                                    Nota kesepahaman operasional antara
                                    Kementerian Pemuda &amp; Olahraga bersama
                                    Badan Narkotika Nasional mengenai fasilitasi
                                    pelatihan kader inti di 38 provinsi.
                                </p>
                            </div>
                            <span className="border-t border-slate-200/80 pt-3 text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                                Kerja Sama Lintas Lembaga Negara
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* BAGIAN 4: VISI & 4 PILAR MISI                             */}
            {/* ========================================================= */}
            <section id="visi-misi" className="scroll-mt-20 py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 max-w-3xl">
                        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D3F70]">
                            <TargetIcon className="h-3.5 w-3.5 text-[#0E6CAC]" />
                            <span>Visi &amp; Misi Gerakan</span>
                        </div>
                        <h2 className="text-2xl font-extrabold tracking-tight text-[#0D3F70] sm:text-3xl">
                            Arah &amp; Panduan Gerakan Nasional
                        </h2>
                    </div>

                    {/* Banner Visi */}
                    <div
                        className="mb-8 rounded-2xl border border-blue-900 p-8 text-white sm:p-10"
                        style={{
                            backgroundColor: '#0D3F70',
                            backgroundImage:
                                'linear-gradient(180deg, #092B4D 0%, #0D3F70 100%)',
                        }}
                    >
                        <div className="max-w-3xl">
                            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-amber-300">
                                Visi KIPAN RI
                            </span>
                            <h3 className="mb-3 text-xl font-extrabold leading-snug sm:text-2xl lg:text-3xl">
                                "Mewujudkan Generasi Pemuda Indonesia yang
                                Tangguh, Berkarakter, Berdaya Saing, dan Bersih
                                dari Narkoba Menuju Indonesia Emas 2045."
                            </h3>
                            <p className="text-xs font-normal leading-relaxed text-blue-100 sm:text-sm">
                                Membangun benteng moral pemuda melalui
                                kemandirian, kepeloporan, dan aksi nyata
                                terorganisir dari perkotaan hingga pelosok desa.
                            </p>
                        </div>
                    </div>

                    {/* 4 Pilar Misi */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-sm font-bold text-[#0D3F70]">
                                1
                            </div>
                            <div>
                                <h4 className="mb-1.5 text-base font-bold text-[#0D3F70]">
                                    Edukasi &amp; Deteksi Dini
                                </h4>
                                <p className="text-xs leading-relaxed text-slate-600">
                                    Menyosialisasikan bahaya narkoba secara
                                    intensif melalui pendekatan sebaya di
                                    sekolah, kampus, dan ruang komunitas anak
                                    muda.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-sm font-bold text-[#0D3F70]">
                                2
                            </div>
                            <div>
                                <h4 className="mb-1.5 text-base font-bold text-[#0D3F70]">
                                    Kaderisasi Terstruktur Berkelanjutan
                                </h4>
                                <p className="text-xs leading-relaxed text-slate-600">
                                    Mempersiapkan kader pemuda bersertifikat
                                    yang memiliki wawasan kepemimpinan, regulasi
                                    narkotika, dan keterampilan konseling
                                    sebaya.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-sm font-bold text-[#0D3F70]">
                                3
                            </div>
                            <div>
                                <h4 className="mb-1.5 text-base font-bold text-[#0D3F70]">
                                    Aksi Kreatif &amp; Pemberdayaan Positif
                                </h4>
                                <p className="text-xs leading-relaxed text-slate-600">
                                    Menyalurkan energi dan potensi kreatif anak
                                    muda ke dalam kompetisi olahraga, wirausaha
                                    muda, seni budaya, serta bakti sosial
                                    lingkungan.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-sm font-bold text-[#0D3F70]">
                                4
                            </div>
                            <div>
                                <h4 className="mb-1.5 text-base font-bold text-[#0D3F70]">
                                    Kolaborasi Sinergis Multisektor
                                </h4>
                                <p className="text-xs leading-relaxed text-slate-600">
                                    Membangun kemitraan strategis pentahelix
                                    antara pemerintah, aparat penegak hukum,
                                    akademisi, media, dan dunia usaha dalam
                                    mewujudkan Indonesia Bersinar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* BAGIAN 5: CALL TO ACTION (CTA) TERPADU                    */}
            {/* ========================================================= */}
            <section
                className="relative border-t border-blue-950 py-16 text-white sm:py-20"
                style={{
                    backgroundColor: '#0D3F70',
                    backgroundImage:
                        'linear-gradient(180deg, #092B4D 0%, #061C33 100%)',
                }}
            >
                <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                        <CheckCircledIcon className="h-4 w-4 shrink-0 text-amber-300" />
                        <span>Aksi Nyata Pemuda Bersinar</span>
                    </div>

                    <h2 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                        Siap Mengambil Peran Bersama KIPAN RI?
                    </h2>

                    <p className="mx-auto mb-8 max-w-2xl text-sm font-normal leading-relaxed text-blue-100 sm:text-base">
                        Bergabunglah dalam jejaring Kader Inti Pemuda Anti
                        Narkoba di 38 provinsi seluruh Indonesia. Bersama
                        Kemenpora RI dan BNN RI, mari lindungi sahabat sebaya
                        dan wujudkan lingkungan pemuda yang sehat, berprestasi,
                        dan bersih dari narkotika.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                        <a
                            href="/kontak"
                            className="shadow-xs inline-flex w-full items-center justify-center gap-2 rounded-lg px-7 py-3 text-xs font-bold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:w-auto sm:text-sm"
                            style={{
                                backgroundColor: '#FACB04',
                                color: '#0D3F70',
                            }}
                        >
                            <PersonIcon className="h-4 w-4" />
                            <span>Pendaftaran &amp; Informasi Kader</span>
                        </a>

                        <a
                            href="/#kegiatan"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto sm:text-sm"
                        >
                            <span>Lihat Agenda &amp; Berita Aksi</span>
                        </a>
                    </div>

                    {/* Trust markers row */}
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/15 pt-8 text-xs font-medium text-blue-100 sm:gap-8">
                        <span className="flex items-center gap-2">
                            <CheckCircledIcon className="h-4 w-4 text-amber-300" />
                            Pembinaan Resmi Kemenpora RI
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircledIcon className="h-4 w-4 text-amber-300" />
                            Kurikulum Teknis P4GN BNN RI
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircledIcon className="h-4 w-4 text-amber-300" />
                            Jejaring 38 Provinsi Nusantara
                        </span>
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
