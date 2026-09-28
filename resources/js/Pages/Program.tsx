import { Head, Link } from '@inertiajs/react';
import {
    Award,
    BadgeCheck,
    Building2,
    Calendar,
    ClipboardCheck,
    FileText,
    GraduationCap,
    HandHeart,
    HeartPulse,
    IdCard,
    Landmark,
    LayoutGrid,
    Map,
    MapPin,
    Megaphone,
    Presentation,
    Radio,
    School,
    ScrollText,
    Users,
    type LucideIcon,
} from 'lucide-react';
import Footer from '@/Components/Footer';
import HeroSection from '@/Components/HeroSection';
import Navbar from '@/Components/Navbar';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import SafeImage from '@/Components/ui/safe-image';
import { AGENDA_KEGIATAN, PROGRAMS } from '@/data/kipan-data';

interface ProgramPageProps {
    title: string;
    subtitle: string;
    category: string;
}

const iconMap: Record<string, LucideIcon> = {
    Award,
    BadgeCheck,
    Building2,
    Calendar,
    ClipboardCheck,
    FileText,
    GraduationCap,
    HandHeart,
    HeartPulse,
    IdCard,
    Landmark,
    Map,
    MapPin,
    Megaphone,
    Presentation,
    Radio,
    School,
    ScrollText,
    Users,
};

function ProgramIcon({ name, className }: { name: string; className?: string }) {
    const Icon = iconMap[name] ?? LayoutGrid;
    return <Icon className={className} />;
}

export default function Program({ title, subtitle, category }: ProgramPageProps) {
    const upcomingAgenda = AGENDA_KEGIATAN.filter((a) => a.status !== 'Selesai').slice(0, 5);

    return (
        <>
            <Head title={title} />
            <div className="min-h-screen bg-background text-foreground">
                <Navbar />
                <HeroSection badge={category} title={title} subtitle={subtitle} />

                {/* Daftar program */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
                    <div className="grid gap-5 md:grid-cols-2">
                        {PROGRAMS.map((program) => (
                            <Card key={program.id} className="overflow-hidden py-0">
                                <div className="relative h-44">
                                    <SafeImage
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover"
                                        placeholderClassName="w-full h-full"
                                    />
                                    <Badge className="absolute top-4 left-4">{program.number}</Badge>
                                </div>
                                <CardHeader>
                                    <div className="flex items-start gap-3">
                                        <span className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                            <ProgramIcon name={program.icon} className="w-5 h-5" />
                                        </span>
                                        <div>
                                            <CardTitle className="text-lg">{program.title}</CardTitle>
                                            <CardDescription>{program.subtitle}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {program.description}
                                    </p>
                                    <ul className="space-y-1.5">
                                        {program.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-2 text-sm text-muted-foreground"
                                            >
                                                <BadgeCheck className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Agenda kegiatan */}
                <section className="border-y bg-card">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
                        <h2 className="text-2xl font-bold tracking-tight mb-2">Agenda Kegiatan</h2>
                        <p className="text-sm text-muted-foreground mb-8">
                            Jadwal kegiatan yang akan datang — catat tanggalnya dan ikut berpartisipasi.
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                            {upcomingAgenda.map((agenda) => (
                                <Card key={agenda.id}>
                                    <CardHeader>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <Badge variant="secondary">{agenda.category}</Badge>
                                            <Badge
                                                variant={
                                                    agenda.status === 'Sedang Berlangsung'
                                                        ? 'default'
                                                        : 'outline'
                                                }
                                            >
                                                {agenda.status}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-base leading-snug">
                                            {agenda.title}
                                        </CardTitle>
                                        <CardDescription className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {agenda.displayDate} • {agenda.time}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground flex items-start gap-1.5">
                                            <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                                            {agenda.location}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
                    <Card className="bg-primary text-primary-foreground text-center items-center py-12">
                        <CardHeader className="items-center">
                            <CardTitle className="text-2xl">
                                Siap jadi bagian dari gerakan?
                            </CardTitle>
                            <CardDescription className="text-primary-foreground/80 max-w-xl">
                                Daftarkan dirimu sebagai kader KIPAN dan ikuti pembekalan gelombang
                                berikutnya di wilayahmu.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild variant="secondary" size="lg">
                                <Link href="/pendaftaran">Daftar Sebagai Kader</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </section>

                <Footer />
            </div>
        </>
    );
}
