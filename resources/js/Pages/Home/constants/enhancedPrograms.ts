import {
    HeartIcon,
    IdCardIcon,
    ReaderIcon,
    RocketIcon,
} from '@radix-ui/react-icons';
import { ComponentType } from 'react';

export interface EnhancedProgram {
    id: string;
    pillarNumber: string;
    pillarName: string;
    title: string;
    target: string;
    description: string;
    highlights: string[];
    icon: ComponentType<{ className?: string }>;
    colorBadge: string;
    accentHover: string;
}

export const ENHANCED_PROGRAMS: EnhancedProgram[] = [
    {
        id: 'p1',
        pillarNumber: 'Pilar 01',
        pillarName: 'Edukasi Sebaya',
        title: 'KIPAN Goes to School & Campus',
        target: 'Pelajar SMP, SMA/SMK & Mahasiswa',
        description:
            'Roadshow edukasi pencegahan narkoba tatap muka dan digital yang menyasar ribuan pelajar dan mahasiswa baru melalui pendekatan interaktif sebaya (peer-education).',
        highlights: [
            'Penyuluhan Interaktif',
            'Deteksi Dini Zat Adiktif',
            'Modul Resmi P4GN',
        ],
        icon: ReaderIcon,
        colorBadge: 'bg-blue-50 text-kipan-blue border-blue-200/80',
        accentHover: 'group-hover:border-kipan-blue',
    },
    {
        id: 'p2',
        pillarNumber: 'Pilar 02',
        pillarName: 'Kaderisasi Inti',
        title: 'Pelatihan Kader Inti Tingkat Dasar & Lanjut',
        target: 'Pemuda & Pengurus Wilayah di 38 Provinsi',
        description:
            'Pendidikan kepemimpinan intensif, wawasan kebangsaan, dan Training of Trainers (ToT) untuk mencetak garda penggerak anti narkoba bersertifikat di seluruh Indonesia.',
        highlights: [
            'Sertifikasi Resmi Kader',
            'Materi ToT Nasional',
            'Jejaring Penggerak Wilayah',
        ],
        icon: IdCardIcon,
        colorBadge: 'bg-sky-50 text-sky-700 border-sky-200/80',
        accentHover: 'group-hover:border-sky-600',
    },
    {
        id: 'p3',
        pillarNumber: 'Pilar 03',
        pillarName: 'Minat, Bakat & Karya',
        title: 'Festival Kreativitas Pemuda Bersinar',
        target: 'Komunitas Seni, Olahraga & Kreatif',
        description:
            'Wadah penyaluran energi positif pemuda melalui turnamen olahraga sehat, kompetisi konten digital inspiratif, dan panggung karya budaya bebas narkoba.',
        highlights: [
            'Turnamen Olahraga Pemuda',
            'Kreasi Konten Positif',
            'Inkubasi Wirausaha Muda',
        ],
        icon: RocketIcon,
        colorBadge: 'bg-amber-50 text-amber-800 border-amber-200/80',
        accentHover: 'group-hover:border-amber-500',
    },
    {
        id: 'p4',
        pillarNumber: 'Pilar 04',
        pillarName: 'Pendampingan Sahabat',
        title: 'Posko Sahabat Sebaya & Layanan Rujukan',
        target: 'Pemuda Membutuhkan Dukungan',
        description:
            'Layanan konseling sesama pemuda yang aman, rahasia, dan tanpa stigma, terhubung langsung dengan balai rehabilitasi resmi BNN RI bagi mereka yang butuh pertolongan.',
        highlights: [
            'Konseling Rahasia & Aman',
            'Pendampingan Tanpa Stigma',
            'Akses Rujukan BNN RI',
        ],
        icon: HeartIcon,
        colorBadge: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
        accentHover: 'group-hover:border-emerald-600',
    },
];
