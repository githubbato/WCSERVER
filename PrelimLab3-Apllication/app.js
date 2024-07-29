
const express = require('express');
const rootMessage = require('./root');
const aboutMessage = require('./about');
const contactMessage = require('./contact');

const app = express();
const port = 5000; // 

app.get('/', (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <p>${rootMessage('John Smith')}</p>
        <p>Michael Usi Jr, July 28, WD303</p>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
        <h1>This is the About Page</h1>
        <p>${aboutMessage('John Smith')}</p>
        <p>Michael Usi Jr, July 28, WD303</p>
    `);
});

app.get('/contact', (req, res) => {
    res.send(`
        <h1>This is the Contact Page</h1>
        <p>${contactMessage('John Smith')}</p>
        <p>Michael Usi Jr, July 28, WD303</p>
    `);
});

app.get('/gallery', (req, res) => {
    res.send(`
        <h1>This is the Gallery Page</h1>
        <p>Welcome to the Gallery!</p>
        <p>Michael Usi Jr, July 28, WD303</p>
    `);
});


app.use((req, res) => {
    res.status(404).send(`
        <h1>404 Not Found</h1>
        <p>The page does not exist.</p>
        <p>Michael Usi Jr, July 28, WD303</p>
    `);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
