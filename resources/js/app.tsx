import '../css/app.css';
import './bootstrap';

import { createInertiaApp, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'KIPAN RI';

// Navigasi mulus untuk hosting statis (Vercel static export)
if (typeof window !== 'undefined') {
    router.on('invalid', (event) => {
        event.preventDefault();
        const res = event.detail.response as any;
        const targetUrl = res?.request?.responseURL || res?.config?.url;
        if (targetUrl) {
            window.location.href = targetUrl;
        }
    });
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.tsx');
        if (pages[`./Pages/${name}/Index.tsx`]) {
            return resolvePageComponent(`./Pages/${name}/Index.tsx`, pages);
        }
        if (name === 'Welcome' && pages['./Pages/Home/Index.tsx']) {
            return resolvePageComponent('./Pages/Home/Index.tsx', pages);
        }
        if (pages[`./Pages/${name}.tsx`]) {
            return resolvePageComponent(`./Pages/${name}.tsx`, pages);
        }
        return resolvePageComponent(`./Pages/${name}/Index.tsx`, pages);
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

