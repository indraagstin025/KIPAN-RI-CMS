import { motion } from 'framer-motion';
import {
    Crosshair1Icon,
    PersonIcon,
    CheckCircledIcon,
    StarFilledIcon,
    HeartIcon,
    ReaderIcon,
    FileTextIcon,
    ActivityLogIcon,
    BookmarkIcon,
    Component1Icon,
} from '@radix-ui/react-icons';
import { ABOUT, COMPANY } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';

const NILAI_ICONS = [
    StarFilledIcon, // Bersih
    HeartIcon, // Peduli
    BookmarkIcon, // Berkarakter
    PersonIcon, // Bersatu
];

const PILAR_AKSI = [
    {
        title: 'Komunikasi, Informasi & Edukasi (KIE)',
        tag: 'Pilar 1',
        desc: 'Gerakan sosialisasi intensif ke sekolah (Goes to School), kampus, dan komunitas pemuda dengan materi edukasi bahaya narkoba terkini.',
        icon: Component1Icon,
        color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
        title: 'Kaderisasi & Pelatihan Inti',
        tag: 'Pilar 2',
        desc: 'Pembekalan kepemimpinan, wawasan kebangsaan, dan kapasitas deteksi dini bagi pemuda terpilih untuk menjadi garda tanggap di wilayahnya.',
        icon: BookmarkIcon,
        color: 'text-blue-700 bg-sky-50 border-sky-200',
    },
    {
        title: 'Pendampingan Sebaya (Peer Support)',
        tag: 'Pilar 3',
        desc: 'Layanan konseling sesama pemuda yang inklusif dan humanis, serta menjadi jembatan rujukan rehabilitasi sukarela ke BNN.',
        icon: HeartIcon,
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
        title: 'Kreativitas & Minat Bakat Positif',
        tag: 'Pilar 4',
        desc: 'Mengalihkan energi pemuda ke kegiatan positif melalui olahraga, seni budaya, digital kreasi, dan wirausaha muda anti narkoba.',
        icon: StarFilledIcon,
        color: 'text-amber-600 bg-amber-50 border-amber-200',
    },
];

export default function About() {
    return (
        <section
            id="tentang"
            className="-mt-10 sm:-mt-14 rounded-t-3xl sm:rounded-t-[2.5rem] bg-white relative z-20 shadow-xl border-t border-slate-200/80 pt-14 sm:pt-20 pb-20 lg:pb-28"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* 4 Pilar Aksi Strategis KIPAN (Inspired by Jabarprov Bento Quick Services) */}
                <div className="mb-16 lg:mb-24">
                    <div className="max-w-3xl mb-8">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold tracking-wider uppercase rounded-md border border-blue-200/80 mb-2">
                            <ActivityLogIcon className="w-3.5 h-3.5 text-blue-600" />
                            Pilar Gerakan Pemuda
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                            4 Pilar Aksi Nyata{' '}
                            <span className="text-blue-700">P4GN KIPAN Indonesia</span>
                        </h2>
                        <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                            Pedoman pelaksanaan tugas pokok kader inti pemuda dalam mewujudkan lingkungan bersih narkoba di seluruh Indonesia.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {PILAR_AKSI.map((pilar, idx) => {
                            const Icon = pilar.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${pilar.color} shadow-xs`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                                {pilar.tag}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-2">
                                            {pilar.title}
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            {pilar.desc}
                                        </p>
                                    </div>
                                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-700">
                                        <span>Pelajari Aksi</span>
                                        <span className="ml-1 text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Section Header: Profil & Legalitas */}
                <div className="max-w-3xl mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold tracking-wider uppercase rounded-md mb-4 border border-blue-200/80">
                        <StarFilledIcon className="w-3.5 h-3.5 text-blue-600" />
                        <span>Profil &amp; Landasan Hukum</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                        Komitmen Gerakan Pemuda{' '}
                        <span className="text-blue-700">Bebas Narkoba</span> Menuju Indonesia Emas
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* Media Column (Editorial Photo Grid & Legal Card) */}
                    <div className="lg:col-span-6 flex flex-col gap-5">
                        {/* Main Photography */}
                        <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm aspect-[4/3]">
                            <SafeImage
                                src={ABOUT.image}
                                alt="Kegiatan Pelatihan KIPAN Indonesia"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                            <div className="absolute top-4 left-4 bg-blue-900/90 text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-blue-700/80 backdrop-blur-sm">
                                Binaan Kemenpora RI &amp; BNN RI
                            </div>
                            <div className="absolute bottom-5 left-5 right-5 text-white">
                                <p className="font-bold text-lg leading-snug">KIPAN Indonesia</p>
                                <p className="text-xs text-slate-300 mt-0.5">{COMPANY.tagline}</p>
                            </div>
                        </div>

                        {/* Secondary Photos */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                                <SafeImage
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                                    alt="Pelatihan Kader Anti Narkoba"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 text-white text-[11px] font-medium px-2 py-1 rounded">
                                    Pelatihan Kader Inti
                                </div>
                            </div>
                            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                                <SafeImage
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                                    alt="Komunitas Relawan Pemuda"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 text-white text-[11px] font-medium px-2 py-1 rounded">
                                    Konsolidasi Wilayah
                                </div>
                            </div>
                        </div>

                        {/* Landasan Hukum Card (Authentic Legal Basis) */}
                        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-slate-700 text-sm leading-relaxed shadow-xs">
                            <div className="flex items-center gap-2.5 font-bold text-slate-900 mb-2.5">
                                <BookmarkIcon className="w-5 h-5 text-blue-700 shrink-0" />
                                <span>Payung Regulasi &amp; Dasar Hukum Resmi</span>
                            </div>
                            <ul className="space-y-2 text-xs text-slate-600">
                                <li className="flex items-start gap-2">
                                    <FileTextIcon className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                    <span><strong>UU No. 40 Tahun 2009</strong> tentang Kepemudaan (Peran aktif pemuda sebagai agen perubahan).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FileTextIcon className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                    <span><strong>Inpres No. 2 Tahun 2020</strong> tentang Rencana Aksi Nasional P4GN (Pencegahan &amp; Pemberantasan Narkoba).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FileTextIcon className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                    <span><strong>Pedoman Dasar KIPAN Kemenpora RI</strong> tentang Pembentukan &amp; Tata Kelola Kader Anti Narkoba.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Content Column (Latar Belakang, Visi & Misi) */}
                    <div className="lg:col-span-6 flex flex-col gap-6">
                        {/* Narrative Paragraphs */}
                        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                <h3 className="text-xl font-bold text-slate-900">
                                    Sekilas Tentang KIPAN RI
                                </h3>
                                <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-md">
                                    Generasi Bersinar
                                </span>
                            </div>
                            {ABOUT.paragraphs.map((p, i) => (
                                <p
                                    key={i}
                                    className="text-slate-700 text-sm sm:text-base leading-relaxed"
                                >
                                    {p}
                                </p>
                            ))}
                        </div>

                        {/* Visi Card with 30% Blue accent */}
                        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-2.5 mb-2.5">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                                    <Crosshair1Icon className="w-4 h-4" />
                                </div>
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                    Visi KIPAN
                                </h3>
                            </div>
                            <p className="text-slate-800 font-semibold text-base sm:text-lg leading-relaxed pl-1 border-l-2 border-blue-600 ml-1">
                                &ldquo;{ABOUT.visi}&rdquo;
                            </p>
                        </div>

                        {/* Misi Card */}
                        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                                    <Crosshair1Icon className="w-4 h-4" />
                                </div>
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                    Misi Strategis
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {ABOUT.misi.map((m, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed"
                                    >
                                        <CheckCircledIcon className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                        <span>{m}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Nilai Dasar Organisasi (60-30-10 palette with gold/blue touch) */}
                <div className="mt-16 lg:mt-20 pt-12 border-t border-slate-200">
                    <div className="max-w-2xl mx-auto text-center mb-10">
                        <h3 className="text-2xl font-bold text-slate-900">
                            Nilai-Nilai Dasar Kader KIPAN
                        </h3>
                        <p className="text-slate-600 text-sm mt-1.5">
                            Prinsip integritas dan pedoman moral seluruh kader inti pemuda di seluruh Indonesia.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {ABOUT.nilai.map((n, idx) => {
                            const Icon = NILAI_ICONS[idx] || StarFilledIcon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-base font-bold text-slate-900 mb-1">
                                        {n.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {n.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
