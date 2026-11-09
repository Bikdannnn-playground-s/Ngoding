import { Link } from 'react-router-dom';
import MealCard from '../components/MealCard';
import TeacherCallout from '../components/TeacherCallout';

/**
 * HALAMAN 4: Koleksi Favoritku (src/pages/Favorites.jsx)
 * - Mendemonstrasikan Fitur Bonus Bagian 4.3 Modul: "Simpan data favorit di localStorage"
 * - Data tetap tersimpan di browser walaupun halaman di-refresh.
 */
function Favorites({
  favorites,
  onToggleFavorite,
  onClearFavorites,
  teacherMode,
}) {
  return (
    <div className="container section">
      <div className="page-header-flex">
        <div>
          <span className="section-eyebrow">
            ⭐ Fitur Bonus Bagian 4.3 Modul (+10% Poin)
          </span>
          <h1 className="page-title">Koleksi Resep Favoritku</h1>
          <p className="page-subtitle">
            Daftar resep pilihanmu yang disimpan secara permanen di browser
            menggunakan <code>localStorage</code>.
          </p>
        </div>

        {favorites.length > 0 && (
          <button
            type="button"
            onClick={onClearFavorites}
            className="btn btn-danger-outline btn-sm"
          >
            🗑️ Hapus Semua Favorit
          </button>
        )}
      </div>

      <TeacherCallout
        show={teacherMode}
        badge="Fitur Bonus Bagian 4.3 (localStorage)"
        title="Cara Kerja Penyimpanan Favorit di Browser"
      >
        <p>
          Saat kamu menekan tombol hati (❤️) pada kartu resep, data objek resep
          disimpan ke dalam state React sekaligus ke{' '}
          <code>localStorage.setItem(&apos;dapurkanda_favorites&apos;, JSON.stringify(data))</code>.
          Coba <strong>Refresh (F5)</strong> browser kamu — daftar resep di bawah
          tidak akan hilang!
        </p>
      </TeacherCallout>

      {favorites.length === 0 ? (
        <div className="state-box empty-state-box">
          <span className="state-icon">🤍</span>
          <h3>Belum Ada Resep Favorit yang Disimpan</h3>
          <p>
            Klik ikon hati pada kartu resep di halaman Beranda atau Eksplor Resep
            untuk menyimpannya ke koleksi pribadimu.
          </p>
          <Link to="/resep" className="btn btn-primary">
            🍲 Cari Resep Sekarang
          </Link>
        </div>
      ) : (
        <div className="meals-grid">
          {favorites.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
