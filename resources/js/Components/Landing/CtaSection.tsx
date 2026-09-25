import { ChatBubbleIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { CONTACT_INFO } from '@/data/landing-content';
import ScrollReveal from './ScrollReveal';

export default function CtaSection() {
    return (
        <section className="bg-kipan-navy text-white py-16 lg:py-24 border-b border-blue-900 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                <ScrollReveal direction="up" delay={0.05}>
                    <span className="text-xs font-bold text-kipan-yellow uppercase tracking-widest block mb-3">
                        Aksi Nyata Pemuda
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-5">
                        Mari Jadi Bagian dari Gerakan Pemuda Anti Narkoba
                    </h2>

                    <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl mx-auto mb-10">
                        Bergabung bersama ribuan kader inti di seluruh Nusantara atau jalin kemitraan institusi demi membentengi generasi penerus dari bahaya narkotika.
                    </p>
                </ScrollReveal>

                {/* Action Buttons */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                                'Halo Sekretariat KIPAN RI, saya ingin bergabung menjadi Kader Inti Pemuda Anti Narkoba.',
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-kipan-yellow hover:bg-amber-400 text-kipan-navy text-sm font-bold rounded-full shadow-md transition-all hover:scale-105 active:scale-95"
                        >
                            <ChatBubbleIcon className="w-4 h-4" />
                            <span>Daftar / Hubungi WhatsApp</span>
                        </a>

                        <a
                            href={`tel:${CONTACT_INFO.hotlineBnn}`}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600/90 hover:bg-red-600 text-white text-sm font-bold rounded-full border border-red-500/40 transition-all hover:scale-105 active:scale-95 shadow-md"
                        >
                            <ExclamationTriangleIcon className="w-4 h-4 text-amber-300" />
                            <span>Hotline BNN RI {CONTACT_INFO.hotlineBnn} (Bebas Pulsa)</span>
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
