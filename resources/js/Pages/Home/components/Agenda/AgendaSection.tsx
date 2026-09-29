import ScrollReveal from '@/Components/Layout/ScrollReveal';
import { AGENDA_ITEMS } from '@/data/landing-content';
import { ArrowRightIcon, CalendarIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import HomeAgendaCard from './HomeAgendaCard';

const FILTER_CATEGORIES = [
    { id: 'all', label: 'Semua Agenda' },
    { id: 'Kaderisasi', label: 'Kaderisasi & Pelatihan' },
    { id: 'Edukasi', label: 'Sosialisasi & Edukasi' },
    { id: 'Nasional', label: 'Aksi & Acara Nasional' },
];

export default function AgendaSection() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredAgendas = AGENDA_ITEMS.filter((item) => {
        if (selectedCategory === 'all') return true;
        if (selectedCategory === 'Nasional') {
            return item.category.toLowerCase().includes('nasional');
        }
        return item.category
            .toLowerCase()
            .includes(selectedCategory.toLowerCase());
    });

    return (
        <section
            id="agenda"
            className="overflow-hidden border-b border-kipan-border bg-gradient-to-b from-[#F4F8FA] to-white py-16 lg:py-24"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="mx-auto mb-10 max-w-3xl text-center">
                        <div className="mb-2.5 flex items-center justify-center gap-3">
                            <span className="h-0.5 w-8 rounded-full bg-kipan-blue" />
                            <span className="text-xs font-bold uppercase tracking-widest text-kipan-blue">
                                Jadwal &amp; Rencana Aksi
                            </span>
                            <span className="h-0.5 w-8 rounded-full bg-kipan-blue" />
                        </div>
                        <h2 className="text-2xl font-extrabold tracking-tight text-kipan-navy sm:text-3xl lg:text-4xl">
                            Agenda Kegiatan KIPAN RI
                        </h2>
                        <p className="mx-auto mt-2.5 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                            Jadwal pelatihan kader inti, roadshow sosialisasi
                            P4GN, jambore relawan, dan peringatan hari besar
                            kepemudaan nasional yang akan datang.
                        </p>

                        {/* Interactive Filter Pills */}
                        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
                            {FILTER_CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                                        selectedCategory === cat.id
                                            ? 'scale-102 bg-kipan-navy text-white shadow-md shadow-kipan-navy/15'
                                            : 'shadow-2xs border border-slate-200 bg-white text-slate-600 hover:border-kipan-blue hover:text-kipan-blue'
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* 2-Column Responsive Card Grid */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
                    {filteredAgendas.map((item, idx) => (
                        <HomeAgendaCard key={item.id} item={item} index={idx} />
                    ))}
                </div>

                {/* Empty State if filter returns nothing */}
                {filteredAgendas.length === 0 && (
                    <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white py-12 text-center">
                        <CalendarIcon className="mx-auto mb-2 h-10 w-10 text-slate-400" />
                        <h4 className="text-sm font-bold text-slate-700">
                            Tidak ada agenda pada kategori ini
                        </h4>
                        <p className="mt-1 text-xs text-slate-500">
                            Silakan pilih kategori lain atau lihat kalender
                            lengkap.
                        </p>
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className="mt-3 text-xs font-bold text-kipan-blue hover:underline"
                        >
                            Tampilkan Semua Agenda
                        </button>
                    </div>
                )}

                {/* Clean Bottom Banner: Permohonan Kolaborasi / Narasumber */}
                <ScrollReveal direction="up" delay={0.25}>
                    <div className="shadow-xs mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 md:flex-row">
                        <div className="flex items-start gap-4 text-center sm:text-left">
                            <div className="flex hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-kipan-blue sm:flex">
                                <CalendarIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-kipan-navy">
                                    Ingin Mengadakan Sosialisasi atau Pelatihan
                                    di Daerah Anda?
                                </h4>
                                <p className="mt-1 max-w-xl text-xs leading-relaxed text-slate-600">
                                    KIPAN membuka sinergi dengan instansi
                                    pemerintah, sekolah, universitas, dan ormas
                                    kepemudaan untuk penyediaan narasumber
                                    edukasi P4GN.
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full shrink-0 items-center justify-center gap-3 sm:w-auto">
                            <a
                                href="/agenda"
                                className="shadow-2xs rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 transition-all hover:border-kipan-blue hover:text-kipan-blue"
                            >
                                Kalender 2026
                            </a>
                            <a
                                href="/kontak"
                                className="shadow-xs flex items-center gap-1.5 rounded-xl bg-kipan-navy px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-kipan-blue hover:shadow-md"
                            >
                                <span>Ajukan Sinergi</span>
                                <ArrowRightIcon className="h-3.5 w-3.5" />
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
