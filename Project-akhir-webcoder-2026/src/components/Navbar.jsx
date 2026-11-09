import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

/**
 * KOMPONEN REUSABLE: Navbar (src/components/Navbar.jsx)
 * - Menggunakan Semantic HTML <header> dan <nav> (Materi Pertemuan 1)
 * - Menerima Props dari App.jsx: darkMode, onToggleDark, teacherMode, onToggleTeacher, favoriteCount (Materi Pertemuan 4)
 * - Menggunakan React Router <NavLink> agar perpindahan halaman instan tanpa reload (SPA)
 */
function Navbar({
  darkMode,
  onToggleDark,
  teacherMode,
  onToggleTeacher,
  favoriteCount,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-wrapper">
      <nav className="container navbar" aria-label="Navigasi Utama">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <span className="brand-icon" aria-hidden="true">🍲</span>
          <div className="brand-text">
            <span className="brand-title">DapurKanda</span>
            <span className="brand-badge">Coder FT-UH Reference</span>
          </div>
        </Link>

        {/* Tombol Hamburger untuk Layar HP (Responsive Pertemuan 2) */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Buka atau tutup menu navigasi"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Daftar Menu Navigasi */}
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Beranda
          </NavLink>

          <NavLink
            to="/resep"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Eksplor Resep
          </NavLink>

          <NavLink
            to="/favorit"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Favoritku
            {favoriteCount > 0 && (
              <span className="fav-counter">{favoriteCount}</span>
            )}
          </NavLink>

          <NavLink
            to="/panduan"
            className={({ isActive }) =>
              `nav-item nav-guide-pill ${isActive ? 'active' : ''}`
            }
            onClick={closeMenu}
          >
            📘 Kriteria & Modul Project
          </NavLink>

          {/* Tombol Aksi: Mode Bedah Kriteria & Dark Mode */}
          <div className="navbar-actions">
            <button
              type="button"
              onClick={onToggleTeacher}
              className={`action-chip ${teacherMode ? 'chip-active' : ''}`}
              title="Tampilkan penjelasan kriteria MVP & konsep koding di setiap bagian halaman"
            >
              🎓 {teacherMode ? 'Bedah Kriteria: ON' : 'Bedah Kriteria: OFF'}
            </button>

            <button
              type="button"
              onClick={onToggleDark}
              className="theme-toggle-btn"
              title="Ubah Tema Terang / Gelap (Fitur Bonus +10%)"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
