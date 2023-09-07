const { Router } = require("express");
const router = Router();

const books = [
  {
    bookId: 1,
    book_name: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll"
  },
  {
    "bookId": 2,
    "book_name": "The Little Mermaid",
    "author": "Hans Christian Andersen"
},
{
    "bookId": 3,
    "book_name": "Winnie-the-Pooh",
    "author": "A.A. Milne"
},
{
    "bookId": 4,
    "book_name": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    "author": "C.S. Lewis"
},
{
    "bookId": 5,
    "book_name": "Peter Pan",
    "author": "J.M. Barrie"
},
{
    "bookId": 6,
    "book_name": "Matilda",
    "author": "Roald Dahl"
},
{
    "bookId": 7,
    "book_name": "Where the Wild Things Are",
    "author": "Maurice Sendak"
},
{
    "bookId": 8,
    "book_name": "Charlotte's Web",
    "author": "E.B. White"
},
{
    "bookId": 9,
    "book_name": "The Gruffalo",
    "author": "Julia Donaldson"
},
{
    "bookId": 10,
    "book_name": "Goodnight Moon",
    "author": "Margaret Wise Brown"
}
];

router.get('/', (req, res) => {
  res.send('Welcome to my book store');
});

router.get('/api/books', (req, res) => {
  res.send(books);
});

router.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.bookId === parseInt(req.params.id));

  if (!book) {
    res.status(404).send('Book with the given id was not found');
  } else {
    res.send(book);
  }
});

router.post('/api/books', (req, res) => {
  const newBook = {
    bookId: books.length + 1,
    book_name: req.body.book_name, // Corrected property name
    author: req.body.author
  };

  books.push(newBook);
  res.send(newBook);
});

module.exports = router;
