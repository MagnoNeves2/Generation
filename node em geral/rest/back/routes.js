const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const fs = require('fs');

// Leitura do arquivo books.json através do módulo fileSyncro (de forma síncrona)
let rawbooks = fs.readFileSync('books.json');
let books = JSON.parse(rawbooks);


router.use(bodyParser.urlencoded({ extended: false })); // .urlencoded({ extended: false}) serve para poder fazer o body parser funcionar.
router.use(bodyParser.json()); // Estrutura o objeto para que facilite a leitura dos parametros

router.post('/book', (req, res) => {
    const book = req.body;
    console.log(book);
    books.push(book);
    let jsonList = JSON.stringify(books);
    fs.writeFile('books.json', jsonList, 'utf8', () => { });
    res.send('Livro adicionado ao banco de dados!')
});

router.get('/book', (req, res) => {
    res.json(books);
});

router.get('/book/:isbn', (req, res) => {
    // const { isbn }  = req.params; // Isso é a mesma coisa que o de baixo... Entretanto seria a forma simplicidada.
    const isbn = req.params.isbn;
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }
    res.status(404).send('Book not found');

});

router.get('/', (req, res) => {
    res.send('API de Livros');
});

router.delete('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    for (book of books) {
        if (book.isbn === isbn) {
            let index = books.indexOf(book, 0);
            books.splice(index, 1);
        }
    }
    let jsonList = JSON.stringify(books);
    fs.writeFile('books.json', jsonList, 'utf8', () => { });
    res.send('Book is deleted');
});

module.exports = router;