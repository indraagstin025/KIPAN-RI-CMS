import { useEffect, useState } from 'react';

interface EmergencyReportModalProps {
    readonly isOpen: boolean;
    readonly onClose: () => void;
}

export default function EmergencyReportModal({
    isOpen,
    onClose,
}: Readonly<EmergencyReportModalProps>) {
    const [terkirim, setTerkirim] = useState(false);

    // Kunci scroll latar belakang ketika popup terbuka
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;


    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-emergency-title"
        >
            {/* Latar Belakang Blur */}
            <div
                className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Kontainer PopUp Melayang */}
            <div className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-red-500/40 bg-[#071E36] text-white shadow-2xl ring-1 ring-white/10 animate-in fade-in zoom-in-95 duration-200">
                {/* Header Banner Kedaruratan */}
                <div className="bg-red-700 px-5 py-4 sm:px-6">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/20">
                                <svg
                                    className="h-6 w-6 text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </span>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center rounded bg-red-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                                        Siaga Darurat 24 Jam
                                    </span>
                                </div>
                                <h3
                                    id="modal-emergency-title"
                                    className="mt-0.5 text-base font-bold text-white sm:text-lg"
                                >
                                    Pusat Pelaporan &amp; Emergency Call
                                </h3>
                                <p className="text-xs text-red-100">
                                    Kader Inti Pemuda Anti Narkoba (KIPAN RI) &amp; BNN RI
                                </p>
                            </div>
                        </div>

                        {/* Tombol Tutup */}
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            aria-label="Tutup jendela"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                    </div>

                </div>

                {/* Konten Tab */}
                <div className="flex-1 overflow-y-auto p-5 sm:p-6">
                    <div className="space-y-4">
                            <p className="text-xs text-blue-100/80">
                                Butuh bantuan darurat atau menemukan indikasi penyalahgunaan narkotika di lingkungan Anda? Hubungi saluran resmi di bawah ini:
                            </p>

                            {/* Kartu WhatsApp Siaga KIPAN RI */}
                            <a
                                href="https://wa.me/6281234567890?text=Halo%20Admin%20Siaga%20KIPAN%20RI,%20saya%20membutuhkan%20bantuan/ingin%20melaporkan%20terkait%20penyalahgunaan%20narkoba"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-emerald-500/50 hover:bg-white/10 sm:flex-row sm:items-center"
                            >
                                <div className="flex items-center gap-3.5">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12.031 2c-5.508 0-9.986 4.471-9.986 9.974 0 1.764.462 3.487 1.339 5.006l-1.424 5.2 5.328-1.399c1.458.796 3.101 1.217 4.743 1.217 5.508 0 9.986-4.472 9.986-9.976 0-2.663-1.037-5.166-2.923-7.054-1.886-1.887-4.391-2.924-7.063-2.924zm0 18.232c-1.494 0-2.959-.402-4.237-1.162l-.304-.18-3.153.827.842-3.074-.198-.315c-.833-1.328-1.274-2.868-1.274-4.453 0-4.545 3.697-8.242 8.244-8.242 2.203 0 4.274.858 5.831 2.417 1.558 1.558 2.416 3.63 2.416 5.833 0 4.546-3.698 8.244-8.245 8.244zm4.515-6.177c-.247-.124-1.464-.723-1.692-.805-.228-.082-.394-.124-.56.124-.166.248-.642.805-.787.97-.145.166-.29.186-.538.062-.248-.124-1.049-.387-1.999-1.233-.739-.658-1.238-1.472-1.383-1.72-.145-.248-.015-.382.109-.505.112-.111.248-.29.373-.435.124-.145.166-.248.249-.414.083-.166.041-.311-.021-.435-.062-.124-.56-1.349-.768-1.85-.202-.487-.408-.42-.56-.428l-.478-.009c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.075 0 1.224.892 2.406 1.016 2.572.124.166 1.757 2.683 4.256 3.762.595.257 1.059.41 1.423.525.597.19 1.141.163 1.571.099.479-.072 1.464-.599 1.671-1.178.207-.579.207-1.076.145-1.179-.062-.103-.228-.165-.476-.289z" />
                                        </svg>
                                    </span>
                                    <div>
                                        <div className="text-sm font-bold text-white">WhatsApp Siaga KIPAN RI</div>
                                        <div className="text-lg font-bold text-emerald-400">+62 812-3456-7890</div>
                                        <p className="text-[11px] text-blue-200/70">Konseling sebaya cepat &amp; pendampingan darurat pemuda.</p>
                                    </div>
                                </div>
                                <span className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-emerald-500">
                                    <span>Chat WhatsApp</span>
                                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </span>
                            </a>

                            {/* Nomor Darurat Lainnya */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                                <a
                                    href="tel:184"
                                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-600/30 text-xs font-black text-amber-300">184</span>
                                    <div className="text-left leading-tight">
                                        <div className="text-xs font-bold text-white">Call Center BNN</div>
                                        <div className="text-[10px] text-blue-200/60">Darurat Narkoba</div>
                                    </div>
                                </a>
                                <a
                                    href="tel:110"
                                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600/30 text-xs font-black text-blue-300">110</span>
                                    <div className="text-left leading-tight">
                                        <div className="text-xs font-bold text-white">Polri Darurat</div>
                                        <div className="text-[10px] text-blue-200/60">Kejahatan / Tindak Pidana</div>
                                    </div>
                                </a>
                                <a
                                    href="tel:112"
                                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-600/30 text-xs font-black text-red-300">112</span>
                                    <div className="text-left leading-tight">
                                        <div className="text-xs font-bold text-white">Call Center 112</div>
                                        <div className="text-[10px] text-blue-200/60">Darurat Medis / Pemda</div>
                                    </div>
                                </a>
                        </div>
                    </div>
                </div>

                {/* Footer Modal Ringkas */}
                <div className="border-t border-white/10 bg-slate-950/60 px-5 py-3 text-center sm:px-6">
                    <p className="text-[11px] text-blue-200/60">
                        Pusat Layanan KIPAN RI bersinergi dengan BNN &amp; Kemenpora RI untuk mewujudkan Indonesia Bersinar (Bersih Narkoba).
                    </p>
                </div>
            </div>
        </div>
    );
}
