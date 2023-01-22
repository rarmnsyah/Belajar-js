const siapa_saya = (nama) => 'Halo, nama saya ' + nama;
const PI = 3.14;

// console.log(siapa_saya('Rizal'));

// module.exports.PI = PI;
// module.exports.siapa_saya = siapa_saya;

// cara lain
module.exports = {
    siapa_saya, PI
};