import LandingLayout from '@/Layouts/LandingLayout';
import AboutHero from './components/AboutHero';
import StrukturOrganisasiSection from './components/StrukturOrganisasiSection';
import DutaKipanSection from './components/DutaKipanSection';
import LegalitasSection from './components/LegalitasSection';
import VisiMisiSection from './components/VisiMisiSection';
import AboutCtaSection from './components/AboutCtaSection';

export default function About() {
    return (
        <LandingLayout
            title="Tentang KIPAN RI: Struktur Organisasi, Visi Misi & Profil Lengkap"
            className="bg-slate-50 text-slate-800"
        >
            <AboutHero />
            <StrukturOrganisasiSection />
            <DutaKipanSection />
            <LegalitasSection />
            <VisiMisiSection />
            <AboutCtaSection />
        </LandingLayout>
    );
}
