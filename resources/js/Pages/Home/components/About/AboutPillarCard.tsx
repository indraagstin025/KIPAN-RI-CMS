import { motion } from 'framer-motion';
import { AccessPillar } from '../../constants/aboutPillars';

interface AboutPillarCardProps {
    readonly pillar: AccessPillar;
    readonly isActive: boolean;
    readonly onClick: () => void;
}

export default function AboutPillarCard({
    pillar,
    isActive,
    onClick,
}: Readonly<AboutPillarCardProps>) {
    const IconComp = pillar.icon;

    return (
        <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            type="button"
            onClick={onClick}
            aria-pressed={isActive}
            className={`flex items-center gap-3.5 rounded-2xl p-3.5 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue sm:p-4 ${
                isActive
                    ? 'border-2 border-kipan-blue bg-kipan-navy text-white shadow-md'
                    : 'shadow-xs border border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:bg-slate-50/80'
            }`}
        >
            {/* Icon Container */}
            <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    isActive
                        ? 'bg-white/15 text-kipan-yellow'
                        : 'border border-blue-100 bg-blue-50 text-kipan-blue'
                }`}
            >
                <IconComp className="h-5 w-5" />
            </div>

            {/* Card Text */}
            <div className="flex flex-col leading-tight">
                <span
                    className={`mb-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        isActive ? 'text-blue-200' : 'text-slate-400'
                    }`}
                >
                    {pillar.accessTag}
                </span>
                <span
                    className={`truncate text-xs font-bold sm:text-sm ${
                        isActive ? 'text-white' : 'text-slate-800'
                    }`}
                >
                    {pillar.cardTitle}
                </span>
            </div>
        </motion.button>
    );
}
