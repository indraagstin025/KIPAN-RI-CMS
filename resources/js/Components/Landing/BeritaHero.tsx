import { motion } from 'framer-motion';
import { CalendarIcon } from '@radix-ui/react-icons';
import { SewingPinFilledIcon } from '@radix-ui/react-icons';
import { BERITA } from '@/data/kipan-data';

interface BeritaHeroProps {
    category: string;
    title: string;
    subtitle: string;
}

export default function BeritaHero({ category, title, subtitle }: BeritaHeroProps) {
    const [headline, ...rest] = BERITA;
    const latest = rest.slice(0, 3);

    return (
        <section className="relative flex flex-col justify-center pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] text-white overflow-hidden">
            {/* Subtle Youth Network Graphic Grid Background */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Subtle Diagonal Glow */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-kipan-yellow/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl mb-10 lg:mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-wider text-blue-100 mb-6">
                        <span className="w-2 h-2 rounded-full bg-kipan-yellow" />
                        {category}
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
                        {title}
                    </h1>
                    <div className="h-1.5 w-24 bg-kipan-yellow rounded-full mt-4 mb-6" />

                    <div className="border-l-4 border-kipan-yellow pl-4">
                        <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal">
                            {subtitle}
                        </p>
                    </div>
                </motion.div>

                {/* Sampul Berita: Headline + Kabar Terbaru */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Headline */}
                    <motion.a
                        href="#berita-list"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="group lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[380px] flex items-end shadow-2xl"
                    >
                        <img
                            src={headline.image}
                            alt={headline.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#061C33] via-[#061C33]/55 to-transparent" />
                        <div className="relative p-6 sm:p-8">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-3 py-1 rounded-full bg-kipan-yellow text-kipan-navy text-[11px] font-black">
                                    HEADLINE
                                </span>
                                <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-blue-100 text-[11px] font-bold">
                                    {headline.category}
                                </span>
                            </div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug mb-2 group-hover:text-kipan-yellow transition-colors">
                                {headline.title}
                            </h2>
                            <p className="text-sm text-blue-100/85 leading-relaxed line-clamp-2 max-w-2xl mb-3">
                                {headline.excerpt}
                            </p>
                            <p className="flex items-center gap-4 text-xs text-blue-200/80">
                                <span className="inline-flex items-center gap-1.5">
                                    <CalendarIcon className="w-3.5 h-3.5" />
                                    {headline.date}
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <SewingPinFilledIcon className="w-3.5 h-3.5" />
                                    {headline.location}
                                </span>
                            </p>
                        </div>
                    </motion.a>

                    {/* Kabar Terbaru */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col"
                    >
                        <h3 className="text-sm font-black uppercase tracking-widest text-kipan-yellow mb-4">
                            Kabar Terbaru
                        </h3>
                        <div className="space-y-4 flex-1">
                            {latest.map((item) => (
                                <a
                                    key={item.id}
                                    href="#berita-list"
                                    className="group flex gap-3 items-start"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-20 h-20 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                                    />
                                    <div className="min-w-0">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-blue-200/70 mb-1">
                                            {item.category} • {item.date}
                                        </p>
                                        <p className="text-sm font-bold text-white leading-snug line-clamp-3 group-hover:text-kipan-yellow transition-colors">
                                            {item.title}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <a
                            href="#berita-list"
                            className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs font-bold transition-all"
                        >
                            Lihat Semua Berita
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
