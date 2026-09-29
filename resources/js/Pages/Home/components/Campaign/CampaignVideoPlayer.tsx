import {
    EnterFullScreenIcon,
    GearIcon,
    PlayIcon,
    SpeakerLoudIcon,
    SpeakerOffIcon,
} from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CampaignVideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoId = 'l2O2Rf6Qfoo';

    return (
        <div className="group relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border-2 border-white/25 bg-slate-900 shadow-2xl transition-all duration-300 hover:border-white/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:aspect-video lg:max-w-none">
            {isPlaying ? (
                /* Active YouTube / Video Embed */
                <div className="relative h-full w-full">
                    <iframe
                        className="h-full w-full"
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                        title="Video Gerakan KIPAN Republik Indonesia"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <button
                        type="button"
                        onClick={() => setIsPlaying(false)}
                        aria-label="Tutup video"
                        className="absolute right-2 top-2 z-20 rounded-full bg-black/60 p-1.5 text-xs font-bold text-white transition-colors hover:bg-black"
                    >
                        ✕
                    </button>
                </div>
            ) : (
                /* Video Frame Mockup */
                <div 
                    onClick={() => setIsPlaying(true)}
                    className="relative flex h-full w-full cursor-pointer flex-col justify-between overflow-hidden bg-slate-950 p-4 text-white sm:p-5 lg:p-6"
                >
                    {/* Video Thumbnail Background */}
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt="Preview Video Gerakan KIPAN RI"
                        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-65 transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Legibility */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/70" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-10 [background-size:20px_20px]" />

                    {/* Top Header Bar inside Video */}
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                            <div className="h-8 w-8 shrink-0 rounded-full bg-white p-0.5 shadow-md sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                                <img
                                    src="/logo-kipan.jpg"
                                    alt="KIPAN"
                                    className="h-full w-full rounded-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="max-w-[200px] truncate text-xs font-bold text-white drop-shadow-sm sm:max-w-[280px] lg:max-w-sm sm:text-sm">
                                    Aksi Nyata Pemuda KIPAN Republik Indonesia
                                </span>
                                <span className="text-[10px] text-blue-200/90 drop-shadow-sm sm:text-xs">
                                    Kemenpora RI &amp; BNN RI • Video Dokumentasi
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-2.5 text-white/80">
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsMuted(!isMuted);
                                }}
                                aria-label="Suara"
                                className="rounded p-1 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                {isMuted ? (
                                    <SpeakerOffIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                                ) : (
                                    <SpeakerLoudIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                                )}
                            </button>
                            <GearIcon className="hidden h-4 w-4 transition-colors hover:text-white sm:block sm:h-5 sm:w-5" />
                            <EnterFullScreenIcon className="hidden h-4 w-4 transition-colors hover:text-white sm:block sm:h-5 sm:w-5" />
                        </div>
                    </div>

                    {/* Center Large Play Button */}
                    <div className="relative z-10 self-center">
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsPlaying(true);
                            }}
                            aria-label="Putar video profil KIPAN"
                            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-kipan-navy shadow-2xl transition-colors hover:bg-white hover:text-kipan-blue group-hover:ring-4 group-hover:ring-kipan-yellow/50 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                        >
                            <PlayIcon className="ml-1 h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
                        </motion.button>
                    </div>

                    {/* Bottom Progress Bar & Details */}
                    <div className="relative z-10 space-y-2 sm:space-y-2.5">
                        <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/30 sm:h-1.5">
                            <div className="h-full w-[85%] rounded-full bg-red-600" />
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-white/90 sm:text-xs">
                            <div className="flex items-center gap-2 sm:gap-2.5">
                                <span className="rounded bg-black/40 px-2 py-0.5 font-mono text-[10px] sm:text-xs">
                                    YouTube Video
                                </span>
                                <span className="hidden text-white/75 sm:inline">
                                    Resolusi HD
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-kipan-yellow sm:text-xs">
                                    Indonesia Bersinar
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
