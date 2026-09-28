import { motion } from 'framer-motion';
import { GALLERY_ITEMS } from '@/data/kipan-data';

interface GaleriHeroProps {
    category: string;
    title: string;
    subtitle: string;
}

function MarqueeRow({
    items,
    reverse = false,
}: {
    items: typeof GALLERY_ITEMS;
    reverse?: boolean;
}) {
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
                        className="h-40 sm:h-48 w-64 sm:w-72 shrink-0 rounded-2xl object-cover border border-white/15 shadow-lg"
                    />
                ))}
            </div>
        </div>
    );
}

export default function GaleriHero({ category, title, subtitle }: GaleriHeroProps) {
    const rowA = GALLERY_ITEMS.slice(0, 11);
    const rowB = GALLERY_ITEMS.slice(11);

    return (
        <section className="relative flex flex-col justify-center pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] text-white overflow-hidden">
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
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
                    backgroundSize: '32px 32px',
                }}
            />
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-kipan-yellow/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl mb-10"
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
