const express = require('express');
const app = express();
app.use(express.json()); // Add this line to parse JSON request bodies
const port = 3000;

const books = [
  { id: 1, Bkname: 'Things fall apart', author: 'Achebe' },
  { id: 2, Bkname: 'Rom n Julie', author: 'Shakespeare' },
  { id: 3, Bkname: 'Unoma', author: 'Moi' }
];

app.get('/', (req, res) => {
  res.send('Welcome to my book store');
});

app.get('/api/books', (req, res) => {
  res.send(books);
});

app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));

  if (!book) {
    res.status(404).send('Book with the given id was not found');
  } else {
    res.send(book);
  }
});

app.post('/api/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    Bkname: req.body.Bkname,
    author: req.body.author
  };

  books.push(newBook);
  res.send(newBook);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
