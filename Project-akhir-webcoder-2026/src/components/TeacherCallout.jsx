/**
 * KOMPONEN REUSABLE: TeacherCallout (src/components/TeacherCallout.jsx)
 * - Mendemonstrasikan konsep Nested Component dengan prop `children` (Pertemuan 4 Slide 16)
 * - Hanya tampil ketika `show` (teacherMode) bernilai true.
 * - Membantu pengurus menjelaskan hubungan antara tampilan web dan kriteria penilaian modul.
 */
function TeacherCallout({ show, badge, title, children }) {
  if (!show) return null;

  return (
    <aside className="teacher-callout" aria-label="Catatan Bedah Kriteria">
      <div className="teacher-callout-header">
        <span className="teacher-badge">🎓 {badge}</span>
        <strong className="teacher-title">{title}</strong>
      </div>
      <div className="teacher-callout-body">{children}</div>
    </aside>
  );
}

export default TeacherCallout;
