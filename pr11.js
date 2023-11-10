class Biodata {
  constructor(nama, tanggalLahir, alamat, mobile, email) {
    this.nama = nama;
    this.tanggalLahir = tanggalLahir;
    this.alamat = alamat;
    this.mobile = mobile;
    this.email = email;
  }
  say() {
    console.log(
      `Halo nama saya ${this.nama}, umur saya ${
        new Date(new Date() - new Date(this.tanggalLahir)).getFullYear() - 1970
      } tahun, alamat saya ${this.alamat}`
    );
  }
}

class Dokter extends Biodata {
  constructor(
    nama,
    tanggalLahir,
    alamat,
    mobile,
    email,
    alamatRumahSakit,
    profesi,
    pengalamanKerja
  ) {
    super(nama, tanggalLahir, alamat, mobile, email);
    this.alamatRumahSakit = alamatRumahSakit;
    this.profesi = profesi;
    this.pengalamanKerja = pengalamanKerja;
  }
  say() {
    console.log(
      `halo nama saya ${this.nama}, saya berprofesi sebagai ${this.profesi} dan beroperasi di ${this.alamatRumahSakit}`
    );
  }
}

class Ojol extends Biodata {
  constructor(
    nama,
    tanggalLahir,
    alamat,
    mobile,
    email,
    kendaraan,
    profesi,
    platNomor
  ) {
    super(nama, tanggalLahir, alamat, mobile, email);
    this.kendaraan = kendaraan;
    this.profesi = profesi;
    this.platNomor = platNomor;
  }
  say() {
    console.log(
      `halo nama saya ${this.nama}, saya berprofesi sebagai ${this.profesi} dan kendaraan saya ${this.kendaraan}`
    );
  }
}

const udin = new Ojol(
  "udin",
  "01/01/2000",
  "Cianjur",
  "Andoroid",
  "udin@gmail.com",
  "supra fit",
  "Ojol",
  "F1230NS"
);

udin.say();
console.log(udin);

const budi = new Dokter(
  "budi",
  "2000-01-01",
  "Cianjur",
  "Andoroid",
  "udin@gmail.com",
  "RSCM SUCIPTO",
  "Dokter",
  3
);

budi.say();
console.log(budi);

const andi = new Biodata(
  "Andi",
  "1995-01-01",
  "Cianjur",
  "Andoroid",
  "udin@gmail.com"
);
andi.say();
