const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const books = [
    { id: 1, title: "Mockingjay", author: "Suzanne Collins" },
    { id: 2, title: "Catching Fire", author: "Suzanne Collins" },
];


app.get('/', (req, res) => {
    res.json(books);
});


app.get('/book', (req, res) => {
    const bookId = parseInt(req.query.id);
    const book = books.find(b => b.id === bookId);
    
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('<h1>Book not found</h1>');
    }
});


app.get('/new-book', (req, res) => {
    res.send(`
        <form action="/new-book" method="POST">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title"><br>
            <label for="author">Author:</label>
            <input type="text" id="author" name="author"><br>
            <button type="submit">Add Book</button>
        </form>
    `);
});

app.post('/new-book', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    
    books.push(newBook);
    res.send('<h1>New book added successfully!</h1><p><a href="/">Go back to book list</a></p>');
});


var server = app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});
