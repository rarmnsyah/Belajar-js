const http = require('http');
const fs = require('fs');

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error: File not found');
        } else {
            res.write(data);
        }
        res.end();  
    });
}

http
    .createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        const url = req.url;
        // res.write('Hello World!');

        if (url === '/about') {
            renderHTML('./about.html', res);
        } else {
            renderHTML('./index.html', res);
        };
        res.end();
    })
    .listen(
        3000, () => console.log('Server is running on port 3000...')
        );