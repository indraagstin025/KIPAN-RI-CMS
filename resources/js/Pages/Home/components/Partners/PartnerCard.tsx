import { PartnerInstitution } from '../../constants/supportingInstitutions';
import PartnerEmblem from './PartnerEmblem';

interface PartnerCardProps {
    institution: PartnerInstitution;
}

export default function PartnerCard({ institution }: PartnerCardProps) {
    return (
        <div className="shadow-xs group flex h-[160px] w-[175px] shrink-0 cursor-default select-none flex-col items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-kipan-blue hover:shadow-lg sm:h-[175px] sm:w-[195px] sm:p-5">
            {/* Level badge */}
            <div className="flex w-full items-center justify-between text-[10px] font-semibold text-slate-400">
                <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-slate-500">
                    {institution.level}
                </span>
            </div>

            {/* Central Emblem & Name */}
            <div className="my-auto flex flex-col items-center">
                <PartnerEmblem type={institution.emblemType} />
                <h3 className="mb-1 text-xs font-extrabold leading-tight text-kipan-navy transition-colors group-hover:text-kipan-blue sm:text-sm">
                    {institution.shortName}
                </h3>
                <span className="line-clamp-1 text-[10px] font-medium text-slate-500">
                    {institution.fullName}
                </span>
            </div>

            {/* Role Tag Footer */}
            <div className="w-full truncate border-t border-slate-100 pt-2 text-[10px] font-bold text-kipan-blue">
                {institution.roleTag}
            </div>
        </div>
    );
}
