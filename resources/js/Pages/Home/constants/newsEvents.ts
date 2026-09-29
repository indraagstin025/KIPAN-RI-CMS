export interface NewsEventCard {
    id: string;
    type: 'BERITA' | 'ACARA';
    badgeColor: string;
    category: string;
    title: string;
    date: string;
    href: string;
    posterTheme: string;
    posterHighlight: string;
    posterSubtitle: string;
}

export const NEWS_EVENT_ITEMS: NewsEventCard[] = [
    {
        id: 'ne-1',
        type: 'BERITA',
        badgeColor: 'bg-kipan-blue text-white',
        category: 'Wirausaha Pemuda',
        title: 'PENGUMUMAN 100 PESERTA TERPILIH PROGRAM PELATIHAN WIRAUSAHA PEMUDA KIPAN 2026',
        date: '14 November 2026',
        href: '/berita',
        posterTheme: 'from-[#0D3F70] via-[#0E5B99] to-blue-900',
        posterHighlight: '100 PESERTA TERPILIH',
        posterSubtitle: 'Pelatihan Wirausaha Pemuda Mandiri',
    },
    {
        id: 'ne-2',
        type: 'BERITA',
        badgeColor: 'bg-kipan-blue text-white',
        category: 'Sertifikasi Kompetensi',
        title: 'PENGUMUMAN PESERTA FASE 2 SERTIFIKASI ADVOKASI P4GN & DETEKSI DINI PEMUDA',
        date: '13 November 2026',
        href: '/berita',
        posterTheme: 'from-[#061C33] via-[#0D3F70] to-[#0E6CAC]',
        posterHighlight: 'PESERTA FASE 2',
        posterSubtitle: 'Sertifikasi Advokasi Pemuda Resmi',
    },
    {
        id: 'ne-3',
        type: 'ACARA',
        badgeColor: 'bg-amber-500 text-white font-bold',
        category: 'Pertukaran Pemuda',
        title: 'SELEKSI CALON PESERTA PERTUKARAN PEMUDA BERSINAR TINGKAT NASIONAL 2026',
        date: '26 September 2026',
        href: '/agenda',
        posterTheme: 'from-blue-950 via-slate-900 to-[#0D3F70]',
        posterHighlight: 'PERTUKARAN PEMUDA',
        posterSubtitle: 'Pendaftaran Delegasi 38 Provinsi',
    },
    {
        id: 'ne-4',
        type: 'BERITA',
        badgeColor: 'bg-kipan-blue text-white',
        category: 'Kaderisasi Nasional',
        title: 'PENGUKUHAN KADER INTI PEMUDA ANTI NARKOBA NASIONAL DI JAKARTA PUSAT',
        date: '24 September 2026',
        href: '/berita',
        posterTheme: 'from-[#0D3F70] to-[#082847]',
        posterHighlight: 'PENGUKUHAN KADER',
        posterSubtitle: 'Mandat Penggerak Pemuda se-Nusantara',
    },
    {
        id: 'ne-5',
        type: 'ACARA',
        badgeColor: 'bg-amber-500 text-white font-bold',
        category: 'Deklarasi Akbar',
        title: 'APEL HARI SUMPAH PEMUDA & DEKLARASI PEMUDA BERSINAR SE-INDONESIA 2026',
        date: '28 Oktober 2026',
        href: '/agenda',
        posterTheme: 'from-[#0A335C] via-blue-900 to-indigo-950',
        posterHighlight: 'HARI SUMPAH PEMUDA',
        posterSubtitle: 'Deklarasi Pemuda Bersih Narkoba',
    },
    {
        id: 'ne-6',
        type: 'BERITA',
        badgeColor: 'bg-kipan-blue text-white',
        category: 'Edukasi Sekolah',
        title: 'KIPAN GOES TO SCHOOL: SOSIALISASI P4GN MASIF DI 50 SEKOLAH MENENGAH',
        date: '21 September 2026',
        href: '/berita',
        posterTheme: 'from-blue-900 to-slate-900',
        posterHighlight: 'GOES TO SCHOOL',
        posterSubtitle: 'Penyuluhan 8.000+ Pelajar Remaja',
    },
    {
        id: 'ne-7',
        type: 'ACARA',
        badgeColor: 'bg-amber-500 text-white font-bold',
        category: 'Jambore Relawan',
        title: 'JAMBORE RELAWAN PEMUDA BERSINAR SE-INDONESIA 2026 DI BANDUNG JAWA BARAT',
        date: '10 - 12 November 2026',
        href: '/agenda',
        posterTheme: 'from-[#0D3F70] via-blue-950 to-slate-900',
        posterHighlight: 'JAMBORE RELAWAN',
        posterSubtitle: 'Konsolidasi 1.500 Kader Pemuda',
    },
];
