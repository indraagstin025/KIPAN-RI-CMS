interface FloatingEmergencyButtonProps {
    readonly onClick: () => void;
}

export default function FloatingEmergencyButton({
    onClick,
}: Readonly<FloatingEmergencyButtonProps>) {
    return (
        <aside
            aria-label="Tombol Panggilan Darurat dan Pelaporan KIPAN RI"
            className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
        >
            <div className="relative group">
                {/* Gelombang Pulsa Animasi Darurat */}
                <span
                    aria-hidden="true"
                    className="absolute -inset-1.5 rounded-full bg-red-500/35 blur-sm animate-pulse"
                />
                <span
                    aria-hidden="true"
                    className="absolute -inset-2.5 rounded-full bg-red-600/20 animate-ping pointer-events-none"
                />

                {/* Tombol Melayang Utama */}
                <button
                    type="button"
                    onClick={onClick}
                    className="relative flex items-center gap-2.5 rounded-full border-2 border-amber-300/60 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 py-2.5 pl-3 pr-4 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-red-500 hover:to-rose-600 hover:shadow-red-600/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400 sm:py-3 sm:pl-3.5 sm:pr-5"
                    aria-label="Buka PopUp Pelaporan dan Emergency Call"
                >
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
        </aside>
    );
}
