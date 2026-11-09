import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExploreRecipes from './pages/ExploreRecipes';
import RecipeDetail from './pages/RecipeDetail';
import Favorites from './pages/Favorites';
import ModuleGuide from './pages/ModuleGuide';
import './App.css';

/**
 * KOMPONEN UTAMA: App (src/App.jsx)
 * - Mengatur navigasi multi-halaman dengan React Router (Syarat MVP #2)
 * - Mengelola state Dark Mode & Koleksi Favorit di localStorage (Fitur Bonus Bagian 4.3)
 */
function App() {
  // 1. State Dark Mode (tersimpan di localStorage)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('dapurkanda_theme') === 'dark';
  });

  // 2. State Mode Bedah Kriteria (untuk membantu pengurus saat presentasi)
  const [teacherMode, setTeacherMode] = useState(true);

  // 3. State Resep Favorit (tersimpan di localStorage)
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('dapurkanda_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sinkronisasi class dark-mode pada elemen <body> (Materi Pertemuan 3 Slide 11)
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dapurkanda_theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dapurkanda_theme', 'light');
    }
  }, [darkMode]);

  // Sinkronisasi daftar favorit ke localStorage setiap kali berubah
  useEffect(() => {
    try {
      localStorage.setItem('dapurkanda_favorites', JSON.stringify(favorites));
    } catch {
      // Abaikan jika penyimpanan browser penuh
    }
  }, [favorites]);

  // Fungsi tambah / hapus resep dari Favorit
  const handleToggleFavorite = (meal) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.idMeal === meal.idMeal);
      if (exists) {
        return prev.filter((item) => item.idMeal !== meal.idMeal);
      }
      return [
        ...prev,
        {
          idMeal: meal.idMeal,
          strMeal: meal.strMeal,
          strMealThumb: meal.strMealThumb,
          strCategory: meal.strCategory || 'Pilihan',
          strArea: meal.strArea || '',
        },
      ];
    });
  };

  const handleClearFavorites = () => {
    setFavorites([]);
  };

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar
          darkMode={darkMode}
          onToggleDark={() => setDarkMode(!darkMode)}
          teacherMode={teacherMode}
          onToggleTeacher={() => setTeacherMode(!teacherMode)}
          favoriteCount={favorites.length}
        />

        <main className="main-content">
          <Routes>
            {/* Halaman 1: Beranda */}
            <Route
              path="/"
              element={
                <Home
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  teacherMode={teacherMode}
                />
              }
            />

            {/* Halaman 2: Eksplor / Daftar Resep */}
            <Route
              path="/resep"
              element={
                <ExploreRecipes
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  teacherMode={teacherMode}
                />
              }
            />

            {/* Halaman 3: Detail Resep Spesifik */}
            <Route
              path="/resep/:id"
              element={
                <RecipeDetail
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  teacherMode={teacherMode}
                />
              }
            />

            {/* Halaman 4 (Bonus): Koleksi Favoritku (localStorage) */}
            <Route
              path="/favorit"
              element={
                <Favorites
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  onClearFavorites={handleClearFavorites}
                  teacherMode={teacherMode}
                />
              }
            />

            {/* Halaman 5: Portal Panduan & Kriteria Modul Project Akhir */}
            <Route path="/panduan" element={<ModuleGuide />} />

            {/* Halaman 404 Not Found */}
            <Route
              path="*"
              element={
                <div className="container section">
                  <div className="state-box empty-state-box">
                    <span className="state-icon">🧭</span>
                    <h2>404 Not Found — Halaman Tidak Ditemukan</h2>
                    <p>
                      Alamat URL yang kamu tuju tidak tersedia. Yuk kembali ke
                      Beranda!
                    </p>
                    <Link to="/" className="btn btn-primary">
                      ← Kembali ke Beranda
                    </Link>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
