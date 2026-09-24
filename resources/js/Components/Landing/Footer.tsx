import { Award, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/data/kipan-data';

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
        'Halo ' + COMPANY.name + ', saya ingin berkonsultasi seputar KIPAN.',
    )}`;

    const targetUnits = [
        'Tingkat Nasional',
        'Tingkat Provinsi',
        'Tingkat Kabupaten/Kota',
        'Tingkat Kecamatan',
        'Pengurus Harian',
        'Kader Divisi',
    ];

    return (
        <footer
            id="kontak"
            className="bg-slate-950 text-slate-300 border-t border-slate-800"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 pb-[calc(3rem+env(safe-area-inset-bottom,0px))]">
                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Brand & Accreditation */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="flex items-center gap-2 shrink-0">
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-slate-700 overflow-hidden p-1 shadow-sm">
                                    <img
                                        src="/logo-bnn.jpg"
                                        alt="Logo BNN RI"
                                        title="Mitra Binaan BNN RI"
                                        className="w-full h-full object-cover scale-[1.03] rounded-full"
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-slate-700 overflow-hidden p-0.5 shadow-sm">
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
                                <div className="text-xs text-slate-400 font-medium">
                                    Mitra Binaan BNN RI
                                </div>
                                <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                                    {COMPANY.fullName}
                                </div>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                            {COMPANY.tagline}. Wadah kepemudaan nasional yang
                            berkomitmen membentengi generasi muda dari ancaman bahaya
                            penyalahgunaan narkoba di seluruh Indonesia.
                        </p>

                        <div className="inline-flex items-center gap-2.5 bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5">
                            <Award className="w-5 h-5 text-amber-400 shrink-0" />
                            <div>
                                <div className="text-[11px] text-slate-400">Status Kemitraan</div>
                                <div className="text-xs font-semibold text-white">
                                    {COMPANY.partner} : {COMPANY.partnerOrigin}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Navigation Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">
                            Navigasi Portal
                        </h4>
                        <ul className="space-y-2">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Target Units */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">
                            Tingkatan Kerja
                        </h4>
                        <ul className="space-y-2">
                            {targetUnits.map((u) => (
                                <li
                                    key={u}
                                    className="text-xs sm:text-sm text-slate-400 flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                                    {u}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4">
                        <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">
                            Sekretariat &amp; Kontak
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                                <span className="text-xs sm:text-sm text-slate-400">
                                    {COMPANY.currentAddress}
                                </span>
                            </li>
                            <li>
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                                >
                                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                                    {COMPANY.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${COMPANY.email}`}
                                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                                >
                                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                                    {COMPANY.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={COMPANY.instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                                >
                                    <InstagramIcon className="w-4 h-4 text-slate-400 shrink-0" />
                                    {COMPANY.instagram}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={COMPANY.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                                >
                                    <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                                    {COMPANY.website}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
                    <p>© {new Date().getFullYear()} {COMPANY.name} Indonesia. Seluruh hak cipta dilindungi undang-undang.</p>
                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
                        <span>Melayani 38 provinsi dan 514 kabupaten/kota</span>
                        <span className="text-slate-700 hidden sm:inline">•</span>
                        <a
                            href="#admin"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            Akses Administrasi
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
