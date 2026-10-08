import { Link, router, usePage } from '@inertiajs/react';
import {
    BarChart3,
    BookOpen,
    CalendarDays,
    ChevronDown,
    Image,
    ImageIcon,
    LayoutDashboard,
    LogOut,
    Menu,
    Settings,
    UserCircle2,
    Users,
    X,
} from 'lucide-react';
import { ReactNode, useState } from 'react';
import { PageProps } from '@/types';

interface AdminLayoutProps {
    readonly children: ReactNode;
    readonly title?: string;
}

interface NavItem {
    label: string;
    href: string;
    icon: ReactNode;
    permission?: string;
    routeName: string;
}

const NAV_ITEMS: NavItem[] = [
    {
        label: 'Dashboard',
        href: '/admin/dashboard',
        icon: <LayoutDashboard className="h-5 w-5" />,
        permission: 'view-dashboard',
        routeName: 'admin.dashboard',
    },
    {
        label: 'Berita',
        href: '/admin/news',
        icon: <BookOpen className="h-5 w-5" />,
        permission: 'view-news',
        routeName: 'admin.news.index',
    },
    {
        label: 'Agenda',
        href: '/admin/events',
        icon: <CalendarDays className="h-5 w-5" />,
        permission: 'view-events',
        routeName: 'admin.events.index',
    },
    {
        label: 'Program',
        href: '/admin/programs',
        icon: <BarChart3 className="h-5 w-5" />,
        permission: 'view-programs',
        routeName: 'admin.programs.index',
    },
    {
        label: 'Galeri',
        href: '/admin/gallery',
        icon: <Image className="h-5 w-5" />,
        permission: 'view-gallery',
        routeName: 'admin.gallery.index',
    },
    {
        label: 'Media',
        href: '/admin/media',
        icon: <ImageIcon className="h-5 w-5" />,
        permission: 'manage-media',
        routeName: 'admin.media.index',
    },
    {
        label: 'Pengguna',
        href: '/admin/users',
        icon: <Users className="h-5 w-5" />,
        permission: 'manage-users',
        routeName: 'admin.users.index',
    },
];

export default function AdminLayout({ children, title }: AdminLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const { auth } = usePage<PageProps>().props;
    const user = auth.user;
    const permissions = user?.permissions ?? [];
    const roles = user?.roles ?? [];

    const currentPath = window.location.pathname;

    const visibleNavItems = NAV_ITEMS.filter(
        (item) => !item.permission || permissions.includes(item.permission),
    );

    function handleLogout() {
        router.post('/logout');
    }

    function isActive(href: string): boolean {
        return currentPath === href || currentPath.startsWith(href + '/');
    }

    return (
        <div className="flex h-screen overflow-hidden bg-slate-100 font-sans">
            {/* ============================
                SIDEBAR
            ============================ */}
            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                    aria-hidden="true"
                />
            )}

            <aside
                className={`
                    fixed inset-y-0 left-0 z-30 flex w-64 flex-col
                    bg-gradient-to-b from-[#061C33] to-[#0D3F70] text-white
                    shadow-2xl transition-transform duration-300 ease-in-out
                    lg:static lg:translate-x-0
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                {/* Sidebar Header */}
                <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5">
                    <div className="flex items-center gap-3">
                        <img
                            src="/logo-kipan.jpg"
                            alt="KIPAN"
                            className="h-8 w-8 rounded-full object-cover"
                        />
                        <div>
                            <div className="text-sm font-bold text-kipan-yellow">KIPAN CMS</div>
                            <div className="text-[10px] text-blue-300">Admin Panel</div>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(false)}
                        className="rounded-md p-1 text-blue-300 transition hover:text-white lg:hidden"
                        aria-label="Tutup menu"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-3 py-4">
                    <ul className="space-y-1">
                        {visibleNavItems.map((item) => (
                            <li key={item.routeName}>
                                <Link
                                    href={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={`
                                        flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium
                                        transition-all duration-150
                                        ${
                                            isActive(item.href)
                                                ? 'bg-white/15 text-white shadow-sm'
                                                : 'text-blue-200 hover:bg-white/10 hover:text-white'
                                        }
                                    `}
                                >
                                    <span
                                        className={
                                            isActive(item.href) ? 'text-kipan-yellow' : 'text-blue-300'
                                        }
                                    >
                                        {item.icon}
                                    </span>
                                    {item.label}
                                    {isActive(item.href) && (
                                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-kipan-yellow" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Settings separator — visible to roles with manage-settings permission */}
                    {permissions.includes('manage-settings') && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                            <Link
                                href="/admin/partners"
                                onClick={() => setSidebarOpen(false)}
                                className={`
                                    flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium
                                    transition-all duration-150
                                    ${
                                        isActive('/admin/partners')
                                            ? 'bg-white/15 text-white'
                                            : 'text-blue-200 hover:bg-white/10 hover:text-white'
                                    }
                                `}
                            >
                                <Settings className="h-5 w-5 text-blue-300" />
                                Mitra
                            </Link>
                        </div>
                    )}
                </nav>

                {/* Sidebar Footer — role badge */}
                <div className="shrink-0 border-t border-white/10 p-4">
                    <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-kipan-yellow/20 text-xs font-bold text-kipan-yellow uppercase">
                            {user?.name?.charAt(0) ?? '?'}
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="truncate text-xs font-semibold text-white">{user?.name}</div>
                            <div className="truncate text-[10px] text-blue-300">
                                {roles[0] ?? 'viewer'}
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* ============================
                MAIN AREA
            ============================ */}
            <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                {/* Topbar */}
                <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm sm:px-6">
                    {/* Left: hamburger + page title */}
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => setSidebarOpen(true)}
                            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 lg:hidden"
                            aria-label="Buka menu"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                        {title && (
                            <h1 className="text-base font-semibold text-slate-800 sm:text-lg">
                                {title}
                            </h1>
                        )}
                    </div>

                    {/* Right: user menu */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setUserMenuOpen((v) => !v)}
                            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                        >
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-kipan-blue text-xs font-bold text-white uppercase">
                                {user?.name?.charAt(0) ?? '?'}
                            </div>
                            <span className="hidden sm:block max-w-[120px] truncate">{user?.name}</span>
                            <ChevronDown className="h-4 w-4 text-slate-400" />
                        </button>

                        {userMenuOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-10"
                                    onClick={() => setUserMenuOpen(false)}
                                    aria-hidden="true"
                                />
                                <div className="absolute right-0 z-20 mt-2 w-52 rounded-2xl border border-slate-200 bg-white py-1 shadow-xl">
                                    <div className="border-b border-slate-100 px-4 py-3">
                                        <div className="text-sm font-semibold text-slate-800 truncate">{user?.name}</div>
                                        <div className="text-xs text-slate-500 truncate">{user?.email}</div>
                                    </div>
                                    <Link
                                        href="/admin/profile"
                                        onClick={() => setUserMenuOpen(false)}
                                        className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50"
                                    >
                                        <UserCircle2 className="h-4 w-4" />
                                        Profil Saya
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        Keluar
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </header>

                {/* Main content */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
