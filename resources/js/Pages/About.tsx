import { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';
import {
    PersonIcon,
    FileTextIcon,
    GlobeIcon,
    TargetIcon,
    BookmarkFilledIcon,
    ArrowDownIcon,
    DownloadIcon,
    BadgeIcon,
    ChevronRightIcon,
    CheckCircledIcon,
    LayersIcon,
} from '@radix-ui/react-icons';

// Data Struktur Organisasi
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
        description: 'Penanggung jawab pembinaan generasi muda, kepemimpinan pemuda nasional, dan fasilitasi program strategis KIPAN RI.',
    },
    {
        name: 'Kepala Badan Narkotika Nasional RI',
        title: 'Kepala BNN Republik Indonesia',
        role: 'Pembina Teknis P4GN',
        institution: 'Badan Narkotika Nasional (BNN RI)',
        level: 'pembina',
        badge: 'Instansi Teknis Pembina',
        photo: '/logo-bnn.jpg',
        description: 'Pembina materi edukasi, standardisasi kurikulum pelatihan kader, modul deteksi dini narkoba, dan jaringan rehabilitasi.',
    },
    {
        name: 'Deputi Bidang Pemberdayaan Pemuda',
        title: 'Deputi Pemberdayaan Pemuda Kemenpora RI',
        role: 'Dewan Pengarah Kepemudaan',
        institution: 'Kemenpora RI',
        level: 'pembina',
        badge: 'Pengarah Teknis',
        photo: '/logo-kipan.jpg',
        description: 'Mengarahkan standardisasi kaderisasi, alokasi program kepemudaan nasional, dan sinergi bersama Dispora seluruh Indonesia.',
    },
    {
        name: 'Deputi Bidang Pencegahan BNN RI',
        title: 'Deputi Pencegahan BNN Republik Indonesia',
        role: 'Dewan Pengarah P4GN',
        institution: 'BNN RI',
        level: 'pembina',
        badge: 'Pengarah P4GN',
        photo: '/logo-bnn.jpg',
        description: 'Mengawasi sinkronisasi rencana aksi nasional P4GN ke dalam program edukasi sebaya dan kurikulum Training of Trainers (ToT).',
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
        description: 'Memimpin roda organisasi secara nasional, mengoordinasikan 38 koordinator wilayah, dan menjaga arah strategis gerakan.',
    },
    {
        name: 'Wakil Koordinator Nasional',
        title: 'Wakil Koordinator Nasional KIPAN RI',
        role: 'Wakil Pimpinan Eksekutif',
        institution: 'Sekretariat Nasional KIPAN RI',
        level: 'pusat',
        badge: 'Presidium Pusat',
        photo: '/logo-kipan.jpg',
        description: 'Membantu Kornas dalam supervisi operasional, evaluasi program kerja lintas bidang, dan koordinasi harian.',
    },
    {
        name: 'Sekretaris Jenderal',
        title: 'Sekretaris Jenderal KIPAN RI',
        role: 'Tata Kelola Administrasi & Jaringan',
        institution: 'Sekretariat Nasional KIPAN RI',
        level: 'pusat',
        badge: 'Administrasi & Legal',
        photo: '/logo-kipan.jpg',
        description: 'Mengelola database keanggotaan kader nasional, legalitas, persuratan resmi, dan tata kelola organisasi.',
    },
    {
        name: 'Bendahara Umum',
        title: 'Bendahara Umum KIPAN RI',
        role: 'Akuntabilitas & Manajemen Keuangan',
        institution: 'Sekretariat Nasional KIPAN RI',
        level: 'pusat',
        badge: 'Keuangan & Aset',
        photo: '/logo-kipan.jpg',
        description: 'Mengelola anggaran kerja sama, transparansi keuangan gerakan, serta akuntabilitas program pemberdayaan pemuda.',
    },
];

const BIDANG_KERJA = [
    {
        id: 'kaderisasi',
        no: '01',
        name: 'Bidang Kaderisasi & Pelatihan Pemuda',
        focus: 'Training of Trainers (ToT), standardisasi instruktur daerah, sertifikasi kader inti pemuda, dan modul kepemimpinan nasional.',
        target: '50.000+ Kader Terlatih',
    },
    {
        id: 'edukasi',
        no: '02',
        name: 'Bidang Edukasi & Sosialisasi Sebaya',
        focus: 'Program KIPAN Goes to School, Goes to Campus, workshop deteksi dini bahaya zat adiktif, dan edukasi komunitas anak muda.',
        target: '1.200+ Sosialisasi / Tahun',
    },
    {
        id: 'advokasi',
        no: '03',
        name: 'Bidang Advokasi & Perlindungan Pemuda',
        focus: 'Layanan pendampingan sebaya (peer counseling), fasilitasi rujukan rehabilitasi sukarela tanpa stigma bersama balai BNN RI.',
        target: 'Layanan Pendampingan Sahabat',
    },
    {
        id: 'sinergi',
        no: '04',
        name: 'Bidang Hubungan Antar Lembaga & Kemitraan',
        focus: 'Membangun sinergi kolaboratif bersama Kemenpora, BNN, Dispora 38 Provinsi, POLRI, perguruan tinggi, dan organisasi pemuda.',
        target: 'Kolaborasi 38 Provinsi',
    },
    {
        id: 'media',
        no: '05',
        name: 'Bidang Media, Digital & Komunikasi Publik',
        focus: 'Pengelolaan portal resmi KIPAN RI, kampanye digital kreatif di media sosial, publikasi kabar aksi daerah, dan verifikasi data.',
        target: 'Kampanye Positif Ramah Pemuda',
    },
    {
        id: 'pemberdayaan',
        no: '06',
        name: 'Bidang Minat, Bakat, Seni & Wirausaha Muda',
        focus: 'Penyaluran energi pemuda ke kegiatan positif alternatif: kompetisi olahraga sehat, festival karya kreatif, dan inkubasi usaha.',
        target: 'Pemberdayaan Positif Solutif',
    },
];

// Data Direktori Wilayah 38 Provinsi
interface RegionGroup {
    regionName: string;
    provinces: { name: string; capital: string; code: string; activeStatus: string }[];
}

const REGION_DIRECTORIES: RegionGroup[] = [
    {
        regionName: 'Sumatera (10 Provinsi)',
        provinces: [
            { name: 'Aceh', capital: 'Banda Aceh', code: 'KIPAN-ACH', activeStatus: 'Aktif' },
            { name: 'Sumatera Utara', capital: 'Medan', code: 'KIPAN-SUMUT', activeStatus: 'Aktif' },
            { name: 'Sumatera Barat', capital: 'Padang', code: 'KIPAN-SUMBAR', activeStatus: 'Aktif' },
            { name: 'Riau', capital: 'Pekanbaru', code: 'KIPAN-RIAU', activeStatus: 'Aktif' },
            { name: 'Kepulauan Riau', capital: 'Tanjungpinang', code: 'KIPAN-KEPRI', activeStatus: 'Aktif' },
            { name: 'Jambi', capital: 'Jambi', code: 'KIPAN-JMB', activeStatus: 'Aktif' },
            { name: 'Sumatera Selatan', capital: 'Palembang', code: 'KIPAN-SUMSEL', activeStatus: 'Aktif' },
            { name: 'Kepulauan Bangka Belitung', capital: 'Pangkalpinang', code: 'KIPAN-BABEL', activeStatus: 'Aktif' },
            { name: 'Bengkulu', capital: 'Bengkulu', code: 'KIPAN-BKL', activeStatus: 'Aktif' },
            { name: 'Lampung', capital: 'Bandar Lampung', code: 'KIPAN-LPG', activeStatus: 'Aktif' },
        ],
    },
    {
        regionName: 'Jawa, Bali & Nusa Tenggara (8 Provinsi)',
        provinces: [
            { name: 'DKI Jakarta', capital: 'Jakarta', code: 'KIPAN-DKI', activeStatus: 'Aktif' },
            { name: 'Jawa Barat', capital: 'Bandung', code: 'KIPAN-JABAR', activeStatus: 'Aktif' },
            { name: 'Jawa Tengah', capital: 'Semarang', code: 'KIPAN-JATENG', activeStatus: 'Aktif' },
            { name: 'DI Yogyakarta', capital: 'Yogyakarta', code: 'KIPAN-DIY', activeStatus: 'Aktif' },
            { name: 'Jawa Timur', capital: 'Surabaya', code: 'KIPAN-JATIM', activeStatus: 'Aktif' },
            { name: 'Banten', capital: 'Serang', code: 'KIPAN-BTN', activeStatus: 'Aktif' },
            { name: 'Bali', capital: 'Denpasar', code: 'KIPAN-BALI', activeStatus: 'Aktif' },
            { name: 'Nusa Tenggara Barat', capital: 'Mataram', code: 'KIPAN-NTB', activeStatus: 'Aktif' },
            { name: 'Nusa Tenggara Timur', capital: 'Kupang', code: 'KIPAN-NTT', activeStatus: 'Aktif' },
        ],
    },
    {
        regionName: 'Kalimantan (5 Provinsi)',
        provinces: [
            { name: 'Kalimantan Barat', capital: 'Pontianak', code: 'KIPAN-KALBAR', activeStatus: 'Aktif' },
            { name: 'Kalimantan Tengah', capital: 'Palangka Raya', code: 'KIPAN-KALTENG', activeStatus: 'Aktif' },
            { name: 'Kalimantan Selatan', capital: 'Banjarmasin', code: 'KIPAN-KALSEL', activeStatus: 'Aktif' },
            { name: 'Kalimantan Timur', capital: 'Samarinda', code: 'KIPAN-KALTIM', activeStatus: 'Aktif' },
            { name: 'Kalimantan Utara', capital: 'Tanjung Selor', code: 'KIPAN-KALTARA', activeStatus: 'Aktif' },
        ],
    },
    {
        regionName: 'Sulawesi (6 Provinsi)',
        provinces: [
            { name: 'Sulawesi Utara', capital: 'Manado', code: 'KIPAN-SULUT', activeStatus: 'Aktif' },
            { name: 'Sulawesi Tengah', capital: 'Palu', code: 'KIPAN-SULTENG', activeStatus: 'Aktif' },
            { name: 'Sulawesi Selatan', capital: 'Makassar', code: 'KIPAN-SULSEL', activeStatus: 'Aktif' },
            { name: 'Sulawesi Tenggara', capital: 'Kendari', code: 'KIPAN-SULTRA', activeStatus: 'Aktif' },
            { name: 'Gorontalo', capital: 'Gorontalo', code: 'KIPAN-GTO', activeStatus: 'Aktif' },
            { name: 'Sulawesi Barat', capital: 'Mamuju', code: 'KIPAN-SULBAR', activeStatus: 'Aktif' },
        ],
    },
    {
        regionName: 'Maluku & Papua (9 Provinsi)',
        provinces: [
            { name: 'Maluku', capital: 'Ambon', code: 'KIPAN-MALUKU', activeStatus: 'Aktif' },
            { name: 'Maluku Utara', capital: 'Sofifi', code: 'KIPAN-MALUT', activeStatus: 'Aktif' },
            { name: 'Papua', capital: 'Jayapura', code: 'KIPAN-PAPUA', activeStatus: 'Aktif' },
            { name: 'Papua Barat', capital: 'Manokwari', code: 'KIPAN-PB', activeStatus: 'Aktif' },
            { name: 'Papua Selatan', capital: 'Merauke', code: 'KIPAN-PS', activeStatus: 'Aktif' },
            { name: 'Papua Tengah', capital: 'Nabire', code: 'KIPAN-PT', activeStatus: 'Aktif' },
            { name: 'Papua Pegunungan', capital: 'Jayawijaya', code: 'KIPAN-PP', activeStatus: 'Aktif' },
            { name: 'Papua Barat Daya', capital: 'Sorong', code: 'KIPAN-PBD', activeStatus: 'Aktif' },
        ],
    },
];

export default function About() {
    const [selectedRegionIdx, setSelectedRegionIdx] = useState<number>(0);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <Head title="Tentang KIPAN RI — Struktur Organisasi, Visi Misi & Profil Lengkap" />
            <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-800">
                <Navbar />

                {/* ========================================================= */}
                {/* HERO SECTION TENTANG KAMI (HERO RESMI DENGAN LATAR NAVY)   */}
                {/* ========================================================= */}
                <section className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 lg:pb-20 bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] text-white overflow-hidden border-b border-blue-900/60">
                    {/* Subtle Grid Texture */}
                    <div
                        className="absolute inset-0 opacity-15 pointer-events-none"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
                            backgroundSize: '32px 32px',
                        }}
                    />

                    {/* Ambient Glows */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-xs font-semibold text-blue-200/90 mb-4">
                            <a href="/" className="hover:text-amber-300 transition-colors">Beranda</a>
                            <span className="text-blue-300/60">/</span>
                            <span className="text-amber-400 font-bold">Tentang Kami</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                            {/* Left Column: Hero Text & Actions */}
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-amber-300 tracking-wider uppercase mb-4 shadow-sm">
                                    <BadgeIcon className="w-3.5 h-3.5 text-amber-400" />
                                    <span>Gerakan Pemuda Binaan Kemenpora &amp; BNN RI</span>
                                </div>

                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                                    Membangun Generasi Tangguh, Bebas Narkoba Menuju Indonesia Emas
                                </h1>

                                <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed mb-8 max-w-2xl">
                                    Kader Inti Pemuda Anti Narkoba (KIPAN) Republik Indonesia adalah wadah strategis kepemudaan 
                                    resmi yang mengintegrasikan arahan pemerintah pusat dengan kepeloporan kader muda di 38 provinsi 
                                    sebagai benteng moral bangsa.
                                </p>

                                {/* Hero CTAs */}
                                <div className="flex flex-wrap items-center gap-3.5 mb-8">
                                    <button
                                        onClick={() => scrollToSection('struktur')}
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-[#0D3F70] text-xs font-black uppercase tracking-wider transition-all shadow-md hover:scale-105"
                                    >
                                        <PersonIcon className="w-4 h-4" />
                                        <span>Lihat Struktur Organisasi</span>
                                        <ArrowDownIcon className="w-4 h-4" />
                                    </button>

                                    <button
                                        onClick={() => scrollToSection('legalitas')}
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/20"
                                    >
                                        <FileTextIcon className="w-4 h-4" />
                                        <span>Landasan Hukum &amp; Legalitas</span>
                                    </button>
                                </div>

                                {/* Hero Badges Info Bar */}
                                <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-blue-200/90">
                                    <div className="flex items-center gap-2 font-medium">
                                        <CheckCircledIcon className="w-4 h-4 text-emerald-400" />
                                        <span>Dasar Hukum UU No. 40/2009</span>
                                    </div>
                                    <div className="flex items-center gap-2 font-medium">
                                        <CheckCircledIcon className="w-4 h-4 text-emerald-400" />
                                        <span>Inpres No. 2/2020 (P4GN)</span>
                                    </div>
                                    <div className="flex items-center gap-2 font-medium">
                                        <CheckCircledIcon className="w-4 h-4 text-emerald-400" />
                                        <span>38 Provinsi &amp; 514 Kab/Kota</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Institutional Identity Card */}
                            <div className="lg:col-span-5">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl relative">
                                    <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-5">
                                        <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                                            <LayersIcon className="w-4 h-4" />
                                            <span>Sekretariat Nasional</span>
                                        </div>
                                        <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full">
                                            Status Resmi Aktif
                                        </span>
                                    </div>

                                    {/* Logos Collaboration Showcase */}
                                    <div className="flex items-center justify-center gap-4 py-4 mb-5 bg-white/5 rounded-2xl border border-white/10">
                                        <div className="w-16 h-16 rounded-xl bg-white p-1.5 shadow-sm flex items-center justify-center">
                                            <img
                                                src="/logo-kipan.jpg"
                                                alt="Logo KIPAN RI"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="text-xl font-bold text-white/50">+</div>
                                        <div className="w-16 h-16 rounded-xl bg-white p-1.5 shadow-sm flex items-center justify-center">
                                            <img
                                                src="/logo-bnn.jpg"
                                                alt="Logo BNN RI"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-xs">
                                        <div className="p-3 bg-white/10 rounded-xl border border-white/10 flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-amber-400 text-[#0D3F70] flex items-center justify-center font-bold text-[11px] shrink-0">
                                                1
                                            </span>
                                            <div>
                                                <div className="font-bold text-white">Pembina Utama Negara</div>
                                                <div className="text-blue-200/80 text-[11px]">Kementerian Pemuda dan Olahraga RI</div>
                                            </div>
                                        </div>

                                        <div className="p-3 bg-white/10 rounded-xl border border-white/10 flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-amber-400 text-[#0D3F70] flex items-center justify-center font-bold text-[11px] shrink-0">
                                                2
                                            </span>
                                            <div>
                                                <div className="font-bold text-white">Pembina Teknis P4GN</div>
                                                <div className="text-blue-200/80 text-[11px]">Badan Narkotika Nasional Republik Indonesia</div>
                                            </div>
                                        </div>

                                        <div className="p-3 bg-white/10 rounded-xl border border-white/10 flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-amber-400 text-[#0D3F70] flex items-center justify-center font-bold text-[11px] shrink-0">
                                                3
                                            </span>
                                            <div>
                                                <div className="font-bold text-white">Pelaksana Aksi Daerah</div>
                                                <div className="text-blue-200/80 text-[11px]">Koordinator Wilayah di 38 Provinsi Nusantara</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Jump Subnav Bar */}
                        <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center gap-2 sm:gap-3">
                            <span className="text-xs font-bold text-blue-200/80 mr-2 uppercase tracking-wider">
                                Menu Halaman:
                            </span>
                            <button
                                onClick={() => scrollToSection('struktur')}
                                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-400 text-[#0D3F70] hover:bg-amber-300 transition-colors flex items-center gap-1.5 shadow-xs"
                            >
                                <PersonIcon className="w-3.5 h-3.5" />
                                <span>1. Struktur Organisasi (Utama)</span>
                            </button>
                            <button
                                onClick={() => scrollToSection('legalitas')}
                                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center gap-1.5"
                            >
                                <FileTextIcon className="w-3.5 h-3.5" />
                                <span>2. Landasan Hukum</span>
                            </button>
                            <button
                                onClick={() => scrollToSection('visi-misi')}
                                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center gap-1.5"
                            >
                                <TargetIcon className="w-3.5 h-3.5" />
                                <span>3. Visi &amp; Misi</span>
                            </button>
                            <button
                                onClick={() => scrollToSection('filosofi')}
                                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center gap-1.5"
                            >
                                <BookmarkFilledIcon className="w-3.5 h-3.5" />
                                <span>4. Filosofi Lambang</span>
                            </button>
                            <button
                                onClick={() => scrollToSection('jejaring')}
                                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center gap-1.5"
                            >
                                <GlobeIcon className="w-3.5 h-3.5" />
                                <span>5. Jejaring 38 Provinsi</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* ========================================================= */}
                {/* BAGIAN 1: STRUKTUR ORGANISASI (PRIORITAS NOMOR 1 & WAJIB)  */}
                {/* ========================================================= */}
                <main className="flex-1 pb-24">
                    <section id="struktur" className="py-16 sm:py-20 scroll-mt-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-xs font-bold text-[#0D3F70] uppercase tracking-wider mb-2.5">
                                    <PersonIcon className="w-3.5 h-3.5 text-[#0E6CAC]" />
                                    <span>Prioritas Utama #1</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0D3F70] tracking-tight">
                                    Struktur Organisasi &amp; Kepengurusan KIPAN RI
                                </h2>
                                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                                    Bagan struktur kepengurusan nasional yang memadukan pembinaan strategis pemerintah pusat 
                                    dengan kepemimpinan eksekutif pemuda di 38 provinsi di seluruh Nusantara.
                                </p>
                            </div>

                            {/* TINGKAT 1: DEWAN PEMBINA NEGARA */}
                            <div className="mb-14">
                                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
                                    <span className="w-8 h-8 rounded-lg bg-[#0D3F70] text-white flex items-center justify-center font-bold text-xs">
                                        I
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0D3F70]">Dewan Pembina &amp; Pengarah Nasional (Pemerintah RI)</h3>
                                        <p className="text-xs text-slate-500">Payung pembina resmi dan pengarah kebijakan makro kepemudaan dan P4GN</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {DEWAN_PEMBINA.map((leader, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-[#0E6CAC] hover:shadow-md transition-all flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 border border-slate-200 p-3 mb-4 flex items-center justify-center relative">
                                                    <img
                                                        src={leader.photo}
                                                        alt={leader.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                    <span className="absolute top-2 left-2 bg-[#0D3F70] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                                                        {leader.badge}
                                                    </span>
                                                </div>

                                                <h4 className="text-base font-bold text-[#0D3F70] leading-snug mb-1">
                                                    {leader.name}
                                                </h4>
                                                <div className="text-xs font-bold text-[#0E6CAC] uppercase tracking-wide mb-1.5">
                                                    {leader.role}
                                                </div>
                                                <p className="text-xs text-slate-500 font-medium mb-3">
                                                    {leader.institution}
                                                </p>
                                                <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                                                    {leader.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* TINGKAT 2: PENGURUS PUSAT (SEKRETARIAT NASIONAL) */}
                            <div className="mb-14">
                                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
                                    <span className="w-8 h-8 rounded-lg bg-[#0E6CAC] text-white flex items-center justify-center font-bold text-xs">
                                        II
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0D3F70]">Pengurus Pusat (Sekretariat Nasional KIPAN RI)</h3>
                                        <p className="text-xs text-slate-500">Pimpinan eksekutif pemuda penggerak operasional gerakan nasional</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {PENGURUS_PUSAT.map((leader, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-[#0E6CAC] hover:shadow-md transition-all flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-blue-50/50 border border-slate-200 p-3 mb-4 flex items-center justify-center relative">
                                                    <img
                                                        src={leader.photo}
                                                        alt={leader.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                    <span className="absolute top-2 left-2 bg-[#0E6CAC] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                                                        {leader.badge}
                                                    </span>
                                                </div>

                                                <h4 className="text-base font-bold text-[#0D3F70] leading-snug mb-1">
                                                    {leader.name}
                                                </h4>
                                                <div className="text-xs font-bold text-[#0E6CAC] uppercase tracking-wide mb-1.5">
                                                    {leader.role}
                                                </div>
                                                <p className="text-xs text-slate-500 font-medium mb-3">
                                                    {leader.institution}
                                                </p>
                                                <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                                                    {leader.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* TINGKAT 3: 6 BIDANG KERJA STRATEGIS */}
                            <div className="mb-14">
                                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
                                    <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xs">
                                        III
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0D3F70]">6 Bidang Kerja &amp; Divisi Teknis</h3>
                                        <p className="text-xs text-slate-500">Fokus program aksi nyata dalam pencegahan, kaderisasi, advokasi, dan kemitraan</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {BIDANG_KERJA.map((bidang) => (
                                        <div
                                            key={bidang.id}
                                            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-[#0E6CAC] hover:shadow-md transition-all flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#0E6CAC] font-black text-sm flex items-center justify-center border border-blue-100">
                                                        {bidang.no}
                                                    </span>
                                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                                        Divisi Teknis
                                                    </span>
                                                </div>
                                                <h4 className="text-base font-bold text-[#0D3F70] mb-2 leading-snug">
                                                    {bidang.name}
                                                </h4>
                                                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                                    {bidang.focus}
                                                </p>
                                            </div>
                                            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                                                <span className="text-slate-400 font-medium">Target Capaian:</span>
                                                <span className="font-bold text-[#0E6CAC]">{bidang.target}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* TINGKAT 4: HIERARKI DAERAH HINGGA KAMPUS & SEKOLAH */}
                            <div className="bg-gradient-to-br from-white to-blue-50/40 border border-slate-200 rounded-3xl p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                                        IV
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0D3F70]">Jejaring Daerah &amp; Satuan Tugas Lapangan</h3>
                                        <p className="text-xs text-slate-500">Struktur koordinasi di tingkat provinsi, kabupaten/kota, hingga basis komunitas</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                                        <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md inline-block mb-2">
                                            Tingkat Provinsi (38 Provinsi)
                                        </div>
                                        <h4 className="text-sm font-bold text-[#0D3F70] mb-1">
                                            Koordinator Wilayah (Korwil)
                                        </h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Bersinergi dengan Dispora Provinsi dan BNN Provinsi (BNNP) dalam supervisi kaderisasi dan program tingkat provinsi.
                                        </p>
                                    </div>

                                    <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                                        <div className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-2">
                                            Tingkat Kab / Kota (514 Wilayah)
                                        </div>
                                        <h4 className="text-sm font-bold text-[#0D3F70] mb-1">
                                            Koordinator Cabang (Korcab)
                                        </h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Menjadi garda eksekusi sosialisasi tatap muka bersama Dispora Kab/Kota dan BNNK di tingkat masyarakat lokal.
                                        </p>
                                    </div>

                                    <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                                        <div className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md inline-block mb-2">
                                            Basis Sekolah &amp; Kampus
                                        </div>
                                        <h4 className="text-sm font-bold text-[#0D3F70] mb-1">
                                            Satgas Relawan Pelajar Bersinar
                                        </h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Duta sebaya yang aktif menjaga lingkungan sekolah dan perguruan tinggi dari penyusupan zat adiktif dan narkotika.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* BAGIAN 2: LANDASAN HUKUM & LEGALITAS NEGARA */}
                    <section id="legalitas" className="py-16 bg-white border-y border-slate-200 scroll-mt-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                                    <FileTextIcon className="w-3.5 h-3.5" />
                                    <span>Legalitas &amp; Landasan Hukum</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-black text-[#0D3F70] tracking-tight">
                                    Payung Hukum Gerakan KIPAN RI
                                </h2>
                                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                    KIPAN bukan sekadar komunitas sukarela, melainkan gerakan resmi yang didasarkan pada regulasi negara dan mandat undang-undang republik.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-[#0E6CAC] transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0D3F70] flex items-center justify-center font-bold text-xs mb-4">
                                            UU
                                        </div>
                                        <h3 className="text-base font-bold text-[#0D3F70] mb-2">
                                            UU No. 40 Tahun 2009 tentang Kepemudaan
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                            Menegaskan peran strategis pemuda sebagai subjek pembangunan nasional dan agen moral dalam menjaga ketahanan bangsa dari bahaya destruktif peredaran gelap narkoba.
                                        </p>
                                    </div>
                                    <span className="text-[11px] font-bold text-[#0E6CAC] uppercase tracking-wider">
                                        Mandat Undang-Undang RI
                                    </span>
                                </div>

                                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-[#0E6CAC] transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs mb-4">
                                            INPRES
                                        </div>
                                        <h3 className="text-base font-bold text-[#0D3F70] mb-2">
                                            Inpres No. 2 Tahun 2020 tentang Rencana Aksi Nasional P4GN
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                            Menginstruksikan seluruh kementerian, lembaga, dan pemerintah daerah untuk melaksanakan aksi pencegahan, deteksi dini, dan pemberantasan penyalahgunaan narkotika bersama masyarakat.
                                        </p>
                                    </div>
                                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                                        Instruksi Presiden Republik Indonesia
                                    </span>
                                </div>

                                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-[#0E6CAC] transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs mb-4">
                                            MOU
                                        </div>
                                        <h3 className="text-base font-bold text-[#0D3F70] mb-2">
                                            Perjanjian Kerja Sama Kemenpora RI &amp; BNN RI
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                            Nota kesepahaman operasional antara Kementerian Pemuda &amp; Olahraga bersama Badan Narkotika Nasional mengenai fasilitasi pelatihan kader inti di 38 provinsi.
                                        </p>
                                    </div>
                                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                                        Kerja Sama Lintas Lembaga Negara
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* BAGIAN 3: VISI & MISI */}
                    <section id="visi-misi" className="py-16 sm:py-20 scroll-mt-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-xs font-bold text-[#0D3F70] uppercase tracking-wider mb-2">
                                    <TargetIcon className="w-3.5 h-3.5 text-[#0E6CAC]" />
                                    <span>Visi &amp; Misi</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-black text-[#0D3F70] tracking-tight">
                                    Arah &amp; Panduan Gerakan
                                </h2>
                            </div>

                            {/* Banner Visi */}
                            <div className="bg-gradient-to-r from-[#0D3F70] to-[#0A3055] text-white rounded-3xl p-8 sm:p-10 mb-10 shadow-md relative overflow-hidden">
                                <div className="max-w-3xl relative z-10">
                                    <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-2">
                                        Visi Besar KIPAN RI
                                    </span>
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black leading-snug mb-4">
                                        "Mewujudkan Generasi Pemuda Indonesia yang Tangguh, Berkarakter, Berdaya Saing, dan Bersih dari Narkoba Menuju Indonesia Emas 2045."
                                    </h3>
                                    <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                                        Membangun benteng moral pemuda melalui kemandirian, kepeloporan, dan aksi nyata terorganisir dari perkotaan hingga pelosok desa.
                                    </p>
                                </div>
                            </div>

                            {/* 4 Pilar Misi */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0E6CAC] flex items-center justify-center font-bold text-base shrink-0 border border-blue-100">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-[#0D3F70] mb-1.5">Edukasi &amp; Deteksi Dini</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Menyosialisasikan bahaya narkoba secara intensif melalui pendekatan sebaya di sekolah, kampus, dan ruang komunitas anak muda.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0E6CAC] flex items-center justify-center font-bold text-base shrink-0 border border-blue-100">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-[#0D3F70] mb-1.5">Kaderisasi Masif Berkelanjutan</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Mencetak lebih dari 50.000 kader inti pemuda yang memiliki sertifikasi wawasan kepemimpinan, hukum narkotika, dan keterampilan konseling sebaya.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0E6CAC] flex items-center justify-center font-bold text-base shrink-0 border border-blue-100">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-[#0D3F70] mb-1.5">Aksi Kreatif &amp; Pemberdayaan Positif</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Menyalurkan energi dan potensi kreatif anak muda ke dalam kompetisi olahraga, wirausaha muda, seni budaya, serta bakti sosial lingkungan.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0E6CAC] flex items-center justify-center font-bold text-base shrink-0 border border-blue-100">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-[#0D3F70] mb-1.5">Kolaborasi Sinergis Multisektor</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Membangun kemitraan strategis pentahelix antara pemerintah, aparat penegak hukum, akademisi, media, dan dunia usaha dalam mewujudkan Indonesia Bersinar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* BAGIAN 4: FILOSOFI LAMBANG & IDENTITAS */}
                    <section id="filosofi" className="py-16 sm:py-20 bg-slate-50/60 border-y border-slate-200 scroll-mt-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-800 uppercase tracking-wider mb-2.5">
                                    <BookmarkFilledIcon className="w-3.5 h-3.5 text-amber-600" />
                                    <span>Identitas &amp; Filosofi Lambang</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0D3F70] tracking-tight">
                                    Makna di Balik Lambang KIPAN RI
                                </h2>
                                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                                    Setiap elemen bentuk, warna, dan lambang resmi KIPAN RI memuat nilai perjuangan luhur, 
                                    integritas, gotong royong, dan ketahanan moral generasi muda Indonesia.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                                {/* Left Column: Official Logo Showcase Card */}
                                <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-xs">
                                    <div className="w-full">
                                        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                                Identitas Visual
                                            </span>
                                            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                                                Binaan Resmi
                                            </span>
                                        </div>

                                        {/* Logo Framed Container */}
                                        <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-3xl bg-slate-50/70 p-6 border border-slate-200/80 shadow-inner flex items-center justify-center relative group hover:border-[#0E6CAC] transition-colors duration-300">
                                            <img
                                                src="/logo-kipan.jpg"
                                                alt="Logo Resmi KIPAN Republik Indonesia"
                                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                                            />
                                        </div>

                                        <h3 className="text-lg font-bold text-[#0D3F70] mt-6 mb-1.5">
                                            Logo Resmi KIPAN RI
                                        </h3>
                                        <p className="text-xs text-slate-500 font-medium">
                                            Kader Inti Pemuda Anti Narkoba Republik Indonesia
                                        </p>
                                        <p className="text-xs text-slate-600 leading-relaxed mt-3 px-2">
                                            Simbol kehormatan, integritas, dan benteng pertahanan moral pemuda Nusantara dalam mewujudkan generasi bersih narkoba menuju Indonesia Emas 2045.
                                        </p>
                                    </div>

                                    {/* Bottom Tag */}
                                    <div className="w-full mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
                                        <BadgeIcon className="w-4 h-4 text-[#0E6CAC]" />
                                        <span>Binaan Kemenpora RI &amp; BNN RI</span>
                                    </div>
                                </div>

                                {/* Right Column: 4 Symmetrical & Distinct Meaning Cards */}
                                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Card 1: Biru Dongker */}
                                    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:border-[#0E6CAC] hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-8 h-8 rounded-xl bg-[#0D3F70] shadow-2xs flex items-center justify-center text-white text-xs font-black">
                                                    1
                                                </div>
                                                <span className="text-[10px] font-bold text-[#0D3F70] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 uppercase tracking-wider">
                                                    Warna Dasar
                                                </span>
                                            </div>

                                            <h4 className="text-base font-bold text-[#0D3F70] mb-2">
                                                Biru Dongker (Deep Navy)
                                            </h4>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                Melambangkan kematangan berpikir, integritas moral, keteguhan hati, dan stabilitas kelembagaan gerakan pemuda yang kokoh dan berwibawa di 38 provinsi.
                                            </p>
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                                            <span className="text-slate-400 font-medium">Nilai Karakter:</span>
                                            <span className="font-bold text-[#0D3F70]">Integritas &amp; Keteguhan</span>
                                        </div>
                                    </div>

                                    {/* Card 2: Kuning Emas */}
                                    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:border-amber-400 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-8 h-8 rounded-xl bg-amber-400 shadow-2xs flex items-center justify-center text-[#0D3F70] text-xs font-black">
                                                    2
                                                </div>
                                                <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 uppercase tracking-wider">
                                                    Cahaya Masa Depan
                                                </span>
                                            </div>

                                            <h4 className="text-base font-bold text-[#0D3F70] mb-2">
                                                Kuning Emas (Gold)
                                            </h4>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                Menggambarkan energi optimisme generasi muda, daya cipta karya tanpa batas, kejayaan bangsa, dan tekad menyongsong era keemasan Indonesia 2045.
                                            </p>
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                                            <span className="text-slate-400 font-medium">Nilai Karakter:</span>
                                            <span className="font-bold text-amber-600">Kejayaan &amp; Optimisme</span>
                                        </div>
                                    </div>

                                    {/* Card 3: Merah Putih */}
                                    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:border-red-400 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 shadow-2xs flex items-center justify-center text-white text-xs font-black">
                                                    3
                                                </div>
                                                <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-md border border-red-100 uppercase tracking-wider">
                                                    Jiwa Kebangsaan
                                                </span>
                                            </div>

                                            <h4 className="text-base font-bold text-[#0D3F70] mb-2">
                                                Pita Merah Putih
                                            </h4>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                Menegaskan kesetiaan tanpa syarat kepada Negara Kesatuan Republik Indonesia (NKRI), Pancasila, dan UUD 1945 dalam mengabdi bagi kemaslahatan masyarakat.
                                            </p>
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                                            <span className="text-slate-400 font-medium">Nilai Karakter:</span>
                                            <span className="font-bold text-red-600">Nasionalisme &amp; Patriotisme</span>
                                        </div>
                                    </div>

                                    {/* Card 4: Perisai Pelindung */}
                                    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:border-[#0E6CAC] hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-8 h-8 rounded-xl bg-[#0E6CAC] shadow-2xs flex items-center justify-center text-white text-xs font-black">
                                                    4
                                                </div>
                                                <span className="text-[10px] font-bold text-[#0E6CAC] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 uppercase tracking-wider">
                                                    Fungsi Perlindungan
                                                </span>
                                            </div>

                                            <h4 className="text-base font-bold text-[#0D3F70] mb-2">
                                                Perisai / Tameng Pelindung
                                            </h4>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                Melambangkan fungsi utama setiap kader sebagai benteng pertahanan moral, deteksi dini, dan tameng pelindung bagi lingkungan sekitar dari zat perusak narkotika.
                                            </p>
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                                            <span className="text-slate-400 font-medium">Nilai Karakter:</span>
                                            <span className="font-bold text-[#0E6CAC]">Proteksi &amp; Ketahanan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* BAGIAN 5: DIREKTORI JEJARING 38 PROVINSI */}
                    <section id="jejaring" className="py-16 sm:py-20 scroll-mt-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                                    <GlobeIcon className="w-3.5 h-3.5" />
                                    <span>Jejaring 38 Provinsi</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-black text-[#0D3F70] tracking-tight">
                                    Direktori Wilayah &amp; Koordinator Daerah
                                </h2>
                                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                    Kader Inti Pemuda Anti Narkoba telah terbentuk dan berjejaring aktif di 38 provinsi di seluruh Indonesia.
                                </p>
                            </div>

                            {/* Filter Wilayah Pulau */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {REGION_DIRECTORIES.map((reg, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedRegionIdx(idx)}
                                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                                            selectedRegionIdx === idx
                                                ? 'bg-[#0D3F70] text-white shadow-xs'
                                                : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0E6CAC]'
                                        }`}
                                    >
                                        {reg.regionName}
                                    </button>
                                ))}
                            </div>

                            {/* Daftar Provinsi Dalam Wilayah Terpilih */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {REGION_DIRECTORIES[selectedRegionIdx].provinces.map((prov, pIdx) => (
                                    <div
                                        key={pIdx}
                                        className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-[#0E6CAC] hover:-translate-y-1 transition-all"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                                                {prov.code}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                {prov.activeStatus}
                                            </span>
                                        </div>
                                        <h4 className="text-sm font-bold text-[#0D3F70] mb-0.5">{prov.name}</h4>
                                        <p className="text-xs text-slate-500 mb-3">Ibu Kota: {prov.capital}</p>
                                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#0E6CAC] font-semibold">
                                            <span>Sekretariat Korwil</span>
                                            <ChevronRightIcon className="w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* BAGIAN 6: CALL TO ACTION (CTA) */}
                    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-r from-[#061C33] via-[#0D3F70] to-[#0A3055] rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden border border-blue-900/60 shadow-xl">
                            <div className="max-w-2xl mx-auto relative z-10">
                                <h3 className="text-2xl sm:text-3xl font-black mb-3 text-white">
                                    Siap Mengambil Peran Bersama KIPAN RI?
                                </h3>
                                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-8">
                                    Bergabunglah bersama lebih dari 50.000 kader inti pemuda di seluruh Indonesia. Lindungi sahabat sebaya, wujudkan lingkungan sehat dan bersinar.
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    <a
                                        href="/kontak"
                                        className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-[#0D3F70] text-xs font-black uppercase tracking-wider transition-all shadow-md hover:scale-105"
                                    >
                                        Daftar Jadi Kader Inti
                                    </a>
                                    <a
                                        href="/kontak"
                                        className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/20 flex items-center gap-2"
                                    >
                                        <DownloadIcon className="w-4 h-4" />
                                        <span>Unduh Berkas Profil Organisasi</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
