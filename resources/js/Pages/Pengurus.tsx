import { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';
import FloatingWhatsApp from '@/Components/Landing/FloatingWhatsApp';
import PageHeader from '@/Components/Landing/PageHeader';
import { PENGURUS, TESTIMONIAL_STATS, type Pengurus as PengurusType } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';
import { Users, Mail, MapPin, Search } from 'lucide-react';

const FILTERS = ['Semua', 'Nasional', 'Provinsi', 'Kabupaten'] as const;

export default function Pengurus() {
    const [filter, setFilter] = useState<string>('Semua');
    const [search, setSearch] = useState<string>('');

    const filtered = PENGURUS.filter((p) => {
        const matchesFilter = filter === 'Semua' || p.level === filter;
        const matchesSearch =
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.role.toLowerCase().includes(search.toLowerCase()) ||
            p.wilayah.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <>
            <Head title="Direktori Pengurus : KIPAN Indonesia" />
            <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-slate-800">
                <Navbar />
                <main className="flex-1">
                    <PageHeader
                        badge="Direktori Kepengurusan"
                        title="Direktori Pengurus KIPAN"
                        subtitle="Mengenal figur pemimpin dan koordinator gerakan pemuda anti narkoba di tingkat pusat maupun daerah."
                    />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        {/* Filter Bar & Search */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
                            {/* Filter Pills */}
                            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                                {FILTERS.map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setFilter(f)}
                                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                                            filter === f
                                                ? 'bg-blue-600 text-white shadow-xs'
                                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                        }`}
                                    >
                                        Tingkat {f}
                                    </button>
                                ))}
                            </div>

                            {/* Search Box */}
                            <div className="relative w-full sm:w-72">
                                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Cari nama atau jabatan..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Pengurus Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filtered.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="aspect-[4/4] overflow-hidden bg-slate-100 relative">
                                            <SafeImage
                                                src={item.photo}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute top-3 left-3 bg-white/95 text-blue-900 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">
                                                Tingkat {item.level}
                                            </div>
                                        </div>

                                        <div className="p-5">
                                            <h3 className="font-bold text-base text-slate-900 leading-snug">
                                                {item.name}
                                            </h3>
                                            <div className="text-xs font-semibold text-blue-700 mt-1">
                                                {item.role}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                                                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                                <span>{item.wilayah}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-5 pb-5 pt-3 border-t border-slate-100">
                                        <a
                                            href={`mailto:${item.kontak}`}
                                            className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-blue-700 transition-colors"
                                        >
                                            <Mail className="w-3.5 h-3.5 text-blue-600" />
                                            <span>{item.kontak}</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </>
    );
}
