total_mahasiswa = 30
hitung = 1
daftar_hasil = []

while hitung <= total_mahasiswa:
    # Menggunakan .format() agar aman di semua versi Python.
    pesan_input = "Masukkan nilai Mahasiswa ke-{}: ".format(hitung)
    nilai = float(input(pesan_input))
    
    if 0 <= nilai <= 40:
        huruf = "E"
    elif 41 <= nilai <= 60:
        huruf = "D"
    elif 61 <= nilai <= 70:
        huruf = "C"
    elif 71 <= nilai <= 90:
        huruf = "B"
    elif 91 <= nilai <= 100:
        huruf = "A"
    else:
        print("Nilai salah! Harus 0-100.")
        continue

    daftar_hasil.append([hitung, huruf])
    hitung += 1

print("\nHASIL KONVERSI NILAI:")
for data in daftar_hasil:
    # Menggunakan %s untuk menggabungkan teks dan variabel secara universal
    print("mahasiswa ke %s mendapatkan huruf %s" % (data[0], data[1]))