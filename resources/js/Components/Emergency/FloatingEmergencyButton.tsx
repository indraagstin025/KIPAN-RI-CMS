interface FloatingEmergencyButtonProps {
    readonly onClick: () => void;
}

export default function FloatingEmergencyButton({
    onClick,
}: Readonly<FloatingEmergencyButtonProps>) {
    return (
        <aside
            aria-label="Tombol Panggilan Darurat dan Pelaporan KIPAN RI"
            className="fixed z-50 sm:bottom-6 sm:right-6"
            style={{ bottom: '1.25rem', right: '1.25rem' }}
        >
            <button
                type="button"
                onClick={onClick}
                className="flex items-center gap-3 rounded-full bg-red-600 p-1.5 pr-4 text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                aria-label="Buka PopUp Pelaporan dan Emergency Call"
            >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <svg
                        className="h-4 w-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                </div>

                <div className="flex flex-col text-left">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-red-200">
                        Emergency Call
                    </span>
                    <span className="text-sm font-semibold leading-tight text-white">
                        Lapor Sekarang
                    </span>
                </div>

                <span className="hidden ml-1 md:inline-flex items-center rounded-full bg-red-800 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-red-50">
                    BNN 184
                </span>
            </button>
        </aside>
    );
}
