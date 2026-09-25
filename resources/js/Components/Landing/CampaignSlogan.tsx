import { CAMPAIGN_CONTENT } from '@/data/landing-content';

export default function CampaignSlogan() {
    return (
        <section className="bg-kipan-navy text-white py-14 lg:py-18 border-y border-blue-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                <span className="inline-block text-xs font-bold text-kipan-yellow uppercase tracking-widest mb-3">
                    {CAMPAIGN_CONTENT.tagline}
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4">
                    &ldquo;{CAMPAIGN_CONTENT.slogan}&rdquo;
                </h2>

                <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
                    {CAMPAIGN_CONTENT.subtext}
                </p>
            </div>
        </section>
    );
}
