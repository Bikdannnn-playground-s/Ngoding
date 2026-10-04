# Nama: M. Wildan Humaidi S. Budi
# NIM : D121241058
# Teknik Informatika Kelas A

import multiprocessing
import os
import time
import random

def proses_tugas(task_id, data_input, queue_hasil, os_lock):
    """
    Fungsi yang akan dijalankan oleh setiap Independent Process.
    """
    pid = os.getpid()
    # Mengunci terminal agar output print dari process lain tidak tumpang tindih
    with os_lock:
        # MENGGUNAKAN PRINT BIASA (Variabel dipisah dengan koma)
        print("[PROCESS", task_id, "] Dimulai pada PID:", pid, "dengan data awal:", data_input)
    
    # Menyimulasikan CPU-bound task dengan waktu acak
    waktu_proses = random.uniform(1.0, 3.0)
    time.sleep(waktu_proses)
    
    hasil_komputasi = data_input ** 2
    
    with os_lock:
        # MENGGUNAKAN PRINT BIASA (Variabel dipisah dengan koma, durasi dibulatkan dengan round)
        print("[PROCESS", task_id, "] Selesai dalam", round(waktu_proses, 2), "detik. Hasil:", hasil_komputasi)
    
    # Mengirimkan hasil kembali ke Main Process melalui Queue (IPC)
    queue_hasil.put({
        "task_id": task_id,
        "pid": pid,
        "hasil": hasil_komputasi,
        "durasi": waktu_proses
    })

if __name__ == "__main__":
    kumpulan_data = [12, 25, 42, 56, 78]
    daftar_proses = []
    
    queue_hasil = multiprocessing.Queue()
    os_lock = multiprocessing.Lock()
    
    # Print biasa untuk Main Process
    print("=== MAIN PROCESS (PID:", os.getpid(), ") Memulai Spawning Child Processes ===")
    waktu_mulai = time.time()
    
    for indeks, data in enumerate(kumpulan_data):
        proses = multiprocessing.Process(
            target=proses_tugas, 
            args=(indeks + 1, data, queue_hasil, os_lock)
        )
        daftar_proses.append(proses)
        proses.start()
        
    for proses in daftar_proses:
        proses.join()
        
    waktu_selesai = time.time()
    print("\n=== ALL CHILD PROCESSES FINISHED ===")
    # Print biasa untuk total waktu.
    print("Total waktu eksekusi paralel:", round(waktu_selesai - waktu_mulai, 2), "detik\n")
    
    print("=== MENAMPILKAN HASIL DARI IPC QUEUE ===")
    while not queue_hasil.empty():
        data_output = queue_hasil.get()
        # Print biasa untuk menampilkan hasil dari Queue dictionary.
        print("Task", data_output['task_id'], "(PID", data_output['pid'], ") -> Hasil kuadrat:", data_output['hasil'])