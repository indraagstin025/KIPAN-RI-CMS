import {
    ArrowRightIcon,
    CheckCircledIcon,
    ReaderIcon,
    IdCardIcon,
    RocketIcon,
    HeartIcon,
    PersonIcon,
} from '@radix-ui/react-icons';
import ScrollReveal from './ScrollReveal';

interface EnhancedProgram {
    id: string;
    pillarNumber: string;
    pillarName: string;
    title: string;
    target: string;
    description: string;
    highlights: string[];
    icon: typeof ReaderIcon;
    colorBadge: string;
    accentHover: string;
}

const ENHANCED_PROGRAMS: EnhancedProgram[] = [
    {
        id: 'p1',
        pillarNumber: 'Pilar 01',
        pillarName: 'Edukasi Sebaya',
        title: 'KIPAN Goes to School & Campus',
        target: 'Pelajar SMP, SMA/SMK & Mahasiswa',
        description:
            'Roadshow edukasi pencegahan narkoba tatap muka dan digital yang menyasar ribuan pelajar dan mahasiswa baru melalui pendekatan interaktif sebaya (peer-education).',
        highlights: ['Penyuluhan Interaktif', 'Deteksi Dini Zat Adiktif', 'Modul Resmi P4GN'],
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
        highlights: ['Sertifikasi Resmi Kader', 'Materi ToT Nasional', 'Jejaring Penggerak Wilayah'],
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
        highlights: ['Turnamen Olahraga Pemuda', 'Kreasi Konten Positif', 'Inkubasi Wirausaha Muda'],
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
        highlights: ['Konseling Rahasia & Aman', 'Pendampingan Tanpa Stigma', 'Akses Rujukan BNN RI'],
        icon: HeartIcon,
        colorBadge: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
        accentHover: 'group-hover:border-emerald-600',
    },
];

export default function ProgramSection() {
    return (
        <section id="program" className="py-16 lg:py-24 bg-white border-b border-kipan-border overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="flex items-center justify-center gap-3 mb-2.5">
                            <span className="h-0.5 w-8 bg-kipan-blue rounded-full"></span>
                            <span className="text-xs font-bold text-kipan-blue uppercase tracking-widest">
                                Program Unggulan &amp; Aksi Nyata
                            </span>
                            <span className="h-0.5 w-8 bg-kipan-blue rounded-full"></span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-kipan-navy tracking-tight">
                            Inisiatif Strategis Pemuda KIPAN RI
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-2xl mx-auto leading-relaxed">
                            Implementasi pilar gerakan pencegahan narkoba melalui 4 program prioritas berkelanjutan yang menyentuh pelajar, kader daerah, komunitas kreatif, hingga pendampingan sebaya.
                        </p>
                    </div>
                </ScrollReveal>

                {/* 4 Cards Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {ENHANCED_PROGRAMS.map((prog, idx) => {
                        const Icon = prog.icon;
                        return (
                            <ScrollReveal key={prog.id} direction="up" delay={0.08 + idx * 0.06}>
                                <div className={`bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group ${prog.accentHover}`}>
                                    <div>
                                        {/* Top Meta: Pillar Badge + Icon */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${prog.colorBadge}`}>
                                                {prog.pillarNumber} • {prog.pillarName}
                                            </span>
                                            <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 text-kipan-navy flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-kipan-blue group-hover:text-white transition-all duration-300">
                                                <Icon className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-base sm:text-lg font-bold text-kipan-navy leading-snug mb-2.5 group-hover:text-kipan-blue transition-colors">
                                            {prog.title}
                                        </h3>

                                        {/* Target Audience Pill */}
                                        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/80 mb-3.5 w-full">
                                            <PersonIcon className="w-3 h-3 text-kipan-blue shrink-0" />
                                            <span className="truncate">{prog.target}</span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                            {prog.description}
                                        </p>

                                        {/* Highlights Checklist */}
                                        <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                                            {prog.highlights.map((item, hIdx) => (
                                                <div key={hIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                                                    <CheckCircledIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action link */}
                                    <div className="pt-3 border-t border-slate-100">
                                        <a
                                            href="/program"
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-kipan-navy group-hover:text-kipan-blue transition-colors"
                                        >
                                            <span>Detail Program</span>
                                            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-kipan-blue" />
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Bottom Link to Full Programs Page */}
                <ScrollReveal direction="up" delay={0.3}>
                    <div className="mt-12 text-center">
                        <a
                            href="/program"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 hover:bg-white border border-slate-200 hover:border-kipan-blue text-xs font-bold text-kipan-navy shadow-2xs hover:shadow-xs transition-all"
                        >
                            <span>Eksplorasi Seluruh Inisiatif &amp; Panduan Aksi KIPAN</span>
                            <ArrowRightIcon className="w-4 h-4 text-kipan-blue" />
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
