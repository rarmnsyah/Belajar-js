// mengambil argumen dari command line pada saat proses pemanggilan
const yargs = require('yargs');
const contact = require('./contact');

// console.log(process.argv); //menyimpan tiap argumen pada command (node main2 risky) menjadi array ['.../node.exe', '.../main2.js', 'risky']
// atau bisa menggunakan yargs
// console.log(yargs.argv); //menyimpan tiap argumen pada command (node main2 risky) menjadi object { _: [ 'risky' ], '$0': 'main2.js' }

yargs.command({
    command : 'add',
    describe : 'Menambahkan contact baru',
    builder : {
        nama : {
            describe : 'Nama lengkap',
            demandOption : true,
            type : 'string'
        },
        email : {
            describe : 'Email',
            demandOption : true,
            type : 'string'
        },
        noHP : {
            describe : 'Nomor HP',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        contact.simpanContact(argv.nama, argv.noHP, argv.email);
    }
})

yargs.command({
    command : 'del',
    describe : 'Menghapus contact',
    builder : {
        noHP : {
            describe : 'No Telepon',
            demandOption : true,
            type : 'string'
        },
        email : {
            describe : 'Email',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        contact.hapusContact(argv.noHP, argv.email);
    }
});

yargs.command({
    command : 'list',
    describe : 'Menampilkan semua nama contact',
    handler(){
        contact.listContact();
    }
});

yargs.command({
    command : 'detail',
    describe : 'Menampilkan detail contact',
    builder : {
        noHP : {
            describe : 'No Telepon',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        contact.detailContact(argv.noHP);
    }
})

yargs.parse()