import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("TotalPopulationByBroadAgeGroupAndSexAtEndJuneAnnual.csv")

df['DataSeries'] = df['DataSeries'].str.strip()
df['Jenis Kelamin'] = ['Total']*4 + ['Male']*4 + ['Female']*4

df_filtered = df[(df['Jenis Kelamin'].isin(['Male', 'Female'])) & 
                 (df['DataSeries'].isin(['0 - 14 Years', '65 Years & Over']))].copy()
tahun_analisis = ['2020', '2021', '2022', '2023', '2024']
df_filtered['Rata_rata_5_Tahun'] = df_filtered[tahun_analisis].mean(axis=1)
tabel_hasil = df_filtered.groupby(['DataSeries', 'Jenis Kelamin'])['Rata_rata_5_Tahun'].sum().reset_index()
tabel_hasil.columns = ['Kelompok Umur', 'Jenis Kelamin', 'Rata-rata Populasi (2020-2024)']

print(tabel_hasil)

fig, ax = plt.subplots(figsize=(8, 6))
tabel_pivot = tabel_hasil.pivot(index='Kelompok Umur', columns='Jenis Kelamin', values='Rata-rata Populasi (2020-2024)')
tabel_pivot.plot(kind='bar', ax=ax)
plt.title('Rata-rata Populasi (2020-2024)')
plt.ylabel('Rata-rata Populasi')
plt.xticks(rotation=0)
plt.tight_layout()
plt.savefig('output.png')
print("\nGambar berhasil disimpan sebagai output.png")