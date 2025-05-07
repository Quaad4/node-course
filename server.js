const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./views/index.html', { encoding: 'utf8' }, (err, data) => {
        if(err) {
            console.log(err)
            res.statusCode = 500;
            res.end();
        } else {
            console.log(data)
            res.write(data)
            res.end();
        }
    })
})

const PORT = 3000;
server.listen(PORT, 'localhost', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})