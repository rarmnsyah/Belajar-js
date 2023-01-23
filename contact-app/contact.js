const fs = require('fs');
const readline = require('readline');

const dataPath = './data';
const contactDataPath = `${dataPath}/contact.json`;

if(!fs.existsSync(dataPath)){
    fs.mkdirSync(dataPath);
}

if(!fs.existsSync(contactDataPath)){
    fs.writeFileSync(contactDataPath, '[]', 'utf-8');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menggunakan arsitektur algoritma yang seperti ini akan mengakibatkan hell of callback, sehingga kita perlu memanipulasi callback hell dengan menggunakan promise atau async await seperti di bawah ini
// rl.question('Masukkan nama anda: ', (nama) => {
//     rl.question('Masukkan nomor telepon anda: ', (noTelp) => {
//         rl.question('Masukkan email anda: ', (email) => {
//             const contact = { nama, noTelp, email };
//             const fileBuffer = fs.readFileSync(contactDataPath, 'utf-8');
//             const contacts = JSON.parse(fileBuffer);
//             contacts.push(contact);
//             fs.writeFileSync(contactDataPath, JSON.stringify(contacts));
//             rl.close();
//         });
//     });
// });

const questions = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answered) => {
            resolve(answered);
        });
    });
};

// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukkan nomor telepon anda: ', (noTelp) => {
//             resolve(noTelp);
//         });
//     });
// };

// const pertanyaan3 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukkan email anda: ', (email) => {
//             resolve(email);
//         });
//     });
// };

const simpanContact = (nama, noTelp, email) => {
    const contact = { nama, noTelp, email };
    const fileBuffer = fs.readFileSync(contactDataPath, 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    contacts.push(contact);
    fs.writeFileSync(contactDataPath, JSON.stringify(contacts));
    rl.close();
};

module.exports = { questions, simpanContact };