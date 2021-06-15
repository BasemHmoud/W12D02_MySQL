const db = require('./db');

const findAllBooks = (req,res) => {
    const query = `SELECT * FROM books`;
    db.query(query, (err, result) => {
      if (err) throw err;
      console.log('RESULT: ', result);
      res.json(result)
    });
  };

 

  const addBooks = (books) => {
    const query = `INSERT INTO books (title, author, published_at, price) VALUES (?, ?, ?, ?)`;
    const data = [books.title, books.author, books.published_at, books.price];
    db.query(query, data, (err, results) => {
      console.log(results);
    });
  };
  
  const books = {
    title: "Stefan",
    author: "stefan@email.com",
    published_at: "Germany",
    price: "Berlin",
  };
  
  addBooks(books);

  module.exports = {
    findAllBooks,
    addBooks
    
  };