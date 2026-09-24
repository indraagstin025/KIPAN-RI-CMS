import { motion } from 'framer-motion';
import { Phone, ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { HERO, STATS } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';

export default function Hero() {
    return (
        <section
            id="beranda"
            className="relative min-h-[100dvh] min-h-screen flex items-center overflow-hidden"
        >
            {/* Background image */}
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

            {/* Ambient lighting shapes */}
            <div className="absolute top-1/4 right-10 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-14 sm:pb-16 flex flex-col justify-center">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6"
                    >
                        <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-sky-50 text-xs sm:text-sm font-medium">
                            {HERO.badge}
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.18] tracking-tight"
                    >
                        {HERO.headlinePrefix}{' '}
                        <span className="bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent">
                            {HERO.headlineHighlight}
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-sky-100 leading-relaxed max-w-2xl"
                    >
                        {HERO.subheadline}
                    </motion.p>

                    {/* Redesigned CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
                    >
                        <a
                            href="#kontak"
                            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 sm:py-3 rounded-lg shadow-sm hover:shadow transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                        >
                            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>Hubungi Sekretariat</span>
                        </a>
                        <a
                            href="#tentang"
                            className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-xs sm:text-sm font-medium px-5 py-2.5 sm:py-3 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                        >
                            <span>Profil Organisasi</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                    </motion.div>

                    {/* Mini stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 sm:mt-12 grid grid-cols-3 gap-2 sm:gap-6 max-w-2xl bg-white/5 backdrop-blur-sm sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-white/10 sm:border-0"
                    >
                        {STATS.map((stat) => (
                            <div key={stat.label} className="text-center sm:text-left">
                                <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-sky-400 truncate">
                                    {stat.value}
                                </div>
                                <div className="text-[11px] sm:text-sm text-sky-200 mt-0.5 sm:mt-1 leading-tight">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Location badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="mt-6 sm:mt-10 inline-flex items-center gap-2 text-sky-200 text-xs sm:text-sm"
                    >
                        <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>Melayani seluruh Indonesia: dari Sabang sampai Merauke</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
