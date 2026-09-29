import { LeaderItem } from '@/data/landing-content';
import { ArrowRightIcon, PersonIcon } from '@radix-ui/react-icons';

interface LeaderCardProps {
    leader: LeaderItem;
}

export default function LeaderCard({ leader }: LeaderCardProps) {
    return (
        <div className="group relative flex w-full max-w-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 ease-out hover:-translate-y-2 hover:border-kipan-blue hover:shadow-[0_20px_35px_-10px_rgba(14,108,172,0.22)] group-hover/spotlight:opacity-60 hover:!opacity-100 hover:scale-[1.01]">
            {/* Visual Emblem Slot (WITHOUT PHOTO as requested) */}
            <div className="mb-4 flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-b from-blue-50/70 via-slate-50 to-slate-100/70 p-4 transition-all duration-300 group-hover:from-blue-100/60 group-hover:to-blue-50">
                <div className="mb-2.5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200/60 bg-white text-kipan-blue shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-blue-100/80">
                    <PersonIcon className="h-7 w-7 text-kipan-blue" />
                </div>
                <span className="rounded-full border border-blue-200/60 bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-kipan-navy shadow-2xs">
                    {leader.tag}
                </span>
            </div>

            {/* Name, Role & Agency */}
            <div className="flex grow flex-col justify-end text-center">
                <h4 className="mb-1 text-base font-black leading-snug text-slate-800 transition-colors duration-200 group-hover:text-kipan-blue">
                    {leader.name}
                </h4>
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-kipan-blue">
                    {leader.role}
                </p>
                <p className="text-xs font-medium text-slate-500">
                    {leader.institution}
                </p>
            </div>

            {/* Slide-Up Drawer for Leader */}
            <div className="mt-3 border-t border-slate-100 pt-2.5">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
                    <span>Struktur &amp; Mandat</span>
                    <span className="flex items-center gap-1 font-bold text-kipan-blue">
                        Detail{' '}
                        <ArrowRightIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                </div>
                <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                        <p className="pt-2 text-left text-xs leading-relaxed text-slate-600">
                            Berkoordinasi aktif dalam pembinaan kepemudaan nasional,
                            edukasi pencegahan bahaya narkotika, dan pengawalan rencana
                            aksi P4GN di 38 provinsi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
