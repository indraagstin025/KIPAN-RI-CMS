import { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';
import {
    PersonIcon,
    CheckCircledIcon,
    FileTextIcon,
    GlobeIcon,
    TargetIcon,
    RocketIcon,
    BookmarkFilledIcon,
    ArrowRightIcon,
    DownloadIcon,
    DrawingPinIcon,
    BadgeIcon,
    ChevronRightIcon,
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
        title: 'Deputi 2 Pemberdayaan Pemuda Kemenpora RI',
        role: 'Dewan Pengarah Kepemudaan',
        institution: 'Kemenpora RI',
        level: 'pembina',
        badge: 'Pengarah Teknis',
        photo: '/logo-kipan.jpg',
        description: 'Mengarahkan standardisasi kaderisasi, alokasi program kepemudaan nasional, dan sinergi bersama Dispora seluruh Indonesia.',
    },
    {
        name: 'Deputi Bidang Pencegahan BNN RI',
        title: 'Deputi Bidang Pencegahan BNN Republik Indonesia',
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
        focus: 'Training of Trainers (ToT), sertifikasi kader inti, modul kepemimpinan, dan standardisasi instruktur daerah.',
        target: '50.000+ Kader Terlatih',
    },
    {
        id: 'edukasi',
        no: '02',
        name: 'Bidang Edukasi & Sosialisasi Sebaya',
        focus: 'Program KIPAN Goes to School, Goes to Campus, workshop deteksi dini, dan edukasi komunitas anak muda.',
        target: '1.200+ Sosialisasi / Tahun',
    },
    {
        id: 'advokasi',
        no: '03',
        name: 'Bidang Advokasi & Perlindungan Pemuda',
        focus: 'Pendampingan sebaya (peer counseling), rujukan rehabilitasi sukarela tanpa stigma bersama BNN, dan perlindungan korban.',
        target: 'Layanan Rujukan Ramah Pemuda',
    },
    {
        id: 'sinergi',
        no: '04',
        name: 'Bidang Hubungan Antar Lembaga & Kemitraan',
        focus: 'Membangun sinergi bersama Dispora, BNNP/BNNK, POLRI, perguruan tinggi, organisasi kepemudaan, dan sektor swasta.',
        target: 'Kolaborasi 38 Provinsi',
    },
    {
        id: 'media',
        no: '05',
        name: 'Bidang Media, Digital & Komunikasi Publik',
        focus: 'Pengelolaan portal resmi KIPAN RI, kampanye digital kreatif di media sosial, publikasi berita aksi, dan verifikasi data.',
        target: 'Kampanye Positif Ramah Pemuda',
    },
    {
        id: 'pemberdayaan',
        no: '06',
        name: 'Bidang Minat, Bakat, Seni & Wirausaha',
        focus: 'Penyaluran energi pemuda ke kegiatan positif: kompetisi olahraga, festival seni budaya, dan inkubasi wirausaha muda.',
        target: 'Alternatif Solusi Kreatif',
    },
];

// Data Direktori Wilayah 38 Provinsi
interface RegionGroup {
    regionName: string;
    provinces: { name: string; capital: string; code: string; activeStatus: string }[];
}

const REGION_DIRECTORIES: RegionGroup[] = [
    {
        regionName: 'Wilayah Sumatera (10 Provinsi)',
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
        regionName: 'Wilayah Jawa, Bali & Nusa Tenggara (8 Provinsi)',
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
        regionName: 'Wilayah Kalimantan (5 Provinsi)',
        provinces: [
            { name: 'Kalimantan Barat', capital: 'Pontianak', code: 'KIPAN-KALBAR', activeStatus: 'Aktif' },
            { name: 'Kalimantan Tengah', capital: 'Palangka Raya', code: 'KIPAN-KALTENG', activeStatus: 'Aktif' },
            { name: 'Kalimantan Selatan', capital: 'Banjarmasin', code: 'KIPAN-KALSEL', activeStatus: 'Aktif' },
            { name: 'Kalimantan Timur', capital: 'Samarinda', code: 'KIPAN-KALTIM', activeStatus: 'Aktif' },
            { name: 'Kalimantan Utara', capital: 'Tanjung Selor', code: 'KIPAN-KALTARA', activeStatus: 'Aktif' },
        ],
    },
    {
        regionName: 'Wilayah Sulawesi (6 Provinsi)',
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
        regionName: 'Wilayah Maluku & Papua (9 Provinsi)',
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
    const [activeTab, setActiveTab] = useState<'struktur' | 'legalitas' | 'visi-misi' | 'filosofi' | 'jejaring'>('struktur');
    const [selectedRegionIdx, setSelectedRegionIdx] = useState<number>(0);

    return (
        <>
            <Head title="Tentang KIPAN RI — Struktur Organisasi, Visi Misi & Profil Lengkap" />
            <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-kipan-text-dark">
                <Navbar />

                {/* Header Banner Halaman */}
                <header className="pt-32 pb-14 bg-gradient-to-b from-kipan-navy via-[#0A2E52] to-kipan-navy text-white relative overflow-hidden border-b border-blue-900/50">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,108,172,0.25),transparent_60%)] pointer-events-none" />
                    
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-xs font-semibold text-blue-200/80 mb-4">
                            <a href="/" className="hover:text-white transition-colors">Beranda</a>
                            <span>/</span>
                            <span className="text-kipan-yellow">Tentang Kami</span>
                        </div>

                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-xs border border-white/20 rounded-full text-xs font-bold text-kipan-yellow tracking-wider uppercase mb-3.5">
                                <BadgeIcon className="w-3.5 h-3.5" />
                                <span>Profil Resmi KIPAN Republik Indonesia</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                                Garda Pemuda Menuju Indonesia Bersinar
                            </h1>

                            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-3xl">
                                Kader Inti Pemuda Anti Narkoba (KIPAN) Republik Indonesia adalah gerakan pemuda strategis binaan resmi 
                                Kementerian Pemuda dan Olahraga (Kemenpora RI) dan Badan Narkotika Nasional (BNN RI) untuk menggerakkan 
                                pemuda sebagai garda terdepan pencegahan narkotika di 38 provinsi.
                            </p>
                        </div>

                        {/* Quick Jump Bar */}
                        <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-2 sm:gap-3">
                            <button
                                onClick={() => setActiveTab('struktur')}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                                    activeTab === 'struktur'
                                        ? 'bg-kipan-yellow text-kipan-navy shadow-md font-extrabold'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                            >
                                <PersonIcon className="w-4 h-4" />
                                <span>1. Struktur Organisasi (Utama)</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('legalitas')}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                                    activeTab === 'legalitas'
                                        ? 'bg-kipan-yellow text-kipan-navy shadow-md font-extrabold'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                            >
                                <FileTextIcon className="w-4 h-4" />
                                <span>2. Landasan Hukum & Legalitas</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('visi-misi')}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                                    activeTab === 'visi-misi'
                                        ? 'bg-kipan-yellow text-kipan-navy shadow-md font-extrabold'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                            >
                                <TargetIcon className="w-4 h-4" />
                                <span>3. Visi & Misi</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('filosofi')}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                                    activeTab === 'filosofi'
                                        ? 'bg-kipan-yellow text-kipan-navy shadow-md font-extrabold'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                            >
                                <BookmarkFilledIcon className="w-4 h-4" />
                                <span>4. Filosofi Lambang</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('jejaring')}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                                    activeTab === 'jejaring'
                                        ? 'bg-kipan-yellow text-kipan-navy shadow-md font-extrabold'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                            >
                                <GlobeIcon className="w-4 h-4" />
                                <span>5. Jejaring 38 Provinsi</span>
                            </button>
                        </div>
                    </div>
                </header>

                <main className="flex-1 pb-24">
                    {/* BAGIAN 1: STRUKTUR ORGANISASI (PRIORITAS NOMOR 1 & WAJIB) */}
                    <section id="struktur" className={`py-14 sm:py-16 ${activeTab === 'struktur' ? 'block' : 'block'}`}>
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-xs font-bold text-kipan-navy uppercase tracking-wider mb-2">
                                    <PersonIcon className="w-3.5 h-3.5 text-kipan-blue" />
                                    <span>Prioritas Utama #1</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-kipan-navy tracking-tight">
                                    Struktur Organisasi & Kepengurusan KIPAN RI
                                </h2>
                                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                                    Bagan struktur kepengurusan nasional yang memadukan pembinaan strategis pemerintah pusat 
                                    dengan kepemimpinan eksekutif pemuda di 38 provinsi di seluruh Nusantara.
                                </p>
                            </div>

                            {/* TINGKAT 1: DEWAN PEMBINA NEGARA */}
                            <div className="mb-14">
                                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
                                    <span className="w-8 h-8 rounded-lg bg-kipan-navy text-white flex items-center justify-center font-bold text-xs">
                                        I
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-kipan-navy">Dewan Pembina & Pengarah Nasional (Pemerintah RI)</h3>
                                        <p className="text-xs text-slate-500">Payung pembina resmi dan pengarah kebijakan makro kepemudaan dan P4GN</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {DEWAN_PEMBINA.map((leader, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-kipan-blue hover:shadow-md transition-all flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 p-3 mb-4 flex items-center justify-center relative">
                                                    <img
                                                        src={leader.photo}
                                                        alt={leader.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                    <span className="absolute top-2 left-2 bg-kipan-navy text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                                                        {leader.badge}
                                                    </span>
                                                </div>

                                                <h4 className="text-base font-bold text-kipan-navy leading-snug mb-1">
                                                    {leader.name}
                                                </h4>
                                                <div className="text-xs font-bold text-kipan-blue uppercase tracking-wide mb-1.5">
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
                                    <span className="w-8 h-8 rounded-lg bg-kipan-blue text-white flex items-center justify-center font-bold text-xs">
                                        II
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-kipan-navy">Pengurus Pusat (Sekretariat Nasional KIPAN RI)</h3>
                                        <p className="text-xs text-slate-500">Pimpinan eksekutif pemuda penggerak operasional gerakan nasional</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {PENGURUS_PUSAT.map((leader, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-kipan-blue hover:shadow-md transition-all flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-blue-50/50 border border-slate-200 p-3 mb-4 flex items-center justify-center relative">
                                                    <img
                                                        src={leader.photo}
                                                        alt={leader.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                    <span className="absolute top-2 left-2 bg-kipan-blue text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                                                        {leader.badge}
                                                    </span>
                                                </div>

                                                <h4 className="text-base font-bold text-kipan-navy leading-snug mb-1">
                                                    {leader.name}
                                                </h4>
                                                <div className="text-xs font-bold text-kipan-blue uppercase tracking-wide mb-1.5">
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
                                        <h3 className="text-lg font-bold text-kipan-navy">6 Bidang Kerja & Divisi Teknis</h3>
                                        <p className="text-xs text-slate-500">Fokus program aksi nyata dalam pencegahan, kaderisasi, advokasi, dan kemitraan</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {BIDANG_KERJA.map((bidang) => (
                                        <div
                                            key={bidang.id}
                                            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-kipan-blue hover:shadow-md transition-all flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="w-9 h-9 rounded-xl bg-blue-50 text-kipan-blue font-black text-sm flex items-center justify-center border border-blue-100">
                                                        {bidang.no}
                                                    </span>
                                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                                        Divisi Teknis
                                                    </span>
                                                </div>
                                                <h4 className="text-base font-bold text-kipan-navy mb-2 leading-snug">
                                                    {bidang.name}
                                                </h4>
                                                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                                    {bidang.focus}
                                                </p>
                                            </div>
                                            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                                                <span className="text-slate-400 font-medium">Target Capaian:</span>
                                                <span className="font-bold text-kipan-blue">{bidang.target}</span>
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
                                        <h3 className="text-lg font-bold text-kipan-navy">Jejaring Daerah & Satuan Tugas Lapangan</h3>
                                        <p className="text-xs text-slate-500">Struktur koordinasi di tingkat provinsi, kabupaten/kota, hingga basis komunitas</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                                        <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md inline-block mb-2">
                                            Tingkat Provinsi (38 Provinsi)
                                        </div>
                                        <h4 className="text-sm font-bold text-kipan-navy mb-1">
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
                                        <h4 className="text-sm font-bold text-kipan-navy mb-1">
                                            Koordinator Cabang (Korcab)
                                        </h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Menjadi garda eksekusi sosialisasi tatap muka bersama Dispora Kab/Kota dan BNNK di tingkat masyarakat lokal.
                                        </p>
                                    </div>

                                    <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                                        <div className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md inline-block mb-2">
                                            Basis Sekolah & Kampus
                                        </div>
                                        <h4 className="text-sm font-bold text-kipan-navy mb-1">
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
                    <section id="legalitas" className="py-14 bg-white border-y border-slate-200">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                                    <FileTextIcon className="w-3.5 h-3.5" />
                                    <span>Legalitas & Landasan Hukum</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-black text-kipan-navy tracking-tight">
                                    Payung Hukum Gerakan KIPAN RI
                                </h2>
                                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                    KIPAN bukan sekadar komunitas sukarela, melainkan gerakan resmi yang didasarkan pada regulasi negara dan mandat undang-undang republik.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-kipan-blue transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-kipan-navy flex items-center justify-center font-bold text-xs mb-4">
                                            UU
                                        </div>
                                        <h3 className="text-base font-bold text-kipan-navy mb-2">
                                            UU No. 40 Tahun 2009 tentang Kepemudaan
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                            Menegaskan peran strategis pemuda sebagai subjek pembangunan nasional dan agen moral dalam menjaga ketahanan bangsa dari bahaya destruktif peredaran gelap narkoba.
                                        </p>
                                    </div>
                                    <span className="text-[11px] font-bold text-kipan-blue uppercase tracking-wider">
                                        Mandat Undang-Undang RI
                                    </span>
                                </div>

                                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-kipan-blue transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs mb-4">
                                            INPRES
                                        </div>
                                        <h3 className="text-base font-bold text-kipan-navy mb-2">
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

                                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-kipan-blue transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs mb-4">
                                            MOU
                                        </div>
                                        <h3 className="text-base font-bold text-kipan-navy mb-2">
                                            Perjanjian Kerja Sama Kemenpora RI & BNN RI
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                            Nota kesepahaman operasional antara Kementerian Pemuda & Olahraga bersama Badan Narkotika Nasional mengenai fasilitasi pelatihan kader inti di 38 provinsi.
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
                    <section id="visi-misi" className="py-14 sm:py-16">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-xs font-bold text-kipan-navy uppercase tracking-wider mb-2">
                                    <TargetIcon className="w-3.5 h-3.5 text-kipan-blue" />
                                    <span>Visi & Misi</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-black text-kipan-navy tracking-tight">
                                    Arah & Panduan Gerakan
                                </h2>
                            </div>

                            {/* Banner Visi */}
                            <div className="bg-gradient-to-r from-kipan-navy to-[#0F4C81] text-white rounded-3xl p-8 sm:p-10 mb-10 shadow-md relative overflow-hidden">
                                <div className="max-w-3xl relative z-10">
                                    <span className="text-xs font-bold text-kipan-yellow uppercase tracking-widest block mb-2">
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
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-kipan-blue flex items-center justify-center font-bold text-base shrink-0 border border-blue-100">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-kipan-navy mb-1.5">Edukasi & Deteksi Dini</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Menyosialisasikan bahaya narkoba secara intensif melalui pendekatan sebaya di sekolah, kampus, dan ruang komunitas anak muda.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-kipan-blue flex items-center justify-center font-bold text-base shrink-0 border border-blue-100">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-kipan-navy mb-1.5">Kaderisasi Masif Berkelanjutan</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Mencetak lebih dari 50.000 kader inti pemuda yang memiliki sertifikasi wawasan kepemimpinan, hukum narkotika, dan keterampilan konseling sebaya.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-kipan-blue flex items-center justify-center font-bold text-base shrink-0 border border-blue-100">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-kipan-navy mb-1.5">Aksi Kreatif & Pemberdayaan Positif</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Menyalurkan energi dan potensi kreatif anak muda ke dalam kompetisi olahraga, wirausaha muda, seni budaya, serta bakti sosial lingkungan.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-kipan-blue flex items-center justify-center font-bold text-base shrink-0 border border-blue-100">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-kipan-navy mb-1.5">Kolaborasi Sinergis Multisektor</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Membangun kemitraan strategis pentahelix antara pemerintah, aparat penegak hukum, akademisi, media, dan dunia usaha dalam mewujudkan Indonesia Bersinar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* BAGIAN 4: FILOSOFI LAMBANG & IDENTITAS */}
                    <section id="filosofi" className="py-14 bg-white border-y border-slate-200">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                                    <BookmarkFilledIcon className="w-3.5 h-3.5" />
                                    <span>Identitas & Filosofi Lambang</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-black text-kipan-navy tracking-tight">
                                    Makna di Balik Lambang KIPAN
                                </h2>
                                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                    Setiap elemen lambang dan warna resmi KIPAN RI memuat nilai perjuangan, persatuan, dan ketahanan generasi muda Indonesia.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                                    <div className="w-48 h-48 rounded-2xl bg-white p-4 shadow-sm border border-slate-200 flex items-center justify-center mb-4">
                                        <img
                                            src="/logo-kipan.jpg"
                                            alt="Logo Resmi KIPAN RI"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h4 className="text-base font-bold text-kipan-navy">Logo Resmi KIPAN RI</h4>
                                    <p className="text-xs text-slate-500 mt-1">Identitas Pemersatu Kader Pemuda se-Nusantara</p>
                                </div>

                                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                                        <h5 className="text-xs font-bold text-kipan-navy uppercase tracking-wider mb-1 flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#0D3F70]" />
                                            Biru Dongker / Navy
                                        </h5>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Melambangkan kematangan berpikir, integritas moral pemuda, keteguhan hati, dan stabilitas organisasi yang kokoh.
                                        </p>
                                    </div>

                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                                        <h5 className="text-xs font-bold text-kipan-navy uppercase tracking-wider mb-1 flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                            Kuning Emas
                                        </h5>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Menggambarkan masa depan cerah, kejayaan, kemakmuran, dan tekad menyongsong generasi Indonesia Emas 2045.
                                        </p>
                                    </div>

                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                                        <h5 className="text-xs font-bold text-kipan-navy uppercase tracking-wider mb-1 flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                                            Merah Putih
                                        </h5>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Menegaskan kesetiaan tanpa syarat kepada Negara Kesatuan Republik Indonesia (NKRI), Pancasila, dan UUD 1945.
                                        </p>
                                    </div>

                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                                        <h5 className="text-xs font-bold text-kipan-navy uppercase tracking-wider mb-1 flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                                            Perisai Pelindung
                                        </h5>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Fungsi pemuda sebagai garda pembenteng diri, keluarga, dan lingkungan sekitar dari ancaman zat adiktif perusak masa depan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* BAGIAN 5: DIREKTORI JEJARING 38 PROVINSI */}
                    <section id="jejaring" className="py-14 sm:py-16">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                                    <GlobeIcon className="w-3.5 h-3.5" />
                                    <span>Jejaring 38 Provinsi</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-black text-kipan-navy tracking-tight">
                                    Direktori Wilayah & Koordinator Daerah
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
                                                ? 'bg-kipan-navy text-white shadow-xs'
                                                : 'bg-white text-slate-600 border border-slate-200 hover:border-kipan-blue'
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
                                        className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-kipan-blue hover:-translate-y-1 transition-all"
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
                                        <h4 className="text-sm font-bold text-kipan-navy mb-0.5">{prov.name}</h4>
                                        <p className="text-xs text-slate-500 mb-3">Ibu Kota: {prov.capital}</p>
                                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-kipan-blue font-semibold">
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
                        <div className="bg-gradient-to-r from-kipan-navy via-[#0A2E52] to-kipan-navy rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden border border-blue-900/60 shadow-xl">
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
                                        className="px-6 py-3 rounded-full bg-kipan-yellow hover:bg-yellow-400 text-kipan-navy text-xs font-black uppercase tracking-wider transition-all shadow-md hover:scale-105"
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
