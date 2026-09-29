import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.resolve(rootDir, 'public');
const distDir = path.resolve(rootDir, 'dist');
const manifestPath = path.resolve(publicDir, 'build', 'manifest.json');

console.log('🚀 Memulai Export Static Site KIPAN RI...');

if (!fs.existsSync(manifestPath)) {
    console.error('❌ File manifest.json tidak ditemukan di public/build/manifest.json. Harap jalankan "npm run build" terlebih dahulu.');
    process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
const entryKey = 'resources/js/app.tsx';
const entry = manifest[entryKey];

if (!entry) {
    console.error(`❌ Entry ${entryKey} tidak ditemukan di manifest.json.`);
    process.exit(1);
}

const entryJs = `/build/${entry.file}`;
const entryCssList = entry.css ? entry.css.map(c => `/build/${c}`) : [];

console.log(`📦 Entry JS: ${entryJs}`);
console.log(`🎨 Entry CSS: ${entryCssList.join(', ')}`);

// Buat atau bersihkan folder dist
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Salin folder build
const distBuildDir = path.resolve(distDir, 'build');
if (fs.existsSync(distBuildDir)) {
    fs.rmSync(distBuildDir, { recursive: true, force: true });
}
copyFolderSync(path.resolve(publicDir, 'build'), distBuildDir);
console.log('✅ Folder build berhasil disalin ke dist/build');

// Salin file publik statis (gambar, icon, robots, dll)
const publicFiles = fs.readdirSync(publicDir);
const skipList = ['.htaccess', 'index.php', 'hot', 'build'];

for (const file of publicFiles) {
    if (skipList.includes(file)) continue;
    const src = path.resolve(publicDir, file);
    const dest = path.resolve(distDir, file);
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
        copyFolderSync(src, dest);
    } else {
        fs.copyFileSync(src, dest);
    }
}
console.log('✅ Aset gambar & publik berhasil disalin ke dist/');

// Daftar rute statis
const routes = [
    {
        path: '/',
        component: 'Home',
        title: 'KIPAN - Kader Inti Pemuda Anti Narkoba Republik Indonesia',
        props: {}
    },
    {
        path: '/tentang',
        component: 'About',
        title: 'Tentang Kami - KIPAN RI',
        props: {}
    },
    {
        path: '/program',
        component: 'Program',
        title: 'Program & Aksi Kepemudaan - KIPAN RI',
        props: {
            title: 'Program & Aksi Kepemudaan',
            subtitle: 'Pelatihan kader inti pemuda, workshop deteksi dini P4GN, advokasi sebaya, wirausaha kreatif, dan agenda kegiatan nasional.',
            category: 'Program & Aksi'
        }
    },
    {
        path: '/agenda',
        component: 'Agenda',
        title: 'Agenda & Kalender Kegiatan Nasional - KIPAN RI',
        props: {
            title: 'Agenda & Kalender Kegiatan Nasional',
            subtitle: 'Jadwal pelatihan nasional, jambore pemuda bersinar, sosialisasi sekolah/kampus, dan kalender aksi P4GN di 38 provinsi.',
            category: 'Agenda'
        }
    },
    {
        path: '/berita',
        component: 'Berita',
        title: 'Berita & Kabar Aksi Daerah - KIPAN RI',
        props: {
            title: 'Berita & Kabar Aksi Daerah',
            subtitle: 'Publikasi, siaran pers, dan liputan aksi nyata kader KIPAN di berbagai provinsi dan kabupaten/kota seluruh Indonesia.',
            category: 'Berita'
        }
    },
    {
        path: '/galeri',
        component: 'Galeri',
        title: 'Galeri Dokumentasi Pemuda - KIPAN RI',
        props: {
            title: 'Galeri Dokumentasi Pemuda',
            subtitle: 'Dokumentasi foto dan video kegiatan kaderisasi, aksi lapangan, jambore pemuda, dan kolaborasi positif pemuda anti narkoba.',
            category: 'Galeri'
        }
    },
    {
        path: '/kontak',
        component: 'PlaceholderPage',
        title: 'Hubungi Sekretariat & Pendaftaran Kader - KIPAN RI',
        props: {
            title: 'Hubungi Sekretariat & Pendaftaran Kader',
            subtitle: 'Layanan informasi resmi, konsultasi sebaya, pendaftaran kader baru, dan kemitraan kolaborasi pemuda anti narkoba.',
            category: 'Kontak'
        }
    }
];

function generateHtml(route) {
    const pageData = {
        component: route.component,
        props: {
            errors: {},
            ...route.props
        },
        url: route.path,
        version: ''
    };

    const escapedPageData = JSON.stringify(pageData)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    const cssTags = entryCssList.map(css => `    <link rel="stylesheet" href="${css}">`).join('\n');

    return `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${route.title}</title>
    <link rel="icon" type="image/jpeg" href="/logo-kipan.jpg">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- CSS & Scripts -->
${cssTags}
    <script type="module" src="${entryJs}"></script>
</head>
<body class="font-sans antialiased">
    <div id="app" data-page="${escapedPageData}"></div>
</body>
</html>
`;
}

// Generate halaman HTML untuk setiap rute
for (const route of routes) {
    const html = generateHtml(route);
    
    if (route.path === '/') {
        fs.writeFileSync(path.resolve(distDir, 'index.html'), html, 'utf-8');
        console.log('📄 Exported: dist/index.html');
    } else {
        const subDir = path.resolve(distDir, route.path.replace(/^\//, ''));
        if (!fs.existsSync(subDir)) {
            fs.mkdirSync(subDir, { recursive: true });
        }
        // index.html di dalam subdirektori (misal dist/tentang/index.html)
        fs.writeFileSync(path.resolve(subDir, 'index.html'), html, 'utf-8');
        // Fallback file .html langsung (misal dist/tentang.html)
        fs.writeFileSync(path.resolve(distDir, `${route.path.replace(/^\//, '')}.html`), html, 'utf-8');
        console.log(`📄 Exported: dist${route.path}/index.html & dist${route.path}.html`);
    }
}

// Generate 404.html fallback
const notFoundHtml = generateHtml({
    path: '/404',
    component: 'PlaceholderPage',
    title: 'Halaman Tidak Ditemukan - KIPAN RI',
    props: {
        title: 'Halaman Tidak Ditemukan',
        subtitle: 'Mohon maaf, halaman yang Anda cari tidak tersedia atau sedang dalam pembaruan.',
        category: '404'
    }
});
fs.writeFileSync(path.resolve(distDir, '404.html'), notFoundHtml, 'utf-8');
console.log('📄 Exported: dist/404.html');

console.log('\n🎉 Static Site Berhasil Di-export ke folder dist/!');
console.log('✨ Siap di-deploy langsung ke Vercel!');

function copyFolderSync(from, to) {
    if (!fs.existsSync(to)) {
        fs.mkdirSync(to, { recursive: true });
    }
    fs.readdirSync(from).forEach(element => {
        const stat = fs.lstatSync(path.join(from, element));
        if (stat.isDirectory()) {
            copyFolderSync(path.join(from, element), path.join(to, element));
        } else {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        }
    });
}
