import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Calendar as CalendarIcon,
    Clock,
    MapPin,
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    Tag,
    Building2,
    CheckCircle,
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { AGENDA_KEGIATAN, type AgendaItem } from '@/data/kipan-data';

export default function AgendaKalender() {
    // Default to October 2026 (matching our seed dates)
    const [currentMonth, setCurrentMonth] = useState<number>(9); // 0-indexed: 9 = October
    const [currentYear, setCurrentYear] = useState<number>(2026);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const monthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
    ];

    const daysOfWeek = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

    // Get number of days in month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    // Get first day of month (0 = Sunday, 1 = Monday, etc.)
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear((y) => y - 1);
        } else {
            setCurrentMonth((m) => m - 1);
        }
        setSelectedDate(null);
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear((y) => y + 1);
        } else {
            setCurrentMonth((m) => m + 1);
        }
        setSelectedDate(null);
    };

    // Helper: format YYYY-MM-DD
    const formatDateKey = (day: number) => {
        const m = String(currentMonth + 1).padStart(2, '0');
        const d = String(day).padStart(2, '0');
        return `${currentYear}-${m}-${d}`;
    };

    // Find all agenda dates in current month
    const currentMonthPrefix = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`;
    const monthAgendas = AGENDA_KEGIATAN.filter((a) => a.date.startsWith(currentMonthPrefix));

    // Filtered agendas: if a date is selected, show that date; otherwise show all for this month
    const displayedAgendas = selectedDate
        ? AGENDA_KEGIATAN.filter((a) => a.date === selectedDate)
        : monthAgendas.length > 0
        ? monthAgendas
        : AGENDA_KEGIATAN.slice(0, 3);

    return (
        <section
            id="agenda"
            className="py-16 lg:py-24 bg-white border-t border-slate-200"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header: Title + Button to /agenda */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-12">
                    <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold tracking-wider uppercase rounded-md border border-blue-200 shadow-xs mb-2.5">
                            <CalendarIcon className="w-3.5 h-3.5 text-blue-600" />
                            Kalender &amp; Agenda
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Agenda Kegiatan KIPAN Indonesia
                        </h2>
                        <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                            Simak jadwal koordinasi, sosialisasi sekolah, pelatihan kader, dan aksi lapangan pencegahan narkoba.
                        </p>
                    </div>

                    <Link
                        href="/agenda"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-blue-50 text-blue-700 hover:text-blue-800 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 hover:border-blue-300 transition-colors shadow-xs shrink-0 self-start sm:self-end"
                    >
                        <span>Direktori Agenda Lengkap</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* 2-Column Civic Layout: Calendar Widget (Left) + Agenda Cards (Right) */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Interactive Monthly Calendar Widget (5 cols) */}
                    <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <h3 className="font-bold text-base sm:text-lg text-slate-900">
                                    {monthNames[currentMonth]} {currentYear}
                                </h3>
                                <p className="text-xs text-slate-500">
                                    Klik tanggal dengan titik untuk melihat kegiatan
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={handlePrevMonth}
                                    aria-label="Bulan sebelumnya"
                                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={handleNextMonth}
                                    aria-label="Bulan berikutnya"
                                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1.5 text-center mb-2">
                            {daysOfWeek.map((d) => (
                                <div key={d} className="text-xs font-semibold text-slate-400 py-1">
                                    {d}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-1.5 text-center">
                            {/* Empty days before month starts */}
                            {Array.from({ length: firstDayIndex }).map((_, i) => (
                                <div key={`empty-${i}`} className="h-9 sm:h-10" />
                            ))}

                            {/* Actual Month Days */}
                            {Array.from({ length: daysInMonth }).map((_, i) => {
                                const dayNum = i + 1;
                                const dateKey = formatDateKey(dayNum);
                                const hasEvent = AGENDA_KEGIATAN.some((a) => a.date === dateKey);
                                const isSelected = selectedDate === dateKey;

                                return (
                                    <button
                                        key={dayNum}
                                        onClick={() => {
                                            if (isSelected) {
                                                setSelectedDate(null);
                                            } else {
                                                setSelectedDate(dateKey);
                                            }
                                        }}
                                        className={`h-9 sm:h-10 rounded-xl text-xs font-semibold transition-all relative flex flex-col items-center justify-center cursor-pointer ${
                                            isSelected
                                                ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-300'
                                                : hasEvent
                                                ? 'bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-200 font-bold'
                                                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-100'
                                        }`}
                                    >
                                        <span>{dayNum}</span>
                                        {hasEvent && (
                                            <span
                                                className={`w-1.5 h-1.5 rounded-full absolute bottom-1 ${
                                                    isSelected ? 'bg-amber-300' : 'bg-blue-600'
                                                }`}
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Legend */}
                        <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                                <span>Ada Agenda</span>
                            </div>
                            {selectedDate && (
                                <button
                                    onClick={() => setSelectedDate(null)}
                                    className="text-xs text-blue-700 hover:underline font-medium"
                                >
                                    Tampilkan Semua
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right: Upcoming Agenda Cards List (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="flex items-center justify-between mb-1">
                            <h3 className="font-bold text-base text-slate-900">
                                {selectedDate
                                    ? `Kegiatan pada Tanggal ${selectedDate}`
                                    : `Agenda ${monthNames[currentMonth]} ${currentYear}`}
                            </h3>
                            <span className="text-xs text-slate-500">
                                {displayedAgendas.length} Agenda Ditemukan
                            </span>
                        </div>

                        {displayedAgendas.length === 0 ? (
                            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-8 text-center">
                                <CalendarIcon className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                                <p className="text-sm font-semibold text-slate-700">
                                    Tidak ada agenda kegiatan pada tanggal ini.
                                </p>
                                <p className="text-xs text-slate-500 mt-1">
                                    Silakan pilih tanggal lain atau lihat agenda bulan ini.
                                </p>
                                <button
                                    onClick={() => setSelectedDate(null)}
                                    className="mt-3 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-500"
                                >
                                    Reset Pilihan
                                </button>
                            </div>
                        ) : (
                            displayedAgendas.map((agenda) => (
                                <motion.div
                                    key={agenda.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                                            {agenda.category}
                                        </span>
                                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                                            {agenda.status}
                                        </span>
                                    </div>

                                    <h4 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                                        {agenda.title}
                                    </h4>

                                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                                        {agenda.description}
                                    </p>

                                    {/* Event Details Row */}
                                    <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500">
                                        <div className="flex items-center gap-2">
                                            <CalendarIcon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                            <span>{agenda.displayDate}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                            <span>{agenda.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2 sm:col-span-2">
                                            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                            <span className="truncate">{agenda.location}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
