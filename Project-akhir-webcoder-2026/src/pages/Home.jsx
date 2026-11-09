import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MealCard from '../components/MealCard';
import TeacherCallout from '../components/TeacherCallout';
import {
  searchMealsByName,
  getRandomMeal,
  FALLBACK_MEALS,
} from '../services/mealService';

/**
 * HALAMAN 1: Beranda / Home (src/pages/Home.jsx)
 * - Mengimplementasikan Smart Greeting sesuai materi Pertemuan 3 (Date & If/Else)
 * - Mengambil data rekomendasi resep dengan useEffect & useState (Bagian 10.2 Modul)
 * - Menyediakan fitur kreatif "Kocok Menu Anak Kost" (Endpoint GET /random.php)
 */
function Home({ favorites, onToggleFavorite, teacherMode }) {
  const [featuredMeals, setFeaturedMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomMeal, setRandomMeal] = useState(null);
  const [rolling, setRolling] = useState(false);

  // Smart Greeting berdasarkan waktu nyata (Materi Pertemuan 3 Slide 10-11)
  const getSmartGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 4 && hour < 11) {
      return {
        emoji: '☀️',
        title: 'Selamat Pagi, Kanda & Dinda!',
        tip: 'Jangan lupa sarapan sebelum berangkat ngampus ke Gowa atau Tamalanrea!',
      };
    } else if (hour >= 11 && hour < 15) {
      return {
        emoji: '🌤️',
        title: 'Selamat Siang, Pejuang Koding!',
        tip: 'Habis kelas siang enaknya masak menu makan siang yang praktis dan bergizi.',
      };
    } else if (hour >= 15 && hour < 18) {
      return {
        emoji: '🌇',
        title: 'Selamat Sore, Warga Coder!',
        tip: 'Sambil ngerjain tugas kelompok, yuk cari ide masak buat makan malam nanti.',
      };
    } else {
      return {
        emoji: '🌙',
        title: 'Selamat Malam, Anak Kost!',
        tip: 'Lapar tengah malam waktu ngoding? Cek resep simpel daripada makan mie instan terus!',
      };
    }
  };

  const greeting = getSmartGreeting();

  // Fetch data rekomendasi awal saat halaman pertama kali dibuka (useEffect)
  useEffect(() => {
    async function loadFeatured() {
      setLoading(true);
      try {
        const results = await searchMealsByName('chicken');
        if (results && results.length > 0) {
          setFeaturedMeals(results.slice(0, 6));
        } else {
          setFeaturedMeals(FALLBACK_MEALS);
        }
      } catch {
        // Jika internet offline, gunakan data cadangan lokal sesuai FAQ Bagian 18 Modul
        setFeaturedMeals(FALLBACK_MEALS);
      } finally {
        setLoading(false);
      }
    }
    loadFeatured();
  }, []);

  // Fungsi Fitur Kreatif: Kocok Menu Acak dari API
  const handleRollRandomMeal = async () => {
    setRolling(true);
    try {
      const meal = await getRandomMeal();
      setRandomMeal(meal);
    } catch {
      const randomIndex = Math.floor(Math.random() * FALLBACK_MEALS.length);
      setRandomMeal(FALLBACK_MEALS[randomIndex]);
    } finally {
      setRolling(false);
    }
  };

  const isFav = (idMeal) => favorites.some((item) => item.idMeal === idMeal);

  return (
    <div className="page-home">
      {/* Banner Pengantar untuk Pengurus & Anggota Coder */}
      <div className="coder-welcome-strip">
        <div className="container strip-inner">
          <span>
            👋 <strong>Halo Anggota Divisi Website Coder FT-UH!</strong> Web ini
            adalah contoh nyata <em>Project Akhir</em> yang memenuhi 7 Syarat MVP
            + Fitur Bonus.
          </span>
          <Link to="/panduan" className="strip-link">
            Baca Aturan, Tema &amp; Kriteria Penilaian →
          </Link>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="smart-greeting-pill">
              <span>{greeting.emoji}</span>
              <div>
                <strong>{greeting.title}</strong>
                <span className="greeting-sub"> — {greeting.tip}</span>
              </div>
            </div>

            <h1 className="hero-title">
              Masak Enak di Kost Nggak Pakai Bingung dengan{' '}
              <span className="text-gradient">DapurKanda</span>
            </h1>

            <p className="hero-subtitle">
              Solusi pencarian resep masakan harian untuk mahasiswa. Temukan
              ratusan ide menu dari <strong>TheMealDB Public API</strong> lengkap
              dengan takaran bahan, langkah memasak, dan video tutorial!
            </p>

            <div className="hero-cta-group">
              <Link to="/resep" className="btn btn-primary btn-lg">
                🍲 Eksplor Semua Resep
              </Link>
              <button
                type="button"
                onClick={handleRollRandomMeal}
                className="btn btn-secondary btn-lg"
                disabled={rolling}
              >
                🎲 {rolling ? 'Mengocok Menu...' : 'Galau Makan Apa? Kocok Menu!'}
              </button>
              <Link to="/panduan" className="btn btn-outline btn-lg">
                📘 Lihat Modul Project Akhir
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <strong>300+</strong>
                <span>Resep Public API</span>
              </div>
              <div className="stat-item">
                <strong>4 Halaman</strong>
                <span>React Router SPA</span>
              </div>
              <div className="stat-item">
                <strong>100% MVP</strong>
                <span>+ Bonus LocalStorage &amp; Dark Mode</span>
              </div>
            </div>
          </div>

          {/* KARTU INTERAKTIF: Hasil Kocok Menu atau Kartu Ilustrasi Masalah/Solusi */}
          <div className="hero-Visual">
            {randomMeal ? (
              <div className="random-result-card">
                <div className="random-card-header">
                  <span className="badge badge-accent">🎲 Menu Terpilih Hari Ini!</span>
                  <button
                    type="button"
                    className="close-random-btn"
                    onClick={() => setRandomMeal(null)}
                  >
                    ✕
                  </button>
                </div>
                <img
                  src={randomMeal.strMealThumb}
                  alt={randomMeal.strMeal}
                  className="random-meal-img"
                />
                <h3>{randomMeal.strMeal}</h3>
                <p className="random-meta">
                  Kategori: <strong>{randomMeal.strCategory}</strong> • Asal:{' '}
                  <strong>{randomMeal.strArea}</strong>
                </p>
                <div className="random-actions">
                  <Link
                    to={`/resep/${randomMeal.idMeal}`}
                    className="btn btn-primary btn-sm"
                  >
                    Lihat Cara Masaknya →
                  </Link>
                  <button
                    type="button"
                    onClick={handleRollRandomMeal}
                    className="btn btn-outline btn-sm"
                  >
                    🔄 Kocok Lagi
                  </button>
                </div>
              </div>
            ) : (
              <div className="anatomy-card">
                <div className="anatomy-header">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                  <span className="anatomy-filename">
                    Proposal_Kelompok_Contoh.md (Bagian 7 Modul)
                  </span>
                </div>
                <div className="anatomy-body">
                  <div className="anatomy-row">
                    <span className="anatomy-label">🎯 Tema Project</span>
                    <p>
                      <strong>Tema C (Utilitas Harian)</strong> dipadukan dengan{' '}
                      <strong>Tema A (Solusi Anak Kost Kampus)</strong>
                    </p>
                  </div>
                  <div className="anatomy-row">
                    <span className="anatomy-label">❗ Masalah Nyata</span>
                    <p>
                      Anak kost sering bingung mau masak apa dengan bahan yang ada
                      di kulkas/pasar sekitar kampus, akhirnya boros beli makan luar.
                    </p>
                  </div>
                  <div className="anatomy-row">
                    <span className="anatomy-label">🔌 Public API</span>
                    <p>
                      <code>TheMealDB REST API</code> (Gratis, tanpa API Key, JSON
                      lengkap dengan foto, bahan, dan video YouTube).
                    </p>
                  </div>
                  <div className="anatomy-row">
                    <span className="anatomy-label">✨ Fitur Interaktif</span>
                    <p>
                      Live Search, Filter Kategori, Sorting A-Z, Kocok Menu Acak,
                      Simpan Favorit (<code>localStorage</code>), &amp; Dark Mode.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="container">
        <TeacherCallout
          show={teacherMode}
          badge="Materi Pertemuan 3 & Bagian 5 Modul"
          title="Kenapa bagian Hero di atas penting saat Showcase?"
        >
          <p>
            1. <strong>Smart Greeting</strong> di atas memakai{' '}
            <code>new Date().getHours()</code> dan logika <code>if/else</code>{' '}
            persis seperti latihan <em>KandaKost</em> di Pertemuan 3!
            <br />
            2. Saat <strong>Presentasi 5 Menit (Bagian 14 Modul)</strong>, menit
            pertama wajib menjawab: <em>&quot;Apa masalah yang kalian selesaikan dan kenapa?&quot;</em>{' '}
            Halaman Beranda yang baik langsung menjelaskan tujuan produk dalam 5 detik pertama.
          </p>
        </TeacherCallout>
      </div>

      {/* SECTION: REKOMENDASI MENU ANAK KOST */}
      <section className="section container">
        <div className="section-header">
          <div>
            <span className="section-eyebrow">🔥 Diambil Langsung dari Public API</span>
            <h2 className="section-title">Rekomendasi Menu Ayam Populer</h2>
          </div>
          <Link to="/resep" className="btn btn-outline">
            Lihat Semua &amp; Filter Kategori →
          </Link>
        </div>

        <TeacherCallout
          show={teacherMode}
          badge="Syarat MVP #3 & Pertemuan 4"
          title="Komponen Reusable (MealCard) + Fetch Data dengan Loading State"
        >
          <p>
            Bagian ini memanggil <code>searchMealsByName(&apos;chicken&apos;)</code>{' '}
            di dalam <code>useEffect</code>. Setiap item di-render menggunakan{' '}
            <code>.map()</code> ke dalam komponen <code>&lt;MealCard /&gt;</code>{' '}
            dengan mengirimkan <code>props</code> (<code>meal</code>,{' '}
            <code>isFavorite</code>, <code>onToggleFavorite</code>).
          </p>
        </TeacherCallout>

        {loading ? (
          <div className="meals-grid">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="skeleton-card">
                <div className="skeleton-img" />
                <div className="skeleton-line short" />
                <div className="skeleton-line" />
              </div>
            ))}
          </div>
        ) : (
          <div className="meals-grid">
            {featuredMeals.map((meal) => (
              <MealCard
                key={meal.idMeal}
                meal={meal}
                isFavorite={isFav(meal.idMeal)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        )}
      </section>

      {/* SECTION: PEMETAAN KRITERIA MVP PADA CONTOH PROJECT INI */}
      <section className="section bg-subtle">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">✅ Checklist Standar Kelulusan</span>
            <h2 className="section-title">
              Bagaimana Web Ini Memenuhi Kriteria Project Akhir?
            </h2>
            <p className="section-desc">
              Gunakan tabel pemetaan di bawah ini sebagai patokan saat kelompokmu
              merancang dan membangun aplikasi selama 12 hari kerja.
            </p>
          </div>

          <div className="criteria-cards-grid">
            <div className="criteria-card">
              <span className="criteria-num">MVP #1 &amp; #2</span>
              <h3>Multi-Halaman (React Router) &amp; Live Deploy</h3>
              <p>
                Wajib minimal 3 halaman. Di contoh ini ada{' '}
                <strong>Beranda</strong>, <strong>Eksplor Resep</strong>,{' '}
                <strong>Detail Resep</strong>, dan <strong>Favoritku</strong>, plus
                file <code>vercel.json</code> agar tidak 404 saat di-refresh.
              </p>
            </div>

            <div className="criteria-card">
              <span className="criteria-num">MVP #3</span>
              <h3>Fetch Public API + Loading &amp; Error State</h3>
              <p>
                Mengambil data JSON dari <strong>TheMealDB API</strong> memakai{' '}
                <code>async/await fetch()</code>, menampilkan <em>skeleton loading</em>,
                serta menangani kondisi jika API gagal.
              </p>
            </div>

            <div className="criteria-card">
              <span className="criteria-num">MVP #4 &amp; #5</span>
              <h3>Fitur Interaktif &amp; Responsive Design</h3>
              <p>
                Dilengkapi <strong>Live Search</strong>,{' '}
                <strong>Filter Kategori</strong>, dan <strong>Sorting A–Z</strong>.
                Layout menggunakan Flexbox &amp; CSS Grid yang otomatis menyesuaikan
                layar HP.
              </p>
            </div>

            <div className="criteria-card bonus-highlight">
              <span className="criteria-num">BONUS (+10%)</span>
              <h3>Dark Mode &amp; LocalStorage Favorit</h3>
              <p>
                Setelah MVP selesai, tambahkan fitur penyimpanan resep favorit di{' '}
                <code>localStorage</code> dan tombol <strong>Dark Mode</strong> untuk
                mendapatkan poin penilaian tambahan!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
