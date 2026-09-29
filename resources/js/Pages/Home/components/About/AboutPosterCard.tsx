import { ArrowRightIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { AccessPillar } from '../../constants/aboutPillars';

interface AboutPosterCardProps {
    readonly pillar: AccessPillar;
    readonly index: number;
}

export default function AboutPosterCard({
    pillar,
    index,
}: Readonly<AboutPosterCardProps>) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pillar.id}
                initial={{ opacity: 0, scale: 0.97, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -10 }}
                transition={{ duration: 0.38, ease: 'easeOut' }}
                className="relative flex aspect-[4/5] w-full max-w-md flex-col justify-between overflow-hidden rounded-bl-2xl rounded-br-[2.75rem] rounded-tl-[2.75rem] rounded-tr-2xl border-2 border-blue-400/20 bg-gradient-to-br from-[#0D3F70] via-[#0E5B99] to-[#0A335C] p-5 text-white shadow-2xl sm:aspect-square sm:rounded-br-[3.5rem] sm:rounded-tl-[3.5rem] sm:p-9 lg:aspect-[4/5]"
            >
                {/* Decorative Gold Swoop / Arch */}
                <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-gradient-to-bl from-kipan-yellow/25 to-transparent" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-blue-400/10 blur-2xl" />

                {/* Top Row: Category Tag & Badge */}
                <div className="relative z-10 flex items-center justify-between">
                    <span className="backdrop-blur-xs inline-block rounded-full border border-kipan-yellow/30 bg-black/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-kipan-yellow sm:px-3 sm:text-[11px]">
                        {pillar.posterTag}
                    </span>

                    <span className="backdrop-blur-xs rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-blue-100 sm:text-[11px]">
                        {pillar.badgeText}
                    </span>
                </div>

                {/* Middle Poster Typography */}
                <div className="relative z-10 my-auto py-3 sm:py-6">
                    <div className="mb-1 text-base font-black leading-none tracking-tight text-kipan-yellow sm:text-2xl">
                        {pillar.posterTitleLine1}
                    </div>
                    <div className="mb-3 text-2xl font-black uppercase leading-none tracking-tight text-white drop-shadow-md sm:mb-4 sm:text-4xl lg:text-[40px]">
                        {pillar.posterTitleLine2}
                    </div>
                    <div className="border-l-2 border-kipan-yellow/80 pl-3">
                        <p className="text-xs font-normal leading-relaxed text-blue-50/90 sm:text-sm">
                            {pillar.posterSubtitle}
                        </p>
                    </div>
                </div>

                {/* Bottom Row: Official Badges & Action Chip */}
                <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-4">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 shrink-0 rounded-full bg-white p-0.5 shadow-md">
                            <img
                                src="/logo-kipan.jpg"
                                alt="KIPAN RI"
                                className="h-full w-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-xs font-bold tracking-wide text-white">
                                KIPAN RI
                            </span>
                            <span className="text-[10px] text-blue-200">
                                Inpres No. 2/2020
                            </span>
                        </div>
                    </div>

                    <div className="text-right">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-kipan-yellow transition-colors hover:text-white">
                            <span>Pilar Aksi #{index + 1}</span>
                            <ArrowRightIcon className="h-3.5 w-3.5" />
                        </span>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
