function perhitunganGaji() {
    // Mendapatkan nilai input dari form
    const namaLengkap = document.getElementById('nama-lengkap').value;
    const nik = document.getElementById('NIK').value;
    const jumlahHariKerja = parseInt(document.getElementById('jumlah_hari_kerja').value);
    const jumlahJamLembur = parseInt(document.getElementById('jumlah_jam_lembur').value);

    // Cek jika input kosong atau tidak valid
    if (!namaLengkap || !nik || isNaN(jumlahHariKerja) || isNaN(jumlahJamLembur)) {
        alert("Harap isi semua data dengan benar.");
        return;
    }

    // Gaji pokok dan tarif lembur
    const gajiPokok = 150000; // Gaji pokok 150 ribu
    const lemburRate = 15000;  // Tarif lembur per jam

    // Menghitung total lembur
    const totalLembur = jumlahJamLembur * lemburRate;

    // Menghitung total gaji
    const totalGaji = gajiPokok + (jumlahHariKerja * totalLembur);

    // Mengarahkan ke halaman hasilgaji.html dengan query parameters
    window.location.href = `hasilgaji.html?nama=${encodeURIComponent(namaLengkap)}&nik=${encodeURIComponent(nik)}&totalGaji=${totalGaji}`;
}
