// soal 1
// Menjalankan logika saat tombol ditekan
// document.getElementById("cekButton").onclick = function() {
//     const x = parseInt(document.getElementById('bilanganX').value);
//     const y = parseInt(document.getElementById('bilanganY').value);
//     const output = document.getElementById('output');

//     let result; // Variabel untuk menyimpan hasil

//     if (x > y) {
//         result = "Bilangan terbesar adalah: " + x;
//     } else if (x < y) {
//         result = "Bilangan terbesar adalah: " + y;
//     } else {
//         result = "Kedua bilangan sama besar.";
//     }

//     // Menampilkan hasil di alert dan di output
//     alert(result); // Menampilkan hasil dalam alert
//     output.innerText = result; // Menampilkan hasil dalam elemen output
// };

// // Menjalankan logika dengan nilai default saat halaman dimuat
// const defaultX = parseInt(document.getElementById('bilanganX').value);
// const defaultY = parseInt(document.getElementById('bilanganY').value);
// const output = document.getElementById('output');

// let defaultResult;

// if (defaultX > defaultY) {
//     defaultResult = "Bilangan terbesar adalah: " + defaultX;
// } else if (defaultX < defaultY) {
//     defaultResult = "Bilangan terbesar adalah: " + defaultY;
// } else {
//     defaultResult = "Kedua bilangan sama besar.";
// }

// // Menampilkan hasil default di alert dan di output
// alert(defaultResult); // Menampilkan hasil dalam alert saat halaman dimuat
// output.innerText = defaultResult; // Menampilkan hasil dalam elemen output

// soal 2

// Menjalankan logika saat tombol ditekan
// document.getElementById("cekButton").onclick = function() {
//     const x = parseInt(document.getElementById('bilanganX').value);
//     const y = parseInt(document.getElementById('bilanganY').value);
//     const z = parseInt(document.getElementById('bilanganZ').value);
//     const output = document.getElementById('output');

//     let result; // Variabel untuk menyimpan hasil

//     if (x >= y && x >= z) {
//         result = "Bilangan terbesar adalah: " + x;
//     } else if (y >= x && y >= z) {
//         result = "Bilangan terbesar adalah: " + y;
//     } else {
//         result = "Bilangan terbesar adalah: " + z;
//     }

//     // Menampilkan hasil di alert dan di output
//     alert(result); // Menampilkan hasil dalam alert
//     output.innerText = result; // Menampilkan hasil dalam elemen output
// };

// // Menjalankan logika dengan nilai default saat halaman dimuat
// const defaultX = parseInt(document.getElementById('bilanganX').value);
// const defaultY = parseInt(document.getElementById('bilanganY').value);
// const defaultZ = parseInt(document.getElementById('bilanganZ').value);
// const output = document.getElementById('output');

// let defaultResult;

// if (defaultX >= defaultY && defaultX >= defaultZ) {
//     defaultResult = "Bilangan terbesar adalah: " + defaultX;
// } else if (defaultY >= defaultX && defaultY >= defaultZ) {
//     defaultResult = "Bilangan terbesar adalah: " + defaultY;
// } else {
//     defaultResult = "Bilangan terbesar adalah: " + defaultZ;
// }

// // Menampilkan hasil default di alert dan di output
// alert(defaultResult); // Menampilkan hasil dalam alert saat halaman dimuat
// output.innerText = defaultResult; // Menampilkan hasil dalam elemen output

// soal 3

// Menjalankan logika saat tombol ditekan
// document.getElementById("cekButton").onclick = function() {
//     const a = parseInt(document.getElementById('nilaiA').value);
//     const b = parseInt(document.getElementById('nilaiB').value);
//     const c = parseInt(document.getElementById('nilaiC').value);

//     const diskriminan = (b * b) - (4 * a * c);
//     let result;

//     if (diskriminan > 0) {
//         const x1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
//         const x2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
//         result = "Akar-akar real dan berbeda: x1 = " + x1 + ", x2 = " + x2;
//     } else if (diskriminan === 0) {
//         const x = -b / (2 * a);
//         result = "Akar-akar real dan sama: x = " + x;
//     } else {
//         result = "Akar-akar imajiner (tidak real).";
//     }

//     alert(result); // Menampilkan hasil dalam alert
// };

// // Menjalankan logika dengan nilai default saat halaman dimuat
// const defaultA = parseInt(document.getElementById('nilaiA').value);
// const defaultB = parseInt(document.getElementById('nilaiB').value);
// const defaultC = parseInt(document.getElementById('nilaiC').value);

// const defaultDiskriminan = (defaultB * defaultB) - (4 * defaultA * defaultC);
// let defaultResult;

// if (defaultDiskriminan > 0) {
//     const defaultX1 = (-defaultB + Math.sqrt(defaultDiskriminan)) / (2 * defaultA);
//     const defaultX2 = (-defaultB - Math.sqrt(defaultDiskriminan)) / (2 * defaultA);
//     defaultResult = "Akar-akar real dan berbeda: x1 = " + defaultX1 + ", x2 = " + defaultX2;
// } else if (defaultDiskriminan === 0) {
//     const defaultX = -defaultB / (2 * defaultA);
//     defaultResult = "Akar-akar real dan sama: x = " + defaultX;
// } else {
//     defaultResult = "Akar-akar imajiner (tidak real).";
// }

// alert(defaultResult); // Menampilkan hasil default di alert saat halaman dimuat

// soal 4

// Menjalankan logika saat tombol ditekan
// document.getElementById("cekButton").onclick = function() {
//     const x = parseInt(document.getElementById('bilanganX').value);
//     const y = parseInt(document.getElementById('bilanganY').value);
//     const z = parseInt(document.getElementById('bilanganZ').value);
//     const output = document.getElementById('output');

//     if (x === y || x === z || y === z) {
//         output.innerText = "Masukkan nilai yang berbeda untuk x, y, dan z.";
//     } else if (x > y && x > z) {
//         output.innerText = "Bilangan terbesar adalah: " + x;
//     } else if (y > x && y > z) {
//         output.innerText = "Bilangan terbesar adalah: " + y;
//     } else {
//         output.innerText = "Bilangan terbesar adalah: " + z;
//     }
// };

// // Menjalankan logika dengan nilai default saat halaman dimuat
// const defaultX = parseInt(document.getElementById('bilanganX').value);
// const defaultY = parseInt(document.getElementById('bilanganY').value);
// const defaultZ = parseInt(document.getElementById('bilanganZ').value);
// const output = document.getElementById('output');

// if (defaultX === defaultY || defaultX === defaultZ || defaultY === defaultZ) {
//     output.innerText = "Masukkan nilai yang berbeda untuk x, y, dan z.";
// } else if (defaultX > defaultY && defaultX > defaultZ) {
//     output.innerText = "Bilangan terbesar adalah: " + defaultX;
// } else if (defaultY > defaultX && defaultY > defaultZ) {
//     output.innerText = "Bilangan terbesar adalah: " + defaultY;
// } else {
//     output.innerText = "Bilangan terbesar adalah: " + defaultZ;
// }

// soal 5

// Menjalankan logika saat tombol ditekan
// document.getElementById("cekButton").onclick = function() {
//     const x = parseInt(document.getElementById('koordinatX').value);
//     const y = parseInt(document.getElementById('koordinatY').value);
//     const output = document.getElementById('output');

//     if (x > 0 && y > 0) {
//         output.innerText = "Titik berada di kuadran I.";
//     } else if (x < 0 && y > 0) {
//         output.innerText = "Titik berada di kuadran II.";
//     } else if (x < 0 && y < 0) {
//         output.innerText = "Titik berada di kuadran III.";
//     } else if (x > 0 && y < 0) {
//         output.innerText = "Titik berada di kuadran IV.";
//     } else if (x === 0 && y !== 0) {
//         output.innerText = "Titik berada di sumbu y.";
//     } else if (x !== 0 && y === 0) {
//         output.innerText = "Titik berada di sumbu x.";
//     } else {
//         output.innerText = "Titik berada di titik pusat (0, 0).";
//     }
// };

// // Menjalankan logika dengan nilai default saat halaman dimuat
// const defaultX = parseInt(document.getElementById('koordinatX').value);
// const defaultY = parseInt(document.getElementById('koordinatY').value);
// const output = document.getElementById('output');

// if (defaultX > 0 && defaultY > 0) {
//     output.innerText = "Titik berada di kuadran I.";
// } else if (defaultX < 0 && defaultY > 0) {
//     output.innerText = "Titik berada di kuadran II.";
// } else if (defaultX < 0 && defaultY < 0) {
//     output.innerText = "Titik berada di kuadran III.";
// } else if (defaultX > 0 && defaultY < 0) {
//     output.innerText = "Titik berada di kuadran IV.";
// } else if (defaultX === 0 && defaultY !== 0) {
//     output.innerText = "Titik berada di sumbu y.";
// } else if (defaultX !== 0 && defaultY === 0) {
//     output.innerText = "Titik berada di sumbu x.";
// } else {
//     output.innerText = "Titik berada di titik pusat (0, 0).";
// }

// soal 6

// Menjalankan logika saat tombol ditekan
// document.getElementById("cekButton").onclick = function() {
//     const x = parseInt(document.getElementById('koordinatX').value);
//     const y = parseInt(document.getElementById('koordinatY').value);
//     const output = document.getElementById('output');

//     if (x > 0 && y > 0) {
//         output.innerText = "Titik berada di kuadran I.";
//     } else if (x < 0 && y > 0) {
//         output.innerText = "Titik berada di kuadran II.";
//     } else if (x < 0 && y < 0) {
//         output.innerText = "Titik berada di kuadran III.";
//     } else if (x > 0 && y < 0) {
//         output.innerText = "Titik berada di kuadran IV.";
//     } else if (x === 0 && y !== 0) {
//         output.innerText = "Titik berada di sumbu y.";
//     } else if (x !== 0 && y === 0) {
//         output.innerText = "Titik berada di sumbu x.";
//     } else {
//         output.innerText = "Titik berada di titik pusat (0, 0).";
//     }
// };

// // Menjalankan logika dengan nilai default saat halaman dimuat
// const defaultX = parseInt(document.getElementById('koordinatX').value);
// const defaultY = parseInt(document.getElementById('koordinatY').value);
// const output = document.getElementById('output');

// if (defaultX > 0 && defaultY > 0) {
//     output.innerText = "Titik berada di kuadran I.";
// } else if (defaultX < 0 && defaultY > 0) {
//     output.innerText = "Titik berada di kuadran II.";
// } else if (defaultX < 0 && defaultY < 0) {
//     output.innerText = "Titik berada di kuadran III.";
// } else if (defaultX > 0 && defaultY < 0) {
//     output.innerText = "Titik berada di kuadran IV.";
// } else if (defaultX === 0 && defaultY !== 0) {
//     output.innerText = "Titik berada di sumbu y.";
// } else if (defaultX !== 0 && defaultY === 0) {
//     output.innerText = "Titik berada di sumbu x.";
// } else {
//     output.innerText = "Titik berada di titik pusat (0, 0).";
// }