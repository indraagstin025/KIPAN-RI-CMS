import { FileTextIcon } from '@radix-ui/react-icons';

export default function LegalitasSection() {
    return (
        <section
            id="legalitas"
            className="scroll-mt-20 border-y border-slate-200 bg-white py-16 sm:py-20"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 max-w-3xl">
                    <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D3F70]">
                        <FileTextIcon className="h-3.5 w-3.5 text-[#0E6CAC]" />
                        <span>Dasar Hukum &amp; Legalitas Resmi</span>
                    </div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-[#0D3F70] sm:text-3xl">
                        Payung Regulasi Gerakan KIPAN RI
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        KIPAN bukan sekadar komunitas sukarela, melainkan gerakan resmi yang didasarkan
                        pada regulasi negara dan mandat undang-undang republik.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-slate-300">
                        <div>
                            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-xs font-bold text-[#0D3F70]">
                                UU
                            </div>
                            <h3 className="mb-2 text-base font-bold leading-snug text-[#0D3F70]">
                                UU No. 40 Tahun 2009 tentang Kepemudaan
                            </h3>
                            <p className="mb-4 text-xs leading-relaxed text-slate-600">
                                Menegaskan peran strategis pemuda sebagai subjek pembangunan nasional dan
                                agen moral dalam menjaga ketahanan bangsa dari bahaya destruktif peredaran
                                gelap narkoba.
                            </p>
                        </div>
                        <span className="border-t border-slate-200/80 pt-3 text-[11px] font-semibold uppercase tracking-wider text-[#0E6CAC]">
                            Mandat Undang-Undang RI
                        </span>
                    </div>

                    <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-slate-300">
                        <div>
                            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-xs font-bold text-amber-900">
                                INPRES
                            </div>
                            <h3 className="mb-2 text-base font-bold leading-snug text-[#0D3F70]">
                                Inpres No. 2 Tahun 2020 tentang Rencana Aksi Nasional P4GN
                            </h3>
                            <p className="mb-4 text-xs leading-relaxed text-slate-600">
                                Menginstruksikan seluruh kementerian, lembaga, dan pemerintah daerah untuk
                                melaksanakan aksi pencegahan, deteksi dini, dan pemberantasan
                                penyalahgunaan narkotika bersama masyarakat.
                            </p>
                        </div>
                        <span className="border-t border-slate-200/80 pt-3 text-[11px] font-semibold uppercase tracking-wider text-amber-800">
                            Instruksi Presiden Republik Indonesia
                        </span>
                    </div>

                    <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-slate-300">
                        <div>
                            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-xs font-bold text-emerald-900">
                                MOU
                            </div>
                            <h3 className="mb-2 text-base font-bold leading-snug text-[#0D3F70]">
                                Perjanjian Kerja Sama Kemenpora RI &amp; BNN RI
                            </h3>
                            <p className="mb-4 text-xs leading-relaxed text-slate-600">
                                Nota kesepahaman operasional antara Kementerian Pemuda &amp; Olahraga
                                bersama Badan Narkotika Nasional mengenai fasilitasi pelatihan kader
                                inti di 38 provinsi.
                            </p>
                        </div>
                        <span className="border-t border-slate-200/80 pt-3 text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                            Kerja Sama Lintas Lembaga Negara
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
