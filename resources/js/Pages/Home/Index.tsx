import LandingLayout from '@/Layouts/LandingLayout';
import AboutSection from './components/About/AboutSection';
import AgendaSection from './components/Agenda/AgendaSection';
import CampaignSlogan from './components/Campaign/CampaignSlogan';
import CtaSection from './components/Cta/CtaSection';
import GallerySection from './components/Gallery/GallerySection';
import Hero from './components/Hero/Hero';
import MapDataSection from './components/Map/MapDataSection';
import NewsSection from './components/News/NewsSection';
import PartnersSection from './components/Partners/PartnersSection';
import PeopleSection from './components/People/PeopleSection';
import ProgramSection from './components/Program/ProgramSection';

export default function HomeIndex() {
    return (
        <LandingLayout title="KIPAN Indonesia : Kader Inti Pemuda Anti Narkoba Republik Indonesia">
            <Hero />
            <CampaignSlogan />
            <PartnersSection />
            <AboutSection />
            <ProgramSection />
            <NewsSection />
            <AgendaSection />
            <PeopleSection />
            <MapDataSection />
            <GallerySection />
            <CtaSection />
        </LandingLayout>
    );
}
