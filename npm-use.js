// module third-party validator (https://www.npmjs.com/package/validator) : yang digunakan untuk validasi data misalnya email, url, dll
// nodemon adalah module yang digunakan untuk menjalankan ulang nodejs secara otomatis ketika ada perubahan pada file yang dijalankan.
// nodemon tidak bisa dijalankan secara otomatis pada package, sehingga harus disetting pada script json terlebih dahulu (Contoh pada test.js)
const validator =  require('validator');

console.log(validator.isEmail('rarmnsyah@gmail.com')); // true
console.log(validator.isEmail('rarmnsyah@gmail')); // false

console.log(validator.isURL('https://www.google.com')); // true
