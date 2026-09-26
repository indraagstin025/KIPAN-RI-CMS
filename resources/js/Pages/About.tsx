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
    CheckCircledIcon,
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
        description: 'Pembina materi edukasi, standardisasi kurikulum pelatihan kader, modul deteksi dini narkoba, dan rujukan rehabilitasi.',
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
        scope: 'Standardisasi Kaderisasi Nasional',
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

// Data Direktori Wilayah 38 Provinsi
interface RegionGroup {
    regionName: string;
    provinces: { name: string; capital: string; code: string; activeStatus: string }[];
}

const REGION_DIRECTORIES: RegionGroup[] = [
    {
        regionName: 'Sumatera (10 Provinsi)',
        provinces: [
            { name: 'Aceh', capital: 'Banda Aceh', code: 'KIPAN-ACH', activeStatus: 'Siaga Aktif' },
            { name: 'Sumatera Utara', capital: 'Medan', code: 'KIPAN-SUMUT', activeStatus: 'Siaga Aktif' },
            { name: 'Sumatera Barat', capital: 'Padang', code: 'KIPAN-SUMBAR', activeStatus: 'Siaga Aktif' },
            { name: 'Riau', capital: 'Pekanbaru', code: 'KIPAN-RIAU', activeStatus: 'Siaga Aktif' },
            { name: 'Kepulauan Riau', capital: 'Tanjungpinang', code: 'KIPAN-KEPRI', activeStatus: 'Siaga Aktif' },
            { name: 'Jambi', capital: 'Jambi', code: 'KIPAN-JMB', activeStatus: 'Siaga Aktif' },
            { name: 'Sumatera Selatan', capital: 'Palembang', code: 'KIPAN-SUMSEL', activeStatus: 'Siaga Aktif' },
            { name: 'Kepulauan Bangka Belitung', capital: 'Pangkalpinang', code: 'KIPAN-BABEL', activeStatus: 'Siaga Aktif' },
            { name: 'Bengkulu', capital: 'Bengkulu', code: 'KIPAN-BKL', activeStatus: 'Siaga Aktif' },
            { name: 'Lampung', capital: 'Bandar Lampung', code: 'KIPAN-LPG', activeStatus: 'Siaga Aktif' },
        ],
    },
    {
        regionName: 'Jawa, Bali & Nusa Tenggara (9 Provinsi)',
        provinces: [
            { name: 'DKI Jakarta', capital: 'Jakarta', code: 'KIPAN-DKI', activeStatus: 'Siaga Aktif' },
            { name: 'Jawa Barat', capital: 'Bandung', code: 'KIPAN-JABAR', activeStatus: 'Siaga Aktif' },
            { name: 'Jawa Tengah', capital: 'Semarang', code: 'KIPAN-JATENG', activeStatus: 'Siaga Aktif' },
            { name: 'DI Yogyakarta', capital: 'Yogyakarta', code: 'KIPAN-DIY', activeStatus: 'Siaga Aktif' },
            { name: 'Jawa Timur', capital: 'Surabaya', code: 'KIPAN-JATIM', activeStatus: 'Siaga Aktif' },
            { name: 'Banten', capital: 'Serang', code: 'KIPAN-BTN', activeStatus: 'Siaga Aktif' },
            { name: 'Bali', capital: 'Denpasar', code: 'KIPAN-BALI', activeStatus: 'Siaga Aktif' },
            { name: 'Nusa Tenggara Barat', capital: 'Mataram', code: 'KIPAN-NTB', activeStatus: 'Siaga Aktif' },
            { name: 'Nusa Tenggara Timur', capital: 'Kupang', code: 'KIPAN-NTT', activeStatus: 'Siaga Aktif' },
        ],
    },
    {
        regionName: 'Kalimantan (5 Provinsi)',
        provinces: [
            { name: 'Kalimantan Barat', capital: 'Pontianak', code: 'KIPAN-KALBAR', activeStatus: 'Siaga Aktif' },
            { name: 'Kalimantan Tengah', capital: 'Palangka Raya', code: 'KIPAN-KALTENG', activeStatus: 'Siaga Aktif' },
            { name: 'Kalimantan Selatan', capital: 'Banjarmasin', code: 'KIPAN-KALSEL', activeStatus: 'Siaga Aktif' },
            { name: 'Kalimantan Timur', capital: 'Samarinda', code: 'KIPAN-KALTIM', activeStatus: 'Siaga Aktif' },
            { name: 'Kalimantan Utara', capital: 'Tanjung Selor', code: 'KIPAN-KALTARA', activeStatus: 'Siaga Aktif' },
        ],
    },
    {
        regionName: 'Sulawesi (6 Provinsi)',
        provinces: [
            { name: 'Sulawesi Utara', capital: 'Manado', code: 'KIPAN-SULUT', activeStatus: 'Siaga Aktif' },
            { name: 'Sulawesi Tengah', capital: 'Palu', code: 'KIPAN-SULTENG', activeStatus: 'Siaga Aktif' },
            { name: 'Sulawesi Selatan', capital: 'Makassar', code: 'KIPAN-SULSEL', activeStatus: 'Siaga Aktif' },
            { name: 'Sulawesi Tenggara', capital: 'Kendari', code: 'KIPAN-SULTRA', activeStatus: 'Siaga Aktif' },
            { name: 'Gorontalo', capital: 'Gorontalo', code: 'KIPAN-GTO', activeStatus: 'Siaga Aktif' },
            { name: 'Sulawesi Barat', capital: 'Mamuju', code: 'KIPAN-SULBAR', activeStatus: 'Siaga Aktif' },
        ],
    },
    {
        regionName: 'Maluku & Papua (8 Provinsi)',
        provinces: [
            { name: 'Maluku', capital: 'Ambon', code: 'KIPAN-MALUKU', activeStatus: 'Siaga Aktif' },
            { name: 'Maluku Utara', capital: 'Sofifi', code: 'KIPAN-MALUT', activeStatus: 'Siaga Aktif' },
            { name: 'Papua', capital: 'Jayapura', code: 'KIPAN-PAPUA', activeStatus: 'Siaga Aktif' },
            { name: 'Papua Barat', capital: 'Manokwari', code: 'KIPAN-PB', activeStatus: 'Siaga Aktif' },
            { name: 'Papua Selatan', capital: 'Merauke', code: 'KIPAN-PS', activeStatus: 'Siaga Aktif' },
            { name: 'Papua Tengah', capital: 'Nabire', code: 'KIPAN-PT', activeStatus: 'Siaga Aktif' },
            { name: 'Papua Pegunungan', capital: 'Jayawijaya', code: 'KIPAN-PP', activeStatus: 'Siaga Aktif' },
            { name: 'Papua Barat Daya', capital: 'Sorong', code: 'KIPAN-PBD', activeStatus: 'Siaga Aktif' },
        ],
    },
];

export default function About() {
    const [selectedRegionIdx, setSelectedRegionIdx] = useState<number>(0);

    return (
        <>
            <Head title="Tentang KIPAN RI: Struktur Organisasi, Visi Misi & Profil Lengkap" />
            <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-800">
                <Navbar />

                {/* ========================================================= */}
                {/* HERO SECTION: FOKUS, TENANG, OTENTIK INSTITUSIONAL        */}
                {/* ========================================================= */}
                <section
                    className="relative pt-36 sm:pt-40 pb-16 sm:pb-20 text-white border-b border-blue-950"
                    style={{
                        backgroundColor: '#0D3F70',
                        backgroundImage: 'linear-gradient(180deg, #07223D 0%, #0D3F70 100%)',
                    }}
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                        {/* Breadcrumbs */}
                        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs font-medium text-blue-100 mb-5">
                            <a
                                href="/"
                                className="text-blue-100 hover:text-white underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
                            >
                                Beranda
                            </a>
                            <span className="text-blue-300/60" aria-hidden="true">/</span>
                            <span className="text-amber-300 font-semibold" aria-current="page">Tentang Kami</span>
                        </nav>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                            Tentang KIPAN Republik Indonesia
                        </h1>

                        {/* Subtitle */}
                        <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto text-blue-100/90 font-normal">
                            Gerakan kepemudaan strategis binaan resmi Kementerian Pemuda dan Olahraga (Kemenpora RI) bersama Badan Narkotika Nasional (BNN RI) untuk menggerakkan pemuda sebagai garda terdepan pencegahan narkotika di 38 provinsi.
                        </p>
                    </div>
                </section>

                <main className="flex-1">
                    {/* ========================================================= */}
                    {/* BAGIAN 1: STRUKTUR ORGANISASI (PRIORITAS NOMOR 1 & WAJIB)  */}
                    {/* ========================================================= */}
                    <section id="struktur" className="py-16 sm:py-20 scroll-mt-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-12">
                                <div className="flex items-center gap-2 text-xs font-bold text-[#0D3F70] uppercase tracking-wider mb-2">
                                    <span className="w-2 h-2 rounded-full bg-[#0E6CAC]" />
                                    <span>Bagan Kepengurusan Nasional</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D3F70] tracking-tight">
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
                                    <span
                                        className="w-8 h-8 rounded-lg text-white flex items-center justify-center font-black text-xs shrink-0 shadow-2xs"
                                        style={{ backgroundColor: '#0D3F70' }}
                                    >
                                        I
                                    </span>
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold text-[#0D3F70]">
                                            Dewan Pembina &amp; Pengarah Nasional (Pemerintah RI)
                                        </h3>
                                        <p className="text-xs text-slate-500">Payung pembina resmi dan pengarah kebijakan makro kepemudaan dan P4GN</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {DEWAN_PEMBINA.map((leader, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-2xs transition-all"
                                        >
                                            <div>
                                                {/* Header Bar: Badge & Circular Emblem */}
                                                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                                                    <span
                                                        className="text-[10px] font-bold px-2.5 py-1 rounded tracking-wide"
                                                        style={{
                                                            backgroundColor: '#EFF6FF',
                                                            color: '#1E40AF',
                                                            border: '1px solid #DBEAFE',
                                                        }}
                                                    >
                                                        {leader.badge}
                                                    </span>
                                                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-2xs overflow-hidden">
                                                        <img
                                                            src={leader.photo}
                                                            alt={leader.institution}
                                                            className="w-full h-full object-contain rounded-full"
                                                        />
                                                    </div>
                                                </div>

                                                <h4 className="text-base font-bold text-[#0D3F70] leading-snug mb-1">
                                                    {leader.name}
                                                </h4>
                                                <div className="text-xs font-semibold text-[#0E6CAC] uppercase tracking-wide mb-1.5">
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
                                    <span
                                        className="w-8 h-8 rounded-lg text-white flex items-center justify-center font-black text-xs shrink-0 shadow-2xs"
                                        style={{ backgroundColor: '#0E6CAC' }}
                                    >
                                        II
                                    </span>
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold text-[#0D3F70]">
                                            Pengurus Pusat (Sekretariat Nasional KIPAN RI)
                                        </h3>
                                        <p className="text-xs text-slate-500">Pimpinan eksekutif pemuda penggerak operasional gerakan nasional</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {PENGURUS_PUSAT.map((leader, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-2xs transition-all"
                                        >
                                            <div>
                                                {/* Header Bar: Badge & Circular Emblem */}
                                                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                                                    <span
                                                        className="text-[10px] font-bold px-2.5 py-1 rounded tracking-wide"
                                                        style={{
                                                            backgroundColor: '#F0F9FF',
                                                            color: '#0369A1',
                                                            border: '1px solid #BAE6FD',
                                                        }}
                                                    >
                                                        {leader.badge}
                                                    </span>
                                                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-2xs overflow-hidden">
                                                        <img
                                                            src={leader.photo}
                                                            alt={leader.institution}
                                                            className="w-full h-full object-contain rounded-full"
                                                        />
                                                    </div>
                                                </div>

                                                <h4 className="text-base font-bold text-[#0D3F70] leading-snug mb-1">
                                                    {leader.name}
                                                </h4>
                                                <div className="text-xs font-semibold text-[#0E6CAC] uppercase tracking-wide mb-1.5">
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
                                    <span
                                        className="w-8 h-8 rounded-lg text-white flex items-center justify-center font-black text-xs shrink-0 shadow-2xs"
                                        style={{ backgroundColor: '#D97706' }}
                                    >
                                        III
                                    </span>
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold text-[#0D3F70]">
                                            6 Bidang Kerja Teknis
                                        </h3>
                                        <p className="text-xs text-slate-500">Divisi operasional program pencegahan, kaderisasi, advokasi, dan kemitraan</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {BIDANG_KERJA.map((bidang) => (
                                        <div
                                            key={bidang.id}
                                            className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
                                        >
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <span
                                                        className="w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center border"
                                                        style={{
                                                            backgroundColor: '#F0F9FF',
                                                            color: '#0D3F70',
                                                            borderColor: '#BAE6FD',
                                                        }}
                                                    >
                                                        {bidang.no}
                                                    </span>
                                                    <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
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
                                                <span className="text-slate-500 font-medium">Fokus Utama:</span>
                                                <span className="font-semibold text-[#0E6CAC]">{bidang.scope}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* TINGKAT 4: HIERARKI DAERAH HINGGA KAMPUS & SEKOLAH */}
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
                                    <span
                                        className="w-8 h-8 rounded-lg text-white flex items-center justify-center font-black text-xs shrink-0 shadow-2xs"
                                        style={{ backgroundColor: '#059669' }}
                                    >
                                        IV
                                    </span>
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold text-[#0D3F70]">
                                            Jejaring Daerah &amp; Satuan Tugas Lapangan
                                        </h3>
                                        <p className="text-xs text-slate-500">Struktur koordinasi di tingkat provinsi, kabupaten/kota, hingga basis komunitas</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="p-5 bg-slate-50/80 rounded-xl border border-slate-200">
                                        <div
                                            className="text-xs font-semibold px-2.5 py-1 rounded inline-block mb-2.5"
                                            style={{
                                                backgroundColor: '#ECFDF5',
                                                color: '#065F46',
                                                border: '1px solid #A7F3D0',
                                            }}
                                        >
                                            Tingkat Provinsi (38 Provinsi)
                                        </div>
                                        <h4 className="text-sm font-bold text-[#0D3F70] mb-1.5">
                                            Koordinator Wilayah (Korwil)
                                        </h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Bersinergi dengan Dispora Provinsi dan BNN Provinsi (BNNP) dalam supervisi kaderisasi dan program tingkat provinsi.
                                        </p>
                                    </div>

                                    <div className="p-5 bg-slate-50/80 rounded-xl border border-slate-200">
                                        <div
                                            className="text-xs font-semibold px-2.5 py-1 rounded inline-block mb-2.5"
                                            style={{
                                                backgroundColor: '#EFF6FF',
                                                color: '#1E40AF',
                                                border: '1px solid #BFDBFE',
                                            }}
                                        >
                                            Tingkat Kab / Kota (514 Wilayah)
                                        </div>
                                        <h4 className="text-sm font-bold text-[#0D3F70] mb-1.5">
                                            Koordinator Cabang (Korcab)
                                        </h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Menjadi garda eksekusi sosialisasi tatap muka bersama Dispora Kab/Kota dan BNNK di tingkat masyarakat lokal.
                                        </p>
                                    </div>

                                    <div className="p-5 bg-slate-50/80 rounded-xl border border-slate-200">
                                        <div
                                            className="text-xs font-semibold px-2.5 py-1 rounded inline-block mb-2.5"
                                            style={{
                                                backgroundColor: '#FFFBEB',
                                                color: '#92400E',
                                                border: '1px solid #FDE68A',
                                            }}
                                        >
                                            Basis Sekolah &amp; Kampus
                                        </div>
                                        <h4 className="text-sm font-bold text-[#0D3F70] mb-1.5">
                                            Satgas Relawan Pelajar Bersinar
                                        </h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Duta sebaya yang aktif menjaga lingkungan sekolah dan perguruan tinggi dari peredaran zat adiktif dan narkotika.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========================================================= */}
                    {/* BAGIAN 2: LANDASAN HUKUM & LEGALITAS NEGARA               */}
                    {/* ========================================================= */}
                    <section id="legalitas" className="py-16 sm:py-20 bg-white border-y border-slate-200 scroll-mt-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-10">
                                <div className="flex items-center gap-2 text-xs font-bold text-[#0D3F70] uppercase tracking-wider mb-2">
                                    <FileTextIcon className="w-3.5 h-3.5 text-[#0E6CAC]" />
                                    <span>Dasar Hukum &amp; Legalitas Resmi</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D3F70] tracking-tight">
                                    Payung Regulasi Gerakan KIPAN RI
                                </h2>
                                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                    KIPAN bukan sekadar komunitas sukarela, melainkan gerakan resmi yang didasarkan pada regulasi negara dan mandat undang-undang republik.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between hover:border-slate-300 transition-colors">
                                    <div>
                                        <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#0D3F70] flex items-center justify-center font-bold text-xs mb-4">
                                            UU
                                        </div>
                                        <h3 className="text-base font-bold text-[#0D3F70] mb-2 leading-snug">
                                            UU No. 40 Tahun 2009 tentang Kepemudaan
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                            Menegaskan peran strategis pemuda sebagai subjek pembangunan nasional dan agen moral dalam menjaga ketahanan bangsa dari bahaya destruktif peredaran gelap narkoba.
                                        </p>
                                    </div>
                                    <span className="text-[11px] font-semibold text-[#0E6CAC] uppercase tracking-wider pt-3 border-t border-slate-200/80">
                                        Mandat Undang-Undang RI
                                    </span>
                                </div>

                                <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between hover:border-slate-300 transition-colors">
                                    <div>
                                        <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs mb-4">
                                            INPRES
                                        </div>
                                        <h3 className="text-base font-bold text-[#0D3F70] mb-2 leading-snug">
                                            Inpres No. 2 Tahun 2020 tentang Rencana Aksi Nasional P4GN
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                            Menginstruksikan seluruh kementerian, lembaga, dan pemerintah daerah untuk melaksanakan aksi pencegahan, deteksi dini, dan pemberantasan penyalahgunaan narkotika bersama masyarakat.
                                        </p>
                                    </div>
                                    <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider pt-3 border-t border-slate-200/80">
                                        Instruksi Presiden Republik Indonesia
                                    </span>
                                </div>

                                <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between hover:border-slate-300 transition-colors">
                                    <div>
                                        <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs mb-4">
                                            MOU
                                        </div>
                                        <h3 className="text-base font-bold text-[#0D3F70] mb-2 leading-snug">
                                            Perjanjian Kerja Sama Kemenpora RI &amp; BNN RI
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                            Nota kesepahaman operasional antara Kementerian Pemuda &amp; Olahraga bersama Badan Narkotika Nasional mengenai fasilitasi pelatihan kader inti di 38 provinsi.
                                        </p>
                                    </div>
                                    <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider pt-3 border-t border-slate-200/80">
                                        Kerja Sama Lintas Lembaga Negara
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========================================================= */}
                    {/* BAGIAN 3: VISI & 4 PILAR MISI                             */}
                    {/* ========================================================= */}
                    <section id="visi-misi" className="py-16 sm:py-20 scroll-mt-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-10">
                                <div className="flex items-center gap-2 text-xs font-bold text-[#0D3F70] uppercase tracking-wider mb-2">
                                    <TargetIcon className="w-3.5 h-3.5 text-[#0E6CAC]" />
                                    <span>Visi &amp; Misi Gerakan</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D3F70] tracking-tight">
                                    Arah &amp; Panduan Gerakan Nasional
                                </h2>
                            </div>

                            {/* Banner Visi */}
                            <div
                                className="text-white rounded-2xl p-8 sm:p-10 mb-8 border border-blue-900"
                                style={{
                                    backgroundColor: '#0D3F70',
                                    backgroundImage: 'linear-gradient(180deg, #092B4D 0%, #0D3F70 100%)',
                                }}
                            >
                                <div className="max-w-3xl">
                                    <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-2">
                                        Visi KIPAN RI
                                    </span>
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-snug mb-3">
                                        "Mewujudkan Generasi Pemuda Indonesia yang Tangguh, Berkarakter, Berdaya Saing, dan Bersih dari Narkoba Menuju Indonesia Emas 2045."
                                    </h3>
                                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
                                        Membangun benteng moral pemuda melalui kemandirian, kepeloporan, dan aksi nyata terorganisir dari perkotaan hingga pelosok desa.
                                    </p>
                                </div>
                            </div>

                            {/* 4 Pilar Misi */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-white rounded-xl border border-slate-200 flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0D3F70] flex items-center justify-center font-bold text-sm shrink-0 border border-blue-100">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-[#0D3F70] mb-1.5">Edukasi &amp; Deteksi Dini</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Menyosialisasikan bahaya narkoba secara intensif melalui pendekatan sebaya di sekolah, kampus, dan ruang komunitas anak muda.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 bg-white rounded-xl border border-slate-200 flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0D3F70] flex items-center justify-center font-bold text-sm shrink-0 border border-blue-100">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-[#0D3F70] mb-1.5">Kaderisasi Terstruktur Berkelanjutan</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Mempersiapkan kader pemuda bersertifikat yang memiliki wawasan kepemimpinan, regulasi narkotika, dan keterampilan konseling sebaya.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 bg-white rounded-xl border border-slate-200 flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0D3F70] flex items-center justify-center font-bold text-sm shrink-0 border border-blue-100">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-[#0D3F70] mb-1.5">Aksi Kreatif &amp; Pemberdayaan Positif</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Menyalurkan energi dan potensi kreatif anak muda ke dalam kompetisi olahraga, wirausaha muda, seni budaya, serta bakti sosial lingkungan.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 bg-white rounded-xl border border-slate-200 flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0D3F70] flex items-center justify-center font-bold text-sm shrink-0 border border-blue-100">
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

                    {/* ========================================================= */}
                    {/* BAGIAN 4: MAKNA DI BALIK LAMBANG KIPAN RI                 */}
                    {/* ========================================================= */}
                    <section id="filosofi" className="py-16 sm:py-20 bg-slate-100/70 border-y border-slate-200 scroll-mt-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-12">
                                <div className="flex items-center gap-2 text-xs font-bold text-[#0D3F70] uppercase tracking-wider mb-2">
                                    <BookmarkFilledIcon className="w-3.5 h-3.5 text-amber-600" />
                                    <span>Identitas &amp; Filosofi Lambang</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D3F70] tracking-tight">
                                    Makna di Balik Lambang KIPAN RI
                                </h2>
                                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                                    Setiap elemen bentuk, warna, dan lambang resmi KIPAN RI memuat nilai perjuangan luhur, 
                                    integritas, gotong royong, dan ketahanan moral generasi muda Indonesia.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                                {/* Left Column: Official Logo Showcase Card */}
                                <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between items-center text-center">
                                    <div className="w-full">
                                        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                                            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                                                Identitas Visual
                                            </span>
                                            <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                                Binaan Resmi
                                            </span>
                                        </div>

                                        {/* Logo Container */}
                                        <div className="w-48 h-48 sm:w-52 sm:h-52 mx-auto rounded-xl bg-slate-50 p-6 border border-slate-200 flex items-center justify-center">
                                            <img
                                                src="/logo-kipan.jpg"
                                                alt="Logo Resmi KIPAN Republik Indonesia"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        <h3 className="text-lg font-bold text-[#0D3F70] mt-6 mb-1">
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
                                    <div className="w-full mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs font-semibold text-slate-600">
                                        <CheckCircledIcon className="w-4 h-4 text-[#0E6CAC]" />
                                        <span>Binaan Resmi Kemenpora RI &amp; BNN RI</span>
                                    </div>
                                </div>

                                {/* Right Column: 4 Symmetrical Meaning Cards */}
                                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Card 1: Biru Dongker */}
                                    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-7 h-7 rounded-md bg-[#0D3F70] flex items-center justify-center text-white text-xs font-bold">
                                                    1
                                                </div>
                                                <span className="text-[10px] font-semibold text-[#0D3F70] bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase tracking-wider">
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
                                            <span className="text-slate-500 font-medium">Nilai Karakter:</span>
                                            <span className="font-bold text-[#0D3F70]">Integritas &amp; Keteguhan</span>
                                        </div>
                                    </div>

                                    {/* Card 2: Kuning Emas */}
                                    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-7 h-7 rounded-md bg-[#D97706] flex items-center justify-center text-white text-xs font-bold">
                                                    2
                                                </div>
                                                <span className="text-[10px] font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 uppercase tracking-wider">
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
                                            <span className="text-slate-500 font-medium">Nilai Karakter:</span>
                                            <span className="font-bold text-amber-800">Kejayaan &amp; Optimisme</span>
                                        </div>
                                    </div>

                                    {/* Card 3: Merah Putih */}
                                    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-7 h-7 rounded-md bg-red-700 flex items-center justify-center text-white text-xs font-bold">
                                                    3
                                                </div>
                                                <span className="text-[10px] font-semibold text-red-800 bg-red-50 px-2 py-0.5 rounded border border-red-100 uppercase tracking-wider">
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
                                            <span className="text-slate-500 font-medium">Nilai Karakter:</span>
                                            <span className="font-bold text-red-700">Nasionalisme &amp; Patriotisme</span>
                                        </div>
                                    </div>

                                    {/* Card 4: Perisai Pelindung */}
                                    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-7 h-7 rounded-md bg-[#0E6CAC] flex items-center justify-center text-white text-xs font-bold">
                                                    4
                                                </div>
                                                <span className="text-[10px] font-semibold text-[#0E6CAC] bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase tracking-wider">
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
                                            <span className="text-slate-500 font-medium">Nilai Karakter:</span>
                                            <span className="font-bold text-[#0E6CAC]">Proteksi &amp; Ketahanan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========================================================= */}
                    {/* BAGIAN 5: DIREKTORI JEJARING 38 PROVINSI                  */}
                    {/* ========================================================= */}
                    <section id="jejaring" className="py-16 sm:py-20 scroll-mt-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mb-10">
                                <div className="flex items-center gap-2 text-xs font-bold text-[#0D3F70] uppercase tracking-wider mb-2">
                                    <GlobeIcon className="w-3.5 h-3.5 text-[#0E6CAC]" />
                                    <span>Jejaring 38 Wilayah Provinsi</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D3F70] tracking-tight">
                                    Direktori Wilayah &amp; Koordinator Daerah
                                </h2>
                                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                    Kader Inti Pemuda Anti Narkoba telah terbentuk dan berjejaring aktif di 38 provinsi di seluruh Indonesia.
                                </p>
                            </div>

                            {/* Filter Wilayah Pulau */}
                            <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter Wilayah">
                                {REGION_DIRECTORIES.map((reg, idx) => (
                                    <button
                                        key={idx}
                                        role="tab"
                                        aria-selected={selectedRegionIdx === idx}
                                        onClick={() => setSelectedRegionIdx(idx)}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D3F70] ${
                                            selectedRegionIdx === idx
                                                ? 'bg-[#0D3F70] text-white shadow-xs'
                                                : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
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
                                        className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[10px] font-mono font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                                                    {prov.code}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                                                    {prov.activeStatus}
                                                </span>
                                            </div>
                                            <h4 className="text-sm font-bold text-[#0D3F70] mb-0.5">{prov.name}</h4>
                                            <p className="text-xs text-slate-500 mb-3">Ibu Kota: {prov.capital}</p>
                                        </div>

                                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                                            <span>Koordinasi: Dispora &amp; BNNP</span>
                                            <span className="font-semibold text-[#0D3F70]">Korwil Terdaftar</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ========================================================= */}
                    {/* BAGIAN 6: CALL TO ACTION (CTA) TERPADU                    */}
                    {/* ========================================================= */}
                    <section
                        className="py-16 sm:py-20 border-t border-blue-950 text-white relative"
                        style={{
                            backgroundColor: '#0D3F70',
                            backgroundImage: 'linear-gradient(180deg, #092B4D 0%, #061C33 100%)',
                        }}
                    >
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
                                <CheckCircledIcon className="w-4 h-4 text-amber-300 shrink-0" />
                                <span>Aksi Nyata Pemuda Bersinar</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-4 text-white">
                                Siap Mengambil Peran Bersama KIPAN RI?
                            </h2>

                            <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 text-blue-100 font-normal">
                                Bergabunglah dalam jejaring Kader Inti Pemuda Anti Narkoba di 38 provinsi seluruh Indonesia. Bersama Kemenpora RI dan BNN RI, mari lindungi sahabat sebaya dan wujudkan lingkungan pemuda yang sehat, berprestasi, dan bersih dari narkotika.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                                <a
                                    href="/kontak"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                                    style={{
                                        backgroundColor: '#FACB04',
                                        color: '#0D3F70',
                                    }}
                                >
                                    <PersonIcon className="w-4 h-4" />
                                    <span>Pendaftaran &amp; Informasi Kader</span>
                                </a>

                                <a
                                    href="/#kegiatan"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    <span>Lihat Agenda &amp; Berita Aksi</span>
                                </a>
                            </div>

                            {/* Trust markers row */}
                            <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-blue-100 font-medium">
                                <span className="flex items-center gap-2">
                                    <CheckCircledIcon className="w-4 h-4 text-amber-300" />
                                    Pembinaan Resmi Kemenpora RI
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircledIcon className="w-4 h-4 text-amber-300" />
                                    Kurikulum Teknis P4GN BNN RI
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircledIcon className="w-4 h-4 text-amber-300" />
                                    Jejaring 38 Provinsi Nusantara
                                </span>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
