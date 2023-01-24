const fs = require('fs');
const readline = require('readline');
const validator = require('validator');

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
//     rl.question('Masukkan nomor telepon anda: ', (noHP) => {
//         rl.question('Masukkan email anda: ', (email) => {
//             const contact = { nama, noHP, email };
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
//         rl.question('Masukkan nomor telepon anda: ', (noHP) => {
//             resolve(noHP);
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

const getContact = () => {
    const fileBuffer = fs.readFileSync(contactDataPath, 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;
};

const simpanContact = (nama, noHP, email) => {
    const contact = { nama, noHP, email };
    const contacts = getContact();  

    if (!validator.isMobilePhone(noHP, 'id-ID') || !validator.isEmail(email)) {
        console.log("No. Telp atau email tidak valid!");
        rl.close();
        return false;
    }
    
    const duplicate_checker = contacts.find((contact) => contact.noHP === noHP);
    const duplicate_checker2 = contacts.find((contact) => contact.email === email);
    
    if(duplicate_checker || duplicate_checker2) {
        console.log("No. Telp / email sudah terdaftar!");
        rl.close();
        return false;
    }
    
    contacts.push(contact);
    fs.writeFileSync(contactDataPath, JSON.stringify(contacts));
    console.log("Terimakasih sudah mengisi data!");
    rl.close();
    //jika menggunakan readline.createInterface, maka harus ditutup. Sedangkan, jika menggunakan yargs kita tidak perlu menutupnya
};

const hapusContact = (noHP, email) => {
    const contact = {noHP}
    const contacts = getContact();  

    if(contacts.find((contact) => contact.noHP === noHP) === undefined) {
        console.log("No. Telp dan email tidak terdaftar!");
        rl.close();
    } else {
        const newContacts = contacts.filter((contact) => contact.noHP !== noHP);
        fs.writeFileSync(contactDataPath, JSON.stringify(newContacts));
        console.log("Data berhasil dihapus!");
    }
    rl.close();
};

const listContact = () => {
    const contacts = getContact();
    console.log("Daftar kontak: ");
    contacts.forEach((contact, i) => {
        console.log(`${i+1}. ${contact.nama} - ${contact.noHP}`);
    });
    rl.close();
};

const detailContact = (noHP) => {
    const contacts = getContact();
    const contact = contacts.find((contact) => contact.noHP === noHP);
    console.log(`Nama\t\t: ${contact.nama}`);
    console.log(`No. Telp\t: ${contact.noHP}`);
    console.log(`Email\t\t: ${contact.email}`);
    rl.close();
};

module.exports = { questions, simpanContact, hapusContact, listContact, detailContact };