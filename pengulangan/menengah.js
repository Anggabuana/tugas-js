// nomer 1 menengah

// function findLargestNumber() {
//     let x = parseFloat(prompt("Masukkan bilangan pertama (x):"));
//     let y = parseFloat(prompt("Masukkan bilangan kedua (y):"));
    
//     if (x > y) {
//         alert("Bilangan terbesar adalah: " + x);
//     } else if (y > x) {
//         alert("Bilangan terbesar adalah: " + y);
//     } else {
//         alert("Kedua bilangan sama besar.");
//     }
// }

// findLargestNumber();

// nomer 2 menengah

function checkRoots() {
    // Meminta input pengguna untuk koefisien a, b, dan c
    let a = parseFloat(prompt("Masukkan koefisien a (untuk x^2):"));
    let b = parseFloat(prompt("Masukkan koefisien b (untuk x):"));
    let c = parseFloat(prompt("Masukkan konstanta c:"));

    // Menghitung diskriminan D = b^2 - 4ac
    let D = (b * b) - (4 * a * c);

    // Menentukan jenis akar berdasarkan nilai D
    if (D > 0) {
        alert("Akar-akar persamaan kuadrat adalah real dan berbeda.");
    } else if (D === 0) {
        alert("Akar-akar persamaan kuadrat adalah real dan sama.");
    } else {
        alert("Akar-akar persamaan kuadrat adalah imajiner.");
    }

    // Menampilkan nilai diskriminan
    alert("Nilai diskriminan (D) adalah: " + D);
}

// Memanggil fungsi untuk memulai proses
checkRoots();