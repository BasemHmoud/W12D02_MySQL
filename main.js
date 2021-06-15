const express = require('express');
const app = express();
require('dotenv').config();

const db = require('./db');

const books = require('./books');
/* ==================== */

// console.log('HHHHHHHHHHHHHHHHHHHHHHHHHH:',users);
// users.findAll();

app.get('/books', books.findAllBooks);
app.post('/books', books.addBooks);

/* ==================== */

const PORT = 3000;
app.listen(PORT, () => {
  console.log('SERVER IS WORKING ON http://localhost:' + PORT);
});