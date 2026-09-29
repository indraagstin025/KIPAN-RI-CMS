import { GALLERY_ITEMS } from '@/data/kipan-data';
import { motion } from 'framer-motion';

interface GaleriHeroProps {
    readonly category: string;
    readonly title: string;
    readonly subtitle: string;
}

interface MarqueeRowProps {
    readonly items: typeof GALLERY_ITEMS;
    readonly reverse?: boolean;
}

function MarqueeRow({ items, reverse = false }: Readonly<MarqueeRowProps>) {
    const doubled = [...items, ...items];
    return (
        <div className="flex overflow-hidden">
            <div
                className="flex w-max gap-4 pr-4"
                style={{
                    animation: `${reverse ? 'marquee-right' : 'marquee-left'} 55s linear infinite`,
                }}
            >
                {doubled.map((item, idx) => (
                    <img
                        key={`${item.id}-${idx}`}
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-40 w-64 shrink-0 rounded-2xl border border-white/15 object-cover shadow-lg sm:h-48 sm:w-72"
                    />
                ))}
            </div>
        </div>
    );
}

export default function GaleriHero({
    category,
    title,
    subtitle,
}: Readonly<GaleriHeroProps>) {
    const rowA = GALLERY_ITEMS.slice(0, 11);
    const rowB = GALLERY_ITEMS.slice(11);

    return (
        <section className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] pb-14 pt-24 text-white sm:pb-16 sm:pt-28 lg:pt-32">
            <style>{`
                @keyframes marquee-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }
            `}</style>

            {/* Subtle Youth Network Graphic Grid Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-15"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
                    backgroundSize: '32px 32px',
                }}
            />
            <div className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-kipan-yellow/10 blur-3xl" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-10 max-w-3xl"
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
            </div>

            {/* Pita foto berjalan */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-10 space-y-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
            >
                <MarqueeRow items={rowA} />
                <MarqueeRow items={rowB} reverse />
            </motion.div>
        </section>
    );
}
