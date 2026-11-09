/**
 * KOMPONEN REUSABLE: SearchBar (src/components/SearchBar.jsx)
 * - Menggunakan elemen <form>, <label>, <input>, dan <button> (Pertemuan 1 Slide 10)
 * - Menggunakan e.preventDefault() agar form tidak me-refresh halaman (Pertemuan 3 Slide 11)
 * - Memenuhi Syarat MVP #4: Fitur Interaktif (Search, Filter Kategori, dan Sorting)
 */
function SearchBar({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  categories,
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
}) {
  const quickKeywords = ['Chicken', 'Beef', 'Rice', 'Seafood', 'Pasta', 'Soup', 'Cake'];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchQuery);
  };

  return (
    <section className="search-filter-box" aria-label="Pencarian dan Filter Resep">
      {/* Form Pencarian */}
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-group">
          <label htmlFor="recipe-search" className="sr-only">
            Cari nama masakan atau bahan utama
          </label>
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input
            id="recipe-search"
            type="text"
            className="search-input"
            placeholder="Ketik menu (contoh: Chicken, Rendang, Pasta, Soup, Egg)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Cari Menu
        </button>

        {/* Dropdown Sorting (Fitur Interaktif Tambahan) */}
        <div className="sort-group">
          <label htmlFor="sort-select" className="sort-label">
            Urutkan:
          </label>
          <select
            id="sort-select"
            className="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="asc">Nama (A → Z)</option>
            <option value="desc">Nama (Z → A)</option>
          </select>
        </div>
      </form>

      {/* Kata Kunci Cepat */}
      <div className="quick-keywords">
        <span className="quick-label">Kata kunci populer:</span>
        {quickKeywords.map((kw) => (
          <button
            key={kw}
            type="button"
            className={`keyword-chip ${
              searchQuery.toLowerCase() === kw.toLowerCase() && !selectedCategory
                ? 'active'
                : ''
            }`}
            onClick={() => {
              onSearchChange(kw);
              onSearchSubmit(kw);
            }}
          >
            {kw}
          </button>
        ))}
      </div>

      {/* Filter Kategori dari API */}
      <div className="category-filter-bar">
        <span className="quick-label">Filter Kategori API:</span>
        <div className="category-pills">
          <button
            type="button"
            className={`category-pill ${selectedCategory === '' ? 'active' : ''}`}
            onClick={() => onSelectCategory('')}
          >
            Semua Hasil Pencarian
          </button>
          {categories.slice(0, 10).map((cat) => (
            <button
              key={cat.idCategory || cat.strCategory}
              type="button"
              className={`category-pill ${
                selectedCategory === cat.strCategory ? 'active' : ''
              }`}
              onClick={() => onSelectCategory(cat.strCategory)}
            >
              {cat.strCategory}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
