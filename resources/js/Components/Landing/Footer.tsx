import { EnvelopeClosedIcon, SewingPinIcon, ChatBubbleIcon, GlobeIcon } from '@radix-ui/react-icons';
import { CONTACT_INFO, NAV_LINKS } from '@/data/landing-content';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="kontak" className="bg-kipan-navy text-white pt-16 pb-12 border-t border-blue-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
                    {/* Identity & About (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col items-start">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border border-white/20 shrink-0 shadow-xs">
                                <img
                                    src="/logo-kipan.jpg"
                                    alt="Logo KIPAN RI"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div>
                                <div className="text-lg font-black text-white tracking-tight">
                                    KIPAN <span className="text-kipan-yellow">Indonesia</span>
                                </div>
                                <div className="text-xs text-blue-200">
                                    {CONTACT_INFO.supervisor}
                                </div>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed mb-6 max-w-sm">
                            Gerakan kepemudaan nasional dalam pencegahan penyalahgunaan narkotika, kaderisasi relawan pemuda, dan pembangunan ketahanan generasi muda menuju Indonesia Emas.
                        </p>

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/80 border border-red-500/40 rounded-lg text-xs font-bold text-red-200">
                            <span>Call Center BNN RI:</span>
                            <span className="text-kipan-yellow font-extrabold text-sm">{CONTACT_INFO.hotlineBnn}</span>
                            <span className="text-[10px] text-red-300 font-normal">(Bebas Pulsa)</span>
                        </div>
                    </div>

                    {/* Navigation Quick Links (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-bold text-kipan-yellow uppercase tracking-widest mb-4">
                            Navigasi Portal
                        </h4>
                        <ul className="space-y-2 text-xs">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-blue-100/80 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Secretariat (4 cols) */}
                    <div className="lg:col-span-4">
                        <h4 className="text-xs font-bold text-kipan-yellow uppercase tracking-widest mb-4">
                            Sekretariat Nasional
                        </h4>
                        <div className="space-y-3 text-xs text-blue-100/80">
                            <div className="flex items-start gap-2.5">
                                <SewingPinIcon className="w-4 h-4 text-kipan-yellow shrink-0 mt-0.5" />
                                <span>{CONTACT_INFO.address}</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <EnvelopeClosedIcon className="w-4 h-4 text-kipan-yellow shrink-0" />
                                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">
                                    {CONTACT_INFO.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <ChatBubbleIcon className="w-4 h-4 text-kipan-yellow shrink-0" />
                                <span>{CONTACT_INFO.phone}</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <GlobeIcon className="w-4 h-4 text-kipan-yellow shrink-0" />
                                <span>Jam Layanan: {CONTACT_INFO.workingHours}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal / Copyright */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/60 text-center sm:text-left">
                    <div>
                        &copy; {currentYear} {CONTACT_INFO.organization}. Hak Cipta Dilindungi Undang-Undang.
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hover:text-white cursor-pointer">Dasar Hukum UU No. 40/2009</span>
                        <span>•</span>
                        <span className="hover:text-white cursor-pointer">Inpres No. 2/2020</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
