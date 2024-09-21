const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index', {
        family_name: 'Rizal',
        first_name: 'Jose',
        adress: 'Angeles City',
        phone_num: '123456',
    })
})

app.get('/', (req, res) => {
    res.render('index', { title: 'My EJS App' });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

//serve static files
app.use(express.static('public'));