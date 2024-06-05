export function validateForm(data) {
  let isValid = true;

  // Clear previous error messages
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  document.querySelectorAll('input, select, textarea').forEach(el => el.classList.remove('error'));

  // Validate NISN
  const nisn = data.nisn;
  if (!nisn.match(/^[0-9]+$/)) {
    isValid = false;
    document.getElementById('nisn').classList.add('error');
    document.getElementById('nisnError').textContent = 'NISN hanya boleh diisi dengan angka.';
  }

  // Validate Nama Siswa
  const namaSiswa = data.nama_siswa;
  if (namaSiswa.trim() === '') {
    isValid = false;
    document.getElementById('nama_siswa').classList.add('error');
    document.getElementById('namaSiswaError').textContent = 'Nama lengkap wajib diisi.';
  }

  // Validate Tanggal Lahir
  const tanggalLahir = data.tanggal_lahir;
  if (tanggalLahir === '') {
    isValid = false;
    document.getElementById('tanggal_lahir').classList.add('error');
    document.getElementById('tanggalLahirError').textContent = 'Tanggal lahir wajib diisi.';
  }

  // Validate Jenis Kelamin
  const jenisKelamin = data.jenis_kelamin;
  if (jenisKelamin === '') {
    isValid = false;
    document.getElementById('jenis_kelamin').classList.add('error');
    document.getElementById('jenisKelaminError').textContent = 'Jenis kelamin wajib dipilih.';
  }

  // Validate NPSN
  const npsn = data.npsn;
  if (!npsn.match(/^[0-9]+$/)) {
    isValid = false;
    document.getElementById('npsn').classList.add('error');
    document.getElementById('npsnError').textContent = 'NPSN hanya boleh diisi dengan angka.';
  }

  // Validate Asal Sekolah
  const asalSekolah = data.asal_sekolah;
  if (asalSekolah.trim() === '') {
    isValid = false;
    document.getElementById('asal_sekolah').classList.add('error');
    document.getElementById('asalSekolahError').textContent = 'Asal sekolah wajib diisi.';
  }

  // Validate Jurusan
  const jurusan = data.jurusan;
  if (jurusan === '') {
    isValid = false;
    document.getElementById('jurusan').classList.add('error');
    document.getElementById('jurusanError').textContent = 'Jurusan wajib dipilih.';
  }

  // Validate Kota/Kabupaten
  const kotaKabupaten = data.kota_kabupaten;
  if (kotaKabupaten === '') {
    isValid = false;
    document.getElementById('kota_kabupaten').classList.add('error');
    document.getElementById('kotaKabupatenError').textContent = 'Kota/Kabupaten wajib dipilih.';
  }

  // Validate Alamat Rumah
  const alamatRumah = data.alamat_rumah;
  if (alamatRumah.trim() === '') {
    isValid = false;
    document.querySelector('textarea[name="alamat_rumah"]').classList.add('error');
    document.getElementById('alamatRumahError').textContent = 'Alamat rumah wajib diisi.';
  }

  // Validate Nomor Handphone
  const nomorHandphone = data.nomor_handphone;
  if (!nomorHandphone.match(/^[0-9]+$/)) {
    isValid = false;
    document.getElementById('nomor_handphone').classList.add('error');
    document.getElementById('nomorHandphoneError').textContent = 'Nomor handphone hanya boleh diisi dengan angka.';
  }

  // Validate Email
  const email = data.email;
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    isValid = false;
    document.getElementById('email').classList.add('error');
    document.getElementById('emailError').textContent = 'Email tidak valid.';
  }

  return isValid;
}