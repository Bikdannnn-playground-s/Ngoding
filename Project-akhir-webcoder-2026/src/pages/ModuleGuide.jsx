import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MODULE_OVERVIEW,
  LEARNING_OBJECTIVES,
  MEETINGS_RECAP,
  MVP_REQUIREMENTS,
  BONUS_FEATURES,
  SCOPE_MANAGEMENT,
  THEMES_AND_APIS,
  BEGINNER_APIS,
  TIMELINE_12_DAYS,
  SCORING_RUBRIC,
  AWARDS_LIST,
  TEAM_ROLES,
  GROUPS_DATA,
  SUBMISSION_CHECKLIST,
} from '../services/moduleData';

/**
 * HALAMAN 5: Portal Panduan & Kriteria Modul Project Akhir (src/pages/ModuleGuide.jsx)
 * - Halaman khusus bagi Pengurus (Koordinator & PIC Showcase) untuk memperkenalkan
 *   seluruh isi Modul Project Akhir Divisi Website Coder Institute HMIF FT-UH secara visual.
 * - Dilengkapi Interactive Checklist Pengumpulan (tersimpan di localStorage) dan
 *   Tombol Salin Template Daily Update & README.
 */
function ModuleGuide() {
  const [activeTab, setActiveTab] = useState('kriteria');
  const [checkedItems, setCheckedItems] = useState(() => {
    try {
      const saved = localStorage.getItem('coder_submission_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [copiedText, setCopiedText] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(
        'coder_submission_checklist',
        JSON.stringify(checkedItems)
      );
    } catch {
      // Abaikan jika storage penuh
    }
  }, [checkedItems]);

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = SUBMISSION_CHECKLIST.filter(
    (item) => checkedItems[item.id]
  ).length;

  const handleCopy = (label, text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  const dailyStandupTemplate = `[Kelompok X - Nama Kelompok] — Hari ke-4
Kemarin: Selesai setup Vite, React Router 3 halaman, dan deploy awal ke Vercel.
Hari ini: Membuat fungsi fetch API di folder services/ dan merapikan komponen Card.
Kendala: Belum ada / Sedang memperbaiki tampilan responsive di layar HP.`;

  return (
    <div className="container section">
      {/* HEADER MODUL */}
      <div className="guide-hero-banner">
        <div className="guide-hero-top">
          <span className="badge badge-accent">
            📘 Buku Saku &amp; Materi Kickoff Resmi
          </span>
          <span className="guide-meta-pill">
            Durasi: 12 Hari (3 – 15 Nov 2026)
          </span>
        </div>

        <h1 className="guide-main-title">{MODULE_OVERVIEW.title}</h1>
        <p className="guide-main-subtitle">{MODULE_OVERVIEW.subtitle}</p>

        <blockquote className="guide-quote">
          &ldquo;{MODULE_OVERVIEW.goal}&rdquo;
        </blockquote>

        <div className="guide-organizers-bar">
          <div className="org-item">
            <span className="org-label">Koordinator Divisi Website</span>
            <strong>{MODULE_OVERVIEW.coordinator}</strong>
          </div>
          <div className="org-item">
            <span className="org-label">PIC Showcase Website Coder</span>
            <strong>
              {MODULE_OVERVIEW.picShowcase} ({MODULE_OVERVIEW.picPhone})
            </strong>
          </div>
          <div className="org-item">
            <span className="org-label">Peserta &amp; Pembagian</span>
            <strong>6 Kelompok (3–5 Orang / Tim)</strong>
          </div>
        </div>
      </div>

      {/* NAVIGASI TAB MODUL */}
      <div className="guide-tabs" role="tablist">
        <button
          type="button"
          className={`guide-tab-btn ${activeTab === 'kriteria' ? 'active' : ''}`}
          onClick={() => setActiveTab('kriteria')}
        >
          1. Aturan &amp; Kriteria MVP
        </button>
        <button
          type="button"
          className={`guide-tab-btn ${activeTab === 'tema' ? 'active' : ''}`}
          onClick={() => setActiveTab('tema')}
        >
          2. Tema &amp; Pilihan API
        </button>
        <button
          type="button"
          className={`guide-tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          3. Timeline 12 Hari &amp; Standup
        </button>
        <button
          type="button"
          className={`guide-tab-btn ${activeTab === 'penilaian' ? 'active' : ''}`}
          onClick={() => setActiveTab('penilaian')}
        >
          4. Penilaian, Showcase &amp; Kelompok
        </button>
        <button
          type="button"
          className={`guide-tab-btn ${activeTab === 'teknis' ? 'active' : ''}`}
          onClick={() => setActiveTab('teknis')}
        >
          5. Git, Starter Code &amp; Checklist ({completedCount}/
          {SUBMISSION_CHECKLIST.length})
        </button>
      </div>

      {/* =====================================================================
          TAB 1: ATURAN, REKAP PERTEMUAN 1-6, & KRITERIA MVP
      ===================================================================== */}
      {activeTab === 'kriteria' && (
        <div className="guide-tab-content">
          {/* Learning Objectives & Tech Stack Wajib */}
          <div className="guide-two-col">
            <div className="guide-card">
              <h2>🎯 Learning Objective (Bagian 2)</h2>
              <p className="card-sub">
                Setelah menyelesaikan project akhir ini, kamu mampu:
              </p>
              <ol className="guide-ordered-list">
                {LEARNING_OBJECTIVES.map((obj, idx) => (
                  <li key={idx}>{obj}</li>
                ))}
              </ol>
            </div>

            <div className="guide-card">
              <h2>🛠️ Tech Stack Wajib (Bagian 4.1)</h2>
              <ul className="guide-check-list">
                <li>
                  <strong>React dengan Vite:</strong>{' '}
                  <code>npm create vite@latest nama-app -- --template react</code>
                </li>
                <li>
                  <strong>React Router:</strong> Untuk navigasi multi-halaman (SPA)
                </li>
                <li>
                  <strong>Public API:</strong> Sebagai sumber data (tidak wajib buat
                  backend sendiri)
                </li>
                <li>
                  <strong>Styling Bebas:</strong> CSS biasa (seperti di web contoh
                  ini) atau library seperti Tailwind CSS
                </li>
                <li>
                  <strong>Version Control:</strong> Git + GitHub (Branch &amp; Pull
                  Request)
                </li>
                <li>
                  <strong>Deploy Publik:</strong> Vercel atau Netlify
                </li>
              </ul>
            </div>
          </div>

          {/* 7 SYARAT MINIMUM (MVP) */}
          <div className="guide-card">
            <div className="section-header">
              <div>
                <span className="section-eyebrow">Bagian 4.2 Modul</span>
                <h2>✅ 7 Syarat Minimum (MVP) — Definisi &ldquo;Berhasil&rdquo;</h2>
              </div>
              <Link to="/resep" className="btn btn-primary btn-sm">
                Lihat Contoh Implementasinya di DapurKanda →
              </Link>
            </div>
            <p className="card-sub">
              Kelompok dianggap <strong>berhasil/lulus</strong> jika memenuhi
              semua 7 poin berikut:
            </p>

            <div className="mvp-grid">
              {MVP_REQUIREMENTS.map((item) => (
                <div key={item.id} className="mvp-item-card">
                  <div className="mvp-item-top">
                    <span className="mvp-badge">Syarat #{item.id}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                  <div className="mvp-example-note">
                    <strong>Contoh di Web Ini:</strong> {item.implementedHere}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FITUR BONUS & MANAJEMEN SCOPE (MUST / SHOULD / COULD) */}
          <div className="guide-two-col">
            <div className="guide-card">
              <h2>🌟 Fitur Bonus Opsional (+10% Nilai)</h2>
              <p className="card-sub">
                <em>
                  Penting: Jangan mengerjakan bonus sebelum 7 syarat MVP selesai
                  dan sudah live!
                </em>
              </p>
              <div className="bonus-list">
                {BONUS_FEATURES.map((bf, i) => (
                  <div key={i} className="bonus-row">
                    <div>
                      <strong>{bf.title}</strong>
                      <p>{bf.desc}</p>
                    </div>
                    <span className="badge badge-category">{bf.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="guide-card">
              <h2>⚖️ Manajemen Scope: Must, Should, Could (Bagian 12)</h2>
              <p className="card-sub">
                Waktu 12 hari itu singkat. Kunci selesai tepat waktu adalah{' '}
                <strong>berani memotong fitur</strong>. Lebih baik fitur sedikit
                tapi jalan, daripada banyak tapi rusak!
              </p>
              <div className="scope-stack">
                {SCOPE_MANAGEMENT.map((sc) => (
                  <div key={sc.category} className={`scope-box ${sc.badgeColor}`}>
                    <div className="scope-head">
                      <strong>{sc.category}</strong>
                      <span>{sc.meaning}</span>
                    </div>
                    <p>{sc.examples}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* REKAP HUBUNGAN PERTEMUAN 1-6 DENGAN PROJECT AKHIR */}
          <div className="guide-card">
            <h2>🔗 Bagaimana Materi Pertemuan 1–6 Dipakai di Project Ini?</h2>
            <p className="card-sub">
              Semua materi yang sudah kamu pelajari dari Pertemuan 1 sampai 6
              langsung terpakai di project akhir ini:
            </p>
            <div className="meetings-grid">
              {MEETINGS_RECAP.map((m) => (
                <div key={m.pertemuan} className="meeting-card">
                  <span className="meeting-tag">{m.pertemuan}</span>
                  <h3>{m.topik}</h3>
                  <p className="meeting-poin">{m.poin}</p>
                  <div className="meeting-apply">
                    <strong>Dipakai untuk:</strong> {m.dipakaiDiProject}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LARANGAN (Bagian 4.4) */}
          <div className="guide-card danger-border">
            <h2>🚫 Larangan Keras (Bagian 4.4)</h2>
            <ul className="guide-danger-list">
              <li>
                <strong>Menyalin project orang lain secara utuh.</strong> Boleh
                belajar dari referensi/template ini, tapi karya harus buatan
                kelompok sendiri.
              </li>
              <li>
                <strong>Meng-upload API key atau password ke GitHub.</strong>{' '}
                Simpan di file <code>.env</code> dan pastikan <code>.env</code>{' '}
                ada di dalam <code>.gitignore</code>.
              </li>
              <li>
                <strong>Satu orang mengerjakan semuanya.</strong> Kontribusi tiap
                anggota dinilai dari riwayat commit &amp; Pull Request di GitHub.
              </li>
              <li>
                <strong>
                  Memakai konten SARA, pornografi, atau melanggar hak cipta.
                </strong>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 2: TEMA & PILIHAN PUBLIC API
      ===================================================================== */}
      {activeTab === 'tema' && (
        <div className="guide-tab-content">
          <div className="guide-card">
            <h2>🎨 3 Pilihan Tema Project (Bagian 5)</h2>
            <p className="card-sub">
              Kamu bebas menentukan produknya, tapi pilih <strong>salah satu tema</strong>{' '}
              berikut agar kelompokmu fokus dan tidak bingung memulai:
            </p>

            <div className="themes-grid">
              {THEMES_AND_APIS.map((t) => (
                <div key={t.code} className="theme-card">
                  <span className="badge badge-accent">{t.code}</span>
                  <h3>{t.name}</h3>
                  <p>{t.ideas}</p>
                  <div className="theme-apis">
                    <strong>API yang cocok:</strong>{' '}
                    {t.recommendedApis.map((api) => (
                      <span key={api} className="tag-pill">
                        {api}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="guide-card">
            <h2>🔌 Daftar Public API yang Ramah Pemula</h2>
            <p className="card-sub">
              <strong>Wajib dicek sebelum memilih:</strong> Tes dulu endpoint-nya
              di <strong>Postman / Thunder Client</strong> (seperti materi
              Pertemuan 6) dan baca dokumentasinya!
            </p>

            <div className="table-responsive">
              <table className="ingredients-table">
                <thead>
                  <tr>
                    <th>Nama Public API</th>
                    <th>Cocok Untuk Produk</th>
                    <th>Catatan Autentikasi</th>
                    <th>Dokumentasi</th>
                  </tr>
                </thead>
                <tbody>
                  {BEGINNER_APIS.map((api) => (
                    <tr key={api.name}>
                      <td>
                        <strong>{api.name}</strong>
                      </td>
                      <td>{api.useCase}</td>
                      <td>
                        <span className="measure-pill">{api.note}</span>
                      </td>
                      <td>
                        <a
                          href={api.url}
                          target="_blank"
                          rel="noreferrer"
                          className="table-link"
                        >
                          Buka Docs ↗
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 3: TIMELINE 12 HARI & MEKANISME KERJA TIM
      ===================================================================== */}
      {activeTab === 'timeline' && (
        <div className="guide-tab-content">
          <div className="guide-card">
            <h2>📅 Timeline 12 Hari Kerja Mandiri (Bagian 7 &amp; 19)</h2>
            <p className="card-sub">
              Karena kerja mandiri jarak jauh, ada titik kontrol (
              <em>checkpoint</em>) tertulis yang dikumpulkan sesuai jadwal berikut:
            </p>

            <div className="timeline-list">
              {TIMELINE_12_DAYS.map((item) => (
                <div key={item.day} className="timeline-item">
                  <div className="timeline-badge">
                    <strong>{item.day}</strong>
                    <span>{item.date}</span>
                  </div>
                  <div className="timeline-body">
                    <h3>{item.focus}</h3>
                    <p>
                      <strong>Output Wajib:</strong> {item.output}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="guide-two-col">
            <div className="guide-card">
              <h2>💬 Format Daily Update Wajib (Bagian 8.1)</h2>
              <p className="card-sub">
                Setiap hari, satu perwakilan kelompok (bergantian) wajib mengirim
                update singkat 3 kalimat di grup divisi:
              </p>
              <pre className="code-block">{dailyStandupTemplate}</pre>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => handleCopy('standup', dailyStandupTemplate)}
              >
                {copiedText === 'standup'
                  ? '✅ Template Daily Update Tersalin!'
                  : '📋 Salin Format Daily Update'}
              </button>
            </div>

            <div className="guide-card">
              <h2>🙋 Cara Meminta Bantuan &amp; Office Hours (Bagian 8.3–8.4)</h2>
              <p className="card-sub">
                <strong>Prinsip Anti-Macet:</strong> Kalau stuck lebih dari 1 jam
                pada masalah yang sama, segera tanyakan di grup dengan menyiapkan 4
                hal ini:
              </p>
              <ol className="guide-ordered-list">
                <li>Apa yang ingin dicapai?</li>
                <li>Apa yang sudah dicoba?</li>
                <li>
                  Pesan error di <strong>Console</strong> (teks merah, klik kanan
                  &gt; Inspect &gt; Console) dalam bentuk teks atau screenshot.
                </li>
                <li>Link repo GitHub atau potongan kode terkait.</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 4: PENILAIAN, SHOWCASE & PEMBAGIAN KELOMPOK
      ===================================================================== */}
      {activeTab === 'penilaian' && (
        <div className="guide-tab-content">
          {/* Komponen Nilai Kelompok */}
          <div className="guide-card">
            <h2>📊 Sistem Penilaian Kelompok &amp; Individu (Bagian 13)</h2>
            <p className="card-sub">
              Nilai kelompok dihitung dari 5 komponen utama (100%) + Fitur Bonus
              (+10%). Nilai individu juga mempertimbangkan <strong>riwayat commit GitHub</strong>{' '}
              dan <strong>Peer Review</strong> agar tidak ada yang &ldquo;numpang
              nama&rdquo;.
            </p>

            <div className="table-responsive">
              <table className="ingredients-table">
                <thead>
                  <tr>
                    <th>Aspek Penilaian</th>
                    <th>Bobot</th>
                    <th>Detail yang Dinilai saat Showcase</th>
                  </tr>
                </thead>
                <tbody>
                  {SCORING_RUBRIC.map((row) => (
                    <tr key={row.aspect}>
                      <td>
                        <strong>{row.aspect}</strong>
                      </td>
                      <td>
                        <span className="badge badge-category">{row.weight}</span>
                      </td>
                      <td>{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Format Showcase & Penghargaan */}
          <div className="guide-two-col">
            <div className="guide-card">
              <h2>🎤 Format Sesi Showcase — 13 Menit/Tim (Bagian 14)</h2>
              <p className="card-sub">
                Terdiri dari <strong>5 menit Presentasi</strong> +{' '}
                <strong>5 menit Demo Live URL</strong> +{' '}
                <strong>3 menit Tanya Jawab</strong>:
              </p>
              <ol className="guide-ordered-list">
                <li>
                  <strong>Masalah &amp; Ide (1 menit):</strong> Apa yang kalian
                  buat dan kenapa masalah itu penting?
                </li>
                <li>
                  <strong>Solusi &amp; Fitur Utama (1 menit):</strong> Gambaran
                  produk sebelum didemokan.
                </li>
                <li>
                  <strong>Tech &amp; Pembagian Peran (1 menit):</strong> API apa
                  yang dipakai dan siapa mengerjakan bagian mana.
                </li>
                <li>
                  <strong>Tantangan &amp; Solusi (1,5 menit):</strong> Bug paling
                  menyebalkan yang berhasil diatasi tim.
                </li>
                <li>
                  <strong>Penutup &amp; Demo Live URL (5,5 menit):</strong> Buka
                  Live URL (bukan localhost!), tunjukkan alur utama, fitur
                  interaktif, dan tampilan responsive di HP.
                </li>
              </ol>
            </div>

            <div className="guide-card">
              <h2>🏆 6 Kategori Penghargaan Showcase</h2>
              <p className="card-sub">
                Setiap kelompok punya peluang memenangkan penghargaan berikut:
              </p>
              <div className="awards-grid">
                {AWARDS_LIST.map((aw) => (
                  <div key={aw.title} className="award-box">
                    <span className="award-icon">{aw.icon}</span>
                    <div>
                      <strong>{aw.title}</strong>
                      <p>{aw.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pembagian Peran & Daftar 6 Kelompok */}
          <div className="guide-card">
            <h2>👥 Pembagian Peran Tim &amp; Daftar 6 Kelompok (Bagian 6 &amp; Lampiran)</h2>
            <p className="card-sub">
              Pembagian peran bersifat fleksibel, tetapi{' '}
              <strong>semua anggota wajib ngoding dan punya commit nyata</strong>{' '}
              di repository GitHub:
            </p>

            <div className="roles-grid">
              {TEAM_ROLES.map((r) => (
                <div key={r.role} className="role-card">
                  <strong>{r.role}</strong>
                  <p>{r.focus}</p>
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
              Daftar Kelompok Project Akhir Divisi Website HMIF FT-UH:
            </h3>
            <div className="groups-grid">
              {GROUPS_DATA.map((grp) => (
                <div key={grp.name} className="group-card">
                  <h4>{grp.name}</h4>
                  <ol>
                    {grp.members.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 5: PANDUAN GIT, STARTER CODE & CHECKLIST PENGUMPULAN
      ===================================================================== */}
      {activeTab === 'teknis' && (
        <div className="guide-tab-content">
          <div className="guide-two-col">
            <div className="guide-card">
              <h2>🌿 Panduan Git &amp; Struktur Folder (Bagian 9)</h2>
              <p className="card-sub">
                Jangan push langsung kode yang belum dites ke <code>main</code>.
                Gunakan branch per fitur dan gabungkan lewat Pull Request (PR):
              </p>
              <pre className="code-block">{`# 1. Ambil update terbaru dari main
git checkout main
git pull origin main

# 2. Buat branch baru sesuai fiturmu
git checkout -b feat/halaman-detail

# 3. Simpan & commit dengan awalan jelas (feat:, fix:, style:, docs:)
git add .
git commit -m "feat: tambah tabel bahan di halaman detail"
git push origin feat/halaman-detail
# Lalu buat Pull Request (PR) di GitHub!`}</pre>

              <h3 style={{ marginTop: '1.25rem' }}>
                Struktur Folder yang Dipakai di Project Ini:
              </h3>
              <pre className="code-block">{`src/
├── components/  # Navbar.jsx, MealCard.jsx, SearchBar.jsx, Footer.jsx
├── pages/       # Home.jsx, ExploreRecipes.jsx, RecipeDetail.jsx, Favorites.jsx
├── services/    # mealService.js (fungsi fetch API terpisah & rapi)
├── App.jsx      # Konfigurasi React Router (<Routes> & <Route>)
├── App.css      # Styling layout, Flexbox, Grid, & Media Query
└── main.jsx     # Entry point React`}</pre>
            </div>

            <div className="guide-card">
              <h2>☑️ Interactive Checklist Pengumpulan (Bagian 16)</h2>
              <p className="card-sub">
                Centang poin di bawah ini untuk mengecek kesiapan kelompokmu
                sebelum hari Showcase (otomatis tersimpan di browsermu):
              </p>

              <div className="progress-bar-wrap">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: `${Math.round(
                      (completedCount / SUBMISSION_CHECKLIST.length) * 100
                    )}%`,
                  }}
                />
              </div>
              <p className="progress-label">
                Progress Kesiapan Showcase:{' '}
                <strong>
                  {completedCount} dari {SUBMISSION_CHECKLIST.length} syarat
                  terpenuhi
                </strong>
              </p>

              <div className="checklist-stack">
                {SUBMISSION_CHECKLIST.map((item) => (
                  <label key={item.id} className="checklist-row">
                    <input
                      type="checkbox"
                      checked={Boolean(checkedItems[item.id])}
                      onChange={() => toggleCheck(item.id)}
                    />
                    <span
                      className={checkedItems[item.id] ? 'checked-text' : ''}
                    >
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModuleGuide;
