import { useEffect, useState } from 'react';

interface EmergencyReportModalProps {
    readonly isOpen: boolean;
    readonly onClose: () => void;
}

export default function EmergencyReportModal({
    isOpen,
    onClose,
}: Readonly<EmergencyReportModalProps>) {
    const [tab, setTab] = useState<'hotline' | 'form'>('hotline');
    const [kategori, setKategori] = useState('Penyalahgunaan Narkoba');
    const [isAnonim, setIsAnonim] = useState(false);
    const [nama, setNama] = useState('');
    const [kontak, setKontak] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
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

    const handleKirimForm = (e: React.FormEvent) => {
        e.preventDefault();
        const namaPelapor = isAnonim ? 'Dirahasiakan (Anonim)' : (nama.trim() || 'Anonim');
        const teks = `🚨 *LAPORAN DARURAT KIPAN RI*\n\n` +
            `• *Kategori:* ${kategori}\n` +
            `• *Nama Pelapor:* ${namaPelapor}\n` +
            `• *Kontak Pelapor:* ${kontak.trim() || '-'}\n` +
            `• *Lokasi Kejadian:* ${lokasi.trim() || '-'}\n` +
            `• *Uraian Laporan:*\n${deskripsi.trim()}\n\n` +
            `_Dikirim melalui Portal Layanan Pengaduan KIPAN RI_`;

        const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(teks)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        setTerkirim(true);
    };

    const resetForm = () => {
        setKategori('Penyalahgunaan Narkoba');
        setIsAnonim(false);
        setNama('');
        setKontak('');
        setLokasi('');
        setDeskripsi('');
        setTerkirim(false);
    };

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
                <div className="relative bg-gradient-to-r from-red-700 via-rose-700 to-red-800 px-5 py-4 sm:px-6">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-2 ring-white/30 backdrop-blur-md">
                                <svg
                                    className="h-6 w-6 text-kipan-yellow animate-pulse"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </span>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-red-950/80 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-300 ring-1 ring-red-400/40">
                                        <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-ping" />
                                        Siaga Darurat 24 Jam
                                    </span>
                                </div>
                                <h3
                                    id="modal-emergency-title"
                                    className="mt-0.5 text-base font-black tracking-tight text-white sm:text-lg"
                                >
                                    Pusat Pelaporan &amp; Emergency Call
                                </h3>
                                <p className="text-xs text-red-100/80">
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

                    {/* Navigasi Tab */}
                    <div className="mt-4 flex gap-2 border-t border-white/15 pt-3">
                        <button
                            type="button"
                            onClick={() => { setTab('hotline'); setTerkirim(false); }}
                            className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2 text-xs font-bold transition-all ${
                                tab === 'hotline'
                                    ? 'bg-white text-red-900 shadow-md ring-2 ring-white/50'
                                    : 'bg-white/15 text-white hover:bg-white/25'
                            }`}
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span>Hotline &amp; Kontak Cepat</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setTab('form')}
                            className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2 text-xs font-bold transition-all ${
                                tab === 'form'
                                    ? 'bg-white text-red-900 shadow-md ring-2 ring-white/50'
                                    : 'bg-white/15 text-white hover:bg-white/25'
                            }`}
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                            <span>Formulir Aduan Anonim</span>
                        </button>
                    </div>
                </div>

                {/* Konten Tab */}
                <div className="flex-1 overflow-y-auto p-5 sm:p-6">
                    {tab === 'hotline' ? (
                        <div className="space-y-4">
                            <p className="text-xs text-blue-100/80">
                                Butuh bantuan darurat atau menemukan indikasi penyalahgunaan narkotika di lingkungan Anda? Hubungi saluran resmi di bawah ini:
                            </p>

                            {/* Kartu BNN Call Center 184 */}
                            <a
                                href="tel:184"
                                className="group relative flex flex-col justify-between gap-3 overflow-hidden rounded-2xl border border-amber-400/40 bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-transparent p-4 transition-all hover:border-amber-400 hover:bg-amber-500/20 sm:flex-row sm:items-center"
                            >
                                <div className="flex items-center gap-3.5">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 shadow-md transition-transform group-hover:scale-110">
                                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </span>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-bold text-white">Call Center BNN RI</span>
                                            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300 ring-1 ring-emerald-500/40">Bebas Pulsa</span>
                                        </div>
                                        <div className="text-2xl font-black tracking-tight text-amber-300">184</div>
                                        <p className="text-[11px] text-blue-200/70">Layanan penanganan, aduan terpadu, dan informasi rehabilitasi BNN RI.</p>
                                    </div>
                                </div>
                                <span className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-black text-slate-950 shadow-md transition-all group-hover:bg-amber-300">
                                    <span>Panggil 184</span>
                                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </span>
                            </a>

                            {/* Kartu WhatsApp Siaga KIPAN RI */}
                            <a
                                href="https://wa.me/6281234567890?text=Halo%20Admin%20Siaga%20KIPAN%20RI,%20saya%20membutuhkan%20bantuan/ingin%20melaporkan%20terkait%20penyalahgunaan%20narkoba"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex flex-col justify-between gap-3 overflow-hidden rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent p-4 transition-all hover:border-emerald-400 hover:bg-emerald-500/20 sm:flex-row sm:items-center"
                            >
                                <div className="flex items-center gap-3.5">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md transition-transform group-hover:scale-110">
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
                                <span className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all group-hover:bg-emerald-500">
                                    <span>Chat WhatsApp</span>
                                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </span>
                            </a>

                            {/* Nomor Darurat Lainnya */}
                            <div className="grid grid-cols-2 gap-3 pt-1">
                                <a
                                    href="tel:110"
                                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/30 text-xs font-black text-blue-300">110</span>
                                    <div className="text-left leading-tight">
                                        <div className="text-xs font-bold text-white">Polri Darurat</div>
                                        <div className="text-[10px] text-blue-200/60">Kejahatan/Kedaruratan</div>
                                    </div>
                                </a>
                                <a
                                    href="tel:112"
                                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600/30 text-xs font-black text-red-300">112</span>
                                    <div className="text-left leading-tight">
                                        <div className="text-xs font-bold text-white">Call Center 112</div>
                                        <div className="text-[10px] text-blue-200/60">Darurat Medis / Pemda</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {terkirim ? (
                                <div className="py-6 text-center">
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 ring-4 ring-emerald-500/30">
                                        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                                    </div>
                                    <h4 className="mt-4 text-base font-bold text-white">Laporan Berhasil Dialihkan ke WhatsApp</h4>
                                    <p className="mx-auto mt-2 max-w-sm text-xs text-blue-200/80">
                                        Data laporan telah diformat secara otomatis. Tim siaga KIPAN RI akan memverifikasi dan segera menindaklanjuti.
                                    </p>
                                    <div className="mt-6 flex justify-center gap-3">
                                        <button
                                            type="button"
                                            onClick={resetForm}
                                            className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/20"
                                        >
                                            Kirim Laporan Lain
                                        </button>
                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="rounded-xl bg-kipan-yellow px-5 py-2 text-xs font-bold text-slate-900 transition hover:bg-amber-400"
                                        >
                                            Tutup Jendela
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleKirimForm} className="space-y-3.5">
                                    <div>
                                        <label className="mb-1 block text-xs font-semibold text-blue-100">
                                            Kategori Laporan / Aduan <span className="text-red-400">*</span>
                                        </label>
                                        <select
                                            value={kategori}
                                            onChange={(e) => setKategori(e.target.value)}
                                            className="w-full rounded-xl border border-white/20 bg-slate-900/80 px-3.5 py-2 text-xs text-white focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400"
                                        >
                                            <option value="Penyalahgunaan Narkoba">Indikasi Penyalahgunaan Narkoba</option>
                                            <option value="Permohonan Konseling / Rehabilitasi">Permohonan Konseling / Rehabilitasi Sebaya</option>
                                            <option value="Peredaran Gelap di Lingkungan Pemuda/Kampus">Peredaran Gelap di Lingkungan Pemuda/Kampus</option>
                                            <option value="Lainnya">Pengaduan Lainnya</option>
                                        </select>
                                    </div>

                                    {/* Opsi Anonim */}
                                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                                        <label className="flex cursor-pointer items-center justify-between gap-2">
                                            <span className="text-xs font-medium text-white">
                                                Laporkan Secara Anonim (Kerahasiaan Dijamin)
                                            </span>
                                            <input
                                                type="checkbox"
                                                checked={isAnonim}
                                                onChange={(e) => setIsAnonim(e.target.checked)}
                                                className="h-4 w-4 rounded border-white/30 bg-slate-900 text-red-600 focus:ring-red-500"
                                            />
                                        </label>
                                    </div>

                                    {!isAnonim && (
                                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-1 block text-xs font-medium text-blue-100">Nama Pelapor</label>
                                                <input
                                                    type="text"
                                                    value={nama}
                                                    onChange={(e) => setNama(e.target.value)}
                                                    placeholder="Nama Anda (Bisa inisial)"
                                                    className="w-full rounded-xl border border-white/20 bg-slate-900/80 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-red-400 focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-xs font-medium text-blue-100">Nomor WhatsApp / HP</label>
                                                <input
                                                    type="tel"
                                                    value={kontak}
                                                    onChange={(e) => setKontak(e.target.value)}
                                                    placeholder="0812xxxx"
                                                    className="w-full rounded-xl border border-white/20 bg-slate-900/80 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-red-400 focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <label className="mb-1 block text-xs font-medium text-blue-100">Lokasi / Wilayah Kejadian</label>
                                        <input
                                            type="text"
                                            value={lokasi}
                                            onChange={(e) => setLokasi(e.target.value)}
                                            placeholder="Contoh: Jl. Merdeka, Kec. Menteng, Jakarta Pusat"
                                            className="w-full rounded-xl border border-white/20 bg-slate-900/80 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-red-400 focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-xs font-medium text-blue-100">
                                            Keterangan / Kronologi Singkat <span className="text-red-400">*</span>
                                        </label>
                                        <textarea
                                            required
                                            rows={3}
                                            value={deskripsi}
                                            onChange={(e) => setDeskripsi(e.target.value)}
                                            placeholder="Tuliskan informasi penting yang ingin dilaporkan secara jelas..."
                                            className="w-full rounded-xl border border-white/20 bg-slate-900/80 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-red-400 focus:outline-none"
                                        />
                                    </div>

                                    <div className="flex items-center gap-2 pt-1 text-[11px] text-blue-200/70">
                                        <svg className="h-4 w-4 shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                        <span>Data Anda dilindungi asas kerahasiaan dan tidak dipublikasikan ke pihak luar.</span>
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 py-3 text-xs font-black text-white shadow-lg transition-all hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                                        >
                                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12.031 2c-5.508 0-9.986 4.471-9.986 9.974 0 1.764.462 3.487 1.339 5.006l-1.424 5.2 5.328-1.399c1.458.796 3.101 1.217 4.743 1.217 5.508 0 9.986-4.472 9.986-9.976 0-2.663-1.037-5.166-2.923-7.054-1.886-1.887-4.391-2.924-7.063-2.924zm0 18.232c-1.494 0-2.959-.402-4.237-1.162l-.304-.18-3.153.827.842-3.074-.198-.315c-.833-1.328-1.274-2.868-1.274-4.453 0-4.545 3.697-8.242 8.244-8.242 2.203 0 4.274.858 5.831 2.417 1.558 1.558 2.416 3.63 2.416 5.833 0 4.546-3.698 8.244-8.245 8.244zm4.515-6.177c-.247-.124-1.464-.723-1.692-.805-.228-.082-.394-.124-.56.124-.166.248-.642.805-.787.97-.145.166-.29.186-.538.062-.248-.124-1.049-.387-1.999-1.233-.739-.658-1.238-1.472-1.383-1.72-.145-.248-.015-.382.109-.505.112-.111.248-.29.373-.435.124-.145.166-.248.249-.414.083-.166.041-.311-.021-.435-.062-.124-.56-1.349-.768-1.85-.202-.487-.408-.42-.56-.428l-.478-.009c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.075 0 1.224.892 2.406 1.016 2.572.124.166 1.757 2.683 4.256 3.762.595.257 1.059.41 1.423.525.597.19 1.141.163 1.571.099.479-.072 1.464-.599 1.671-1.178.207-.579.207-1.076.145-1.179-.062-.103-.228-.165-.476-.289z" />
                                            </svg>
                                            <span>Kirim Laporan via WhatsApp Siaga</span>
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    )}
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
