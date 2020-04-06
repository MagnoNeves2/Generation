const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let rawbooks = fs.readFileSync('books.json');
let books = JSON.parse(rawbooks);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(3000)

app.get('/book', (req, res) => {
    res.json(books);
});

app.post('/book', (req, res) => {
    const book = req.body;
    if (Array.isArray(book)) {
        for (item of book) {
            books.push(item);
        }
    }
    else {
        books.push(book);
    }
    let jsonList = JSON.stringify(books);
    fs.writeFile('books.json', jsonList, 'utf8', () => { });
    res.send('Livro cadastrado com Sucesso!');
});

app.get('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }
    res.status(404).send('Livro não encontrado!');
});

console.log('Servidor rodando em: http://localhost:3000');
