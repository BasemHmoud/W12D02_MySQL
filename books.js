const db = require("./db");

const findAllBooks = (req, res) => {
  const query = `SELECT * FROM books`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const addBooks = (req, res) => {
  const { title, author, published_at, price } = req.body;
  const query = `INSERT INTO books (title, author, published_at, price) VALUES (?, ?, ?, ?)`;
  const data = [title, author, published_at, price];
  db.query(query, data, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.json(results);
  });
};

const updateBooks = (req, res) => {
  const id = req.params.book_id;
  const { title, author, published_at, price } = req.body;
  const query = `UPDATE books SET title=?, author=?, published_at=?, price=? WHERE id=${id};`;
  const data = [title, author, published_at, price];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const deleteBooks = (req, res) => {
  const id = req.params.book_id;
  const query = `DELETE FROM  books Where id=${id};`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};
const bookDescending = (req, res) => {
  const query = `SELECT * FROM books ORDER BY id DESC`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};
const dontHavePrice = (req, res) => {
  const query = `SELECT * FROM books WHERE price IS NULL`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};
const price = (req, res) => {
  const query = `SELECT * FROM books WHERE price IS NOT NULL`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};
module.exports = {
  findAllBooks,
  addBooks,
  updateBooks,
  deleteBooks,
  bookDescending,
  dontHavePrice,
  price
};
