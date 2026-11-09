import { Link } from 'react-router-dom';

/**
 * KOMPONEN REUSABLE: Footer (src/components/Footer.jsx)
 * - Menggunakan tag semantic <footer> (Pertemuan 1 Slide 9)
 */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="brand-logo footer-brand">
            <span className="brand-icon" aria-hidden="true">🍲</span>
            <div className="brand-text">
              <span className="brand-title">DapurKanda</span>
              <span className="brand-badge">Coder Institute HMIF FT-UH</span>
            </div>
          </div>
          <p className="footer-desc">
            Website Percontohan (Reference Project) &amp; Portal Panduan Modul
            Project Akhir Divisi Website — Web Dev Bootcamp &amp; Showcase 2026.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigasi Aplikasi (MVP 3+ Halaman)</h4>
          <ul className="footer-links">
            <li><Link to="/">🏠 Beranda (Home)</Link></li>
            <li><Link to="/resep">🍲 Eksplor Resep (List &amp; Filter)</Link></li>
            <li><Link to="/resep/52803">📖 Contoh Detail Resep (/resep/:id)</Link></li>
            <li><Link to="/favorit">❤️ Koleksi Favorit (localStorage)</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Pengurus &amp; Sumber Data</h4>
          <ul className="footer-links">
            <li>Koordinator Website: <strong>Efraim Imanuel Parasak</strong></li>
            <li>PIC Showcase: <strong>Muh Yusuf Ma&apos;Ruf</strong></li>
            <li>
              Public API:{' '}
              <a
                href="https://www.themealdb.com/api.php"
                target="_blank"
                rel="noreferrer"
              >
                TheMealDB REST API ↗
              </a>
            </li>
            <li>
              <Link to="/panduan">📘 Buka Modul &amp; Kriteria Penilaian →</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; 2026 Coder Institute HMIF FT-UH (Universitas Hasanuddin). Dibuat
          dengan React (Vite), React Router, dan Vanilla CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
