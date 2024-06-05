import Head from 'next/head';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [jumlahSaudaraError, setJumlahSaudaraError] = useState(false);
  const [hasGuardian, setHasGuardian] = useState(false);
  const [participatedInCompetition, setParticipatedInCompetition] = useState(false);
  const surveySectionRef = useRef(null);
  const [continuingEducation, setContinuingEducation] = useState(null);
  const [competitionType, setCompetitionType] = useState('');
  const [subCompetitionType, setSubCompetitionType] = useState('');
  const [showOtherField, setShowOtherField] = useState(false);
  const [showOtherFieldYes, setShowOtherFieldYes] = useState(false);

  const handleScroll = (event) => {
    event.preventDefault();
    surveySectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    if (!data.jumlah_saudara) {
      setJumlahSaudaraError(true);
      return;
    }

    setJumlahSaudaraError(false);
    console.log(data);
  };

  const handleCompetitionChange = (value) => {
    setParticipatedInCompetition(value === 'YA');
    if (value === 'Tidak') {
      setCompetitionType('');
      setSubCompetitionType('');
    }
  };

  const handleEducationChange = (event) => {
    setContinuingEducation(event.target.value === 'YA');
    setShowOtherField(false);
    setShowOtherFieldYes(false);
  };

  const handlePlanChange = (event) => {
    setShowOtherField(event.target.value === 'Lainnya');
  };

  const handleCampusCriteriaChange = (event) => {
    setShowOtherFieldYes(event.target.value === 'Lainnya');
  };

  useEffect(() => {
    const handlePenghasilanAyahChange = (event) => {
      document.querySelectorAll('input[type="checkbox"][name="penghasilan_ayah"]').forEach(box => {
        if (box !== event.target) box.checked = false;
      });
    };

    const handlePenghasilanIbuChange = (event) => {
      document.querySelectorAll('input[type="checkbox"][name="penghasilan_ibu"]').forEach(box => {
        if (box !== event.target) box.checked = false;
      });
    };

    const ayahCheckboxes = document.querySelectorAll('input[type="checkbox"][name="penghasilan_ayah"]');
    ayahCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', handlePenghasilanAyahChange);
    });

    const ibuCheckboxes = document.querySelectorAll('input[type="checkbox"][name="penghasilan_ibu"]');
    ibuCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', handlePenghasilanIbuChange);
    });

    return () => {
      ayahCheckboxes.forEach(checkbox => {
        checkbox.removeEventListener('change', handlePenghasilanAyahChange);
      });
      ibuCheckboxes.forEach(checkbox => {
        checkbox.removeEventListener('change', handlePenghasilanIbuChange);
      });
    };
  }, []);

  
  return (
    <div
      className="relative h-full w-full flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/survey-lulusan-sma/attachment-1714651450176.jpeg)' }}
    >
      <Head>
        <title>Survey Lulusan SMK</title>
      </Head>
      <div className="absolute top-0 right-0 bottom-0 left-0 opacity-75"></div>
      <main className="px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center flex flex-col justify-center bg-gray-900 items-center w-screen h-screen">
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
            <span className="text-[#1695ca] font-bold">Survey</span> Lulusan SMK
          </h2>
          <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
            Kuisioner ini dapat memberikan wawasan mendalam tentang kualitas pendidikan yang disediakan oleh sekolah-sekolah di bawah yurisdiksinya dan mengidentifikasi area-area yang memerlukan perbaikan.
          </p>
          <div className="mt-5 sm:mt-8 flex justify-center">
            <div className="rounded-md shadow">
              <a
                href="#"
                onClick={handleScroll}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-[#1695ca] hover:bg-[#659ebc] focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:px-10"
              >
                Mulai Survey
              </a>
            </div>
          </div>

          
        </div>
        <div className="w-full" ref={surveySectionRef}>
          <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="mt-8 text-white">

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

            <h1 className="md:flex md:items-center sm:text-sm lg:text-3xl font-bold text-black ml-4">Survey Lulusan SMK</h1>
          </div>

          <fieldset className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 max-w-screen-md mx-auto">
  <div>
    <p className="font-semibold text-lg text-black">
      Kuesioner ini diperuntukan untuk Kelas XII Tahun Ajaran 2023/2024
    </p>
    <p className="mt-5 text-lg text-black-500 flex items-center">
      <span className="mr-2 font-semibold text-black">A. DATA PRIBADI</span>
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    <div className="sm:col-span-2">
      <label htmlFor="nisn" className="block text-left text-black">NISN</label>
      <input placeholder="Hanya boleh diisi dengan angka" type="number" id="nisn" name="nisn" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" />
    </div>
    <div className="sm:col-span-2">
      <label htmlFor="nama_siswa" className="block text-left text-black">Nama Siswa:</label>
      <input placeholder="Wajib mengisi nama lengkap" type="text" id="nama_siswa" name="nama_siswa" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" />
    </div>
    <div>
      <label htmlFor="tanggal_lahir" className="block text-left text-black">Tanggal Lahir:</label>
      <input type="date" id="tanggal_lahir" name="tanggal_lahir" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" />
    </div>
    <div>
      <label htmlFor="jenis_kelamin" className="block text-left text-black">Jenis Kelamin:</label>
      <select id="jenis_kelamin" name="jenis_kelamin" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black">
        <option value="">-- Pilih Jenis Kelamin --</option>
        <option value="Laki-laki">Laki-laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>
    </div>
    <div>
      <label htmlFor="npsn" className="block text-left text-black">NPSN Asal Sekolah:</label>
      <input type="number" id="npsn" name="npsn" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" />
    </div>
    <div>
      <label htmlFor="asal_sekolah" className="block text-left text-black">Asal Sekolah:</label>
      <input type="text" id="asal_sekolah" name="asal_sekolah" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" />
    </div>
    <div>
      <label htmlFor="jurusan" className="block text-left text-black">Jurusan:</label>
      <select id="jurusan" name="jurusan" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black">
        <option value="">-- Pilih Jenis Jurusan --</option>
        <option value="Komputer">Komputer</option>
        <option value="Mesin">Mesin</option>
        <option value="Tata_Boga">Tata Boga</option>
      </select>
    </div>
    <div>
      <label htmlFor="kota_kabupaten" className="block text-left text-black">Kota/Kabupaten Sekolah Asal:</label>
      <select id="kota_kabupaten" name="kota_kabupaten" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black">
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
    </div>
    <div className="sm:col-span-2">
      <label htmlFor="alamat_rumah" className="block text-left text-black">Alamat Rumah:</label>
      <textarea rows="4" name="alamat_rumah" required className="border mt-1 rounded px-4 w-full bg-gray-50 text-black"></textarea>
    </div>
    <div>
      <label htmlFor="nomor_handphone" className="block text-left text-black">Nomor Handphone:</label>
      <input placeholder="Hanya boleh diisi dengan angka" type="number" id="nomor_handphone" name="nomor_handphone" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" />
    </div>
    <div>
      <label htmlFor="email" className="block text-left text-black">Email:</label>
      <input placeholder="Wajib mengisi email" type="email" id="email" name="email" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" />
    </div>
  </div>
</fieldset>




<fieldset className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 max-w-screen-md mx-auto">
  <div>
    <p className="mt-5 text-lg text-black-500 flex items-center">
      <span className="mr-2 font-semibold text-black">B. DATA KELUARGA</span>
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    <div className="sm:col-span-2">
      <label htmlFor="nama_ayah" className="block text-left text-black">Nama Ayah:</label>
      <input  placeholder="Wajib mengisi nama ayah" type="text" id="nama_ayah" name="nama_ayah" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" />
    </div>
    <div>
        <label htmlFor="pekerjaan_ayah" className="block text-left text-black">Pekerjaan Ayah</label>
         <select id="pekerjaan_ayah" name="pekerjaan_ayah" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black">
            <option value="">-- Pilih Jenis Pekerjaan --</option>
            <option value="ASN">ASN</option>
            <option value="Non_ASN">Non ASN</option>
        </select>
    </div>
    <div className="sm:col-span-2">
      <label className="block text-left text-black">Penghasilan Ayah:</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <label className="flex items-center text-black">
          <input type="radio" name="penghasilan_ayah" value="< 3 Juta" required className="mr-2" />
          &lt; 3 Juta
        </label>
        <label className="flex items-center text-black">
          <input type="radio" name="penghasilan_ayah" value="3 - 5 Juta" required className="mr-2" />
          3 - 5 Juta
        </label>
        <label className="flex items-center text-black">
          <input type="radio" name="penghasilan_ayah" value="5 - 10 Juta" required className="mr-2" />
          5 - 10 Juta
        </label>
        <label className="flex items-center text-black">
          <input type="radio" name="penghasilan_ayah" value="> 10 Juta" required className="mr-2" />
          &gt; 10 Juta
        </label>
      </div>
    </div>
    <div className="sm:col-span-2">
      <label htmlFor="nama_ibu" className="block text-left text-black">Nama Ibu:</label>
      <input placeholder="Wajib mengisi nama ibu" type="text" id="nama_ibu" name="nama_ibu" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" />
    </div>
    <div>
        <label htmlFor="pekerjaan_ibu" className="block text-left text-black">Pekerjaan Ibu</label>
         <select id="pekerjaan_ibu" name="pekerjaan_ibu" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black">
            <option value="">-- Pilih Jenis Pekerjaan --</option>
            <option value="ASN">ASN</option>
            <option value="Non_ASN">Non ASN</option>
        </select>
    </div>
    <div className="sm:col-span-2">
      <label className="block text-left text-black">Penghasilan Ibu:</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <label className="flex items-center text-black">
          <input type="radio" name="penghasilan_ibu" value="< 3 Juta" required className="mr-2" />
          &lt; 3 Juta
        </label>
        <label className="flex items-center text-black">
          <input type="radio" name="penghasilan_ibu" value="3 - 5 Juta" required className="mr-2" />
          3 - 5 Juta
        </label>
        <label className="flex items-center text-black">
          <input type="radio" name="penghasilan_ibu" value="5 - 10 Juta" required className="mr-2" />
          5 - 10 Juta
        </label>
        <label className="flex items-center text-black">
          <input type="radio" name="penghasilan_ibu" value="> 10 Juta" required className="mr-2" />
          &gt; 10 Juta
        </label>
      </div>
    </div>
    <div>
      <label htmlFor="jumlah_saudara" className="block text-left text-black">Jumlah Saudara:</label>
      <input placeholder="Wajib mengisi saudara kandung" type="number" id="jumlah_saudara" name="jumlah_saudara" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" />
    </div>
  </div>
</fieldset>



<fieldset className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 max-w-screen-md mx-auto">
              <div>
                 <p className="mt-5 text-lg text-black-500 flex items-center">
                    <span className="mr-2 font-semibold text-black">C. DATA KELUARGA WALI</span>
                 </p>
              </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-left text-black">Apakah saudara memiliki orang tua Wali? Jika ada, klik ya</label>
                    <div className="mt-2">
                      <label className="flex items-center text-black">
                        <input type="radio" name="ada_wali" value="YA" required className="mr-2"
                          onChange={() => setHasGuardian(true)}
                        />
                        YA
                      </label>
                      <label className="flex items-center text-black">
                        <input type="radio" name="ada_wali" value="TIDAK" required className="mr-2"
                          onChange={() => setHasGuardian(false)}
                        />
                        TIDAK
                      </label>
                    </div>
                  </div>
                </div>
                
                {hasGuardian && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="sm:col-span-2">
                      <label htmlFor="nama_wali" className="block text-left text-black">Nama Orang Tua/Wali:</label>
                      <input type="text" id="nama_wali" name="nama_wali" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="pekerjaan_wali" className="block text-left text-black">Pekerjaan Orang Tua/Wali:</label>
                      <select id="pekerjaan_wali" name="pekerjaan_wali" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black">
                        <option value="">-- Pilih Jenis Pekerjaan --</option>
                        <option value="ASN">ASN</option>
                        <option value="Non_ASN">Non ASN</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-left text-black">Penghasilan Orang Tua/Wali:</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <label className="flex items-center text-black">
                          <input type="radio" name="penghasilan_wali" value="< 3 Juta" required className="mr-2" />
                          &lt; 3 Juta
                        </label>
                        <label className="flex items-center text-black">
                          <input type="radio" name="penghasilan_wali" value="3 - 5 Juta" required className="mr-2" />
                          3 - 5 Juta
                        </label>
                        <label className="flex items-center text-black">
                          <input type="radio" name="penghasilan_wali" value="5 - 10 Juta" required className="mr-2" />
                          5 - 10 Juta
                        </label>
                        <label className="flex items-center text-black">
                          <input type="radio" name="penghasilan_wali" value="> 10 Juta" required className="mr-2" />
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
                    <span className="mr-2 font-semibold text-black">D. DATA RIWAYAT PENDIDIKAN</span>
                 </p>
              </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

      <div className="sm:col-span-2">
          <label htmlFor="tahun_masuk_SMK" className="block text-left text-black">Tahun Masuk SMK</label>
          <select
            id="tahun_masuk_SMK"
            name="tahun_masuk_SMK"
            required
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
          >
            <option value="">--Pilih tahun--</option>
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
          <label htmlFor="tahun_lulus_SMK" className="block text-left text-black">Tahun lulus SMK</label>
          <select
            id="tahun_lulus_SMK"
            name="tahun_lulus_SMK"
            required
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
          >
            <option value="">--Pilih tahun--</option>
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
           <label className="block text-left text-black">Apakah Selama menjadi siswa mengikuti organisasi?</label>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
           <label className="flex items-center text-black">
             <input type="radio" name="organisasi" value="Ya" required className="mr-2" />
              Ya
           </label>
        <label className="flex items-center text-black">
             <input type="radio" name="organisasi" value="Tidak" required className="mr-2" />
              Tidak
        </label>
        </div>
       </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-left text-black">Apakah selama menjadi siswa pernah mengikuti lomba?</label>
        <div className="mt-2">
          <label className="flex items-center text-black">
            <input
              type="radio"
              name="pernah_ikut_lomba"
              value="YA"
              className="mr-2"
              onChange={() => handleCompetitionChange("YA")}
            />
            YA
          </label>
          <label className="flex items-center text-black">
            <input
              type="radio"
              name="pernah_ikut_lomba"
              value="Tidak"
              className="mr-2"
              onChange={() => handleCompetitionChange("Tidak")}
            />
            Tidak
          </label>
        </div>
      </div>
      
      {participatedInCompetition && (
        <div className="mt-4">
          <label htmlFor="jenis_lomba" className="block text-left text-black">Jenis Lomba:</label>
          <div className="mt-2">
            <label className="flex items-center text-black">
              <input
                type="radio"
                name="jenis_lomba"
                value="Akademik"
                className="mr-2"
                onChange={() => setCompetitionType('Akademik')}
              />
              Akademik
            </label>
            <label className="flex items-center text-black">
              <input
                type="radio"
                name="jenis_lomba"
                value="Akademik Sejurusan"
                className="mr-2"
                onChange={() => setCompetitionType('Akademik Sejurusan')}
              />
              Akademik Sejurusan
            </label>
            <label className="flex items-center text-black">
              <input
                type="radio"
                name="jenis_lomba"
                value="Non Akademik"
                className="mr-2"
                onChange={() => setCompetitionType('Non Akademik')}
              />
              Non Akademik
            </label>
          </div>
        </div>
      )}
      
      {competitionType === 'Akademik' && (
        <div className="mt-4">
          <label htmlFor="sub_jenis_lomba" className="block text-left text-black">Tingkat Lomba:</label>
          <select
            id="sub_jenis_lomba"
            name="sub_jenis_lomba"
            required
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
            onChange={(e) => setSubCompetitionType(e.target.value)}
          >
            <option value="">Pilih Tingkat Lomba</option>
            <option value="OSN">OSN</option>
            <option value="Olimpiade">Olimpiade</option>
          </select>
        </div>
      )}

      {competitionType === 'Akademik Sejurusan' && (
        <div className="mt-4">
          <label htmlFor="sub_jenis_lomba" className="block text-left text-black">Tingkat Lomba:</label>
          <select
            id="sub_jenis_lomba"
            name="sub_jenis_lomba"
            required
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
            onChange={(e) => setSubCompetitionType(e.target.value)}
          >
            <option value="">Pilih Tingkat Lomba</option>
            <option value="O2SN">O2SN</option>
            <option value="PON">PON</option>
          </select>
        </div>
      )}

      {competitionType === 'Non Akademik' && (
        <div className="mt-4">
          <label htmlFor="sub_jenis_lomba" className="block text-left text-black">Tingkat Lomba:</label>
          <select
            id="sub_jenis_lomba"
            name="sub_jenis_lomba"
            required
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
            onChange={(e) => setSubCompetitionType(e.target.value)}
          >
            <option value="">Pilih Tingkat Lomba</option>
            <option value="Lomba Catur">Lomba Catur</option>
            <option value="Olah Raga">Olah Raga</option>
          </select>
        </div>
      )}

      {subCompetitionType && (
        <div className="mt-4">
          <label htmlFor="tingkat_kejuaraan" className="block text-left text-black">Tingkat Kejuaraan:</label>
          <select
            id="tingkat_kejuaraan"
            name="tingkatKejuaraan"
            required
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
          >
            <option value="">Pilih Tingkat Kejuaraan</option>
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
        </div>
      )}
    </fieldset>


    <fieldset className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 max-w-screen-md mx-auto">
    <div>
        <p className="mt-5 text-lg text-black-500 flex items-center">
            <span className="mr-2 font-semibold text-black">E. RENCANA SETELAH LULUS</span>
        </p>
    </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-left text-black">
            Setelah lulus SMK, apakah akan melanjutkan studi? 
            Jika Ya akan melanjutkan studi, dimana akan melanjutkan studi?
          </label>
          <div className="mt-2">
            <label className="flex items-center text-black">
              <input 
                type="radio" 
                name="melanjutkan_studi" 
                value="YA" 
                required 
                className="mr-2"
                onChange={handleEducationChange}
              />
              YA
            </label>
            <label className="flex items-center text-black">
              <input 
                type="radio" 
                name="melanjutkan_studi" 
                value="TIDAK" 
                required 
                className="mr-2"
                onChange={handleEducationChange}
              />
              TIDAK
            </label>
          </div>
        </div>
      </div>

      {continuingEducation === true && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="mt-4">
          <label htmlFor="jenjang_pendidikan" className="block text-left text-black">Jenjang pendidikan</label>
          <select
            id="jenjang_pendidikan"
            name="jenjang pendidikan"
            required
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
          >
            <option value="">Pilih Jenjang Pendidikan</option>
            <option value="DI - Diploma 1 dengan gelar Ahli Pratama/AP">DI - Diploma I dengan gelar Ahli Pratama/AP</option>
            <option value="DII - Diploma II dengan gelar Ahli Muda/A.Ma">DII - Diploma II dengan gelar Ahli Muda/A.Ma</option>
            <option value="DIII - Dploma III dengan gelar Ahli Madya/A.Md">DIII - Dploma III dengan gelar Ahli Madya/A.Md</option>
            <option value="DIV - Diploma IV dengan gelar Sarjana Terapan/S.Tr">DIV - Diploma IV dengan gelar Sarjana Terapan/S.Tr</option>
            <option value="SI - Program Sarjana">SI - Program Sarjana</option>
          </select>
        </div>
        <div>
          <label className="block text-left text-black mt-4">Apakah studi yang anda lanjutkan sejurusan?</label>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <label className="flex items-center text-black mt-2.5">
                    <input type="radio" name="sesuai_jurusan" value="Ya" required className="mr-2" />
                      Ya
                </label>
                <label className="flex items-center text-black mt-2.5">
                    <input type="radio" name="sesuai_jurusan" value="Tidak" required className="mr-2" />
                      Tidak
                </label> 
              </div>
        </div>
        
          <div>
            <label htmlFor="program_studi" className="block text-left text-black">Program Studi:</label>
            <input placeholder="Wajib mengisi program studi" type="text" id="program_studi" name="program_studi" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" />
          </div>
          <div>
            <label htmlFor="nama_universitas" className="block text-left text-black">Nama Universitas:</label>
            <input placeholder="Wajib mengisi nama universitas" type="text" id="nama_universitas" name="nama_universitas" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" />
          </div>
          <div>
            <label htmlFor="kota_negara_universitas" className="block text-left text-black">Kota/Negara Universitas:</label>
            <input placeholder="Wajib mengisi Kota/Negara" type="text" id="kota_negara_universitas" name="kota_negara_universitas" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" />
          </div>
          <div>
          <label htmlFor="alasan_melanjutkan_studi" className="block text-left text-black">Apa alasan melanjutkan studi?</label>
          <select
            id="alasan_melanjutkan_studi"
            name="alasan melanjutkan studi"
            required
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
          >
            <option value="">--Pilih alasan--</option>
            <option value="Membuka peluang karir yang lebih bagus">Membuka peluang karir yang lebih bagus</option>
            <option value="Mempeluas jaringan sosial dan profesional">Mempeluas jaringan sosial dan profesional</option>
            <option value="Meningkatkan kemampuan berpikir kritis dan kreatif">Meningkatkan kemampuan berpikir kritis dan kreatif</option>
            <option value="Mengembangkan kepribadian yang lebih baik">Mengembangkan kepribadian yang lebih baik</option>
            <option value="Meningkatkan daya saing di era globalisasi">Meningkatkan daya saing di era globalisasi</option>
          </select>
        </div>
          <div className="sm:col-span-2">
            <label className="block text-left text-black">Kriteria utama kampus pilihan:</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              <label className="flex items-center text-black">
                <input type="radio" name="kriteria_kampus" value="Kampus dekat rumah" required className="mr-2" />
                Kampus dekat rumah
              </label>
              <label className="flex items-center text-black">
                <input type="radio" name="kriteria_kampus" value="Ada alumni" required className="mr-2" />
                Ada alumni
              </label>
              <label className="flex items-center text-black">
                <input type="radio" name="kriteria_kampus" value="Kampus banyak prestasi" required className="mr-2" />
                Kampus banyak prestasi
              </label>
              <label className="flex items-center text-black">
                <input type="radio" name="kriteria_kampus" value="Tersedia sistem belajar online" required className="mr-2" />
                Tersedia sistem belajar online
              </label>
              <label className="flex items-center text-black">
                <input type="radio" name="kriteria_kampus" value="Banyak beasiswa" required className="mr-2" />
                Banyak beasiswa
              </label>
              <label className="flex items-center text-black">
                <input type="radio" name="kriteria_kampus" value="Biaya kuliah terjangkau" required className="mr-2" />
                Biaya kuliah terjangkau
              </label>
              <label className="flex items-center text-black">
                <input type="radio" name="kriteria_kampus" value="Mudah dapat kerja" required className="mr-2" />
                Mudah dapat kerja
              </label>
              <label className="flex items-center text-black">
                <input type="radio" name="kriteria_kampus" value="Gedung kampus mewah dan fasilitas lengkap" required className="mr-2" />
                Gedung kampus mewah dan fasilitas lengkap
              </label>
              <label className="flex items-center text-black">
                <input type="radio" name="kriteria_kampus" value="Lainnya" required className="mr-2" onChange={handleCampusCriteriaChange} />
                Lainnya
              </label>
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
          <label className="block text-left text-black">Jika Tidak akan melanjutkan studi, apa rencana saudara setelah lulus?</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <label className="flex items-center text-black">
              <input type="radio" name="tidak_lanjut_studi" value="Berkerja" required className="mr-2" onChange={handlePlanChange} />
              Berkerja
            </label>
            <label className="flex items-center text-black">
              <input type="radio" name="tidak_lanjut_studi" value="Magang atau Freelance" required className="mr-2" onChange={handlePlanChange} />
              Magang atau Freelance
            </label>
            <label className="flex items-center text-black">
              <input type="radio" name="tidak_lanjut_studi" value="Mengikuti Kursus" required className="mr-2" onChange={handlePlanChange} />
              Mengikuti Kursus
            </label>
            <label className="flex items-center text-black">
              <input type="radio" name="tidak_lanjut_studi" value="Beriwirausaha" required className="mr-2" onChange={handlePlanChange} />
              Beriwirausaha
            </label>
            <label className="flex items-center text-black">
              <input type="radio" name="tidak_lanjut_studi" value="Memulai Bisnis Online" required className="mr-2" onChange={handlePlanChange} />
              Memulai Bisnis Online
            </label>
            <label className="flex items-center text-black">
              <input type="radio" name="tidak_lanjut_studi" value="Lainnya" required className="mr-2" onChange={handlePlanChange} />
              Lainnya
            </label>
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
        </div>
      )}
    </fieldset>


              <button type="submit" className="w-full mt-2 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#1695ca] hover:bg-[#659ebc] focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out">
                submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
