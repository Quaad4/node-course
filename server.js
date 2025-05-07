const http = require('http');
const fs = require('fs');
const _ = require('lodash')

const server = http.createServer((req, res) => {

    // lodash
    const num = _.random(0, 20);
    console.log(num);
    const greet = _.once(() => {
        console.log('hello');
    });
    
    greet();
    greet();

    // set header content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let path = './views/'
    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about': 
            path += 'about.html';
            break;
        case '/about-us': 
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            res.end();
            break;
        default: 
            path += '404.html'
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            res.end();
        } else {
            res.write(data)
            res.end();
        }
    })
})

const PORT = 3000;
server.listen(PORT, 'localhost', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})