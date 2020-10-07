const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database.js');

const app = express();
const sequelize = database.sequelize;
const Book = database.models.Book;

app.use(bodyParser.json());

app.put('/book/:isbn', (req, res) => {
    const isbn = req.params['isbn'];
    const book = req.body;

    if (isbn === book.isbn) {
        sequelize.transaction(async t => {
            const b = await Book.findById(isbn);

            if (b !== null) {
                await Book.update(book, { where: { isbn: isbn } });
                return Promise.resolve(res.status(201).send(book));
            } else {
                const created = await await Book.create(book);
                return Promise.resolve(res.status(201).send(created));
            }
        });
    } else {
        res.sendStatus(400);
    }
});

app.delete('/book/:isbn', (req, res) => {
    const isbn = req.params['isbn'];

    sequelize.transaction(async t => {
        const b = await  Book.findById(isbn);

        if (b !== null) {
            await Book.destroy({ where: { isbn: isbn } });
            return Promise.resolve(res.sendStatus(204));
        } else {
            return Promise.resolve(res.sendStatus(204));
        }
    });
});

app.get('/book/:isbn', (req, res) => {
    const isbn = req.params['isbn'];

    sequelize.transaction(async t => {
        const b = await Book.findById(isbn);

        if (b !== null) {
            return Promise.resolve(res.send(b));
        } else {
            return Promise.resolve(res.sendStatus(404));
        }
    });
});

app.get('/book', (req, res) => {
    sequelize.transaction(async t => {
        const books =  await Book.findAll({ order: [['price', 'ASC']] });
        return Promise.resolve(res.send(books));
    });
});

app.listen(3000);