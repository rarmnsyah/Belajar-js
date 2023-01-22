const fs = require('fs'); // Core module : yaitu module yang sudah ada di dalam nodejs dan prioritas nya lebih tinggi dari module yang kita buat sendiri
const dua = require('./dua.js'); // Module yang kita buat sendiri, prioritas kedua
const moment = require('moment'); // third party module, prioritas ketiga

// Module merupakan sebuah file yang berisi kode yang bisa kita gunakan kembali di file lain
// Module bisa berupa file javascript, json, atau nodejs core module
// Cara menggunakannya dapat dilihat pada file js satu dan dua