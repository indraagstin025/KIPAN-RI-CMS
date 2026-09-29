/**
 * Landing Page KIPAN RI — Content Data
 * Based on landing-page-kipan-ri-v3.md specification
 * Focus: National Youth Movement + Anti-Drug Prevention + Modern Organization Portal
 */

export interface NavLink {
    label: string;
    href: string;
    isExternal?: boolean;
}

export interface StatItem {
    value: string;
    label: string;
    sublabel: string;
}

export interface FocusItem {
    id: string;
    title: string;
    category: string;
    description: string;
    color: string;
}

export interface ProgramItem {
    id: string;
    title: string;
    category: string;
    description: string;
    target: string;
    image: string;
}

export interface NewsItem {
    id: string;
    title: string;
    category: string;
    date: string;
    location: string;
    excerpt: string;
    image: string;
    isFeatured?: boolean;
}

export interface AgendaItem {
    id: string;
    day: string;
    month: string;
    title: string;
    time: string;
    location: string;
    category: string;
    status: 'Dibuka' | 'Segera' | 'Berlangsung';
}

export interface LeaderItem {
    id: string;
    name: string;
    role: string;
    institution: string;
    tag: string;
    photo: string;
}

export interface GalleryItem {
    id: string;
    title: string;
    category: string;
    location: string;
    image: string;
}

export interface PartnerItem {
    name: string;
    role: string;
    logo?: string;
}

export const NAV_LINKS: NavLink[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang' },
    { label: 'Program & Aksi', href: '/program' },
    { label: 'Agenda', href: '/agenda' },
    { label: 'Berita', href: '/berita' },
    { label: 'Galeri', href: '/galeri' },
    { label: 'Kontak', href: '/kontak' },
];

export const HERO_CONTENT = {
    eyebrow: 'KADER INTI PEMUDA ANTI NARKOBA REPUBLIK INDONESIA',
    headline: 'PEMUDA BERGERAK, INDONESIA BERSINAR',
    subheadline:
        'Gerakan pemuda nasional terdepan dalam membangun generasi yang sehat, berdaya, dan berperan aktif dalam pencegahan penyalahgunaan narkotika di seluruh pelosok Nusantara.',
    primaryCta: { label: 'Tentang KIPAN', href: '#tentang' },
    secondaryCta: { label: 'Lihat Program & Aksi', href: '#program' },
    heroImage: '/logo-kipan.jpg',
    statsPill: 'Inisiatif Nasional di 38 Provinsi',
};

export const CAMPAIGN_CONTENT = {
    tagline: 'Kampanye Nasional P4GN Pemuda',
    slogan: 'Hidup Sehat. Berkarya Hebat. Tanpa Narkoba.',
    subtext:
        'Energi pemuda Indonesia terlalu berharga untuk dihancurkan oleh narkoba. KIPAN hadir mengarahkan daya kreativitas, kepemimpinan, dan kepedulian sosial generasi muda menuju Indonesia Emas 2045.',
};

export const ABOUT_CONTENT = {
    tag: 'Tentang Organisasi',
    title: 'Gerakan Pemuda Terdepan Menuju Generasi Bersih Narkoba',
    paragraphs: [
        'Kader Inti Pemuda Anti Narkoba (KIPAN) merupakan wadah gerakan kepemudaan strategis binaan Kementerian Pemuda dan Olahraga Republik Indonesia (Kemenpora RI) bersama Badan Narkotika Nasional Republik Indonesia (BNN RI).',
        'KIPAN berakar pada implementasi Undang-Undang No. 40 Tahun 2009 tentang Kepemudaan dan Instruksi Presiden No. 2 Tahun 2020 tentang Rencana Aksi Nasional P4GN, memosisikan pemuda sebagai subjek utama dan agen perubahan aktif di lingkungannya.',
    ],
    visi: 'Mewujudkan pemuda Indonesia yang berkarakter, berdaya saing, sehat, dan bebas dari ancaman penyalahgunaan narkoba menuju Indonesia Emas.',
    misi: [
        'Mengedukasi dan membangun kesadaran bahaya narkoba di lingkungan sekolah, kampus, dan komunitas.',
        'Melatih kader pemuda terlatih dengan wawasan kepemimpinan, hukum, dan deteksi dini narkotika.',
        'Membangun jejaring sebaya yang inklusif untuk pendampingan dan rujukan rehabilitasi sukarela.',
        'Menyalurkan potensi minat, bakat, olahraga, seni, dan wirausaha muda ke kegiatan positif berkelanjutan.',
    ],
    ctaText: 'Pelajari Profil Lengkap',
    ctaHref: '#fokus',
};

export const STATS_ITEMS: StatItem[] = [
    {
        value: '38',
        label: 'Provinsi',
        sublabel: 'Cakupan jejaring pengurus daerah di seluruh Indonesia',
    },
    {
        value: '514+',
        label: 'Kabupaten & Kota',
        sublabel: 'Wilayah sasaran kaderisasi dan advokasi kepemudaan',
    },
    {
        value: '50.000+',
        label: 'Kader Terlatih',
        sublabel: 'Pemuda yang telah mengikuti pelatihan inti resmi',
    },
    {
        value: '1.200+',
        label: 'Aksi & Sosialisasi',
        sublabel: 'Kegiatan edukasi lapangan dan penyuluhan tatap muka',
    },
];

export const FOCUS_ITEMS: FocusItem[] = [
    {
        id: 'pencegahan',
        title: 'Pencegahan Narkoba',
        category: 'Edukasi & Sosialisasi',
        description:
            'Sosialisasi interaktif, penyuluhan sekolah, kampanye digital sebaya, dan penguatan ketahanan keluarga dari ancaman zat adiktif.',
        color: 'border-blue-200 bg-white hover:border-kipan-blue',
    },
    {
        id: 'kaderisasi',
        title: 'Kaderisasi & Pendidikan',
        category: 'Kapasitas Pemuda',
        description:
            'Pelatihan Training of Trainers (ToT), wawasan kebangsaan, pemahaman regulasi P4GN, dan pembentukan relawan anti narkoba tingkat daerah.',
        color: 'border-blue-200 bg-white hover:border-kipan-blue',
    },
    {
        id: 'pemberdayaan',
        title: 'Pemberdayaan Pemuda',
        category: 'Potensi & Bakat',
        description:
            'Penyaluran minat dan bakat pemuda melalui kompetisi olahraga, kreasi konten digital positif, seni budaya, serta inkubasi wirausaha muda.',
        color: 'border-blue-200 bg-white hover:border-kipan-blue',
    },
    {
        id: 'sosial',
        title: 'Pengabdian & Sosial',
        category: 'Aksi Nyata',
        description:
            'Keterlibatan langsung kader dalam tanggap bencana, bakti pemuda, aksi lingkungan, dan kegiatan sosial kemasyarakatan di wilayah pedesaan.',
        color: 'border-blue-200 bg-white hover:border-kipan-blue',
    },
    {
        id: 'advokasi',
        title: 'Advokasi & Perlindungan',
        category: 'Kebijakan Publik',
        description:
            'Mendukung perumusan kebijakan kepemudaan ramah pemuda, perlindungan korban penyalahgunaan, dan fasilitasi rehabilitasi sukarela.',
        color: 'border-blue-200 bg-white hover:border-kipan-blue',
    },
    {
        id: 'kemitraan',
        title: 'Kemitraan & Kolaborasi',
        category: 'Sinergi Lintas Sektor',
        description:
            'Membangun kerja sama strategis antara Kemenpora, BNN, Kepolisian, Dispora Daerah, perguruan tinggi, swasta, dan organisasi kepemudaan.',
        color: 'border-blue-200 bg-white hover:border-kipan-blue',
    },
];

export const PROGRAM_ITEMS: ProgramItem[] = [
    {
        id: 'p1',
        title: 'KIPAN Goes to School & Campus',
        category: 'Sosialisasi & Edukasi',
        description:
            'Roadshow edukasi pencegahan narkoba tatap muka yang menyasar ribuan pelajar SMP, SMA/SMK, serta mahasiswa baru di berbagai kampus Nusantara.',
        target: 'Pelajar & Mahasiswa',
        image: '/logo-kipan.jpg',
    },
    {
        id: 'p2',
        title: 'Pelatihan Kader Inti Tingkat Nasional & Daerah',
        category: 'Kaderisasi',
        description:
            'Pendidikan kepemimpinan intensif dan deteksi dini narkoba bagi pemuda terpilih untuk menjadi garda penggerak di 38 provinsi.',
        target: 'Pemuda & Pengurus Wilayah',
        image: '/logo-kipan.jpg',
    },
    {
        id: 'p3',
        title: 'Festival Kreativitas Pemuda Bersinar',
        category: 'Minat & Bakat',
        description:
            'Kompetisi konten digital, turnamen olahraga antar pemuda, dan pentas seni budaya sebagai ruang ekspresi positif tanpa zat terlarang.',
        target: 'Komunitas Kreatif',
        image: '/logo-kipan.jpg',
    },
    {
        id: 'p4',
        title: 'Posko Sahabat Sebaya & Konsultasi',
        category: 'Pendampingan',
        description:
            'Layanan konseling sesama pemuda yang ramah dan rahasia, serta penyambung akses rujukan rehabilitasi medis ke balai BNN terdekat.',
        target: 'Pemuda Butuh Bantuan',
        image: '/logo-kipan.jpg',
    },
];

export const NETWORK_REGIONS = [
    { name: 'Sumatera', count: '10 Provinsi', status: 'Aktif Terkoordinasi' },
    { name: 'Jawa & Bali', count: '7 Provinsi', status: 'Aktif Terkoordinasi' },
    {
        name: 'Nusa Tenggara',
        count: '2 Provinsi',
        status: 'Aktif Terkoordinasi',
    },
    { name: 'Kalimantan', count: '5 Provinsi', status: 'Aktif Terkoordinasi' },
    { name: 'Sulawesi', count: '6 Provinsi', status: 'Aktif Terkoordinasi' },
    {
        name: 'Maluku & Papua',
        count: '8 Provinsi',
        status: 'Aktif Terkoordinasi',
    },
];

export const NEWS_ITEMS: NewsItem[] = [
    {
        id: 'n1',
        title: 'Pengukuhan Kader Inti Pemuda Anti Narkoba Nasional: Komitmen Jaga Generasi Emas',
        category: 'Nasional',
        date: '24 September 2026',
        location: 'Jakarta Pusat',
        excerpt:
            'Ratusan pemuda utusan dari 38 provinsi resmi dikukuhkan sebagai Kader Inti KIPAN RI dengan mandat memperkuat gerakan pencegahan narkoba di akar rumput.',
        image: '/logo-kipan.jpg',
        isFeatured: true,
    },
    {
        id: 'n2',
        title: 'KIPAN Jabar Gelar Sosialisasi Masif di 50 Sekolah Menengah se-Bandung Raya',
        category: 'Daerah',
        date: '21 September 2026',
        location: 'Bandung, Jawa Barat',
        excerpt:
            'Program edukasi bahaya zat adiktif baru berhasil menjangkau lebih dari 8.000 siswa melalui metode peer education yang interaktif.',
        image: '/logo-kipan.jpg',
    },
    {
        id: 'n3',
        title: 'Sinergi Kemenpora dan BNN RI Perkuat Kurikulum Modul Pelatihan Kader Pemuda',
        category: 'Kemitraan',
        date: '18 September 2026',
        location: 'Kemenpora RI, Jakarta',
        excerpt:
            'Pertemuan tingkat teknis menghasilkan pembaharuan modul wawasan bahaya narkoba terkini dan keterampilan advokasi sosial pemuda.',
        image: '/logo-kipan.jpg',
    },
    {
        id: 'n4',
        title: 'KIPAN Youth Hub: Ruang Kreasi Positif Pemuda Hindarkan Generasi dari Pengaruh Buruk',
        category: 'Pemberdayaan',
        date: '15 September 2026',
        location: 'Surabaya, Jawa Timur',
        excerpt:
            'Pusat kreasi berbasis komunitas resmi diluncurkan dengan fasilitas studio kreasi, inkubasi wirausaha muda, dan ruang diskusi publik.',
        image: '/logo-kipan.jpg',
    },
];

export const AGENDA_ITEMS: AgendaItem[] = [
    {
        id: 'a1',
        day: '28',
        month: 'SEP',
        title: 'Pelatihan Kader Inti Tingkat Dasar Regional Jawa Bagian Barat',
        time: '08.30 - 16.30 WIB',
        location: 'Aula BPSDMD Provinsi, Bandung',
        category: 'Kaderisasi',
        status: 'Dibuka',
    },
    {
        id: 'a2',
        day: '12',
        month: 'OKT',
        title: 'Sosialisasi Akbar P4GN Goes to Campus: Pemuda Cerdas Tanpa Narkoba',
        time: '09.00 - 13.00 WIB',
        location: 'Auditorium Kampus Universitas Negeri, Semarang',
        category: 'Edukasi',
        status: 'Dibuka',
    },
    {
        id: 'a3',
        day: '28',
        month: 'OKT',
        title: 'Apel Hari Sumpah Pemuda & Deklarasi Pemuda Bersinar se-Indonesia',
        time: '07.30 - 11.00 WIB',
        location: 'Plaza Kemenpora RI, Jakarta',
        category: 'Peringatan Nasional',
        status: 'Segera',
    },
    {
        id: 'a4',
        day: '15',
        month: 'NOV',
        title: 'Jambore Nasional Relawan dan Kader Inti Pemuda Anti Narkoba',
        time: '3 Hari Pelaksanaan',
        location: 'Bumi Perkemahan Cibubur, Jakarta Timur',
        category: 'Jambore Nasional',
        status: 'Segera',
    },
];

export const LEADERS_ITEMS: LeaderItem[] = [
    {
        id: 'l1',
        name: 'Menteri Pemuda dan Olahraga RI',
        role: 'Pembina Utama Nasional',
        institution: 'Kementerian Pemuda dan Olahraga RI',
        tag: 'Pemerintah Pusat',
        photo: '/logo-kipan.jpg',
    },
    {
        id: 'l2',
        name: 'Kepala Badan Narkotika Nasional RI',
        role: 'Mitra Strategis & Pembina Teknis',
        institution: 'Badan Narkotika Nasional (BNN RI)',
        tag: 'Instansi Pembina',
        photo: '/logo-bnn.jpg',
    },
    {
        id: 'l3',
        name: 'Koordinator Nasional KIPAN RI',
        role: 'Pengarah Pelaksana Gerakan',
        institution: 'Sekretariat Nasional KIPAN RI',
        tag: 'Presidium Nasional',
        photo: '/logo-kipan.jpg',
    },
    {
        id: 'l4',
        name: 'Koordinator Wilayah Daerah',
        role: 'Koordinator Gerakan 38 Provinsi',
        institution: 'Pengurus KIPAN Daerah',
        tag: 'Perwakilan Daerah',
        photo: '/logo-kipan.jpg',
    },
];

export const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: 'g1',
        title: 'Pelatihan Kader Inti Tingkat Nasional',
        category: 'Kaderisasi',
        location: 'Jakarta',
        image: '/logo-kipan.jpg',
    },
    {
        id: 'g2',
        title: 'Sosialisasi Edukasi Bahaya Narkoba Pelajar',
        category: 'Edukasi Sekolah',
        location: 'Bandung',
        image: '/logo-kipan.jpg',
    },
    {
        id: 'g3',
        title: 'Deklarasi Bersama Pemuda Anti Narkoba',
        category: 'Komitmen Pemuda',
        location: 'Semarang',
        image: '/logo-kipan.jpg',
    },
    {
        id: 'g4',
        title: 'Aksi Lapangan & Sosialisasi Car Free Day',
        category: 'Aksi Publik',
        location: 'Surabaya',
        image: '/logo-kipan.jpg',
    },
];

export const PARTNERS_ITEMS: PartnerItem[] = [
    { name: 'Kemenpora RI', role: 'Kementerian Pemuda dan Olahraga' },
    { name: 'BNN RI', role: 'Badan Narkotika Nasional' },
    {
        name: 'Dispora Seluruh Indonesia',
        role: 'Dinas Pemuda dan Olahraga Provinsi/Kabupaten',
    },
    {
        name: 'Komite Nasional Pemuda Indonesia',
        role: 'Wadah Berhimpun Organisasi Kepemudaan',
    },
    {
        name: 'Satuan Pendidikan & Kampus',
        role: 'Mitra Edukasi & Sosialisasi Sebaya',
    },
];

export const CONTACT_INFO = {
    organization:
        'Kader Inti Pemuda Anti Narkoba Republik Indonesia (KIPAN RI)',
    supervisor: 'Binaan Kementerian Pemuda dan Olahraga RI & BNN RI',
    address:
        'Gedung Wisma Menpora, Jl. Gerbang Pemuda No. 3, Gelora, Tanah Abang, Jakarta Pusat 10270',
    email: 'sekretariat@kipan.or.id',
    phone: '+62 812-3456-7890',
    hotlineBnn: '184',
    workingHours: 'Senin - Jumat, 08.30 - 17.00 WIB',
};
