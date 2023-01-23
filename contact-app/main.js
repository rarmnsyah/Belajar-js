const contact = require('./contact');

const main = async () => {
    const nama = await contact.questions("Nama : ");
    const noTelp = await contact.questions("No. Telp : ");
    const email = await contact.questions("Email : ");

    contact.simpanContact(nama, noTelp, email);
};

main();