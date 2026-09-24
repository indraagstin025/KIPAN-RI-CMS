import { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';
import FloatingWhatsApp from '@/Components/Landing/FloatingWhatsApp';
import PageHeader from '@/Components/Landing/PageHeader';
import { AGENDA_KEGIATAN, type AgendaItem } from '@/data/kipan-data';
import {
    Calendar as CalendarIcon,
    Clock,
    MapPin,
    Building2,
    Search,
    ChevronLeft,
    ChevronRight,
    Tag,
} from 'lucide-react';

const CATEGORIES = ['Semua', 'Nasional', 'Kaderisasi', 'Edukasi', 'Aksi Lapangan', 'Kesehatan'] as const;

export default function Agenda() {
    const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
    const [search, setSearch] = useState<string>('');

    const filtered = AGENDA_KEGIATAN.filter((a) => {
        const matchesCategory = selectedCategory === 'Semua' || a.category === selectedCategory;
        const matchesSearch =
            a.title.toLowerCase().includes(search.toLowerCase()) ||
            a.location.toLowerCase().includes(search.toLowerCase()) ||
            a.organizer.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <Head title="Kalender & Direktori Agenda Kegiatan : KIPAN Indonesia" />
            <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-slate-800">
                <Navbar />
                <main className="flex-1">
                    <PageHeader
                        badge="Kalender Kegiatan Nasional & Daerah"
                        title="Agenda Kegiatan KIPAN"
                        subtitle="Direktori resmi jadwal rapat kerja, sosialisasi sekolah, pelatihan kader inti, dan aksi kepemudaan anti narkotika."
                    />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        {/* Filter Bar */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
                            {/* Categories */}
                            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                                            selectedCategory === cat
                                                ? 'bg-blue-600 text-white shadow-xs'
                                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Search */}
                            <div className="relative w-full sm:w-72">
                                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Cari agenda atau lokasi..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* Agenda List */}
                        <div className="space-y-5 max-w-4xl mx-auto">
                            {filtered.length === 0 ? (
                                <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-300 rounded-3xl p-8">
                                    <CalendarIcon className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                                    <h3 className="text-base font-bold text-slate-800">
                                        Tidak ada agenda yang cocok
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Coba gunakan kata kunci pencarian atau kategori lain.
                                    </p>
                                </div>
                            ) : (
                                filtered.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                                    >
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2 mb-2.5">
                                                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                                                    {item.category}
                                                </span>
                                                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                                                    {item.status}
                                                </span>
                                            </div>

                                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                                                {item.title}
                                            </h3>

                                            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                                                {item.description}
                                            </p>

                                            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                                                <div className="flex items-center gap-1.5">
                                                    <CalendarIcon className="w-4 h-4 text-blue-600" />
                                                    <span>{item.displayDate}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-4 h-4 text-blue-600" />
                                                    <span>{item.time}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Building2 className="w-4 h-4 text-blue-600" />
                                                    <span>{item.organizer}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:w-56 shrink-0 bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col justify-between">
                                            <div className="flex items-start gap-2 text-xs text-slate-600 mb-3">
                                                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                                <span className="line-clamp-2">{item.location}</span>
                                            </div>
                                            <a
                                                href="#kontak"
                                                className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold text-center transition-colors shadow-xs"
                                            >
                                                Informasi &amp; Hadir
                                            </a>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </main>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </>
    );
}
