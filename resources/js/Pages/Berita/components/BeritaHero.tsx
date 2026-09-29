import { BERITA } from '@/data/kipan-data';
import { CalendarIcon, SewingPinFilledIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';

interface BeritaHeroProps {
    readonly category: string;
    readonly title: string;
    readonly subtitle: string;
}

export default function BeritaHero({
    category,
    title,
    subtitle,
}: Readonly<BeritaHeroProps>) {
    const [headline, ...rest] = BERITA;
    const latest = rest.slice(0, 3);

    return (
        <section className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] pb-14 pt-24 text-white sm:pb-20 sm:pt-28 lg:pt-32">
            {/* Subtle Youth Network Graphic Grid Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-15"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Subtle Diagonal Glow */}
            <div className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-kipan-yellow/10 blur-3xl" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-10 max-w-3xl lg:mb-12"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-100">
                        <span className="h-2 w-2 rounded-full bg-kipan-yellow" />
                        {category}
                    </div>

                    <h1 className="text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {title}
                    </h1>
                    <div className="mb-6 mt-4 h-1.5 w-24 rounded-full bg-kipan-yellow" />

                    <div className="border-l-4 border-kipan-yellow pl-4">
                        <p className="text-base font-normal leading-relaxed text-blue-100/90 sm:text-lg">
                            {subtitle}
                        </p>
                    </div>
                </motion.div>

                {/* Sampul Berita: Headline + Kabar Terbaru */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Headline */}
                    <motion.a
                        href="#berita-list"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.65,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group relative flex min-h-[320px] items-end overflow-hidden rounded-3xl shadow-2xl sm:min-h-[380px] lg:col-span-2"
                    >
                        <img
                            src={headline.image}
                            alt={headline.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#061C33] via-[#061C33]/55 to-transparent" />
                        <div className="relative p-6 sm:p-8">
                            <div className="mb-3 flex items-center gap-2">
                                <span className="rounded-full bg-kipan-yellow px-3 py-1 text-[11px] font-black text-kipan-navy">
                                    HEADLINE
                                </span>
                                <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-bold text-blue-100">
                                    {headline.category}
                                </span>
                            </div>
                            <h2 className="mb-2 text-xl font-black leading-snug text-white transition-colors group-hover:text-kipan-yellow sm:text-2xl lg:text-3xl">
                                {headline.title}
                            </h2>
                            <p className="mb-3 line-clamp-2 max-w-2xl text-sm leading-relaxed text-blue-100/85">
                                {headline.excerpt}
                            </p>
                            <p className="flex items-center gap-4 text-xs text-blue-200/80">
                                <span className="inline-flex items-center gap-1.5">
                                    <CalendarIcon className="h-3.5 w-3.5" />
                                    {headline.date}
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <SewingPinFilledIcon className="h-3.5 w-3.5" />
                                    {headline.location}
                                </span>
                            </p>
                        </div>
                    </motion.a>

                    {/* Kabar Terbaru */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.65,
                            delay: 0.28,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex flex-col rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:p-6"
                    >
                        <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-kipan-yellow">
                            Kabar Terbaru
                        </h3>
                        <div className="flex-1 space-y-4">
                            {latest.map((item) => (
                                <a
                                    key={item.id}
                                    href="#berita-list"
                                    className="group flex items-start gap-3"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="h-20 w-20 shrink-0 rounded-xl object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="min-w-0">
                                        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-blue-200/70">
                                            {item.category} • {item.date}
                                        </p>
                                        <p className="line-clamp-3 text-sm font-bold leading-snug text-white transition-colors group-hover:text-kipan-yellow">
                                            {item.title}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <a
                            href="#berita-list"
                            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-white/20"
                        >
                            Lihat Semua Berita
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
