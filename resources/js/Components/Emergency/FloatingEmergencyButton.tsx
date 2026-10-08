import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingEmergencyButtonProps {
    readonly onClick: () => void;
}

export default function FloatingEmergencyButton({
    onClick,
}: Readonly<FloatingEmergencyButtonProps>) {
    const [isDragging, setIsDragging] = useState(false);
    const [maxLeft, setMaxLeft] = useState(-300);
    const [scrollFloatY, setScrollFloatY] = useState(0);

    // Hitung batas drag horizontal berdasarkan lebar layar
    useEffect(() => {
        const updateBounds = () => {
            if (typeof window !== 'undefined') {
                // Tombol tidak boleh keluar dari batas kiri layar
                setMaxLeft(-(window.innerWidth - 220));
            }
        };

        updateBounds();
        window.addEventListener('resize', updateBounds);
        return () => window.removeEventListener('resize', updateBounds);
    }, []);

    // Fleksibilitas pergerakan saat di-scroll:
    // Memberikan efek floating yang dinamis di area bawah saat scrolling,
    // dan DIJAMIN tidak pernah naik/pindah ke atas layar (offset >= 0).
    useEffect(() => {
        let lastScrollY = window.scrollY;
        let timeoutId: number | undefined;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const diff = currentScrollY - lastScrollY;

            // Jika scrolling ke bawah dengan cepat, tombol sedikit merunduk (maksimal 14px ke bawah)
            // agar tidak mengganggu pandangan, lalu kembali santai ke posisi semula.
            if (diff > 4) {
                setScrollFloatY(Math.min(14, diff * 0.25));
            } else {
                setScrollFloatY(0);
            }

            lastScrollY = currentScrollY;

            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                setScrollFloatY(0);
            }, 180);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.clearTimeout(timeoutId);
        };
    }, []);

    const handleClick = () => {
        // Jangan buka modal jika tombol baru saja di-drag
        if (isDragging) return;
        onClick();
    };

    return (
        <motion.aside
            drag
            dragMomentum={false}
            dragElastic={0.06}
            // Batasan drag:
            // top: -130px -> MAKSIMAL hanya bisa digeser sedikit ke atas di area bawah (TIDAK BISA PINDAH KE ATAS LAYAR)
            // bottom: 10px -> Tidak bisa keluar dari batas bawah
            dragConstraints={{
                top: -130,
                bottom: 10,
                left: maxLeft,
                right: 10,
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => {
                // Beri jeda kecil agar klik tidak langsung terpancing saat selesai drag
                setTimeout(() => setIsDragging(false), 100);
            }}
            animate={isDragging ? undefined : { y: scrollFloatY }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            aria-label="Tombol Panggilan Darurat dan Pelaporan KIPAN RI"
            className="fixed bottom-5 right-5 z-40 touch-none select-none sm:bottom-6 sm:right-6"
        >
            <div className="relative group cursor-grab active:cursor-grabbing">
                {/* Gelombang Pulsa Animasi Darurat */}
                <span
                    aria-hidden="true"
                    className="absolute -inset-1.5 rounded-full bg-red-500/35 blur-sm animate-pulse pointer-events-none"
                />
                <span
                    aria-hidden="true"
                    className="absolute -inset-2.5 rounded-full bg-red-600/20 animate-ping pointer-events-none"
                />

                {/* Tombol Melayang Utama */}
                <button
                    type="button"
                    onClick={handleClick}
                    className="relative flex items-center gap-2 rounded-full border-2 border-amber-300/60 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 py-2.5 pl-2.5 pr-4 text-white shadow-2xl transition-shadow duration-300 hover:from-red-500 hover:to-rose-600 hover:shadow-red-600/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400 sm:py-3 sm:pl-3 sm:pr-5"
                    aria-label="Buka PopUp Pelaporan dan Emergency Call"
                >
                    {/* Indikator Grip Drag (Bisa Digerakkan) */}
                    <span
                        className="flex flex-col gap-0.5 px-0.5 text-white/50 opacity-70 group-hover:opacity-100"
                        title="Tahan & geser untuk memindahkan posisi"
                        aria-hidden="true"
                    >
                        <span className="flex gap-0.5">
                            <span className="h-1 w-1 rounded-full bg-white/70" />
                            <span className="h-1 w-1 rounded-full bg-white/70" />
                        </span>
                        <span className="flex gap-0.5">
                            <span className="h-1 w-1 rounded-full bg-white/70" />
                            <span className="h-1 w-1 rounded-full bg-white/70" />
                        </span>
                        <span className="flex gap-0.5">
                            <span className="h-1 w-1 rounded-full bg-white/70" />
                            <span className="h-1 w-1 rounded-full bg-white/70" />
                        </span>
                    </span>

                    {/* Ikon Emergency Call Bergetar/Pulsa */}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 ring-2 ring-white/40 backdrop-blur-xs sm:h-10 sm:w-10">
                        <svg
                            className="h-5 w-5 text-amber-300 animate-pulse"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                    </span>

                    {/* Label Teks Lapor Sekarang */}
                    <div className="flex flex-col text-left leading-tight">
                        <span className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-ping" />
                            Emergency Call
                        </span>
                        <span className="text-xs font-black tracking-tight text-white sm:text-sm">
                            Lapor Sekarang
                        </span>
                    </div>

                    {/* Badge Call 184 Mini */}
                    <span className="hidden rounded-full bg-slate-950/60 px-2 py-0.5 text-[10px] font-extrabold text-amber-300 ring-1 ring-amber-300/40 md:inline-block">
                        BNN 184
                    </span>
                </button>
            </div>
        </motion.aside>
    );
}
