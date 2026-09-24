import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import Hero from '@/Components/Landing/Hero';
import About from '@/Components/Landing/About';
import StrukturOrganisasi from '@/Components/Landing/StrukturOrganisasi';
import Testimonials from '@/Components/Landing/Testimonials';
import BeritaUmum from '@/Components/Landing/BeritaUmum';
import Footer from '@/Components/Landing/Footer';
import FloatingWhatsApp from '@/Components/Landing/FloatingWhatsApp';

export default function Welcome() {
    return (
        <>
            <Head title="KIPAN Indonesia : Kader Inti Pemuda Anti Narkoba" />
            <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-slate-800">
                <Navbar />
                <main className="flex-1">
                    <Hero />
                    <About />
                    <StrukturOrganisasi />
                    <Testimonials />
                    <BeritaUmum />
                </main>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </>
    );
}
