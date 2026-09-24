import {
    SewingPinIcon,
    EnvelopeClosedIcon,
    GlobeIcon,
    ExclamationTriangleIcon,
    StarFilledIcon,
    ChatBubbleIcon,
} from '@radix-ui/react-icons';
import { Link } from '@inertiajs/react';
import { COMPANY } from '@/data/kipan-data';

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

export default function Footer() {
    const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
        'Halo Sekretariat ' + COMPANY.name + ', saya ingin berkonsultasi seputar kegiatan KIPAN.',
    )}`;

    const portalLinks = [
        { label: 'Beranda Utama', href: '/' },
        { label: 'Profil & Dasar Hukum', href: '/tentang' },
        { label: 'Struktur Organisasi', href: '/struktur' },
        { label: 'Program & Aksi P4GN', href: '/program' },
        { label: 'Kalender & Agenda', href: '/agenda' },
        { label: 'Warta Terkini', href: '/berita' },
        { label: 'Direktori Pengurus', href: '/pengurus' },
        { label: 'Kontak & Sekretariat', href: '/kontak' },
    ];

    const regulasiLinks = [
        { label: 'UU No. 40 Tahun 2009 (Kepemudaan)', note: 'Landasan Peran Pemuda' },
        { label: 'Inpres No. 2 Tahun 2020 (RAN P4GN)', note: 'Rencana Aksi Nasional' },
        { label: 'Pedoman Dasar KIPAN Kemenpora', note: 'Tata Kelola Kader' },
        { label: 'Hotline BNN 184 (Bebas Pulsa)', note: 'Layanan Pengaduan & Konsultasi' },
    ];

    return (
        <footer
            id="kontak"
            className="bg-slate-950 text-slate-300 border-t border-slate-800/80"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18 pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))]">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
                    {/* Brand & Accreditation (4 cols) */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-5">
                            {/* Circular Logos as requested */}
                            <div className="flex items-center gap-2 shrink-0">
                                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center border border-slate-700 overflow-hidden p-1 shadow-sm">
                                    <img
                                        src="/logo-bnn.jpg"
                                        alt="Logo BNN RI"
                                        title="Mitra Binaan BNN RI"
                                        className="w-full h-full object-cover scale-[1.03] rounded-full"
                                    />
                                </div>
                                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center border border-slate-700 overflow-hidden p-0.5 shadow-sm">
                                    <img
                                        src="/logo-kipan.jpg"
                                        alt="Logo KIPAN"
                                        title="Kader Inti Pemuda Anti Narkoba"
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-bold text-base sm:text-lg text-white leading-tight">
                                    {COMPANY.name} Indonesia
                                </div>
                                <div className="text-xs text-blue-400 font-medium">
                                    Binaan Kemenpora RI &amp; Mitra BNN RI
                                </div>
                                <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                                    {COMPANY.fullName}
                                </div>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                            Wadah kepemudaan nasional yang menghimpun potensi pemuda di 38 provinsi
                            dan 514 kabupaten/kota sebagai garda terdepan pencegahan penyalahgunaan narkotika.
                        </p>

                        <div className="flex flex-col gap-2.5">
                            <div className="inline-flex items-center gap-2.5 bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5">
                                <StarFilledIcon className="w-5 h-5 text-amber-400 shrink-0" />
                                <div>
                                    <div className="text-[11px] text-slate-400">Pembina &amp; Mitra Strategis</div>
                                    <div className="text-xs font-semibold text-white">
                                        Kemenpora RI &amp; BNN RI
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex items-center gap-2.5 bg-red-950/40 border border-red-900/60 rounded-lg px-3.5 py-2">
                                <ExclamationTriangleIcon className="w-4 h-4 text-red-400 shrink-0" />
                                <div>
                                    <div className="text-[11px] text-red-300">Layanan Darurat Narkoba BNN</div>
                                    <div className="text-xs font-bold text-red-100">
                                        Call Center 184 (Bebas Pulsa)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigasi Portal (2 cols) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
                            Navigasi Portal
                        </h4>
                        <ul className="space-y-2">
                            {portalLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-xs sm:text-sm text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:underline"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Regulasi & Layanan P4GN (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
                            Regulasi &amp; Layanan
                        </h4>
                        <ul className="space-y-3">
                            {regulasiLinks.map((item, idx) => (
                                <li key={idx} className="text-xs">
                                    <div className="text-slate-200 font-medium">
                                        {item.label}
                                    </div>
                                    <div className="text-[11px] text-slate-500 mt-0.5">
                                        {item.note}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sekretariat & Kontak (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
                            Sekretariat Nasional
                        </h4>
                        <ul className="space-y-3 text-xs sm:text-sm">
                            <li className="flex items-start gap-2.5">
                                <SewingPinIcon className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                <span className="text-slate-400 leading-relaxed">
                                    {COMPANY.currentAddress}
                                </span>
                            </li>
                            <li>
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
                                >
                                    <ChatBubbleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>Konsultasi WhatsApp</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${COMPANY.email}`}
                                    className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
                                >
                                    <EnvelopeClosedIcon className="w-4 h-4 text-blue-400 shrink-0" />
                                    <span>{COMPANY.email}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={COMPANY.instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
                                >
                                    <InstagramIcon className="w-4 h-4 text-amber-400 shrink-0" />
                                    <span>{COMPANY.instagram}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={COMPANY.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
                                >
                                    <GlobeIcon className="w-4 h-4 text-sky-400 shrink-0" />
                                    <span>{COMPANY.website}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Legal Notice */}
                <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
                    <p>© {new Date().getFullYear()} {COMPANY.fullName} ({COMPANY.name}) Indonesia. Seluruh hak cipta dilindungi undang-undang.</p>
                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
                        <span>38 Provinsi • 514 Kab/Kota</span>
                        <span className="text-slate-700 hidden sm:inline">•</span>
                        <span>Inisiasi Kemenpora RI</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
