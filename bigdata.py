import pandas as pd

# 1. Observasi & Load Dataset
df = pd.read_csv("TotalPopulationByBroadAgeGroupAndSexAtEndJuneAnnual.csv")

# 2. Data Cleaning: Menghilangkan spasi berlebih (leading spaces) pada nilai kolom DataSeries 
df['DataSeries'] = df['DataSeries'].str.strip()

# 3. Data Wrangling: Memetakan baris menjadi kolom 'Jenis Kelamin'
# Baris 0-3 adalah Total, 4-7 adalah Male, 8-11 adalah Female
df['Jenis Kelamin'] = ['Total']*4 + ['Male']*4 + ['Female']*4

# 4. FILTERING: Membuang baris agregat bawaan ('Total') dan hanya mengambil data Male & Female,
# serta memfilter (loc/isin) agar hanya menganalisis kelompok umur Anak dan Lansia
df_filtered = df[(df['Jenis Kelamin'].isin(['Male', 'Female'])) & 
                 (df['DataSeries'].isin(['0 - 14 Years', '65 Years & Over']))].copy()

# 5. AGGREGATION 1: Melakukan agregasi (mean) secara horizontal untuk 5 tahun terakhir
tahun_analisis = ['2020', '2021', '2022', '2023', '2024']
df_filtered['Rata_rata_5_Tahun'] = df_filtered[tahun_analisis].mean(axis=1)

# 6. AGGREGATION 2: Menggunakan groupby untuk meringkas dan mendemonstrasikan hasil akhir
tabel_hasil = df_filtered.groupby(['DataSeries', 'Jenis Kelamin'])['Rata_rata_5_Tahun'].sum().reset_index()
tabel_hasil.columns = ['Kelompok Umur', 'Jenis Kelamin', 'Rata-rata Populasi (2020-2024)']

print(tabel_hasil)

# 7. VISUALIZATION: Membuat grafik batang dan menyimpannya sebagai gambar
import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(8, 6))
tabel_pivot = tabel_hasil.pivot(index='Kelompok Umur', columns='Jenis Kelamin', values='Rata-rata Populasi (2020-2024)')
tabel_pivot.plot(kind='bar', ax=ax)
plt.title('Rata-rata Populasi (2020-2024)')
plt.ylabel('Rata-rata Populasi')
plt.xticks(rotation=0)
plt.tight_layout()
plt.savefig('output.png')
print("\nGambar berhasil disimpan sebagai output.png")