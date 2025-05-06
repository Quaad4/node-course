const fs = require('fs');
const data = 'blah blah blah'

if(fs.existsSync('./docs/blog1.txt')) {
    fs.writeFile('./docs/blog1.txt', data, (err) => {
        if(err) {
            console.log('err')
        } else {
            console.log('file written to successfully')
        }
    });
}

if(fs.existsSync('./docs/blog1.txt')) {
    fs.readFile('./docs/blog1.txt', { encoding: 'utf8' },  (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
}

if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('folder created!')
        }
    })  
}

if(fs.existsSync('./assets')) {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('folder deleted!')
        }
    })  
}

if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('file deleted successfully')
        }   
    })
}