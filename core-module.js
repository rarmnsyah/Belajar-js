// core module adalah module yang sudah ada di dalam nodejs dan prioritas nya lebih tinggi dari module yang kita buat sendiri

const fs = require('fs'); // fs yaitu core module yang berfungsi untuk mengolah file

// salah satu contoh pengaplikasian modul fs (menulis data ke file data.txt)
// fs.writeFile('data.txt', 'Hello World', (err) => {
//     if (err) throw err;
//     console.log('File berhasil dibuat');
// });

fs.writeFileSync('data.txt', 'Hello World'); // cara lain untuk menulis data ke file

// membaca isi fil
// const data = fs.readFile('data.txt', 'utf-8', (err, data) => {
//     console.log(data);
//     if(err) throw err;
// });
const dataSync = fs.readFileSync('data.txt', 'utf-8'); // cara lain untuk membaca isi file
console.log(dataSync);

const readline = require('readline'); // core module yang berfungsi untuk membaca input dari user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan nama anda: ', (nama) => {
    rl.question('Masukkan umur anda: ', (umur) => {
        var umur = parseInt(umur);
        if (umur !== umur) throw new Error('Umur harus berupa angka');
        const orang = {
            nama,
            umur
        };
        const fileBuffer = fs.readFileSync('orang.json', 'utf-8');
        const fileOrang = JSON.parse(fileBuffer);
        fileOrang.push(orang);
        fs.writeFileSync('orang.json', JSON.stringify(fileOrang));
        rl.close();
    });
});

