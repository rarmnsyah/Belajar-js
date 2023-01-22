// ini adalah contoh penggunaan local module (file satu.js berusahan memanggil function siapa_saya pada file dua.js)
// Kita dapat memanggil baik function, variable, object, maupun class  yang ada di dalam file dua.js

const satu = require('./dua.js');

console.log(satu.siapa_saya('Rizal'));
console.log(satu.PI);

