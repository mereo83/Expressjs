const express = require('express');
const booksRouter =require('./routes/books')
const app = express();
app.use(express.json()); // Add this line to parse JSON request bodies
app.use(express.urlencoded({extended: true}))
app.use(booksRouter)
const port = 8000;



app.listen(port, () => console.log(`Listening on port ${port}...`));
