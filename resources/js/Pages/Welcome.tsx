import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import Hero from '@/Components/Landing/Hero';
import AboutBrief from '@/Components/Landing/AboutBrief';
import BeritaSlider from '@/Components/Landing/BeritaSlider';
import AgendaKalender from '@/Components/Landing/AgendaKalender';
import Footer from '@/Components/Landing/Footer';
import FloatingWhatsApp from '@/Components/Landing/FloatingWhatsApp';

export default function Welcome() {
    return (
        <>
            <Head title="KIPAN Indonesia : Kader Inti Pemuda Anti Narkoba Republik Indonesia" />
            <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-slate-800">
                <Navbar />
                <main className="flex-1">
                    <Hero />
                    <AboutBrief />
                    <BeritaSlider />
                    <AgendaKalender />
                </main>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </>
    );
}
