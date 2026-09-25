import { useState } from 'react';
import {
    PlayIcon,
    PauseIcon,
    ArrowRightIcon,
    SpeakerLoudIcon,
    SpeakerOffIcon,
    GearIcon,
    EnterFullScreenIcon,
} from '@radix-ui/react-icons';

export default function CampaignSlogan() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Large Rounded Curved Card (Youth Innovation Style in KIPAN Blue) */}
                <div className="relative rounded-3xl bg-gradient-to-r from-[#0D3F70] via-[#0E5E9D] to-[#0E6CAC] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden border border-blue-400/20">
                    {/* Subtle Background Watermark / Motif */}
                    <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />
                    <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-300/10 blur-3xl pointer-events-none" />

                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                        {/* Left Column: Accent Bar, Headline, Subtext, Actions */}
                        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-white">
                            {/* Top Gold Accent Bar (Signature Youth Innovation element) */}
                            <div className="w-14 h-1.5 bg-kipan-yellow rounded-full mb-6 shadow-xs" />

                            {/* Headline: 2-Line Bold Contrast */}
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight">
                                Jelajahi Gerakan Bersama
                            </h2>
                            <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-kipan-yellow leading-[1.15] tracking-tight mt-1 sm:mt-2">
                                KIPAN Republik Indonesia
                            </div>

                            {/* Subtitle / Mission Quote with Vertical Line Accent */}
                            <div className="border-l-3 border-white/70 pl-4 my-6 max-w-xl">
                                <p className="text-blue-50/95 text-sm sm:text-base leading-relaxed font-normal">
                                    Temukan dan kembangkan potensimu untuk berkarya hebat, melindungi generasi sebaya dari ancaman narkotika, dan berkontribusi nyata mewujudkan <strong>Indonesia Bersinar</strong> (Bersih Narkoba) bersama pemuda di 38 provinsi.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <a
                                    href="/tentang"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-kipan-navy text-xs font-bold hover:bg-blue-50 transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    <span>Pelajari Profil Lengkap</span>
                                    <ArrowRightIcon className="w-3.5 h-3.5" />
                                </a>

                                <a
                                    href="/program"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white text-xs font-semibold backdrop-blur-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    <span>Lihat Program &amp; Aksi</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Interactive Video Player Frame (Exact Youth Innovation Frame) */}
                        <div className="lg:col-span-6 xl:col-span-5 flex justify-center">
                            <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border-2 border-white/25 bg-slate-900 relative group aspect-video">
                                {isPlaying ? (
                                    /* Active YouTube / Video Embed */
                                    <div className="w-full h-full relative">
                                        <iframe
                                            className="w-full h-full"
                                            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                                            title="Video Profil KIPAN RI"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setIsPlaying(false)}
                                            aria-label="Tutup video"
                                            className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black text-xs font-bold z-20"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ) : (
                                    /* Video Frame Mockup (Mirroring the reference image) */
                                    <div className="w-full h-full relative flex flex-col justify-between p-4 sm:p-5 text-white bg-gradient-to-t from-black/80 via-black/40 to-black/70">
                                        {/* Background Visual Graphic */}
                                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

                                        {/* Top Header Bar inside Video (Logo, Title, Sound, Settings) */}
                                        <div className="relative z-10 flex items-center justify-between">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-8 h-8 rounded-full bg-white p-0.5 shrink-0 shadow-md">
                                                    <img
                                                        src="/logo-kipan.jpg"
                                                        alt="KIPAN"
                                                        className="w-full h-full object-cover rounded-full"
                                                    />
                                                </div>
                                                <div className="flex flex-col leading-tight">
                                                    <span className="text-xs font-bold text-white drop-shadow-sm truncate max-w-[200px] sm:max-w-[260px]">
                                                        Video Profil Resmi KIPAN Republik Indonesia
                                                    </span>
                                                    <span className="text-[10px] text-blue-200/90 drop-shadow-sm">
                                                        Kemenpora RI &amp; BNN RI • 2.5K Tayangan
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-white/80">
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setIsMuted(!isMuted);
                                                    }}
                                                    aria-label="Suara"
                                                    className="p-1 hover:text-white transition-colors"
                                                >
                                                    {isMuted ? (
                                                        <SpeakerOffIcon className="w-4 h-4" />
                                                    ) : (
                                                        <SpeakerLoudIcon className="w-4 h-4" />
                                                    )}
                                                </button>
                                                <GearIcon className="w-4 h-4 hidden sm:block" />
                                                <EnterFullScreenIcon className="w-4 h-4 hidden sm:block" />
                                            </div>
                                        </div>

                                        {/* Center Large Play Button */}
                                        <div className="relative z-10 self-center">
                                            <button
                                                type="button"
                                                onClick={() => setIsPlaying(true)}
                                                aria-label="Putar video profil KIPAN"
                                                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 hover:bg-white text-kipan-navy hover:text-kipan-blue shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group-hover:ring-4 group-hover:ring-kipan-yellow/50"
                                            >
                                                <PlayIcon className="w-7 h-7 sm:w-8 sm:h-8 ml-1" />
                                            </button>
                                        </div>

                                        {/* Bottom Progress Bar & Details (Replicating YouTube Player from Reference) */}
                                        <div className="relative z-10 space-y-2">
                                            {/* Progress Bar (Red indicator like screenshot) */}
                                            <div className="w-full bg-white/30 h-1 rounded-full overflow-hidden relative">
                                                <div className="w-[85%] bg-red-600 h-full rounded-full" />
                                            </div>

                                            <div className="flex items-center justify-between text-[11px] text-white/90">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-mono text-[10px] bg-black/40 px-1.5 py-0.5 rounded">
                                                        2:15 / 2:45
                                                    </span>
                                                    <span className="hidden sm:inline text-white/70">
                                                        Resolusi 1080p HD
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-bold text-kipan-yellow">
                                                        Indonesia Bersinar
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
