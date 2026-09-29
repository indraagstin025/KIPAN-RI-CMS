import { CONTACT_INFO, NAV_LINKS } from '@/data/landing-content';
import {
    ChatBubbleIcon,
    EnvelopeClosedIcon,
    GlobeIcon,
    SewingPinIcon,
} from '@radix-ui/react-icons';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="kontak"
            className="border-t border-blue-900 bg-kipan-navy pb-12 pt-16 text-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
                    {/* Identity & About (5 cols) */}
                    <div className="flex flex-col items-start lg:col-span-5">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="shadow-xs h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white p-0.5">
                                <img
                                    src="/logo-kipan.jpg"
                                    alt="Logo KIPAN RI"
                                    className="h-full w-full rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <div className="text-lg font-black tracking-tight text-white">
                                    KIPAN{' '}
                                    <span className="text-kipan-yellow">
                                        Indonesia
                                    </span>
                                </div>
                                <div className="text-xs text-blue-200">
                                    {CONTACT_INFO.supervisor}
                                </div>
                            </div>
                        </div>

                        <p className="mb-6 max-w-sm text-xs leading-relaxed text-blue-100/80 sm:text-sm">
                            Gerakan kepemudaan nasional dalam pencegahan
                            penyalahgunaan narkotika, kaderisasi relawan pemuda,
                            dan pembangunan ketahanan generasi muda menuju
                            Indonesia Emas.
                        </p>

                        <div className="inline-flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-950/80 px-3 py-1.5 text-xs font-bold text-red-200">
                            <span>Call Center BNN RI:</span>
                            <span className="text-sm font-extrabold text-kipan-yellow">
                                {CONTACT_INFO.hotlineBnn}
                            </span>
                            <span className="text-[10px] font-normal text-red-300">
                                (Bebas Pulsa)
                            </span>
                        </div>
                    </div>

                    {/* Navigation Quick Links (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-kipan-yellow">
                            Navigasi Portal
                        </h4>
                        <ul className="space-y-2 text-xs">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-blue-100/80 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Secretariat (4 cols) */}
                    <div className="lg:col-span-4">
                        <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-kipan-yellow">
                            Sekretariat Nasional
                        </h4>
                        <div className="space-y-3 text-xs text-blue-100/80">
                            <div className="flex items-start gap-2.5">
                                <SewingPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-kipan-yellow" />
                                <span>{CONTACT_INFO.address}</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <EnvelopeClosedIcon className="h-4 w-4 shrink-0 text-kipan-yellow" />
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="hover:text-white"
                                >
                                    {CONTACT_INFO.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <ChatBubbleIcon className="h-4 w-4 shrink-0 text-kipan-yellow" />
                                <span>{CONTACT_INFO.phone}</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <GlobeIcon className="h-4 w-4 shrink-0 text-kipan-yellow" />
                                <span>
                                    Jam Layanan: {CONTACT_INFO.workingHours}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal / Copyright */}
                <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center text-xs text-blue-200/60 sm:flex-row sm:text-left">
                    <div>
                        &copy; {currentYear} {CONTACT_INFO.organization}. Hak
                        Cipta Dilindungi Undang-Undang.
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="cursor-pointer hover:text-white">
                            Dasar Hukum UU No. 40/2009
                        </span>
                        <span>•</span>
                        <span className="cursor-pointer hover:text-white">
                            Inpres No. 2/2020
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
