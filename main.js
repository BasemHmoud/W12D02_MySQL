const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const db = require("./db");

const {
  addBooks,
  findAllBooks,
  updateBooks,
  deleteBooks,
  bookDescending,
  dontHavePrice,
  price
} = require("./books");

app.get("/books", findAllBooks);
app.post("/books", addBooks);
app.put("/books/:book_id", updateBooks);
app.delete("/books/:book_id", deleteBooks);
app.get("/descending", bookDescending);
app.get("/dontHavePrice", dontHavePrice);
app.get("/price", price);
const PORT = 3000;
app.listen(PORT, () => {
  console.log("SERVER IS WORKING ON http://localhost:" + PORT);
});
