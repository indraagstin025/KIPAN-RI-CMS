export interface FeaturedEvent {
    readonly id: string;
    readonly status: string;
    readonly statusColor: string;
    readonly category: string;
    readonly title: string;
    readonly date: string;
    readonly participants: string;
    readonly location: string;
    readonly snippet: string;
    readonly image: string;
    readonly href: string;
    readonly images?: readonly string[];
}

export const FEATURED_EVENTS: readonly FeaturedEvent[] = [
    {
        id: 'event-1',
        status: 'Pendaftaran Dibuka',
        statusColor: 'bg-emerald-500 text-white',
        category: 'Kaderisasi Nasional',
        title: 'Pelatihan Nasional Kader Inti Pemuda Anti Narkoba 2026',
        date: '24 - 28 Oktober 2026',
        participants: '38 Delegasi Provinsi',
        location: 'Jakarta Pusat',
        snippet:
            'Pembekalan terpadu wawasan bahaya narkotika, advokasi regulasi P4GN, dan strategi aksi pencegahan terpadu di lingkungan sekolah dan kampus.',
        image: '/event-1.png',
        images: ['/event-1.png', '/event-2.png', '/event-3.png'],
        href: '/agenda',
    },
    {
        id: 'event-2',
        status: 'Segera Hadir',
        statusColor: 'bg-kipan-blue text-white',
        category: 'Kolaborasi Nusantara',
        title: 'Jambore Relawan Pemuda Bersinar se-Indonesia',
        date: '10 - 12 November 2026',
        participants: '1.500 Kader Pemuda',
        location: 'Bandung, Jawa Barat',
        snippet:
            'Konsolidasi akbar kader pelopor P4GN, festival inovasi karya kreatif anak muda, olahraga sehat, dan deklarasi pemuda bersih narkoba.',
        image: '/event-2.png',
        images: ['/event-2.png', '/event-3.png', '/event-1.png'],
        href: '/agenda',
    },
    {
        id: 'event-3',
        status: 'Program Berjalan',
        statusColor: 'bg-amber-500 text-white',
        category: 'Edukasi Sebaya',
        title: 'Roadshow Kampus & Sekolah Bersinar (Bersih Narkoba)',
        date: 'Setiap Bulan Berjalan',
        participants: 'Pelajar & Mahasiswa',
        location: '514 Kabupaten & Kota',
        snippet:
            'Aksi sosialisasi tatap muka peer-to-peer dan pembentukan gugus tugas relawan anti narkoba di lingkungan SMA/SMK dan perguruan tinggi.',
        image: '/event-3.png',
        images: ['/event-3.png', '/event-1.png', '/event-2.png'],
        href: '/agenda',
    },
];
