import ScrollReveal from '@/Components/Layout/ScrollReveal';
import { CONTACT_INFO } from '@/data/landing-content';
import { ChatBubbleIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';

export default function CtaSection() {
    return (
        <section className="overflow-hidden border-b border-blue-900 bg-kipan-navy py-16 text-white lg:py-24">
            <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <ScrollReveal direction="up" delay={0.05}>
                    <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-kipan-yellow">
                        Aksi Nyata Pemuda
                    </span>

                    <h2 className="mb-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Mari Jadi Bagian dari Gerakan Pemuda Anti Narkoba
                    </h2>

                    <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-blue-100/90 sm:text-base">
                        Bergabung bersama ribuan kader inti di seluruh Nusantara
                        atau jalin kemitraan institusi demi membentengi generasi
                        penerus dari bahaya narkotika.
                    </p>
                </ScrollReveal>

                {/* Action Buttons */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                                'Halo Sekretariat KIPAN RI, saya ingin bergabung menjadi Kader Inti Pemuda Anti Narkoba.',
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-kipan-yellow px-6 py-3.5 text-sm font-bold text-kipan-navy shadow-md transition-all hover:scale-105 hover:bg-amber-400 active:scale-95 sm:w-auto"
                        >
                            <ChatBubbleIcon className="h-4 w-4" />
                            <span>Daftar / Hubungi WhatsApp</span>
                        </a>

                        <a
                            href={`tel:${CONTACT_INFO.hotlineBnn}`}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-red-500/40 bg-red-600/90 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-red-600 active:scale-95 sm:w-auto"
                        >
                            <ExclamationTriangleIcon className="h-4 w-4 text-amber-300" />
                            <span>
                                Hotline BNN RI {CONTACT_INFO.hotlineBnn} (Bebas
                                Pulsa)
                            </span>
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
