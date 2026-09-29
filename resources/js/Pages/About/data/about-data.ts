import React from 'react';
import {
    GlobeIcon,
    HeartIcon,
    IdCardIcon,
    ReaderIcon,
    RocketIcon,
    VideoIcon,
} from '@radix-ui/react-icons';

// Data Struktur Organisasi KIPAN RI
export interface LeaderPerson {
    name: string;
    title: string;
    role: string;
    institution: string;
    level: 'pembina' | 'pusat' | 'bidang' | 'daerah';
    badge: string;
    photo: string;
    description: string;
}

export const DEWAN_PEMBINA: LeaderPerson[] = [
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

export const DEWAN_PENGARAH: LeaderPerson[] = [
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

export const PENGURUS_PUSAT: LeaderPerson[] = [
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

export interface BidangItem {
    id: string;
    no: string;
    name: string;
    focus: string;
    scope: string;
    photo?: string;
    coordinator?: string;
}

export const BIDANG_KERJA: BidangItem[] = [
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

export interface DutaPillar {
    no: string;
    title: string;
    description: string;
    tag: string;
}

export interface DutaCategory {
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

export const DUTA_KIPAN_PILLARS: DutaPillar[] = [
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

export const DUTA_KIPAN_CATEGORIES: DutaCategory[] = [
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

export const BIDANG_ICONS: Record<string, React.ElementType> = {
    kaderisasi: IdCardIcon,
    edukasi: ReaderIcon,
    advokasi: HeartIcon,
    sinergi: GlobeIcon,
    media: VideoIcon,
    pemberdayaan: RocketIcon,
};
