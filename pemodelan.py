import matplotlib.pyplot as plt
import numpy as np
from scipy.interpolate import PchipInterpolator

# =====================================
# DATA
# =====================================
# Rentang umur korban/pasien
kelompok_usia = [
    '0–4', '5–14', '15–24', '25–34',
    '35–44', '45–54', '55–64', '>= 65'
]

# Jumlah kasus TBC (dalam ribuan) sebagai kejadian acak
jumlah_kasus = [
    35, 40, 75, 90,
    110, 125, 100, 70
]

posisi_x = list(range(len(kelompok_usia)))
lebar_bar = 0.95

# =====================================
# KURVA DISTRIBUSI
# =====================================
# Menggunakan PchipInterpolator agar kurva melewati titik data dengan mulus
kurva = PchipInterpolator(posisi_x, jumlah_kasus)
x = np.linspace(min(posisi_x), max(posisi_x), 500)
y = kurva(x)

# =====================================
# PLOT
# =====================================
fig, ax = plt.subplots(figsize=(10, 6))

# Membuat Histogram (Bar Chart)
bars = ax.bar(
    posisi_x, jumlah_kasus,
    width=lebar_bar,
    color='lightcoral', edgecolor='firebrick',
    label='Data Kasus (Ribuan)'
)

# Membuat kurva garis merah
ax.plot(x, y, color='darkblue', linewidth=2.5, label='Kurva Distribusi')
# Menambahkan titik pada kurva
ax.scatter(posisi_x, jumlah_kasus, color='darkblue', s=30, zorder=3)

# Menambahkan angka di atas setiap bar
for bar, value in zip(bars, jumlah_kasus):
    ax.text(
        bar.get_x() + bar.get_width() / 2,
        bar.get_height() + 2,
        str(value),
        ha='center',
        fontsize=10
    )

# Pengaturan Sumbu
ax.set_xticks(posisi_x)
ax.set_xticklabels(kelompok_usia, fontsize=9)

ax.set_xlabel('Kelompok Umur')
ax.set_ylabel('Jumlah Kasus (dalam Ribuan)')
ax.set_title(
    'Kemenkes: Penyebaran Kasus TBC di Indonesia Berdasarkan\n'
    'Kelompok Umur (Kejadian Acak)'
)

# Menampilkan legenda dan grid
ax.legend()
ax.grid(axis='y', alpha=0.3)
ax.margins(x=0.02)

# Render plot
plt.tight_layout()
plt.show()