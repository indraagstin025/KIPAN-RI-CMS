import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import Hero from '@/Components/Landing/Hero';
import CampaignSlogan from '@/Components/Landing/CampaignSlogan';
import AboutSection from '@/Components/Landing/AboutSection';
import ProgramSection from '@/Components/Landing/ProgramSection';
import NewsSection from '@/Components/Landing/NewsSection';
import AgendaSection from '@/Components/Landing/AgendaSection';
import PeopleSection from '@/Components/Landing/PeopleSection';
import MapDataSection from '@/Components/Landing/MapDataSection';
import GallerySection from '@/Components/Landing/GallerySection';
import PartnersSection from '@/Components/Landing/PartnersSection';
import CtaSection from '@/Components/Landing/CtaSection';
import Footer from '@/Components/Landing/Footer';

export default function Welcome() {
    return (
        <>
            <Head title="KIPAN Indonesia : Kader Inti Pemuda Anti Narkoba Republik Indonesia" />
            <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-kipan-text-dark selection:bg-kipan-blue selection:text-white">
                <Navbar />
                <main className="flex-1">
                    <Hero />
                    <CampaignSlogan />
                    <AboutSection />
                    <ProgramSection />
                    <NewsSection />
                    <AgendaSection />
                    <PeopleSection />
                    <MapDataSection />
                    <GallerySection />
                    <PartnersSection />
                    <CtaSection />
                </main>
                <Footer />
            </div>
        </>
    );
}
