const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const db = require('./db');

const {addBooks,findAllBooks,updateBooks,deleteBooks,bookDescending} = require('./books');
/* ==================== */

// console.log('HHHHHHHHHHHHHHHHHHHHHHHHHH:',users);
// users.findAll();

app.get('/books',findAllBooks);
app.post('/books', addBooks);
app.put('/books:book_id', updateBooks);
app.delete('/books:book_id',deleteBooks);

/* ==================== */

const PORT = 3000;
app.listen(PORT, () => {
  console.log('SERVER IS WORKING ON http://localhost:' + PORT);
});