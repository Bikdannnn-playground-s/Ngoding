import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TeacherCallout from '../components/TeacherCallout';
import { getMealById, extractIngredients } from '../services/mealService';

/**
 * HALAMAN 3: Detail Resep (src/pages/RecipeDetail.jsx)
 * - Menggunakan useParams() dari React Router untuk menangkap ID dari URL (/resep/:id)
 * - Menggunakan Semantic Tabel (<table>, <thead>, <tbody>, <tr>, <th>, <td>) sesuai Pertemuan 1 Bagian 3!
 * - Menyediakan tombol Simpan ke Favorit (localStorage - Fitur Bonus +10%)
 */
function RecipeDetail({ favorites, onToggleFavorite, teacherMode }) {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDetail() {
      setLoading(true);
      setError(null);
      try {
        const data = await getMealById(id);
        setMeal(data);
      } catch (err) {
        setError(err.message || 'Gagal memuat detail resep.');
      } finally {
        setLoading(false);
      }
    }
    fetchDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="container section">
        <div className="state-box loading-state-box">
          <div className="spinner" />
          <h3>Memuat takaran bahan &amp; langkah memasak...</h3>
          <p>Mengambil detail resep #{id} dari TheMealDB API.</p>
        </div>
      </div>
    );
  }

  if (error || !meal) {
    return (
      <div className="container section">
        <div className="state-box error-state-box" role="alert">
          <span className="state-icon">⚠️</span>
          <h3>Detail Resep Tidak Ditemukan</h3>
          <p>{error}</p>
          <Link to="/resep" className="btn btn-primary">
            ← Kembali ke Daftar Resep
          </Link>
        </div>
      </div>
    );
  }

  const ingredients = extractIngredients(meal);
  const isFav = favorites.some((item) => item.idMeal === meal.idMeal);
  const instructionSteps = meal.strInstructions
    ? meal.strInstructions
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter((s) => s.length > 2)
    : [];

  return (
    <div className="container section">
      {/* Breadcrumb Navigasi */}
      <div className="breadcrumb-bar">
        <Link to="/resep" className="back-link">
          ← Kembali ke Eksplor Resep
        </Link>
        <span className="breadcrumb-id">Endpoint: GET /lookup.php?i={meal.idMeal}</span>
      </div>

      <TeacherCallout
        show={teacherMode}
        badge="Syarat MVP #2 (Halaman Detail) & Pertemuan 1 (Tabel HTML)"
        title="Dynamic Routing dengan useParams() + Semantic Tabel Bahan"
      >
        <p>
          1. Halaman ini membaca parameter URL <code>/resep/:id</code> menggunakan{' '}
          <code>const &#123; id &#125; = useParams()</code> lalu mem-fetch detail
          spesifik resep tersebut.
          <br />
          2. Daftar takaran bahan di bawah menggunakan elemen{' '}
          <code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, dan{' '}
          <code>&lt;tbody&gt;</code> yang sudah dipelajari di{' '}
          <strong>Pertemuan 1 Bagian 3</strong>!
        </p>
      </TeacherCallout>

      {/* Bagian Atas: Gambar & Info Utama */}
      <article className="detail-hero-card">
        <div className="detail-image-col">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="detail-main-image"
          />
        </div>

        <div className="detail-info-col">
          <div className="detail-badges">
            {meal.strCategory && (
              <span className="badge badge-category">🍲 {meal.strCategory}</span>
            )}
            {meal.strArea && (
              <span className="badge badge-area">🌍 Khas {meal.strArea}</span>
            )}
            <span className="badge badge-id">ID #{meal.idMeal}</span>
          </div>

          <h1 className="detail-title">{meal.strMeal}</h1>

          {meal.strTags && (
            <div className="meal-card-tags" style={{ marginBottom: '1.25rem' }}>
              {meal.strTags.split(',').map((tag) => (
                <span key={tag} className="tag-pill">
                  #{tag.trim()}
                </span>
              ))}
            </div>
          )}

          <p className="detail-summary">
            Resep ini membutuhkan <strong>{ingredients.length} bahan masakan</strong>{' '}
            dan terbagi menjadi <strong>{instructionSteps.length} langkah</strong>{' '}
            memasak yang mudah diikuti di dapur kost.
          </p>

          <div className="detail-actions">
            <button
              type="button"
              onClick={() => onToggleFavorite(meal)}
              className={`btn ${isFav ? 'btn-fav-active' : 'btn-primary'}`}
            >
              {isFav
                ? '❤️ Tersimpan di Favorit (Klik untuk Hapus)'
                : '🤍 Simpan ke Favorit (localStorage)'}
            </button>

            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                ▶️ Tonton Video Tutorial YouTube ↗
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Bagian Bawah: Tabel Bahan & Langkah Memasak */}
      <div className="detail-content-grid">
        {/* Kolom Kiri: Tabel Bahan & Takaran (Materi Pertemuan 1 Bagian 3) */}
        <section className="detail-panel">
          <h2 className="panel-title">🛒 Tabel Bahan &amp; Takaran</h2>
          <p className="panel-subtitle">
            Siapkan bahan-bahan berikut sebelum mulai memasak:
          </p>

          <div className="table-responsive">
            <table className="ingredients-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Bahan</th>
                  <th>Takaran</th>
                </tr>
              </thead>
              <tbody>
                {ingredients.map((item) => (
                  <tr key={item.no}>
                    <td>{item.no}</td>
                    <td>
                      <strong>{item.name}</strong>
                    </td>
                    <td>
                      <span className="measure-pill">{item.measure}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Kolom Kanan: Instruksi / Cara Memasak */}
        <section className="detail-panel">
          <h2 className="panel-title">👨‍🍳 Langkah-Langkah Memasak</h2>
          <p className="panel-subtitle">
            Ikuti instruksi di bawah ini secara berurutan:
          </p>

          <div className="steps-list">
            {instructionSteps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{index + 1}</div>
                <p className="step-text">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default RecipeDetail;
