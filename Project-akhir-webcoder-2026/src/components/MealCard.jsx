import { Link } from 'react-router-dom';

/**
 * KOMPONEN REUSABLE: MealCard (src/components/MealCard.jsx)
 * - Menggunakan tag <article> sesuai materi Semantic HTML (Pertemuan 1 Slide 9)
 * - Menerima data resep melalui Props dari Parent Component (Pertemuan 4 Slide 13)
 */
function MealCard({ meal, isFavorite, onToggleFavorite }) {
  return (
    <article className="meal-card">
      <div className="meal-card-image-wrap">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="meal-card-image"
          loading="lazy"
        />
        <div className="meal-card-badges">
          {meal.strCategory && (
            <span className="badge badge-category">{meal.strCategory}</span>
          )}
          {meal.strArea && (
            <span className="badge badge-area">📍 {meal.strArea}</span>
          )}
        </div>

        <button
          type="button"
          className={`fav-icon-btn ${isFavorite ? 'is-fav' : ''}`}
          onClick={() => onToggleFavorite(meal)}
          title={isFavorite ? 'Hapus dari Favorit' : 'Simpan ke Favorit'}
          aria-label={isFavorite ? 'Hapus dari Favorit' : 'Simpan ke Favorit'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="meal-card-body">
        <h3 className="meal-card-title">{meal.strMeal}</h3>

        {meal.strTags && (
          <div className="meal-card-tags">
            {meal.strTags
              .split(',')
              .slice(0, 3)
              .map((tag) => (
                <span key={tag} className="tag-pill">
                  #{tag.trim()}
                </span>
              ))}
          </div>
        )}

        <div className="meal-card-footer">
          <Link to={`/resep/${meal.idMeal}`} className="btn btn-primary btn-sm">
            Lihat Resep & Bahan →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default MealCard;
