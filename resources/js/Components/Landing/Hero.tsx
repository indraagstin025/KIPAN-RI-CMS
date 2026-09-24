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
            {/* Background image with authoritative institutional overlay */}
            <div className="absolute inset-0">
                <SafeImage
                    src={HERO.backgroundImage}
                    alt="KIPAN Indonesia"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 lg:pb-24">
                <div className="max-w-3xl">
                    {/* Official Partnership Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 rounded-lg px-3.5 py-1.5 mb-6"
                    >
                        <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-slate-200 text-xs sm:text-sm font-medium">
                            {HERO.badge}
                        </span>
                    </motion.div>

                    {/* Headline with high contrast */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
                    >
                        {HERO.headlinePrefix}{' '}
                        <span className="text-blue-400">
                            {HERO.headlineHighlight}
                        </span>
                    </motion.h1>

                    {/* Human, dignified subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl"
                    >
                        {HERO.subheadline}
                    </motion.p>

                    {/* CTAs with clear hierarchy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
                    >
                        <a
                            href="#kontak"
                            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3.5 rounded-lg shadow-sm hover:shadow transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Hubungi Sekretariat</span>
                        </a>
                        <a
                            href="#tentang"
                            className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-medium px-6 sm:px-7 py-3.5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                        >
                            <span>Profil Organisasi</span>
                            <ArrowRight className="w-4 h-4" />
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

