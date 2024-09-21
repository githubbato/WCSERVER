const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'pug');


app.set('views', path.join(__dirname, 'views'));


app.get('/:name', (req, res) => 
{ const name = req.params.name;    
res.render('index', {title: 'Pug Demo', message: 'Hello, Bossing! Welcome to Pug.'}); 
});


app.listen(3000, () => {
console.log('Server is running on http://localhost:3000');
});