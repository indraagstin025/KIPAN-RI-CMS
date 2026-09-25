import {
    LayersIcon,
    BookmarkIcon,
    StarFilledIcon,
    HeartIcon,
    FileTextIcon,
    Component1Icon,
} from '@radix-ui/react-icons';
import { FOCUS_ITEMS } from '@/data/landing-content';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    pencegahan: LayersIcon,
    kaderisasi: BookmarkIcon,
    pemberdayaan: StarFilledIcon,
    sosial: HeartIcon,
    advokasi: FileTextIcon,
    kemitraan: Component1Icon,
};

export default function FocusSection() {
    return (
        <section id="fokus" className="py-16 lg:py-24 bg-kipan-soft-blue border-b border-kipan-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="text-xs font-bold text-kipan-blue uppercase tracking-wider block mb-2">
                        Pilar Gerakan Pemuda
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-kipan-navy tracking-tight">
                        Fokus &amp; Peran Strategis KIPAN
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-2xl mx-auto leading-relaxed">
                        Cakupan aksi nyata pemuda yang tidak hanya menyuarakan bahaya narkoba, tetapi juga membangun potensi positif, sosial, dan ketahanan generasi.
                    </p>
                </div>

                {/* 6 Grid Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {FOCUS_ITEMS.map((item) => {
                        const Icon = ICON_MAP[item.id] || LayersIcon;
                        return (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-kipan-blue hover:shadow-sm transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-11 h-11 rounded-xl bg-kipan-soft-blue text-kipan-blue border border-blue-200/80 flex items-center justify-center shrink-0">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-[11px] font-bold text-kipan-blue uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                                            {item.category}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-kipan-navy mb-2 leading-snug">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                                    Aksi Nyata KIPAN RI
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
