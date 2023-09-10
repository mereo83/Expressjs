const express = require('express');
const cookieParser = require('cookie-parser'); // Import cookie-parser
const booksRouter =require('./routes/books')
const managementRouter =require('./routes/management')
const app = express();
const port = 7000;



app.use(cookieParser());
app.use(express.json()); // Add this line to parse JSON request bodies
app.use(express.urlencoded({extended: true}))
app.use(booksRouter)
app.use(managementRouter);





app.listen(port, () => console.log(`Listening on port ${port}...`));
