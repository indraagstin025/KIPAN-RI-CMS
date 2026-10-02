import ScrollReveal from '@/Components/Layout/ScrollReveal';
import LandingLayout from '@/Layouts/LandingLayout';
import { Link } from '@inertiajs/react';
import { ArrowLeftIcon, CalendarIcon, PersonIcon } from '@radix-ui/react-icons';

interface RelatedItem {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    featured_image: string | null;
    published_at: string | null;
}

interface NewsDetail {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string | null;
    featured_image: string | null;
    category: string | null;
    author: string | null;
    published_at: string | null;
}

interface Props {
    news: NewsDetail;
    related: RelatedItem[];
}

export default function BeritaShow({ news, related }: Props) {
    // Render paragraphs safely — content is stored as plain text with newlines
    const paragraphs = news.content.split(/\n\n+/).filter(Boolean);

    return (
        <LandingLayout
            title={`${news.title} — KIPAN Republik Indonesia`}
            className="bg-slate-50"
        >
            {/* Back nav */}
            <div className="border-b border-slate-200 bg-white">
                <div className="container mx-auto max-w-4xl px-4 py-4 sm:px-6">
                    <Link
                        href="/berita"
                        className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-kipan-blue"
                    >
                        <ArrowLeftIcon className="h-4 w-4" />
                        Kembali ke Berita
                    </Link>
                </div>
            </div>

            {/* Article */}
            <article className="py-12 lg:py-16">
                <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        {news.category && (
                            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-kipan-blue">
                                {news.category}
                            </p>
                        )}
                        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-kipan-navy sm:text-4xl">
                            {news.title}
                        </h1>

                        <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                            {news.published_at && (
                                <span className="flex items-center gap-1.5">
                                    <CalendarIcon className="h-4 w-4 text-kipan-blue" />
                                    {news.published_at}
                                </span>
                            )}
                            {news.author && (
                                <span className="flex items-center gap-1.5">
                                    <PersonIcon className="h-4 w-4 text-kipan-blue" />
                                    {news.author}
                                </span>
                            )}
                        </div>
                    </ScrollReveal>

                    {/* Featured Image */}
                    {news.featured_image && (
                        <ScrollReveal delay={0.1}>
                            <div className="mb-10 overflow-hidden rounded-2xl">
                                <img
                                    src={news.featured_image}
                                    alt={news.title}
                                    className="w-full object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Content */}
                    <ScrollReveal delay={0.15}>
                        <div className="prose prose-slate max-w-none prose-headings:text-kipan-navy prose-a:text-kipan-blue">
                            {paragraphs.map((para, i) => (
                                <p key={i} className="mb-4 leading-relaxed text-slate-700">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </article>

            {/* Related News */}
            {related.length > 0 && (
                <section className="border-t border-slate-200 bg-white py-12">
                    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <h2 className="mb-6 text-lg font-black text-kipan-navy">Berita Terkait</h2>
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {related.map((item) => (
                                <Link key={item.id} href={`/berita/${item.slug}`}>
                                    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:border-kipan-blue/40 hover:shadow-md">
                                        {item.featured_image && (
                                            <div className="h-36 overflow-hidden">
                                                <img
                                                    src={item.featured_image}
                                                    alt={item.title}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        )}
                                        <div className="p-4">
                                            <h3 className="font-bold leading-snug text-kipan-navy group-hover:text-kipan-blue line-clamp-2">{item.title}</h3>
                                            {item.published_at && (
                                                <p className="mt-1 text-xs text-slate-400">{item.published_at}</p>
                                            )}
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </LandingLayout>
    );
}
