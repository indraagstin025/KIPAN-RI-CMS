import { useState } from 'react';
import {
    ClockIcon,
    SewingPinIcon,
    ArrowRightIcon,
    CalendarIcon,
    PersonIcon,
    CheckCircledIcon,
} from '@radix-ui/react-icons';
import { AGENDA_ITEMS } from '@/data/landing-content';
import ScrollReveal from './ScrollReveal';

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
        return item.category.toLowerCase().includes(selectedCategory.toLowerCase());
    });

    return (
        <section id="agenda" className="py-16 lg:py-24 bg-gradient-to-b from-[#F4F8FA] to-white border-b border-kipan-border overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <div className="flex items-center justify-center gap-3 mb-2.5">
                            <span className="h-0.5 w-8 bg-kipan-blue rounded-full"></span>
                            <span className="text-xs font-bold text-kipan-blue uppercase tracking-widest">
                                Jadwal &amp; Rencana Aksi
                            </span>
                            <span className="h-0.5 w-8 bg-kipan-blue rounded-full"></span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-kipan-navy tracking-tight">
                            Agenda Kegiatan KIPAN RI
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-xl mx-auto leading-relaxed">
                            Jadwal pelatihan kader inti, roadshow sosialisasi P4GN, jambore relawan, dan peringatan hari besar kepemudaan nasional yang akan datang.
                        </p>

                        {/* Interactive Filter Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
                            {FILTER_CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                                        selectedCategory === cat.id
                                            ? 'bg-kipan-navy text-white shadow-md shadow-kipan-navy/15 scale-102'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:border-kipan-blue hover:text-kipan-blue shadow-2xs'
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* 2-Column Responsive Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
                    {filteredAgendas.map((item, idx) => {
                        const isOpened = item.status === 'Dibuka';
                        return (
                            <ScrollReveal key={item.id} direction="up" delay={0.06 + idx * 0.05}>
                                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:border-kipan-blue hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-5 group h-full justify-between">
                                    {/* Left: Refined Date Ticket Badge */}
                                    <div className="w-full sm:w-24 sm:h-28 rounded-xl bg-gradient-to-b from-[#0D3F70] to-[#0A2E52] text-white flex sm:flex-col items-center justify-between sm:justify-center p-3 sm:p-2 shrink-0 border border-blue-900/60 shadow-xs group-hover:scale-102 group-hover:border-kipan-blue transition-all duration-300">
                                        <div className="flex items-center sm:flex-col gap-2 sm:gap-0">
                                            <span className="text-2xl sm:text-3xl font-black font-mono leading-none text-amber-400">
                                                {item.day}
                                            </span>
                                            <span className="text-xs sm:text-[11px] font-bold tracking-widest text-blue-100 uppercase sm:mt-1">
                                                {item.month}
                                            </span>
                                        </div>
                                        <span className="text-[10px] font-semibold text-blue-200/80 bg-white/10 px-2 py-0.5 rounded-full sm:mt-1">
                                            2026
                                        </span>
                                    </div>

                                    {/* Center/Right: Information Details */}
                                    <div className="flex-1 min-w-0 w-full flex flex-col justify-between h-full">
                                        <div>
                                            {/* Tag & Status Row */}
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <span className="text-[10px] font-bold text-kipan-blue bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 uppercase tracking-wide">
                                                    {item.category}
                                                </span>
                                                <span
                                                    className={`inline-flex items-center text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${
                                                        isOpened
                                                            ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                                                            : 'text-amber-700 bg-amber-50 border-amber-200'
                                                    }`}
                                                >
                                                    <span className="relative flex h-2 w-2 mr-1.5">
                                                        {isOpened && (
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                        )}
                                                        <span
                                                            className={`relative inline-flex rounded-full h-2 w-2 ${
                                                                isOpened ? 'bg-emerald-500' : 'bg-amber-500'
                                                            }`}
                                                        ></span>
                                                    </span>
                                                    {isOpened ? 'Pendaftaran Dibuka' : 'Segera Dibuka'}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-base sm:text-lg font-bold text-kipan-navy leading-snug group-hover:text-kipan-blue transition-colors line-clamp-2">
                                                {item.title}
                                            </h3>

                                            {/* Meta Items with Icons */}
                                            <div className="mt-3 space-y-1.5 text-xs text-slate-500">
                                                <div className="flex items-center gap-2">
                                                    <ClockIcon className="w-3.5 h-3.5 text-kipan-blue shrink-0" />
                                                    <span className="font-medium text-slate-700">{item.time}</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <SewingPinIcon className="w-3.5 h-3.5 text-kipan-blue shrink-0 mt-0.5" />
                                                    <span className="line-clamp-1">{item.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action link */}
                                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                                            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                                                <PersonIcon className="w-3 h-3 text-slate-400" />
                                                Terbuka untuk Kader &amp; Umum
                                            </span>
                                            <a
                                                href="/agenda"
                                                className="inline-flex items-center gap-1 text-xs font-bold text-kipan-blue hover:text-kipan-navy transition-colors group-hover:underline"
                                            >
                                                <span>Detail</span>
                                                <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Empty State if filter returns nothing */}
                {filteredAgendas.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 max-w-lg mx-auto">
                        <CalendarIcon className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                        <h4 className="text-sm font-bold text-slate-700">Tidak ada agenda pada kategori ini</h4>
                        <p className="text-xs text-slate-500 mt-1">Silakan pilih kategori lain atau lihat kalender lengkap.</p>
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
                    <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-start gap-4 text-center sm:text-left">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-kipan-blue flex items-center justify-center shrink-0 hidden sm:flex">
                                <CalendarIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-kipan-navy">
                                    Ingin Mengadakan Sosialisasi atau Pelatihan di Daerah Anda?
                                </h4>
                                <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-xl">
                                    KIPAN membuka sinergi dengan instansi pemerintah, sekolah, universitas, dan ormas kepemudaan untuk penyediaan narasumber edukasi P4GN.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
                            <a
                                href="/agenda"
                                className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:text-kipan-blue hover:border-kipan-blue bg-white shadow-2xs transition-all"
                            >
                                Kalender 2026
                            </a>
                            <a
                                href="#kontak"
                                className="px-5 py-2.5 rounded-xl bg-kipan-navy hover:bg-kipan-blue text-white text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-1.5"
                            >
                                <span>Ajukan Sinergi</span>
                                <ArrowRightIcon className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
