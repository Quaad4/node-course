//creating express server
const express = require('express');

const app = express();

// register view engine
app.set('view engine', 'ejs');
// set the folder where ejs should run
app.set('views', 'views');

app.listen(3000);

// regular routes
app.get('/', (req, res) => {
   res.render('index', {
      title: '| Home',
   });
});

app.get('/about', (req, res) => {
   res.render('about', {
      title: '| about',
   });
});

app.get('/blogs/create', (req, res) => {
   res.render('create', {
      title: '| Create a new Blog',
   });
});

//404 not found
app.use((req, res) => {
    res.status(404).render('404', {
      title: '| 404',
   });
});