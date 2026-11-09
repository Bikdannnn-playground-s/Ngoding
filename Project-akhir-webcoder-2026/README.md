# 🍲 DapurKanda — Katalog Resep Anak Kost & Portal Modul Project Akhir

**DapurKanda** adalah aplikasi web pencarian resep masakan harian yang dirancang untuk membantu mahasiswa dan anak kost (khususnya di sekitar kampus FT-UH Gowa & Tamalanrea Makassar) menemukan ide masakan praktis beserta takaran bahan dan video tutorial. Website ini sekaligus berfungsi sebagai **Contoh Project Jadi (Reference Project)** dan **Portal Panduan Interaktif** untuk *Project Akhir Divisi Website — Coder Institute HMIF FT-UH 2026*.

## Live Demo
https://dapurkanda-coder-ftuh.vercel.app *(Ganti dengan link Vercel setelah di-deploy)*

## Screenshot
*(Minimal 2 gambar: tampilan desktop dan mobile — simpan gambar di folder `public/` atau `src/assets/` lalu tampilkan di sini)*
- **Tampilan Desktop**: Beranda dengan Smart Greeting, Katalog Resep, dan Mode Bedah Kriteria.
- **Tampilan Mobile (Responsive)**: Navigasi Hamburger, Grid Kartu Resep 1 Kolom, dan Tabel Bahan Responsif.

## Fitur
- **Smart Greeting Otomatis (Materi Pertemuan 3)**: Sapaan dinamis (Pagi/Siang/Sore/Malam) menggunakan `new Date().getHours()`.
- **Multi-Halaman dengan React Router (Syarat MVP #2)**:
  1. `Beranda (/)`: Hero, Rekomendasi Menu, dan fitur kreatif *Kocok Menu Acak*.
  2. `Eksplor Resep (/resep)`: Pencarian resep, filter kategori API, sorting A–Z / Z–A, lengkap dengan *Loading State*, *Error State*, dan *Fallback Data JSON*.
  3. `Detail Resep (/resep/:id)`: Tabel takaran bahan (`<table>`), langkah memasak berurutan, dan link video tutorial YouTube.
  4. `Favoritku (/favorit)`: Penyimpanan resep favorit menggunakan `localStorage` *(Fitur Bonus +10%)*.
  5. `Portal Modul & Kriteria (/panduan)`: Rangkuman interaktif aturan, tema, timeline 12 hari, pembagian 6 kelompok, sistem penilaian, dan checklist pengumpulan.
- **Dark Mode Toggle *(Fitur Bonus +10%)*:** Tema terang/gelap yang tersimpan di `localStorage`.
- **Mode Bedah Kriteria (Khusus Pengurus/Pengajar)**: Menampilkan penjelasan konsep kode dan syarat MVP langsung di setiap bagian halaman.

## Tech Stack
- **Frontend Framework**: React 18 (Vite)
- **Routing**: React Router DOM v6
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid, Media Query Responsive)
- **API**: [TheMealDB REST API](https://www.themealdb.com/api.php) (Gratis, tanpa API Key)
- **Deploy**: Vercel (dilengkapi `vercel.json` untuk konfigurasi SPA rewrite)

## Cara Menjalankan Lokal
1. `git clone <link-repo>`
2. `cd Project-akhir-webcoder-2026`
3. `npm install`
4. `npm run dev`

## Tim dan Kontribusi
| Nama | Peran | Kontribusi |
|---|---|---|
| Efraim Imanuel Parasak | Koordinator Divisi Website / Lead | Arsitektur project, struktur komponen React, dan materi panduan teknis |
| Muh Yusuf Ma'Ruf | PIC Showcase Website Coder | Desain UI/UX, integrasi TheMealDB API, dan penyusunan rubrik Showcase |
| Pengurus Divisi Website | Mentor & Reviewer | QA testing, dokumentasi README, dan pendampingan 6 kelompok |

## Pembelajaran
Hal terbesar yang dipelajari dan dicontohkan melalui project ini adalah bagaimana menggabungkan fundamental **HTML Semantic, CSS Flexbox & Media Query, JavaScript DOM/Array/Object, React Component/Props/State, hingga konsumsi RESTful API (JSON)** menjadi satu produk web utuh yang siap digunakan publik dan layak dipajang di portofolio.
