import {
    ArrowRightIcon,
    CheckCircledIcon,
    PersonIcon,
} from '@radix-ui/react-icons';
import { EnhancedProgram } from '../../constants/enhancedPrograms';

interface ProgramCardProps {
    program: EnhancedProgram;
}

export default function ProgramCard({ program }: ProgramCardProps) {
    const Icon = program.icon;

    return (
        <div
            className={`shadow-xs group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${program.accentHover}`}
        >
            <div>
                {/* Top Meta: Pillar Badge + Icon */}
                <div className="mb-4 flex items-center justify-between">
                    <span
                        className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${program.colorBadge}`}
                    >
                        {program.pillarNumber} • {program.pillarName}
                    </span>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-kipan-navy transition-all duration-300 group-hover:scale-105 group-hover:bg-kipan-blue group-hover:text-white">
                        <Icon className="h-4 w-4" />
                    </div>
                </div>

                {/* Title */}
                <h3 className="mb-2.5 text-base font-bold leading-snug text-kipan-navy transition-colors group-hover:text-kipan-blue sm:text-lg">
                    {program.title}
                </h3>

                {/* Target Audience Pill */}
                <div className="mb-3.5 inline-flex w-full items-center gap-1.5 rounded-md border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                    <PersonIcon className="h-3 w-3 shrink-0 text-kipan-blue" />
                    <span className="truncate">{program.target}</span>
                </div>

                {/* Description */}
                <p className="mb-4 text-xs leading-relaxed text-slate-600">
                    {program.description}
                </p>

                {/* Highlights Checklist */}
                <div className="mb-5 space-y-1.5 border-t border-slate-100 pt-3">
                    {program.highlights.map((item, hIdx) => (
                        <div
                            key={hIdx}
                            className="flex items-center gap-2 text-[11px] text-slate-700"
                        >
                            <CheckCircledIcon className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Action link */}
            <div className="border-t border-slate-100 pt-3">
                <a
                    href="/program"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-kipan-navy transition-colors group-hover:text-kipan-blue"
                >
                    <span>Detail Program</span>
                    <ArrowRightIcon className="h-3.5 w-3.5 text-kipan-blue transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    );
}
