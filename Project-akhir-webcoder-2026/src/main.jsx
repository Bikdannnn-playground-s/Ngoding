import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Sesuai Materi Pertemuan 4 Slide 8:
// Menampilkan Component utama ke dalam elemen #root menggunakan createRoot() dan render()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
