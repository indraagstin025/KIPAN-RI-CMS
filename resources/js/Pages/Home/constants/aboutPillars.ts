import {
    FileTextIcon,
    GlobeIcon,
    HeartIcon,
    IdCardIcon,
    RocketIcon,
} from '@radix-ui/react-icons';

export interface AccessPillar {
    readonly id: string;
    readonly icon: typeof IdCardIcon;
    readonly accessTag: string;
    readonly cardTitle: string;
    readonly headline: string;
    readonly subtitle: string;
    readonly actionLabel: string;
    readonly actionHref: string;
    readonly posterTag: string;
    readonly posterTitleLine1: string;
    readonly posterTitleLine2: string;
    readonly posterSubtitle: string;
    readonly badgeText: string;
}

export const PILLARS: readonly AccessPillar[] = [
    {
        id: 'kaderisasi',
        icon: IdCardIcon,
        accessTag: 'AKSES',
        cardTitle: 'Kaderisasi Inti',
        headline: 'Berdampak Nyata Menjadi Kader Pelopor',
        subtitle:
            'Ikuti pendidikan dan pelatihan intensif Kader Inti Pemuda Anti Narkoba (KIPAN) binaan Kemenpora & BNN RI untuk mencetak agen perubahan berintegritas dan bersertifikat resmi di daerahmu.',
        actionLabel: 'Daftar Pendidikan Kader',
        actionHref: '/kontak',
        posterTag: 'KADERISASI NASIONAL',
        posterTitleLine1: 'BERDAMPAK DENGAN',
        posterTitleLine2: 'BERKONTRIBUSI',
        posterSubtitle:
            'Ambil peran aktif dan berikan kontribusi nyata untuk menciptakan lingkungan bersih narkoba.',
        badgeText: '50.000+ Kader Terlatih',
    },
    {
        id: 'edukasi',
        icon: FileTextIcon,
        accessTag: 'AKSES',
        cardTitle: 'Edukasi Sebaya',
        headline: 'Lindungi Generasi Sebaya dari Narkoba',
        subtitle:
            'Akses modul materi penyuluhan interaktif, workshop deteksi dini bahaya narkotika, serta pendampingan pembentukan Satuan Tugas (Satgas) Relawan Pelajar Bersinar di lingkungan SMA/SMK dan perguruan tinggi.',
        actionLabel: 'Pelajari Modul & Program Edukasi',
        actionHref: '/program',
        posterTag: 'EDUKASI & ADVOKASI',
        posterTitleLine1: 'TEMAN SEBAYA',
        posterTitleLine2: 'SALING MENJAGA',
        posterSubtitle:
            'Pencegahan berbasis komunitas sebaya (peer-to-peer) yang dekat, relevan, dan terpercaya.',
        badgeText: 'Modul P4GN Resmi',
    },
    {
        id: 'jejaring',
        icon: GlobeIcon,
        accessTag: 'AKSES',
        cardTitle: 'Jejaring Daerah',
        headline: 'Terhubung dengan Jejaring 38 Provinsi',
        subtitle:
            'Jalin komunikasi, kolaborasi lintas wilayah, dan sinergi aksi nyata bersama dewan pengurus serta koordinator wilayah KIPAN yang tersebar aktif di 38 provinsi dan 514 kabupaten/kota se-Indonesia.',
        actionLabel: 'Lihat Struktur Organisasi',
        actionHref: '/tentang#struktur',
        posterTag: 'JARINGAN NUSANTARA',
        posterTitleLine1: '38 PROVINSI',
        posterTitleLine2: 'SATU GERAKAN',
        posterSubtitle:
            'Sinergi pengurus daerah dari Sabang sampai Merauke dalam komitmen Indonesia Bersinar.',
        badgeText: '514 Kab. & Kota',
    },
    {
        id: 'konseling',
        icon: HeartIcon,
        accessTag: 'AKSES',
        cardTitle: 'Konseling Sahabat',
        headline: 'Ruang Aman Konsultasi & Pendampingan',
        subtitle:
            'Layanan pendampingan sebaya (peer-support) yang aman, rahasia, dan tanpa stigma, terhubung langsung ke balai rehabilitasi resmi BNN RI bagi rekan pemuda yang memerlukan bantuan pemulihan.',
        actionLabel: 'Layanan Pendampingan Sahabat',
        actionHref: '/kontak',
        posterTag: 'RUANG AMAN RAHASIA',
        posterTitleLine1: 'PEDULI SEBAYA',
        posterTitleLine2: 'TANPA STIGMA',
        posterSubtitle:
            'Dukungan pemulihan dan advokasi rujukan medis profesional bekerja sama dengan BNN RI.',
        badgeText: 'Layanan Rahasia',
    },
    {
        id: 'karya',
        icon: RocketIcon,
        accessTag: 'AKSES',
        cardTitle: 'Karya & Prestasi',
        headline: 'Salurkan Energi ke Prestasi & Wirausaha',
        subtitle:
            'Wadahi potensi kreatif anak muda melalui kompetisi olahraga sehat, festival seni budaya, pelatihan kewirausahaan mandiri, dan berbagai inisiatif sosial positif pemuda bebas narkoba.',
        actionLabel: 'Eksplorasi Program Karya Positif',
        actionHref: '/program',
        posterTag: 'POTENSI & PRESTASI',
        posterTitleLine1: 'BERKARYA HEBAT',
        posterTitleLine2: 'TANPA NARKOBA',
        posterSubtitle:
            'Menyalurkan daya cipta, minat olahraga, dan wirausaha pemuda menuju Indonesia Emas 2045.',
        badgeText: 'Aksi Nyata Pemuda',
    },
];
