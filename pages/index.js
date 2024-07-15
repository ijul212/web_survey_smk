import Head from "next/head";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Inter } from "next/font/google";
import Validation from "./validation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [jumlahSaudaraError, setJumlahSaudaraError] = useState(false);
  const [hasGuardian, setHasGuardian] = useState(null);
  const [participatedInCompetition, setParticipatedInCompetition] = useState(null);
  const surveySectionRef = useRef(null);
  const [continuingEducation, setContinuingEducation] = useState(null);
  const [competitionType, setCompetitionType] = useState("");
  const [subCompetitionType, setSubCompetitionType] = useState("");
  const [showOtherField, setShowOtherField] = useState(false);
  const [showOtherFieldYes, setShowOtherFieldYes] = useState(false);
  const [otherCompetitionType, setOtherCompetitionType] = useState("");
  const [gajiAyah, setGajiAyah] = useState("");
  const [gajiIbu, setGajiIbu] = useState("");
  const [gajiWali, setGajiWali] = useState("");
  const [participatedInOrganization, setParticipatedInOrganization] = useState("");
  const [selectedKampusCriteria, setSelectedKampusCriteria] = useState("");
  const [selectedPlan, setSelectedPlan] = useState([]);
  const [pekerjaanAyah, setPekerjaanAyah] = useState("");
  const [pekerjaanIbu, setPekerjaanIbu] = useState("");
  const [pekerjaanWali, setPekerjaanWali] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [showWorkField, setShowWorkField] = useState(false);
  const [showEntrepreneurField, setShowEntrepreneurField] = useState(false);
  const [jobField, setJobField] = useState("");
  const [businessField, setBusinessField] = useState("");
  const [otherJobField, setOtherJobField] = useState("");
  const [otherBusinessField, setOtherBusinessField] = useState("");
  

  const handleScroll = (event) => {
    event.preventDefault();
    surveySectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const isValid = handleValidation(values);
    if (isValid) {
      // Form is valid, submit the form
      console.log("Form submitted");
    } else {
      // Form is not valid, show errors
      console.log("Form is not valid");
    }

    // Check if 'jumlah_saudara' is filled
    if (!data.jumlah_saudara) {
      setJumlahSaudaraError(true);
      return;
    }

    setJumlahSaudaraError(false);
    console.log(data);
  };

  const handleCompetitionChange = (value) => {
    setParticipatedInCompetition(value === "YA");
    if (value === "Tidak") {
      setCompetitionType("");
      setSubCompetitionType("");
    }
    if (value === "YA") {
      setParticipatedInCompetition(
        participatedInCompetition === true ? null : true
      );
    } else if (value === "Tidak") {
      setParticipatedInCompetition(
        participatedInCompetition === false ? null : false
      );
    }
  };

  const handleEducationChange = (event) => {
    setContinuingEducation(event.target.value === "YA");
    setShowOtherField(false); // Reset "Lainnya" field when switching between YES and NO
    setShowOtherFieldYes(false); // Reset "Lainnya" field for YES option
    const value = event.target.value;
    if (value === "YA") {
      setContinuingEducation(continuingEducation === true ? null : true);
    } else if (value === "TIDAK") {
      setContinuingEducation(continuingEducation === false ? null : false);
    }
  };

  const handlePlanChange = (event) => {
    setShowOtherField(event.target.value === "Lainnya");

    const value = event.target.value;
    setSelectedPlan((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );

    // Show/Hide additional fields based on the selected plan
    if (value === "Lainnya") {
      setShowOtherField(!selectedPlan.includes(value));
    }
    if (value === "Berkerja") {
      setShowWorkField(!selectedPlan.includes(value));
    }
    if (value === "Beriwirausaha") {
      setShowEntrepreneurField(!selectedPlan.includes(value));
    }
  };

  const handleCampusCriteriaChange = (event) => {
    setShowOtherFieldYes(event.target.value === "Lainnya");

    const value = event.target.value;
    setSelectedKampusCriteria((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    const handlePenghasilanAyahChange = (event) => {
      document
        .querySelectorAll('input[type="checkbox"][name="penghasilan_ayah"]')
        .forEach((box) => {
          if (box !== event.target) box.checked = false;
        });
    };

    const handlePenghasilanIbuChange = (event) => {
      document
        .querySelectorAll('input[type="checkbox"][name="penghasilan_ibu"]')
        .forEach((box) => {
          if (box !== event.target) box.checked = false;
        });
    };

    const ayahCheckboxes = document.querySelectorAll(
      'input[type="checkbox"][name="penghasilan_ayah"]'
    );
    ayahCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", handlePenghasilanAyahChange);
    });

    const ibuCheckboxes = document.querySelectorAll(
      'input[type="checkbox"][name="penghasilan_ibu"]'
    );
    ibuCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", handlePenghasilanIbuChange);
    });

    return () => {
      ayahCheckboxes.forEach((checkbox) => {
        checkbox.removeEventListener("change", handlePenghasilanAyahChange);
      });
      ibuCheckboxes.forEach((checkbox) => {
        checkbox.removeEventListener("change", handlePenghasilanIbuChange);
      });
    };
  }, []);

  const handleCheckboxChange = (value) => {
    if (value === "YA") {
      setHasGuardian(true);
    } else {
      setHasGuardian(false);
    }
    setHasGuardian(value === "YA");
    setParticipatedInCompetition(value === "YA");

    if (value === "YA") {
      setHasGuardian(hasGuardian === true ? null : true);
    } else if (value === "TIDAK") {
      setHasGuardian(hasGuardian === false ? null : false);
    }

    if (selectedKampusCriteria === value) {
      setSelectedKampusCriteria(""); // Unclick the checkbox
    } else {
      setSelectedKampusCriteria(value); // Set the new value
    }
  };

  const handleGajiAyahChange = (value) => {
    setGajiAyah(value);
    setGajiAyah(gajiAyah === value ? "" : value);
  };

  const handleGajiIbuChange = (value) => {
    setGajiIbu(value);
    setGajiIbu(gajiIbu === value ? "" : value);
  };

  const handleGajiWaliChange = (value) => {
    setGajiWali(value);
    setGajiWali(gajiWali === value ? "" : value);
  };

  const handleCompetitionTypeChange = (value) => {
    setCompetitionType(value);
    setCompetitionType(competitionType === value ? "" : value);
  };

  const handleOrganizationChange = (value) => {
    setParticipatedInOrganization(value);
    if (participatedInOrganization === value) {
      setParticipatedInOrganization("");
    } else {
      setParticipatedInOrganization(value);
    }
  };

  const handlePekerjaanAyahChange = (event) => {
    setPekerjaanAyah(event.target.value);
  };

  const handlePekerjaanIbuChange = (event) => {
    setPekerjaanIbu(event.target.value);
  };

  const handlePekerjaanWaliChange = (event) => {
    setPekerjaanWali(event.target.value);
  };

  const handleJurusanChange = (event) => {
    setJurusan(event.target.value);
  };

  const handleJobFieldChange = (e) => {
    setJobField(e.target.value);
    if (e.target.value !== "Lainnya") {
      setOtherJobField("");
    }
  };

  const handleBusinessFieldChange = (e) => {
    setBusinessField(e.target.value);
    if (e.target.value !== "Lainnya") {
      setOtherBusinessField("");
    }
  };

  const handleOtherJobFieldChange = (e) => {
    setOtherJobField(e.target.value);
  };

  const handleOtherBusinessFieldChange = (e) => {
    setOtherBusinessField(e.target.value);
  };

  const [values, setValues] = useState({
    nisn: "",
    nama_siswa: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    npsn: "",
    asal_sekolah: "",
    jurusan: "",
    jurusan_lainnya: "",
    nomor_handphone: "",
    email: "",
    //Form Keluarga
    nama_ayah: "",
    pekerjaanAyah: "",
    pekerjaanAyahLainnya: "",
    penghasilan_ayah: "",
    nama_ibu: "",
    pekerjaan_ibu: "",
    pekerjaan_ibu_lainnya: "",
    penghasilan_ibu: "",
    jumlah_saudara: "",
    //FORM Wali
    nama_wali: "",
    //Form Pendidikan
    tingkat_lomba: "",
    tingkat_kejuaraan: "",
  });

  const [errors, setErrors] = useState({});

  function handleInput(event) {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function handleValidation(values) {
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; // Return true if no errors
  }

  function handleCombinedChange(event) {
    handleInput(event);
    handleJurusanChange(event);
  }

  function varPekerjaanAyah(event) {
    handleInput(event);
    handlePekerjaanAyahChange(event);
  }

  function varPekerjaanIbu(event) {
    handleInput(event);
    handlePekerjaanIbuChange(event);
  }

  function varPekerjaanWali(event) {
    handleInput(event);
    handlePekerjaanWaliChange(event);
  }
  const varAkademik = (event) => {
    handleInput(event);
    setSubCompetitionType(event.target.value);
    if (event.target.value !== "Lainnya") {
      setOtherCompetitionType("");
    }
  };

  return (
    <div
      className="relative h-full w-full flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(/survey-lulusan-sma/attachment-1714651450176.jpeg)",
      }}
    >
      <Head>
        <title>Survey Lulusan SMK</title>
      </Head>

      <div className="absolute top-0 right-0 bottom-0 left-0 opacity-70"></div>
      <main className="px-4 sm:px-6 lg:px-0 z-10">
        <div className="text-center flex flex-col justify-center bg-gray-900 items-center w-screen h-screen">
          <div
            className="relative text-center flex flex-col justify-center items-center w-screen h-screen"
            style={{
              backgroundImage: "url(/images/satemadura.jpg)", // Ubah background image di sini
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-0"></div>{" "}
            {/* Overlay hitam dengan opacity */}
            <div className="z-10">
              {" "}
              {/* Konten utama */}
              <div className="flex justify-center items-center mb-10">
                <Image
                  alt=""
                  fetchpriority="high"
                  width={150}
                  height={150}
                  decoding="async"
                  className="mb-10"
                  src="/images/LogoDisdik.png"
                />
              </div>
              <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
                <span className="text-[#0D9354] font-bold">Survey</span> Lulusan
                SMK
              </h2>
              <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                Kuisioner ini dapat memberikan wawasan mendalam tentang kualitas
                pendidikan yang disediakan oleh sekolah-sekolah di bawah
                yurisdiksinya dan mengidentifikasi area-area yang memerlukan
                perbaikan.
              </p>
              <div className="mt-5 sm:mt-8 flex justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    onClick={handleScroll}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-[#0D9354] hover:bg-[#0A7A45] focus:outline-none focus:border-[#0A7A45] focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:px-10"
                  >
                    Mulai Survey
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 py-10" ref={surveySectionRef}>
          <div className="flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="mt-8 text-white w-full max-w-4xl bg-white rounded shadow-lg p-8"
            >
              <div className="flex justify-start items-center mb-10">
                <Image
                  alt=""
                  fetchpriority="high"
                  width={50}
                  height={50}
                  decoding="async"
                  className="ml-7"
                  src="/images/LogoDisdik.png"
                />

                <h1 className="md:flex md:items-center sm:text-sm lg:text-3xl font-bold text-black ml-4">
                  Survey Lulusan SMK
                </h1>
              </div>

              <fieldset className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 max-w-screen-md mx-auto">
                <div>
                  <p className="font-semibold text-lg text-black">
                    Kuesioner ini diperuntukan untuk Kelas XII Tahun Ajaran
                    2023/2024
                  </p>
                  <p className="mt-5 text-lg text-black-500 flex items-center">
                    <span className="mr-2 font-semibold text-black">
                      A. DATA PRIBADI
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="nisn"
                      className="block text-left text-black"
                    >
                      NISN
                    </label>
                    <input
                      placeholder="Hanya boleh diisi dengan angka"
                      type="number"
                      id="nisn"
                      name="nisn"
                      onChange={handleInput}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                    />
                    {errors.nisn && (
                      <p className="text-red-500 text-left">{errors.nisn}</p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="nama_siswa"
                      className="block text-left text-black"
                    >
                      Nama Siswa:
                    </label>
                    <input
                      placeholder="Wajib mengisi nama lengkap"
                      type="text"
                      id="nama_siswa"
                      name="nama_siswa"
                      onChange={handleInput}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                    />

                    {errors.nama_siswa && (
                      <p className="text-red-500 text-left">{errors.nama_siswa}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="tanggal_lahir"
                      className="block text-left text-black"
                    >
                      Tanggal Lahir:
                    </label>
                    <input
                      type="date"
                      id="tanggal_lahir"
                      name="tanggal_lahir"
                      onChange={handleInput}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                    />
                    {errors.tanggal_lahir && (
                      <p className="text-red-500 text-left">{errors.tanggal_lahir}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="jenis_kelamin"
                      className="block text-left text-black"
                    >
                      Jenis Kelamin:
                    </label>
                    <select
                      id="jenis_kelamin"
                      name="jenis_kelamin"
                      onChange={handleInput}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                    >
                      <option value="">-- Pilih Jenis Kelamin --</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                    {errors.jenis_kelamin && (
                      <p className="text-red-500 text-left">{errors.jenis_kelamin}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="npsn"
                      className="block text-left text-black"
                    >
                      NPSN Asal Sekolah:
                    </label>
                    <input
                      type="number"
                      id="npsn"
                      name="npsn"
                      onChange={handleInput}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                    />
                    {errors.npsn && (
                      <p className="text-red-500 text-left">{errors.npsn}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="asal_sekolah"
                      className="block text-left text-black"
                    >
                      Asal Sekolah:
                    </label>
                    <input
                      type="text"
                      id="asal_sekolah"
                      name="asal_sekolah"
                      onChange={handleInput}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                    />
                    {errors.asal_sekolah && (
                      <p className="text-red-500 text-left">{errors.asal_sekolah}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="jurusan"
                      className="block text-left text-black"
                    >
                      Jurusan:
                    </label>
                    <select
                      id="jurusan"
                      name="jurusan"
                      onChange={handleCombinedChange}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                      value={jurusan}
                    >
                      <option value="">-- Pilih Jenis Jurusan --</option>
                      <option value="Akuntansi">Akuntansi</option>
                      <option value="Administrasi Perkantoran">Administrasi Perkantoran</option>
                      <option value="Desain Grafis / Multimedia">Desain Grafis / Multimedia</option>
                      <option value="Farmasi">Farmasi</option>
                      <option value="Keperawatan">Keperawatan</option>
                      <option value="Kimia Analisis">Kimia Analisis</option>
                      <option value="Teknik Logistik">Teknik Logistik</option>
                      <option value="Bisnis dan Pemasaran">Bisnis dan Pemasaran</option>
                      <option value="Pelayaran">Pelayaran</option>
                      <option value="Perhotelan">Perhotelan</option>
                      <option value="Perbankan dan Keuangan Syariah">Perbankan dan Keuangan Syariah</option>
                      <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
                      <option value="Tata Boga">Tata Boga</option>
                      <option value="Tata Busana">Tata Busana</option>
                      <option value="Tata Rias dan Kecantikan">Tata Rias dan Kecantikan</option>
                      <option value="Teknik Komputer Jaringan">Teknik Komputer Jaringan</option>
                      <option value="Teknik Kendaraan Ringan">Teknik Kendaraan Ringan</option>
                      <option value="Teknik Elektronika Industri">Teknik Elektronika Industri</option>
                      <option value="Teknik Gambar Bangunan">Teknik Gambar Bangunan</option>
                      <option value="Usaha Perjalanan Wisata">Usaha Perjalanan Wisata</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                    {/* Menampilkan pesan kesalahan jika jurusan tidak dipilih */}
                    {errors.jurusan && (
                      <p className="text-red-500 text-left">{errors.jurusan}</p>
                    )}

                    {/* Tampilkan input hanya jika jurusan yang dipilih adalah "Lainnya" */}
                    {jurusan === "Lainnya" && (
                      <input
                        placeholder="Jurusan Lainnya"
                        type="text"
                        name="jurusan_lainnya"
                        className="h-10 border mt-2 rounded px-4 w-full bg-gray-50 text-black"
                        onChange={handleInput} // tambahkan onChange handler untuk memperbarui state
                      />
                    )}

                    {/* Menampilkan pesan kesalahan jika jurusan "Lainnya" dipilih tetapi inputnya kosong */}
                    {jurusan === "Lainnya" && errors.jurusan_lainnya && (<p className="text-red-500 text-left">{errors.jurusan_lainnya}</p>)}
                  </div>

                  <div>
                    <label
                      htmlFor="kota_kabupaten"
                      className="block text-left text-black"
                    >
                      Kota/Kabupaten Sekolah Asal:
                    </label>
                    <select
                      id="kota_kabupaten"
                      name="kota_kabupaten"
                      onChange={handleInput}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                    >
                      <option value="">-- Pilih Kota/Kabupaten --</option>
                      <option value="kota_bandung">KOTA Bandung</option>
                      <option value="kab_bandung_barat">KAB Bandung Barat</option>
                      <option value="kota_bekasi">KOTA Bekasi</option>
                      <option value="kab_bogor">KAB Bogor</option>
                      <option value="kota_cimahi">KOTA Cimahi</option>
                      <option value="kab_cirebon">KAB Cirebon</option>
                      <option value="kota_depok">KOTA Depok</option>
                      <option value="kota_sukabumi">KOTA Sukabumi</option>
                      <option value="kota_tasikmalaya">KOTA Tasikmalaya</option>
                      <option value="kota_banjar">KOTA Banjar</option>
                      <option value="kab_cianjur">KAB Cianjur</option>
                      <option value="kab_indramayu">KAB Indramayu</option>
                      <option value="kab_karawang">KAB Karawang</option>
                      <option value="kab_kuningan">KAB Kuningan</option>
                      <option value="kab_majalengka">KAB Majalengka</option>
                      <option value="kab_pangandaran">KAB Pangandaran</option>
                      <option value="kab_purwakarta">KAB Purwakarta</option>
                      <option value="kab_subang">KAB Subang</option>
                      <option value="kab_sumedang">KAB Sumedang</option>
                      <option value="kab_garut">KAB Garut</option>
                    </select>
                    {errors.kota_kabupaten && (<p className="text-red-500 text-left">{errors.kota_kabupaten}</p>)}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="alamat_rumah"
                      className="block text-left text-black"
                    >
                      Alamat Rumah:
                    </label>
                    <textarea
                      rows="4"
                      name="alamat_rumah"
                      onChange={handleInput}
                      className="border mt-1 rounded px-4 w-full bg-gray-50 text-black">
                    </textarea>
                    {errors.alamat_rumah && (<p className="text-red-500 text-left">{errors.alamat_rumah}</p>)}
                  </div>

                  <div>
                    <label
                      htmlFor="nomor_handphone"
                      className="block text-left text-black"
                    >
                      Nomor Handphone:
                    </label>
                    <input
                      placeholder="Hanya boleh diisi dengan angka"
                      type="number"
                      id="nomor_handphone"
                      name="nomor_handphone"
                      onChange={handleInput}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                    />
                    {errors.nomor_handphone && (<p className="text-red-500 text-left">{errors.nomor_handphone}</p>)}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-left text-black"
                    >
                      Email:
                    </label>
                    <input
                      placeholder="Wajib mengisi email"
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleInput}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                    />
                    {errors.email && (<p className="text-red-500 text-left">{errors.email}</p>)}
                  </div>
                </div>
              </fieldset>

              <fieldset className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 max-w-screen-md mx-auto">
                <div>
                  <p className="mt-5 text-lg text-black-500 flex items-center">
                    <span className="mr-2 font-semibold text-black">
                      B. DATA KELUARGA
                    </span>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="nama_ayah"
                      className="block text-left text-black"
                    >
                      Nama Ayah:
                    </label>
                    <input
                      placeholder="Wajib mengisi nama ayah"
                      type="text"
                      id="nama_ayah"
                      name="nama_ayah"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                      value={values.nama_ayah}
                      onChange={handleInput}
                    />
                    {errors.nama_ayah && (<p className="text-red-500 text-left">{errors.nama_ayah}</p>)}
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="pekerjaan_ayah"
                      className="block text-left text-black"
                    >
                      Pekerjaan Ayah
                    </label>
                    <select
                      id="pekerjaanAyah"
                      name="pekerjaanAyah"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                      onChange={varPekerjaanAyah}
                      value={pekerjaanAyah}
                    >
                      <option value="">-- Pilih Jenis Pekerjaan --</option>
                      <option value="Guru_Dosen">Guru/Dosen</option>
                      <option value="Dokter_Perawat">Dokter/Perawat</option>
                      <option value="Insinyur">Insinyur (Teknik Sipil, Elektro, Mesin, dll.)</option>
                      <option value="Petani_Agrobisnis">Petani/Agrobisnis</option>
                      <option value="Pengembang_Perangkat_Lunak">Pengembang Perangkat Lunak (Software Developer)</option>
                      <option value="Analis_Data">Analis Data (Data Analyst/Data Scientist)</option>
                      <option value="Pengusaha">Pengusaha (Entrepreneur)</option>
                      <option value="Digital_Marketer">Digital Marketer</option>
                      <option value="Konsultan_Keuangan">Konsultan Keuangan (Financial Advisor)</option>
                      <option value="Content_Creator_Influencer">Content Creator/Influencer</option>
                      <option value="Pekerja_Sosial">Pekerja Sosial (Social Worker)</option>
                      <option value="Chef_Kuliner">Chef/Kuliner</option>
                      <option value="Akuntan">Akuntan</option>
                      <option value="Pengacara">Pengacara</option>
                      <option value="Polisi_Tentara">Polisi/Tentara</option>
                      <option value="PNS_Birokrat">PNS/Birokrat</option>
                      <option value="Jurnalis_Reporter">Jurnalis/Reporter</option>
                      <option value="Arsitek">Arsitek</option>
                      <option value="Desainer_Grafis">Desainer Grafis</option>
                      <option value="Mekanik_Otomotif">Mekanik/Otomotif</option>
                      <option value="Pramugari_Pilot">Pramugari/Pilot</option>
                      <option value="Sales_Marketing">Sales/Marketing</option>
                      <option value="Ahli_IT_Spesialis_Jaringan">Ahli IT/Spesialis Jaringan</option>
                      <option value="Perbankan_Analis_Kredit">Perbankan/Analis Kredit</option>
                      <option value="Logistik_Manajer_Rantai_Pasokan">Logistik/Manajer Rantai Pasokan</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>

                    {errors.pekerjaanAyah && (<p className="text-red-500 text-left">{errors.pekerjaanAyah}</p>)}

                    {/* Tampilkan input hanya jika pekerjaan ayah yang dipilih adalah "Lainnya" */}
                    {pekerjaanAyah === "Lainnya" && (
                      <input
                        placeholder="Pekerjaan Ayah Lainnya"
                        type="text"
                        name="pekerjaan_ayah_lainnya"
                        className="h-10 border mt-2 rounded px-4 w-full bg-gray-50 text-black"
                        id="pekerjaan_ayah_lainnya"
                        onChange={handleInput} // tambahkan onChange handler untuk memperbarui state
                      />
                    )}

                    {/* Menampilkan pesan kesalahan jika pekerjaan ayah "Lainnya" dipilih tetapi inputnya kosong */}
                    {pekerjaanAyah === "Lainnya" && !values.pekerjaan_ayah_lainnya && (<p className="text-red-500">Pekerjaan Ayah Lainnya diperlukan.</p>)}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-left text-black">Penghasilan Ayah:</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <label className="flex items-center text-black mt-2">
                        <input
                          type="checkbox"
                          name="penghasilan_ayah"
                          value="< 3 Juta"
                          className="h-5 w-5 text-blue-600 mr-2"
                          checked={gajiAyah === '< 3 Juta'}
                          onChange={() => handleGajiAyahChange('< 3 Juta')}
                        />
                        &lt; 3 Juta
                      </label>
                      <label className="flex items-center text-black">
                        <input
                          type="checkbox"
                          name="penghasilan_ayah"
                          value="3 - 5 Juta"

                          className="h-5 w-5 text-blue-600 mr-2"
                          checked={gajiAyah === '3 - 5 Juta'}
                          onChange={() => handleGajiAyahChange('3 - 5 Juta')}
                        />
                        3 - 5 Juta
                      </label>
                      <label className="flex items-center text-black">
                        <input
                          type="checkbox"
                          name="penghasilan_ayah"
                          value="5 - 10 Juta"

                          className="h-5 w-5 text-blue-600 mr-2"
                          checked={gajiAyah === '5 - 10 Juta'}
                          onChange={() => handleGajiAyahChange('5 - 10 Juta')}
                        />
                        5 - 10 Juta
                      </label>
                      <label className="flex items-center text-black">
                        <input
                          type="checkbox"
                          name="penghasilan_ayah"
                          value="> 10 Juta"

                          className="h-5 w-5 text-blue-600 mr-2"
                          checked={gajiAyah === '> 10 Juta'}
                          onChange={() => handleGajiAyahChange('> 10 Juta')}
                        />
                        &gt; 10 Juta
                      </label>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="nama_ibu"
                      className="block text-left text-black"
                    >
                      Nama Ibu:
                    </label>
                    <input
                      placeholder="Wajib mengisi nama ibu"
                      type="text"
                      id="nama_ibu"
                      name="nama_ibu"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                      value={values.nama_ibu}
                      onChange={handleInput}
                    />
                    {errors.nama_ibu && (<p className="text-red-500 text-left">{errors.nama_ibu}</p>)}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="pekerjaanIbu" className="block text-left text-black">Pekerjaan Ibu</label>
                    <select id="pekerjaanIbu" name="pekerjaanIbu" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" value={pekerjaanIbu} onChange={varPekerjaanIbu}>
                      <option value="">-- Pilih Jenis Pekerjaan --</option>
                      <option value="Guru_Dosen">Guru/Dosen</option>
                      <option value="Dokter_Perawat">Dokter/Perawat</option>
                      <option value="Insinyur">Insinyur (Teknik Sipil, Elektro, Mesin, dll.)</option>
                      <option value="Petani_Agrobisnis">Petani/Agrobisnis</option>
                      <option value="Pengembang_Perangkat_Lunak">Pengembang Perangkat Lunak (Software Developer)</option>
                      <option value="Analis_Data">Analis Data (Data Analyst/Data Scientist)</option>
                      <option value="Pengusaha">Pengusaha (Entrepreneur)</option>
                      <option value="Digital_Marketer">Digital Marketer</option>
                      <option value="Konsultan_Keuangan">Konsultan Keuangan (Financial Advisor)</option>
                      <option value="Content_Creator_Influencer">Content Creator/Influencer</option>
                      <option value="Pekerja_Sosial">Pekerja Sosial (Social Worker)</option>
                      <option value="Chef_Kuliner">Chef/Kuliner</option>
                      <option value="Akuntan">Akuntan</option>
                      <option value="Pengacara">Pengacara</option>
                      <option value="Polisi_Tentara">Polisi/Tentara</option>
                      <option value="PNS_Birokrat">PNS/Birokrat</option>
                      <option value="Jurnalis_Reporter">Jurnalis/Reporter</option>
                      <option value="Arsitek">Arsitek</option>
                      <option value="Desainer_Grafis">Desainer Grafis</option>
                      <option value="Mekanik_Otomotif">Mekanik/Otomotif</option>
                      <option value="Pramugari_Pilot">Pramugari/Pilot</option>
                      <option value="Sales_Marketing">Sales/Marketing</option>
                      <option value="Ahli_IT_Spesialis_Jaringan">Ahli IT/Spesialis Jaringan</option>
                      <option value="Perbankan_Analis_Kredit">Perbankan/Analis Kredit</option>
                      <option value="Logistik_Manajer_Rantai_Pasokan">Logistik/Manajer Rantai Pasokan</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                    {errors.pekerjaanIbu && (<p className="text-red-500 text-left">{errors.pekerjaanIbu}</p>)}
                    {pekerjaanIbu === 'Lainnya' && (
                      <input
                        placeholder="Pekerjaan Ibu Lainnya"
                        type="text"
                        name="pekerjaan_ibu_lainnya"
                        className="h-10 border mt-2 rounded px-4 w-full bg-gray-50 text-black"
                        id="pekerjaan_ibu_lainnya"
                        onChange={handleInput}
                      />
                    )}
                    {pekerjaanIbu === "Lainnya" && !values.pekerjaan_ibu_lainnya && (<p className="text-red-500">Pekerjaan Ibu Lainnya diperlukan.</p>)}

                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-left text-black">
                      Penghasilan Ibu:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <label className="flex items-center text-black mt-2">
                        <input
                          type="checkbox"
                          name="penghasilan_ibu"
                          value="< 3 Juta"
                          className="h-5 w-5 text-blue-600 mr-2"
                          checked={gajiIbu === "< 3 Juta"}
                          onChange={() => handleGajiIbuChange("< 3 Juta")}
                        />
                        &lt; 3 Juta
                      </label>
                      <label className="flex items-center text-black">
                        <input
                          type="checkbox"
                          name="penghasilan_ibu"
                          value="3 - 5 Juta"
                          className="h-5 w-5 text-blue-600 mr-2"
                          checked={gajiIbu === "3 - 5 Juta"}
                          onChange={() => handleGajiIbuChange("3 - 5 Juta")}
                        />
                        3 - 5 Juta
                      </label>
                      <label className="flex items-center text-black">
                        <input
                          type="checkbox"
                          name="penghasilan_ibu"
                          value="5 - 10 Juta"
                          className="h-5 w-5 text-blue-600 mr-2"
                          checked={gajiIbu === "5 - 10 Juta"}
                          onChange={() => handleGajiIbuChange("5 - 10 Juta")}
                        />
                        5 - 10 Juta
                      </label>
                      <label className="flex items-center text-black">
                        <input
                          type="checkbox"
                          name="penghasilan_ibu"
                          value="> 10 Juta"
                          className="h-5 w-5 text-blue-600 mr-2"
                          checked={gajiIbu === "> 10 Juta"}
                          onChange={() => handleGajiIbuChange("> 10 Juta")}
                        />
                        &gt; 10 Juta
                      </label>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="jumlah_saudara"
                      className="block text-left text-black "
                    >
                      Jumlah Saudara:
                    </label>
                    <input
                      placeholder="Wajib mengisi saudara kandung"
                      type="number"
                      id="jumlah_saudara"
                      name="jumlah_saudara"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                      onChange={handleInput}
                    />
                    {errors.jumlah_saudara && (<p className="text-red-500 text-left">{errors.jumlah_saudara}</p>)}
                  </div>
                </div>
              </fieldset>

              <fieldset className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 max-w-screen-md mx-auto">
                <div>
                  <p className="mt-5 text-lg text-black-500 flex items-center">
                    <span className="mr-2 font-semibold text-black">
                      C. DATA KELUARGA WALI
                    </span>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-left text-black">
                      Apakah saudara memiliki orang tua Wali? Jika ada, klik ya
                    </label>
                    <div className="mt-2 flex">
                      <label className="flex items-center text-black">
                        <input
                          type="checkbox"
                          name="ada_wali"
                          value="YA"
                          className="h-5 w-5 text-blue-600 mr-2"
                          checked={hasGuardian === true}
                          onChange={() => handleCheckboxChange("YA")}
                        />
                        YA
                      </label>
                      <label className="flex items-center text-black ml-4">
                        <input
                          type="checkbox"
                          name="ada_wali"
                          value="TIDAK"
                          className="h-5 w-5 text-blue-600 mr-2"
                          checked={hasGuardian === false}
                          onChange={() => handleCheckboxChange("TIDAK")}
                        />
                        TIDAK
                      </label>
                    </div>
                  </div>
                </div>

                {hasGuardian && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="nama_wali"
                        className="block text-left text-black"
                      >
                        Nama Orang Tua/Wali:
                      </label>
                      <input
                        type="text"
                        id="nama_wali"
                        name="nama_wali"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                        onChange={handleInput}
                      />
                      {errors.nama_wali && (<p className="text-red-500 text-left">{errors.nama_wali}</p>)}
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="pekerjaan_wali"
                        className="block text-left text-black"
                      >
                        Pekerjaan Orang Tua/Wali:
                      </label>
                      <select
                        id="pekerjaanWali"
                        name="pekerjaanWali"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                        value={pekerjaanWali}
                        onChange={varPekerjaanWali}
                      >
                        <option value="">-- Pilih Jenis Pekerjaan --</option>
                        <option value="Guru_Dosen">Guru/Dosen</option>
                        <option value="Dokter_Perawat">Dokter/Perawat</option>
                        <option value="Insinyur">Insinyur (Teknik Sipil, Elektro, Mesin, dll.)</option>
                        <option value="Petani_Agrobisnis">Petani/Agrobisnis</option>
                        <option value="Pengembang_Perangkat_Lunak">Pengembang Perangkat Lunak (Software Developer)</option>
                        <option value="Analis_Data">Analis Data (Data Analyst/Data Scientist)</option>
                        <option value="Pengusaha">Pengusaha (Entrepreneur)</option>
                        <option value="Digital_Marketer">Digital Marketer</option>
                        <option value="Konsultan_Keuangan">Konsultan Keuangan (Financial Advisor)</option>
                        <option value="Content_Creator_Influencer">Content Creator/Influencer</option>
                        <option value="Pekerja_Sosial">Pekerja Sosial (Social Worker)</option>
                        <option value="Chef_Kuliner">Chef/Kuliner</option>
                        <option value="Akuntan">Akuntan</option>
                        <option value="Pengacara">Pengacara</option>
                        <option value="Polisi_Tentara">Polisi/Tentara</option>
                        <option value="PNS_Birokrat">PNS/Birokrat</option>
                        <option value="Jurnalis_Reporter">Jurnalis/Reporter</option>
                        <option value="Arsitek">Arsitek</option>
                        <option value="Desainer_Grafis">Desainer Grafis</option>
                        <option value="Mekanik_Otomotif">Mekanik/Otomotif</option>
                        <option value="Pramugari_Pilot">Pramugari/Pilot</option>
                        <option value="Sales_Marketing">Sales/Marketing</option>
                        <option value="Ahli_IT_Spesialis_Jaringan">Ahli IT/Spesialis Jaringan</option>
                        <option value="Perbankan_Analis_Kredit">Perbankan/Analis Kredit</option>
                        <option value="Logistik_Manajer_Rantai_Pasokan">Logistik/Manajer Rantai Pasokan</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>

                      {pekerjaanWali === "Lainnya" && (
                        <input
                          placeholder="Pekerjaan Wali Lainnya"
                          type="text"
                          name="pekerjaan_wali_lainnya"
                          className="h-10 border mt-2 rounded px-4 w-full bg-gray-50 text-black"
                        />
                      )}
                      {errors.pekerjaanWali && (<p className="text-red-500 text-left">{errors.pekerjaanWali}</p>)}
                    </div>
                    <div>
                      <label className="block text-left text-black">
                        Penghasilan Orang Tua/Wali:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <label className="flex items-center text-black mt-2">
                          <input
                            type="checkbox"
                            name="gaji"
                            value="< 3 Juta"
                            className="h-5 w-5 text-blue-600 mr-2"
                            onChange={() => handleGajiWaliChange("< 3 Juta")}
                            checked={gajiWali === "< 3 Juta"}
                          />
                          &lt; 3 Juta
                        </label>
                        <label className="flex items-center text-black">
                          <input
                            type="checkbox"
                            name="gaji"
                            value="3 - 5 Juta"
                            className="h-5 w-5 text-blue-600 mr-2"
                            onChange={() => handleGajiWaliChange("3 - 5 Juta")}
                            checked={gajiWali === "3 - 5 Juta"}
                          />
                          3 - 5 Juta
                        </label>
                        <label className="flex items-center text-black">
                          <input
                            type="checkbox"
                            name="gaji"
                            value="5 - 10 Juta"
                            className="h-5 w-5 text-blue-600 mr-2"
                            onChange={() => handleGajiWaliChange("5 - 10 Juta")}
                            checked={gajiWali === "5 - 10 Juta"}
                          />
                          5 - 10 Juta
                        </label>
                        <label className="flex items-center text-black">
                          <input
                            type="checkbox"
                            name="gaji"
                            value="> 10 Juta"
                            className="h-5 w-5 text-blue-600 mr-2"
                            onChange={() => handleGajiWaliChange("> 10 Juta")}
                            checked={gajiWali === "> 10 Juta"}
                          />
                          &gt; 10 Juta
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </fieldset>

              <fieldset className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 max-w-screen-md mx-auto">
                <div>
                  <p className="mt-5 text-lg text-black-500 flex items-center">
                    <span className="mr-2 font-semibold text-black">
                      D. DATA RIWAYAT PENDIDIKAN
                    </span>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="tahun_masuk_SMK"
                      className="block text-left text-black"
                    >
                      Tahun Masuk SMK
                    </label>
                    <select
                      id="tahun_masuk_SMK"
                      name="tahun_masuk_SMK"
                      onChange={handleInput}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                    >
                      <option value="">--Pilih Tahun--</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="tahun_lulus_SMK"
                      className="block text-left text-black"
                    >
                      Tahun lulus SMK
                    </label>
                    <select
                      id="tahun_lulus_SMK"
                      name="tahun_lulus_SMK"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                    >
                      <option value="">--Pilih Tahun--</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-left text-black">
                      Apakah Selama menjadi siswa mengikuti organisasi?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      <label className="flex items-center text-black">
                        <input
                          type="checkbox"
                          name="organisasi"
                          value="Ya"
                          className="h-5 w-5 text-blue-600 mr-2"
                          onChange={() => handleOrganizationChange("Ya")}
                          checked={participatedInOrganization === "Ya"}
                        />
                        Ya
                      </label>
                      <label className="flex items-center text-black">
                        <input
                          type="checkbox"
                          name="organisasi"
                          value="Tidak"
                          className="h-5 w-5 text-blue-600 mr-2"
                          onChange={() => handleOrganizationChange("Tidak")}
                          checked={participatedInOrganization === "Tidak"}
                        />
                        Tidak
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-left text-black">
                    Apakah selama menjadi siswa pernah mengikuti lomba?
                  </label>
                  <div className="mt-2">
                    <label className="flex items-center text-black">
                      <input
                        type="checkbox"
                        name="pernah_ikut_lomba"
                        value="YA"
                        className="h-5 w-5 text-blue-600 mr-2"
                        onChange={() => handleCompetitionChange("YA")}
                        checked={participatedInCompetition === true}
                      />
                      YA
                    </label>
                    <label className="flex items-center text-black">
                      <input
                        type="checkbox"
                        name="pernah_ikut_lomba"
                        value="Tidak"
                        className="h-5 w-5 text-blue-600 mr-2"
                        onChange={() => handleCompetitionChange("Tidak")}
                        checked={participatedInCompetition === false}
                      />
                      Tidak
                    </label>
                  </div>
                </div>

                {participatedInCompetition && (
                  <div className="mt-4">
                    <label
                      htmlFor="jenis_lomba"
                      className="block text-left text-black"
                    >
                      Jenis Lomba:
                    </label>
                    <div className="mt-2">
                      <label className="flex items-center text-black">
                        <input
                          type="checkbox"
                          name="jenis_lomba"
                          value="Akademik"
                          className="h-5 w-5 text-blue-600 mr-2"
                          onChange={() =>
                            handleCompetitionTypeChange("Akademik")
                          }
                          checked={competitionType === "Akademik"}
                        />
                        Akademik
                      </label>
                      <label className="flex items-center text-black">
                        <input
                          type="checkbox"
                          name="jenis_lomba"
                          value="Akademik Sejurusan"
                          className="h-5 w-5 text-blue-600 mr-2"
                          onChange={() =>
                            handleCompetitionTypeChange("Akademik Sejurusan")
                          }
                          checked={competitionType === "Akademik Sejurusan"}
                        />
                        Akademik Sejurusan
                      </label>
                      <label className="flex items-center text-black">
                        <input
                          type="checkbox"
                          name="jenis_lomba"
                          value="Non Akademik"
                          className="h-5 w-5 text-blue-600 mr-2"
                          onChange={() =>
                            handleCompetitionTypeChange("Non Akademik")
                          }
                          checked={competitionType === "Non Akademik"}
                        />
                        Non Akademik
                      </label>
                    </div>
                  </div>
                )}

                {competitionType === "Akademik" && (
                  <div className="mt-4">
                    <label
                      htmlFor="sub_jenis_lomba"
                      className="block text-left text-black"
                    >
                      Tingkat Lomba:
                    </label>
                    <select
                      id="tingkat_lomba"
                      name="tingkat_lomba"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                      onChange={varAkademik}
                    >
                      <option value="">--Pilih Tingkat Lomba--</option>
                      <option value="Olimpiade Olahraga Siswa Nasional (O2SN)">
                        Olimpiade Olahraga Siswa Nasional (O2SN)
                      </option>
                      <option value="Olimpiade Penelitian Siswa Indonesia (OPSI)">
                        Olimpiade Penelitian Siswa Indonesia (OPSI)
                      </option>
                      <option value="Lomba Karya Tulis Ilmiah (LKTI)">
                        Lomba Karya Tulis Ilmiah (LKTI)
                      </option>
                      <option value="Lomba Debat Bahasa Indonedia (LDBI)">
                        Lomba Debat Bahasa Indonedia (LDBI)
                      </option>
                      <option value="Cerdas Cermat tingkat SMK">
                        Cerdas Cermat tingkat SMK
                      </option>
                      <option value="Lainnya">
                        Lainnya
                      </option>
                    </select>
                    {errors.tingkat_lomba && (
                      <p className="text-red-500 text-left">{errors.tingkat_lomba}</p>
                    )}
                    {subCompetitionType === "Lainnya" && (
                      <input
                        placeholder="Isi Tingkat Lomba"
                        type="text"
                        id="sub_jenis_lomba_lainnya"
                        name="sub_jenis_lomba_lainnya"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                        value={otherCompetitionType}
                        onChange={(e) => setOtherCompetitionType(e.target.value)}
                      />
                    )}
                  </div>
                )}

                {competitionType === "Akademik Sejurusan" && (
                  <div className="sm:col-span-2 mt-4">
                    <label
                      htmlFor="sub_jenis_lomba"
                      className="block text-left text-black"
                    >
                      Tingkat Lomba:
                    </label>
                    <input
                      placeholder="Isi Tingkat Lomba"
                      type="text"
                      id="tingkat_lomba"
                      name="tingkat_lomba"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                      onChange={varAkademik}
                    />
                    {errors.tingkat_lomba && (
                      <p className="text-red-500 text-left">{errors.tingkat_lomba}</p>
                    )}
                  </div>
                )}

                {competitionType === "Non Akademik" && (
                  <div className="mt-4">
                    <label
                      htmlFor="sub_jenis_lomba"
                      className="block text-left text-black"
                    >
                      Tingkat Lomba:
                    </label>
                    <select
                      id="tingkat_lomba"
                      name="tingkat_lomba"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                      onChange={varAkademik}
                    >
                      <option value="">--Pilih Tingkat Lomba--</option>
                      <option value="Ketua Organisasi (Osis, MPK, Ekstrakulikuler, BEM, dsb)">
                        Ketua Organisasi (Osis, MPK, Ekstrakulikuler, BEM, dsb)
                      </option>
                      <option value="Lomba Keolahragaan (O2SN, PON, Sea Games dsb)">
                        Lomba Keolahragaan (O2SN, PON, Sea Games dsb)
                      </option>
                      <option value="Lomba Seni (Drama, Pertunjukan, FLS2N, dsb)">
                        Lomba Seni (Drama, Pertunjukan, FLS2N, dsb)
                      </option>
                      <option value="Lomba Catur">Lomba Catur</option>
                      <option value="Menghafal Kitab Suci">
                        Menghafal Kitab Suci
                      </option>
                      <option value="Pidato Bahasa Inggris">
                        Pidato Bahasa Inggris
                      </option>
                      <option value="Lainnya">
                        Lainnya
                      </option>
                    </select>
                    {errors.tingkat_lomba && (
                      <p className="text-red-500 text-left">{errors.tingkat_lomba}</p>
                    )}
                    {subCompetitionType === "Lainnya" && (
                      <input
                        placeholder="Isi Tingkat Lomba"
                        type="text"
                        id="sub_jenis_lomba_lainnya"
                        name="sub_jenis_lomba_lainnya"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                        onChange={(e) => setOtherCompetitionType(e.target.value)}
                      />
                    )}
                  </div>
                )}

                {subCompetitionType && (
                  <div className="mt-4">
                    <label
                      htmlFor="tingkat_kejuaraan"
                      className="block text-left text-black"
                    >
                      Tingkat Kejuaraan:
                    </label>
                    <select
                      id="tingkat_kejuaraan"
                      name="tingkat_kejuaraan"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                      onChange={handleInput}
                    >
                      <option value="">--Pilih Tingkat Kejuaraan--</option>
                      <option value="Juara 3 Kota">Juara 3 Kota</option>
                      <option value="Juara 2 Kota">Juara 2 Kota</option>
                      <option value="Juara 1 Kota">Juara 1 Kota</option>
                      <option value="Juara 3 Provinsi">Juara 3 Provinsi</option>
                      <option value="Juara 2 Provinsi">Juara 2 Provinsi</option>
                      <option value="Juara 1 Provinsi">Juara 1 Provinsi</option>
                      <option value="Juara 3 Nasional">Juara 3 Nasional</option>
                      <option value="Juara 2 Nasional">Juara 2 Nasional</option>
                      <option value="Juara 1 Nasional">Juara 1 Nasional</option>
                      <option value="Juara 3 Internasional">Juara 3 Internasional</option>
                      <option value="Juara 2 Internasional">Juara 2 Internasional</option>
                      <option value="Juara 1 Internasional">Juara 1 Internasional</option>
                    </select>
                    {errors.tingkat_kejuaraan && (
                      <p className="text-red-500 text-left">{errors.tingkat_kejuaraan}</p>
                    )}
                  </div>
                )}
              </fieldset>

              <fieldset className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 max-w-screen-md mx-auto">
                <div>
                  <p className="mt-5 text-lg text-black-500 flex items-center">
                    <span className="mr-2 font-semibold text-black">
                      E. RENCANA SETELAH LULUS
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-left text-black">
                      Setelah lulus SMK, apakah akan melanjutkan studi? Jika Ya
                      akan melanjutkan studi, dimana akan melanjutkan studi?
                    </label>
                    <div className="mt-2">
                      <label className="flex items-center text-black">
                        <input
                          type="checkbox"
                          name="melanjutkan_studi"
                          value="YA"
                          className="h-5 w-5 text-blue-600 mr-2"
                          onChange={handleEducationChange}
                          checked={continuingEducation === true}
                        />
                        YA
                      </label>
                      <label className="flex items-center text-black">
                        <input
                          type="checkbox"
                          name="melanjutkan_studi"
                          value="TIDAK"
                          className="h-5 w-5 text-blue-600 mr-2"
                          onChange={handleEducationChange}
                          checked={continuingEducation === false}
                        />
                        TIDAK
                      </label>
                    </div>
                  </div>
                </div>

                {continuingEducation === true && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="jenjang_pendidikan"
                        className="block text-left text-black"
                      >
                        Jenjang pendidikan
                      </label>
                      <select
                        id="jenjang_pendidikan"
                        name="jenjang pendidikan"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                      >
                        <option value="">--Pilih Jenjang Pendidikan--</option>
                        <option value="DI - Diploma 1 dengan gelar Ahli Pratama/AP">
                          DI - Diploma I dengan gelar Ahli Pratama/AP
                        </option>
                        <option value="DII - Diploma II dengan gelar Ahli Muda/A.Ma">
                          DII - Diploma II dengan gelar Ahli Muda/A.Ma
                        </option>
                        <option value="DIII - Dploma III dengan gelar Ahli Madya/A.Md">
                          DIII - Dploma III dengan gelar Ahli Madya/A.Md
                        </option>
                        <option value="DIV - Diploma IV dengan gelar Sarjana Terapan/S.Tr">
                          DIV - Diploma IV dengan gelar Sarjana Terapan/S.Tr
                        </option>
                        <option value="SI - Program Sarjana">
                          SI - Program Sarjana
                        </option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="program_studi"
                        className="block text-left text-black"
                      >
                        Program Studi:
                      </label>
                      <input
                        placeholder="Wajib mengisi program studi"
                        type="text"
                        id="program_studi"
                        name="program_studi"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="nama_universitas"
                        className="block text-left text-black"
                      >
                        Nama Universitas:
                      </label>
                      <input
                        placeholder="Wajib mengisi nama universitas"
                        type="text"
                        id="nama_universitas"
                        name="nama_universitas"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="kota_negara_universitas"
                        className="block text-left text-black"
                      >
                        Kota/Negara Universitas:
                      </label>
                      <input
                        placeholder="Wajib mengisi Kota/Negara"
                        type="text"
                        id="kota_negara_universitas"
                        name="kota_negara_universitas"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="alasan_melanjutkan_studi"
                        className="block text-left text-black"
                      >
                        Apa alasan melanjutkan studi?
                      </label>
                      <select
                        id="alasan_melanjutkan_studi"
                        name="alasan melanjutkan studi"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                      >
                        <option value="">--Pilih Alasan--</option>
                        <option value="Membuka peluang karir yang lebih bagus">
                          Membuka peluang karir yang lebih bagus
                        </option>
                        <option value="Mempeluas jaringan sosial dan profesional">
                          Mempeluas jaringan sosial dan profesional
                        </option>
                        <option value="Meningkatkan kemampuan berpikir kritis dan kreatif">
                          Meningkatkan kemampuan berpikir kritis dan kreatif
                        </option>
                        <option value="Mengembangkan kepribadian yang lebih baik">
                          Mengembangkan kepribadian yang lebih baik
                        </option>
                        <option value="Meningkatkan daya saing di era globalisasi">
                          Meningkatkan daya saing di era globalisasi
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-left text-black mt-2">
                        Apakah studi yang anda lanjutkan sejurusan?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <label className="flex items-center text-black mt-2.5">
                          <input
                            type="checkbox"
                            name="sesuai_jurusan"
                            value="Ya"
                            className="h-5 w-5 text-blue-600 mr-2"
                            onChange={() => handleCheckboxChange("Ya")}
                            checked={selectedKampusCriteria === "Ya"}
                          />
                          Ya
                        </label>
                        <label className="flex items-center text-black mt-2.5">
                          <input
                            type="checkbox"
                            name="sesuai_jurusan"
                            value="Tidak"
                            className="h-5 w-5 text-blue-600 mr-2"
                            onChange={() => handleCheckboxChange("Tidak")}
                            checked={selectedKampusCriteria === "Tidak"}
                          />
                          Tidak
                        </label>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-left text-black">
                        Kriteria utama kampus pilihan:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                        {[
                          "Kampus dekat rumah",
                          "Ada alumni",
                          "Kampus banyak prestasi",
                          "Tersedia sistem belajar online",
                          "Banyak beasiswa",
                          "Biaya kuliah terjangkau",
                          "Mudah dapat kerja",
                          "Gedung kampus mewah dan fasilitas lengkap",
                          "Lainnya",
                        ].map((criteria) => (
                          <label
                            key={criteria}
                            className="flex items-center text-black"
                          >
                            <input
                              type="checkbox"
                              name="kriteria_kampus"
                              value={criteria}
                              className="h-5 w-5 text-blue-600 mr-2"
                              onChange={handleCampusCriteriaChange}
                              checked={selectedKampusCriteria.includes(
                                criteria
                              )}
                            />
                            {criteria}
                          </label>
                        ))}
                      </div>
                      {showOtherFieldYes && (
                        <div className="mt-2 text-black">
                          <input
                            type="text"
                            name="kriteria_lainnya"
                            placeholder="Kriteria lainnya"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {continuingEducation === false && (
                  <div className="sm:col-span-2 mt-4">
                    <label className="block text-left text-black">
                      Jika Tidak akan melanjutkan studi, apa rencana saudara
                      setelah lulus?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      {[
                        "Berkerja",
                        "Magang atau Freelance",
                        "Mengikuti Kursus",
                        "Beriwirausaha",
                        "Memulai Bisnis Online",
                        "Lainnya",
                      ].map((plan) => (
                        <label
                          key={plan}
                          className="flex items-center text-black"
                        >
                          <input
                            type="checkbox"
                            name="tidak_lanjut_studi"
                            value={plan}
                            className="h-5 w-5 text-blue-600 mr-2"
                            onChange={handlePlanChange}
                            checked={selectedPlan.includes(plan)}
                          />
                          {plan}
                        </label>
                      ))}
                    </div>
                    {showOtherField && (
                      <div className="mt-2 text-black">
                        <input
                          type="text"
                          name="alasan_lainnya"
                          placeholder="Jenis rencana lainnya"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>
                    )}
                    {showWorkField && (
                      <div className="mt-2 text-black">
                        <label className="block">Bidang Pekerjaan:</label>
                        <select
                          name="bidang_pekerjaan"
                          value={jobField}
                          onChange={handleJobFieldChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        >
                          <option value="">-- Pilih Bidang Pekerjaan --</option>
                          <option value="Guru">Guru</option>
                          <option value="Teller Bank">Teller Bank</option>
                          <option value="Notaris">Notaris</option>
                          <option value="Hakim">Hakim</option>
                          <option value="Nelayan">Nelayan</option>
                          <option value="Dokter">Dokter</option>
                          <option value="Bidan">Bidan</option>
                          <option value="Perawat">Perawat</option>
                          <option value="Petani">Petani</option>
                          <option value="Apoteker">Apoteker</option>
                          <option value="Arsitek">Arsitek</option>
                          <option value="Konten Kreator">Konten Kreator</option>
                          <option value="Peternak">Peternak</option>
                          <option value="Pilot">Pilot</option>
                          <option value="Pemadam Kebakaran">Pemadam Kebakaran</option>
                          <option value="Sopir">Sopir</option>
                          <option value="Masinis">Masinis</option>
                          <option value="Pramugari">Pramugari</option>
                          <option value="Kondektur">Kondektur</option>
                          <option value="Wartawan">Wartawan</option>
                          <option value="Swasta">Swasta</option>
                          <option value="ASN">ASN</option>
                          <option value="Polisi">Polisi</option>
                          <option value="Tentara Nasional Indonesia">Tentara Nasional Indonesia</option>
                          <option value="BUMN">BUMN</option>
                          <option value="BUMD">BUMD</option>
                          <option value="Freelance">Freelance</option>
                          <option value="Tidak Berkerja">Tidak Berkerja</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                        {jobField === "Lainnya" && (
                          <input
                            type="text"
                            name="bidang_pekerjaan_lainnya"
                            placeholder="Masukkan bidang pekerjaan lainnya"
                            value={otherJobField}
                            onChange={handleOtherJobFieldChange}
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                        )}
                      </div>
                    )}

                    {showEntrepreneurField && (
                      <div className="mt-2 text-black">
                        <label className="block">Bidang Usaha:</label>
                        <select
                          name="bidang_usaha"
                          value={businessField}
                          onChange={handleBusinessFieldChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        >
                          <option value="">--Pilih Jenis Bidang Usaha--</option>
                          <option value="Pertanian">Pertanian</option>
                          <option value="Peternakan">Peternakan</option>
                          <option value="Perikanan">Perikanan</option>
                          <option value="Perdagangan">Perdagangan</option>
                          <option value="Perindustrian">Perindustrian</option>
                          <option value="Pertambangan">Pertambangan</option>
                          <option value="Transportasi">Transportasi</option>
                          <option value="Pariwisata">Pariwisata</option>
                          <option value="Teknologi, Informasi, dan Komunikasi">Teknologi, Informasi, dan Komunikasi</option>
                          <option value="Sektor Jasa">Sektor Jasa</option>
                          <option value="Usaha Formal (BUMN, PT, CV, FIRMA, Koperasi)">Usaha Formal (BUMN, PT, CV, FIRMA, Koperasi)</option>
                          <option value="Usaha Informal (Pedagang Kaki Lima, Pedagang Keliling)">Usaha Informal (Pedagang Kaki Lima, Pedagang Keliling)</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                        {businessField === "Lainnya" && (
                          <input
                            type="text"
                            name="bidang_usaha_lainnya"
                            placeholder="Masukkan bidang usaha lainnya"
                            value={otherBusinessField}
                            onChange={handleOtherBusinessFieldChange}
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                        )}
                      </div>
                    )}
                  </div>
                )}
              </fieldset>

              <button
                type="submit"
                className="w-full mt-1 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#0D9354] hover:bg-[#659ebc] focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
