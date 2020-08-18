//soal nomor 1
let dept = "HR";

if (dept == "HR") {
  console.log("Tugas HR adalah melakukan rekruitmen pegawai");
} else if (dept == "Tech") {
  console.log(
    "Tugas departemen Techology adalah melakukan riset serta implementasi dibidang teknologi"
  );
} else if (dept == "Marketing") {
  console.log(
    "Tugas Marketing adalah melakukan membaca pasar serta membuat strategi pasar"
  );
} else if (dept == "Keuangan") {
  console.log(
    "Tugas departemen keuangan adalah melakukan segala sesuatu yang berhubungan dengan keuangan dalam perusahaan"
  );
} else {
  console.log("Tugas tidak tersedia dalam database");
}

//soal nomor 2
let angka1 = 15;
let angka2 = 12;

if (angka1 > angka2) {
  console.log("angka pertama lebih besar dari angka kedua");
} else if (angka1 < angka2) {
  console.log("angka kedua lebih besar dari angka pertama");
} else if (angka1 == angka2) {
  console.log("angka pertama bernilai sama dengan angka kedua");
}

//soal nomor 3
let angkaHari = 1;

switch (angkaHari) {
  case 1: {
    console.log("minggu");
    break;
  }
  case 2: {
    console.log("senin");
    break;
  }
  case 3: {
    console.log("selasa");
    break;
  }
  case 4: {
    console.log("rabu");
    break;
  }
  case 5: {
    console.log("kamis");
    break;
  }
  case 6: {
    console.log("jumat");
    break;
  }
  case 7: {
    console.log("sabtu");
    break;
  }
}

//soal nomor 4
let direction = "UP";

switch (direction) {
  case "UP": {
    console.log("Karakter berjalan ke atas");
    break;
  }
  case "RIGHT": {
    console.log("Karakter berjalan ke kanan");
    break;
  }
  case "BOTTOM": {
    console.log("Karakter berjalan ke bawah");
    break;
  }
  case "LEFT": {
    console.log("Karakter berjalan ke kiri");
    break;
  }
}
