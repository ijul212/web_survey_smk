function Validation(values) {
    const errors = {};
  
    if (!values.nisn) {
      errors.nisn = 'NISN diperlukan.';
    }
  
    if (!values.nama_siswa) {
      errors.nama_siswa = 'Nama diperlukan.';
    }
  
    if (!values.tanggal_lahir) {
      errors.tanggal_lahir = 'Tanggal lahir diperlukan.';
    }
  
    if (!values.jenis_kelamin) {
      errors.jenis_kelamin = 'Jenis kelamin diperlukan.';
    }
  
    if (!values.npsn) {
      errors.npsn = 'NPSN diperlukan.';
    }
  
    if (!values.kota_kabupaten) {
      errors.kota_kabupaten = 'Kota/Kabupaten diperlukan.';
    }
  
    if (!values.asal_sekolah) {
      errors.asal_sekolah = 'Asal sekolah diperlukan.';
    }
  
    if (!values.jurusan) {
      errors.jurusan = 'Jurusan diperlukan.';
    }

    if (!values.jurusan_lainnya) {
      errors.jurusan_lainnya = 'Nama Wali diperlukan.';
    }
  
    if (!values.jurusan_lainnya) {
      errors.jurusan_lainnya = 'Jurusan lainnya diperlukan.';
    }
  
    if (!values.nomor_handphone) {
      errors.nomor_handphone = 'Nomor handphone diperlukan.';
    }
  
    if (!values.email) {
      errors.email = 'Email diperlukan.';
    }
  
    if (!values.alamat_rumah) {
      errors.alamat_rumah = 'Alamat rumah diperlukan.';
    }
    
    if (!values.nama_ayah) {
      errors.nama_ayah = 'Nama Ayah diperlukan.';
    }

    if (!values.pekerjaanAyah) {
      errors.pekerjaanAyah = 'Pekerjaan Ayah diperlukan.';
    }

    if (!values.pekerjaanAyahLainnya) {
      errors.pekerjaanAyahLainnya = 'Jurusan lainnya diperlukan.';
    }

    if (!values.gajiAyah) {
      errors.gajiAyah = 'Penghasilan Ayah diperlukan.';
    }

  // Validate mother's data
  if (!values.nama_ibu) {
    errors.nama_ibu = 'Nama Ibu diperlukan.';
  }

  if (!values.pekerjaanIbu) {
    errors.pekerjaanIbu = 'Pekerjaan Ibu diperlukan.';
  }

  if (values.pekerjaanIbu === 'Lainnya' && !values.pekerjaanIbuLainnya) {
    errors.pekerjaanIbuLainnya = 'Pekerjaan Ibu lainnya diperlukan.';
  }

  if (!values.gajiIbu) {
    errors.gajiIbu = 'Penghasilan Ibu diperlukan.';
  }

  // Validate number of siblings
  if (!values.jumlah_saudara) {
    errors.jumlah_saudara = 'Jumlah Saudara diperlukan.';
  }

  
  if (!values.nama_wali) {
    errors.nama_wali = 'Nama Wali diperlukan.';
  }
  
  if (!values.pekerjaanWali) {
    errors.pekerjaanWali = 'Pekerjaan Wali diperlukan.';
  }

  //Data Pendidikan 
  if (!values.tingkat_kejuaraan) {
    errors.tingkat_kejuaraan = 'Tingkat Kejuaraan diperlukan.';
  }

  if (!values.tingkat_lomba) {
    errors.tingkat_lomba = 'Tingkat Lomba diperlukan.';
  }
  
    return errors;
  }
  
  export default Validation;