/**
 * ============================================================================
 * DATA MODUL PROJECT AKHIR (src/services/moduleData.js)
 * ============================================================================
 * Berisi seluruh informasi resmi dari "Modul Project Akhir Divisi Website
 * Coder Institute HMIF FT-UH — Web Dev Bootcamp & Showcase".
 * Dipakai pada halaman Portal Panduan (/panduan) untuk dipresentasikan
 * saat sesi Kickoff dan menjadi rujukan anggota Coder.
 */

export const MODULE_OVERVIEW = {
  title: 'Modul Project Akhir Divisi Website',
  subtitle: 'Coder Institute HMIF FT-UH — Web Dev Bootcamp & Showcase 2026',
  coordinator: 'Efraim Imanuel Parasak',
  picShowcase: "Muh Yusuf Ma'Ruf",
  picPhone: '+62 852-5817-6493',
  participants: 'Seluruh member Divisi Website, dibagi menjadi 6 kelompok (3–5 orang/kelompok)',
  duration: '12 hari kerja (3 Nov – 15 Nov 2026), sepenuhnya mandiri jarak jauh',
  output: 'Web app React (Vite) yang sudah di-deploy + README lengkap + Presentasi Showcase',
  goal: 'Tujuan project ini bukan membuat produk sempurna. Tujuannya adalah menyelesaikan suatu permasalahan nyata melalui produk web, lalu dengan bangga memamerkannya di portofolio.',
};

export const LEARNING_OBJECTIVES = [
  'Membangun web app multi-halaman dengan React (Vite) & React Router.',
  'Mengambil dan menampilkan data dari Public API (fetch, JSON, HTTP status code).',
  'Bekerja dalam tim memakai Git, branch, dan Pull Request (PR).',
  'Men-deploy aplikasi ke Vercel/Netlify sehingga punya Live URL publik.',
  'Mendokumentasikan (README) dan mempresentasikan karya secara profesional saat Showcase.',
];

export const MEETINGS_RECAP = [
  {
    pertemuan: 'Pertemuan 1',
    topik: 'Dasar HTML & Semantic',
    poin: 'Heading, List, Link, Image, Semantic Markup (<nav>, <main>, <section>, <article>, <footer>), Tabel, dan Form.',
    dipakaiDiProject: 'Struktur elemen di dalam JSX setiap komponen halaman.',
  },
  {
    pertemuan: 'Pertemuan 2',
    topik: 'CSS Dasar & Layouting',
    poin: 'Selector, Pseudo-class (:hover, :focus), Box Model (margin, border, padding), Flexbox, dan Media Query Responsive.',
    dipakaiDiProject: 'Styling kartu resep, Navbar responsif HP & desktop, dan animasi hover.',
  },
  {
    pertemuan: 'Pertemuan 3',
    topik: 'JavaScript Dasar & DOM',
    poin: 'Variabel (const/let), Console, DOM, Event Listener, If/Else, Array of Objects, latihan KandaKost (Smart Greeting & Dark Mode).',
    dipakaiDiProject: 'Logika filter, pencarian (.filter, .map), sapaan waktu otomatis, dan toggle Dark Mode.',
  },
  {
    pertemuan: 'Pertemuan 4',
    topik: 'ReactJS Fundamental',
    poin: 'Vite setup, Component reusable, JSX, Props, Spread syntax, Nested Component (children), dan className.',
    dipakaiDiProject: 'Memecah UI menjadi komponen Navbar, MealCard, SearchBar, dan halaman terpisah.',
  },
  {
    pertemuan: 'Pertemuan 5',
    topik: 'Intro to Backend & HTTP',
    poin: 'Arsitektur Client-Server (Analogi Restoran), Siklus Request-Response, HTTP Method (GET, POST, PUT, DELETE), Status Code (200, 404, 500).',
    dipakaiDiProject: 'Memahami alur request ke server API dan menangani error status code.',
  },
  {
    pertemuan: 'Pertemuan 6',
    topik: 'RESTful API & JSON',
    poin: 'Konsep CRUD, Anatomi Endpoint (Base URL + Path), struktur Key-Value JSON, pengujian endpoint di Postman / Thunder Client.',
    dipakaiDiProject: 'Mengonsumsi endpoint TheMealDB API menggunakan fetch() dan membaca data JSON.',
  },
];

export const MVP_REQUIREMENTS = [
  {
    id: 1,
    title: 'Live URL Publik',
    desc: 'Aplikasi sudah di-deploy ke Vercel atau Netlify dan bisa dibuka siapa saja lewat link.',
    implementedHere: 'Siap deploy ke Vercel (dilengkapi file vercel.json anti-404).',
  },
  {
    id: 2,
    title: 'Minimal 3 Halaman / View',
    desc: 'Menggunakan React Router (contoh: Beranda, Daftar/Eksplor, dan Halaman Detail).',
    implementedHere: '4 Halaman aktif: Beranda (/), Eksplor Resep (/resep), Detail Resep (/resep/:id), dan Favorit (/favorit).',
  },
  {
    id: 3,
    title: 'Fetch Data Public API + Loading & Error State',
    desc: 'Mengambil data dari API (read) dan menampilkannya, lengkap dengan indikator loading dan pesan error jika gagal.',
    implementedHere: 'Fetch real-time dari TheMealDB API + Loading Skeleton + Tombol Simulasi Error API.',
  },
  {
    id: 4,
    title: 'Minimal 1 Fitur Interaktif',
    desc: 'Bisa berupa live search, filter kategori, simpan favorit, atau sorting data.',
    implementedHere: 'Memiliki 4 fitur interaktif sekaligus: Live Search, Filter Kategori, Sorting A-Z/Z-A, dan Kocok Menu Acak.',
  },
  {
    id: 5,
    title: 'Responsive Design (HP & Desktop)',
    desc: 'Tampilan rapi, tidak berantakan, dan nyaman dipakai di layar HP maupun laptop.',
    implementedHere: 'Menggunakan Flexbox, CSS Grid auto-fill, dan Media Query (@media max-width: 768px).',
  },
  {
    id: 6,
    title: 'README.md Lengkap',
    desc: 'Mengikuti template di Bagian 11 (Deskripsi, Live Demo, Screenshot, Fitur, Tech Stack, Cara Jalan, Tim).',
    implementedHere: 'File README.md di root project ini sudah mengikuti 100% template resmi Bagian 11.',
  },
  {
    id: 7,
    title: 'Hadir & Presentasi saat Showcase',
    desc: '5 menit presentasi + 5 menit demo live URL + 3 menit tanya jawab bersama seluruh anggota.',
    implementedHere: 'Dilengkapi panduan alur presentasi & demo 5 menit di halaman ini.',
  },
];

export const BONUS_FEATURES = [
  {
    title: 'Dark Mode Toggle',
    desc: 'Mengubah tema terang/gelap secara instan dan menyimpannya di browser.',
    status: 'Sudah diterapkan di contoh web ini (lihat tombol di Navbar!)',
  },
  {
    title: 'Simpan Favorit di localStorage',
    desc: 'Data favorit pengguna tidak hilang walaupun halaman di-refresh atau ditutup.',
    status: 'Sudah diterapkan di halaman Detail & tab Favoritku (/favorit)',
  },
  {
    title: 'Fitur Kreatif Unik',
    desc: 'Contoh: Smart Greeting waktu otomatis, Kocok Menu Acak Anak Kost, atau Mode Bedah Kriteria.',
    status: 'Sudah diterapkan di Beranda & Navbar',
  },
  {
    title: 'Backend Sendiri / BaaS & Autentikasi',
    desc: 'Menggunakan Node.js/Express, Supabase, atau Firebase (Hanya dikerjakan jika MVP sudah selesai & live!).',
    status: 'Opsional (+10% Poin Bonus)',
  },
];

export const SCOPE_MANAGEMENT = [
  {
    category: 'MUST HAVE',
    badgeColor: 'danger',
    meaning: 'Tanpa ini project dianggap gagal',
    examples: 'Setup Vite + React Router 3 halaman, Fetch data API tampil + loading/error state, Deploy Live URL, Responsive dasar.',
  },
  {
    category: 'SHOULD HAVE',
    badgeColor: 'warning',
    meaning: 'Penting, tapi dikerjakan setelah Must Have beres',
    examples: 'Live search, filter kategori, sorting, halaman detail yang rapi, README lengkap.',
  },
  {
    category: 'COULD HAVE',
    badgeColor: 'success',
    meaning: 'Hanya dikerjakan jika waktu tersisa',
    examples: 'Dark mode, simpan favorit di localStorage, animasi tambahan, atau backend/Supabase.',
  },
];

export const THEMES_AND_APIS = [
  {
    code: 'Tema A',
    name: 'Solusi untuk Kampus dan Makassar',
    ideas: 'Info kost dan kuliner sekitar kampus, katalog wisata Sulsel, agenda event kampus, pencarian wilayah Indonesia, jadwal & informasi lokal.',
    recommendedApis: ['API Wilayah Indonesia', 'Open-Meteo', 'EQuran.id'],
  },
  {
    code: 'Tema B',
    name: 'Hobi Jadi Produk',
    ideas: 'Katalog anime/manga, film, game, Pokémon, buku, atau karakter serial dengan fitur favorit, filter, dan rekomendasi.',
    recommendedApis: ['PokéAPI', 'Jikan (Anime)', 'TMDB', 'Rick and Morty API', 'Open Library'],
  },
  {
    code: 'Tema C',
    name: 'Utilitas Harian (Dipakai di Contoh DapurKanda Ini!)',
    ideas: 'Resep makanan anak kost, dashboard cuaca harian, jadwal salat & Al-Qur’an, tracker kebiasaan, ensiklopedia info negara.',
    recommendedApis: ['TheMealDB', 'Open-Meteo', 'EQuran.id', 'REST Countries'],
  },
];

export const BEGINNER_APIS = [
  { name: 'TheMealDB', useCase: 'Resep makanan (Dipakai di DapurKanda)', note: 'Tanpa API key (versi gratis)', url: 'https://www.themealdb.com/api.php' },
  { name: 'Open-Meteo', useCase: 'Cuaca real-time & prakiraan', note: 'Gratis, tanpa API key', url: 'https://open-meteo.com/' },
  { name: 'PokéAPI', useCase: 'Katalog & statistik Pokémon', note: 'Tanpa API key', url: 'https://pokeapi.co/' },
  { name: 'Jikan API', useCase: 'Katalog anime & manga (MyAnimeList)', note: 'Tanpa API key', url: 'https://docs.api.jikan.moe/' },
  { name: 'EQuran.id', useCase: "Al-Qur'an Bahasa Indonesia & audio", note: 'Tanpa API key', url: 'https://equran.id/apidev' },
  { name: 'REST Countries', useCase: 'Info negara, bendera, populasi', note: 'Tanpa API key', url: 'https://restcountries.com/' },
  { name: 'Rick and Morty API', useCase: 'Karakter, lokasi, dan episode', note: 'Tanpa API key', url: 'https://rickandmortyapi.com/' },
  { name: 'Open Library', useCase: 'Katalog buku & penulis dunia', note: 'Tanpa API key', url: 'https://openlibrary.org/developers/api' },
  { name: 'TMDB API', useCase: 'Film dan serial TV populer', note: 'Perlu daftar untuk API key (.env)', url: 'https://developer.themoviedb.org/' },
  { name: 'API Wilayah Indonesia', useCase: 'Provinsi, kota/kabupaten, kecamatan', note: 'Gratis di GitHub (Emsifa)', url: 'https://github.com/emsifa/api-wilayah-indonesia' },
];

export const TIMELINE_12_DAYS = [
  { day: 'H-0', date: '3 Nov 2026', focus: 'Kickoff Online', output: 'Paham aturan, kriteria MVP, tema, dan pembagian kelompok' },
  { day: 'H1–H2', date: '4–5 Nov 2026', focus: 'Ideasi, Pilih API, Wireframe, Buat Repo', output: 'Proposal singkat (1 halaman) + wireframe + link repo GitHub' },
  { day: 'H3', date: '6 Nov 2026', focus: 'Setup Vite + Struktur Folder + Deploy Awal & Office Hours 1', output: 'Live URL pertama ("Deploy Early, Deploy Often")' },
  { day: 'H4–H6', date: '7–9 Nov 2026', focus: 'Bangun Fitur Inti (3 Halaman, Fetch API, Komponen)', output: 'Progress harian (Daily Update 3 kalimat) di grup' },
  { day: 'H7', date: '10 Nov 2026', focus: 'Checkpoint Utama & Office Hours 2', output: 'Link Live URL + Link Repo + Screen Recording Demo 1–2 menit' },
  { day: 'H8–H9', date: '11–12 Nov 2026', focus: 'Fitur Interaktif, Polish UI, Responsive HP', output: 'Pull Request (PR) anggota yang sudah merge ke branch main' },
  { day: 'H10–H11', date: '13–14 Nov 2026', focus: 'Feature Freeze, Lengkapi README, Latihan Presentasi', output: 'README final + Slide/Outline Presentasi 5 menit' },
  { day: 'H12', date: '15 Nov 2026', focus: 'Sesi Showcase Divisi Website', output: 'Presentasi 5 menit + Demo Live URL 5 menit + Q&A 3 menit + Penghargaan' },
];

export const SCORING_RUBRIC = [
  { aspect: 'Fungsionalitas', weight: '30%', detail: '7 syarat MVP berjalan lancar, Public API terpakai dengan benar (loading & error state), fitur interaktif bekerja.' },
  { aspect: 'Kualitas Kode', weight: '20%', detail: 'Struktur folder (components, pages, services), penamaan rapi, pemakaian Props/State, serta riwayat Git commit & PR tiap anggota.' },
  { aspect: 'UI/UX & Responsiveness', weight: '20%', detail: 'Tampilan konsisten dan rapi, mudah digunakan, nyaman dibuka di layar HP maupun desktop.' },
  { aspect: 'Deployment & Dokumentasi', weight: '15%', detail: 'Live URL aktif tanpa error 404 routing, serta README.md lengkap sesuai template Bagian 11.' },
  { aspect: 'Presentasi & Demo Live', weight: '15%', detail: 'Alur presentasi jelas, semua anggota bicara, demo menggunakan Live URL lancar, mampu menjawab tanya jawab kode.' },
  { aspect: 'Fitur Bonus (Opsional)', weight: '+10%', detail: 'Dark mode, simpan favorit di localStorage, fitur kreatif unik, atau integrasi backend/BaaS.' },
];

export const AWARDS_LIST = [
  { icon: '🏆', title: 'Best Overall', desc: 'Kelompok dengan nilai keseluruhan terbaik dari semua aspek.' },
  { icon: '🎨', title: 'Best UI/UX', desc: 'Desain antarmuka paling rapi, nyaman, dan responsif di HP & desktop.' },
  { icon: '🛠️', title: 'Best Technical', desc: 'Struktur kode React, pengelolaan state/API, dan histori Git PR paling bersih.' },
  { icon: '💡', title: 'Most Creative', desc: 'Ide solusi dan fitur interaktif paling unik serta bermanfaat.' },
  { icon: '🤝', title: 'Best Teamwork', desc: 'Kolaborasi Git paling merata, aktif daily update, dan kompak saat presentasi.' },
  { icon: '❤️', title: "People's Choice", desc: 'Project favorit berdasarkan voting seluruh peserta saat Showcase.' },
];

export const TEAM_ROLES = [
  { role: 'UI Lead', focus: 'Layout halaman, styling CSS, responsiveness HP & desktop, konsistensi desain.' },
  { role: 'Logic / API Lead', focus: 'Fetch data Public API, pengelolaan useState & useEffect, fitur search/filter/favorit.' },
  { role: 'Git & Docs Lead', focus: 'Menjaga repo GitHub, review Pull Request (PR), konfigurasi deploy Vercel/Netlify, menyusun README.' },
  { role: 'QA & Presentation Lead', focus: 'Menguji fitur & bug di berbagai ukuran layar, menyiapkan alur demo live & slide presentasi.' },
];

export const GROUPS_DATA = [
  {
    name: 'KELOMPOK 1',
    members: [
      'Andi Farhan Adam',
      'Belia Atalie Muthmainnah',
      'Auliya Magfirani Arzal',
      'Muhammad Zacky Ramadhana SY',
    ],
  },
  {
    name: 'KELOMPOK 2',
    members: [
      'Syahrul Jihad Rabbani',
      'Muh. Nurihsan Anugrah',
      'Azizah Syahruniatul Mubaraq',
      'Muhammad Andika Setia Negara BS',
      'Aliya Artika Bahni',
    ],
  },
  {
    name: 'KELOMPOK 3',
    members: [
      'Muhammad Bagus Widiyanto',
      'Rayhaan Alif Alamsyah',
      'Rifdha Zahrani',
      'Fakhiroh Pannyiw',
      'Muhammad Shofwan Arraffi Rabbani',
    ],
  },
  {
    name: 'KELOMPOK 4',
    members: [
      'Andini Nurul Maulyah',
      'Chelsi Pracisa Lantong',
      'Christian Tigor Oloan Lande',
      'Nadiyah Sosialitya Latif',
      'Andi Radit AlKhalifi',
    ],
  },
  {
    name: 'KELOMPOK 5',
    members: [
      'Fuad Ali Zurriyat',
      'SYAQILA KIREINA ABDIGA',
      'Nursyafika',
      'Najla Kayla Muti',
    ],
  },
  {
    name: 'KELOMPOK 6',
    members: ['(PIC mengisi anggota Kelompok 6 saat Kickoff)'],
  },
];

export const SUBMISSION_CHECKLIST = [
  { id: 'c1', label: 'Live URL aktif (Vercel/Netlify) dan sudah dites dibuka dari HP' },
  { id: 'c2', label: 'Repository GitHub diset Public' },
  { id: 'c3', label: 'Memiliki minimal 3 halaman/view dengan React Router' },
  { id: 'c4', label: 'Data dari Public API tampil lengkap dengan Loading & Error state' },
  { id: 'c5', label: 'Ada minimal 1 fitur interaktif yang berjalan (Search / Filter / Favorit / Sorting)' },
  { id: 'c6', label: 'Tampilan Responsive di layar HP dan Desktop' },
  { id: 'c7', label: 'File README.md sudah lengkap sesuai Template Bagian 11 (ada screenshot & live link)' },
  { id: 'c8', label: 'Tidak ada API key atau password rahasia yang ter-upload ke GitHub (.env masuk .gitignore)' },
  { id: 'c9', label: 'Setiap anggota kelompok memiliki riwayat commit & Pull Request nyata di repo' },
  { id: 'c10', label: 'Console browser bersih dari error berwarna merah (Inspect > Console)' },
  { id: 'c11', label: 'Presentasi 5 menit & Demo Live 5 menit sudah dilatih bersama tim' },
];
