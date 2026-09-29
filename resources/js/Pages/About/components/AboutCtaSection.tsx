import { CheckCircledIcon, PersonIcon } from '@radix-ui/react-icons';

export default function AboutCtaSection() {
    return (
        <section
            className="relative border-t border-blue-950 py-16 text-white sm:py-20"
            style={{
                backgroundColor: '#0D3F70',
                backgroundImage: 'linear-gradient(180deg, #092B4D 0%, #061C33 100%)',
            }}
        >
            <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                    <CheckCircledIcon className="h-4 w-4 shrink-0 text-amber-300" />
                    <span>Aksi Nyata Pemuda Bersinar</span>
                </div>

                <h2 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                    Siap Mengambil Peran Bersama KIPAN RI?
                </h2>

                <p className="mx-auto mb-8 max-w-2xl text-sm font-normal leading-relaxed text-blue-100 sm:text-base">
                    Bergabunglah dalam jejaring Kader Inti Pemuda Anti Narkoba di 38 provinsi seluruh Indonesia.
                    Bersama Kemenpora RI dan BNN RI, mari lindungi sahabat sebaya dan wujudkan lingkungan
                    pemuda yang sehat, berprestasi, dan bersih dari narkotika.
                </p>

                <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                    <a
                        href="/kontak"
                        className="shadow-xs inline-flex w-full items-center justify-center gap-2 rounded-lg px-7 py-3 text-xs font-bold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:w-auto sm:text-sm"
                        style={{
                            backgroundColor: '#FACB04',
                            color: '#0D3F70',
                        }}
                    >
                        <PersonIcon className="h-4 w-4" />
                        <span>Pendaftaran &amp; Informasi Kader</span>
                    </a>

                    <a
                        href="/#kegiatan"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto sm:text-sm"
                    >
                        <span>Lihat Agenda &amp; Berita Aksi</span>
                    </a>
                </div>

                {/* Trust markers row */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/15 pt-8 text-xs font-medium text-blue-100 sm:gap-8">
                    <span className="flex items-center gap-2">
                        <CheckCircledIcon className="h-4 w-4 text-amber-300" />
                        Pembinaan Resmi Kemenpora RI
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircledIcon className="h-4 w-4 text-amber-300" />
                        Kurikulum Teknis P4GN BNN RI
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircledIcon className="h-4 w-4 text-amber-300" />
                        Jejaring 38 Provinsi Nusantara
                    </span>
                </div>
            </div>
        </section>
    );
}
