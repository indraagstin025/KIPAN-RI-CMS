import { motion } from 'framer-motion';
import { Phone, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { HERO, STATS } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';

export default function Hero() {
    return (
        <section
            id="beranda"
            className="relative min-h-[100dvh] flex items-center bg-slate-950 overflow-hidden"
        >
            {/* Background image with original rich navy overlay */}
            <div className="absolute inset-0">
                <SafeImage
                    src={HERO.backgroundImage}
                    alt="KIPAN Indonesia"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/75 to-blue-900/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-blue-950/30" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-14 sm:pb-16">
                <div className="max-w-3xl">
                    {/* Official Partnership Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-800/60 rounded-lg px-3.5 py-1.5 mb-4 sm:mb-5 shadow-xs"
                    >
                        <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-slate-100 text-xs sm:text-sm font-medium">
                            {HERO.badge}
                        </span>
                    </motion.div>

                    {/* Headline with balanced, elegant size */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.25] tracking-tight"
                    >
                        {HERO.headlinePrefix}{' '}
                        <span className="text-sky-400 font-bold">
                            {HERO.headlineHighlight}
                        </span>
                    </motion.h1>

                    {/* Human, dignified subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl"
                    >
                        {HERO.subheadline}
                    </motion.p>

                    {/* CTAs with compact, well-proportioned size */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto"
                    >
                        <a
                            href="#kontak"
                            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-4.5 sm:px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                        >
                            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>Hubungi Sekretariat</span>
                        </a>
                        <a
                            href="#tentang"
                            className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-xs sm:text-sm font-medium px-4.5 sm:px-5 py-2.5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                        >
                            <span>Profil Organisasi</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                    </motion.div>

                    {/* Grounded Metric Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-10 sm:mt-14 pt-8 border-t border-slate-800 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl"
                    >
                        {STATS.map((stat) => (
                            <div key={stat.label} className="border-l-2 border-blue-500 pl-3 sm:pl-4">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Location note without em dash (R-02) */}
                    <div className="mt-8 flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
                        <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>Melayani seluruh Indonesia: dari Sabang sampai Merauke</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

