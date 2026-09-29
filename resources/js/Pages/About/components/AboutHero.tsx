export default function AboutHero() {
    return (
        <section
            className="relative border-b border-blue-950 pb-16 pt-36 text-white sm:pb-20 sm:pt-40"
            style={{
                backgroundColor: '#0D3F70',
                backgroundImage: 'linear-gradient(180deg, #07223D 0%, #0D3F70 100%)',
            }}
        >
            <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav
                    aria-label="Breadcrumb"
                    className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-blue-100"
                >
                    <a
                        href="/"
                        className="rounded-sm text-blue-100 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    >
                        Beranda
                    </a>
                    <span className="text-blue-300/60" aria-hidden="true">
                        /
                    </span>
                    <span className="font-semibold text-amber-300" aria-current="page">
                        Tentang Kami
                    </span>
                </nav>

                {/* Title */}
                <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Tentang KIPAN Republik Indonesia
                </h1>

                {/* Subtitle */}
                <p className="mx-auto max-w-2xl text-sm font-normal leading-relaxed text-blue-100/90 sm:text-base">
                    Gerakan kepemudaan strategis binaan resmi Kementerian Pemuda dan Olahraga (Kemenpora RI)
                    bersama Badan Narkotika Nasional (BNN RI) untuk menggerakkan pemuda sebagai garda
                    terdepan pencegahan narkotika di 38 provinsi.
                </p>
            </div>
        </section>
    );
}
