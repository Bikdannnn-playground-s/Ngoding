import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MealCard from '../components/MealCard';
import TeacherCallout from '../components/TeacherCallout';
import {
  searchMealsByName,
  getMealsByCategory,
  getMealCategories,
  FALLBACK_MEALS,
} from '../services/mealService';

/**
 * HALAMAN 2: Eksplor Resep / Daftar (src/pages/ExploreRecipes.jsx)
 * - Memenuhi Syarat MVP #2 (Halaman Daftar), #3 (Fetch API + Loading & Error State),
 *   dan #4 (Fitur Interaktif: Search, Filter Kategori, dan Sorting).
 */
function ExploreRecipes({ favorites, onToggleFavorite, teacherMode }) {
  // 3 State wajib untuk Fetch API sesuai Bagian 10.2 Modul (Halaman 7)
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State untuk Fitur Interaktif (Search, Filter Kategori, Sorting)
  const [searchQuery, setSearchQuery] = useState('chicken');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('asc');
  const [usingFallback, setUsingFallback] = useState(false);

  // 1. Ambil daftar kategori saat halaman pertama kali dibuka
  useEffect(() => {
    async function loadCategories() {
      try {
        const cats = await getMealCategories();
        setCategories(cats);
      } catch {
        setCategories([
          { idCategory: '1', strCategory: 'Chicken' },
          { idCategory: '2', strCategory: 'Beef' },
          { idCategory: '3', strCategory: 'Seafood' },
          { idCategory: '4', strCategory: 'Vegetarian' },
          { idCategory: '5', strCategory: 'Pasta' },
          { idCategory: '6', strCategory: 'Dessert' },
        ]);
      }
    }
    loadCategories();
    handleSearchSubmit('chicken');
  }, []);

  // 2. Fungsi mengambil data berdasarkan kata kunci pencarian
  const handleSearchSubmit = async (keyword) => {
    const cleanQuery = keyword.trim() || 'chicken';
    setSelectedCategory('');
    setLoading(true);
    setError(null);
    setUsingFallback(false);

    try {
      const results = await searchMealsByName(cleanQuery);
      setMeals(results);
    } catch (err) {
      setError(err.message || 'Gagal mengambil data dari TheMealDB API.');
    } finally {
      setLoading(false);
    }
  };

  // 3. Fungsi memfilter resep berdasarkan kategori API
  const handleSelectCategory = async (category) => {
    setSelectedCategory(category);
    if (!category) {
      handleSearchSubmit(searchQuery);
      return;
    }

    setLoading(true);
    setError(null);
    setUsingFallback(false);

    try {
      const results = await getMealsByCategory(category);
      setMeals(results);
    } catch (err) {
      setError(err.message || `Gagal memuat kategori ${category}.`);
    } finally {
      setLoading(false);
    }
  };

  // 4. Tombol Simulasi Error State (Untuk Demo Mengajar Pertemuan 6 & MVP #3)
  const handleSimulateError = () => {
    setLoading(false);
    setError(
      'Simulasi HTTP 500 Server Error: Pelayan (API) gagal mengambil data dari Dapur (Server). Ini adalah contoh tampilan Error State yang wajib ada di Syarat MVP #3!'
    );
  };

  // 5. Gunakan Data Cadangan Lokal (Sesuai Tips FAQ Bagian 18 Modul)
  const handleUseFallbackData = () => {
    setError(null);
    setUsingFallback(true);
    setMeals(FALLBACK_MEALS);
  };

  // 6. Mengurutkan hasil resep (Sorting A-Z atau Z-A)
  const sortedMeals = [...meals].sort((a, b) => {
    if (sortBy === 'asc') {
      return a.strMeal.localeCompare(b.strMeal);
    }
    return b.strMeal.localeCompare(a.strMeal);
  });

  const isFav = (idMeal) => favorites.some((item) => item.idMeal === idMeal);

  return (
    <div className="container section">
      {/* Header Halaman */}
      <div className="page-header-flex">
        <div>
          <span className="section-eyebrow">🍲 Katalog Public API (Halaman ke-2)</span>
          <h1 className="page-title">Eksplor Resep Masakan</h1>
          <p className="page-subtitle">
            Cari ide masakan berdasarkan nama bahan, filter kategori, atau urutkan
            sesuai abjad.
          </p>
        </div>

        {/* Tombol Demo Error State untuk Pengurus */}
        <div className="demo-tools-box">
          <button
            type="button"
            className="btn btn-danger-outline btn-sm"
            onClick={handleSimulateError}
            title="Klik saat presentasi untuk menunjukkan contoh Error State ke adik-adik Coder"
          >
            🧪 Tes Tampilan Error State (MVP #3)
          </button>
        </div>
      </div>

      <TeacherCallout
        show={teacherMode}
        badge="Bagian 10.2 Modul (Pola Dasar Fetch Data)"
        title="Pengelolaan 3 State Wajib: data, loading, dan error"
      >
        <p>
          Halaman ini menerapkan persis pola kode di <strong>Bagian 10.2 Modul</strong>:
          <br />
          <code>const [meals, setMeals] = useState([]);</code> |{' '}
          <code>const [loading, setLoading] = useState(true);</code> |{' '}
          <code>const [error, setError] = useState(null);</code>
          <br />
          Coba klik tombol <strong>&quot;🧪 Tes Tampilan Error State&quot;</strong> di kanan
          atas untuk melihat bagaimana aplikasi menangani error tanpa membuat layar putih!
        </p>
      </TeacherCallout>

      {/* Komponen SearchBar & Filter */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {usingFallback && (
        <div className="fallback-notice">
          ℹ️ Menampilkan <strong>Data Cadangan Lokal (JSON)</strong> sesuai panduan{' '}
          <em>Bagian 18 FAQ Modul</em> (antisipasi jika API atau koneksi internet sedang
          bermasalah saat demo).
        </div>
      )}

      {/* KONDISI 1: LOADING STATE (Syarat MVP #3) */}
      {loading && (
        <div className="state-box loading-state-box">
          <div className="spinner" aria-hidden="true" />
          <h3>Sedang mengambil data resep dari dapur (API Server)...</h3>
          <p>Mohon tunggu sebentar, Pelayan (REST API) sedang memproses request GET.</p>
          <div className="meals-grid" style={{ marginTop: '1.5rem' }}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="skeleton-card">
                <div className="skeleton-img" />
                <div className="skeleton-line short" />
                <div className="skeleton-line" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* KONDISI 2: ERROR STATE (Syarat MVP #3) */}
      {!loading && error && (
        <div className="state-box error-state-box" role="alert">
          <span className="state-icon">⚠️</span>
          <h3>Waduh, Gagal Mengambil Data API!</h3>
          <p className="error-message-text">{error}</p>
          <div className="error-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleSearchSubmit(searchQuery)}
            >
              🔄 Coba Fetch Ulang dari API
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleUseFallbackData}
            >
              📦 Gunakan Data Cadangan Lokal (FAQ Bagian 18)
            </button>
          </div>
        </div>
      )}

      {/* KONDISI 3: DATA KOSONG (Tidak ditemukan) */}
      {!loading && !error && sortedMeals.length === 0 && (
        <div className="state-box empty-state-box">
          <span className="state-icon">🍽️</span>
          <h3>Menu &quot;{searchQuery}&quot; Tidak Ditemukan</h3>
          <p>
            Coba gunakan kata kunci bahasa Inggris seperti <strong>Chicken</strong>,{' '}
            <strong>Beef</strong>, <strong>Fish</strong>, <strong>Cake</strong>, atau
            pilih salah satu kategori di atas.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setSearchQuery('chicken');
              handleSearchSubmit('chicken');
            }}
          >
            Tampilkan Menu Populer
          </button>
        </div>
      )}

      {/* KONDISI 4: DATA BERHASIL DITAMPILKAN */}
      {!loading && !error && sortedMeals.length > 0 && (
        <>
          <div className="results-summary">
            <span>
              Menampilkan <strong>{sortedMeals.length}</strong> resep{' '}
              {selectedCategory
                ? `dalam kategori "${selectedCategory}"`
                : `untuk pencarian "${searchQuery}"`}
            </span>
            <span className="sort-indicator">
              Urutan: <strong>{sortBy === 'asc' ? 'A → Z' : 'Z → A'}</strong>
            </span>
          </div>

          <div className="meals-grid">
            {sortedMeals.map((meal) => (
              <MealCard
                key={meal.idMeal}
                meal={meal}
                isFavorite={isFav(meal.idMeal)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ExploreRecipes;
