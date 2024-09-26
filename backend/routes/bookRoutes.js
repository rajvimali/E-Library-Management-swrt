const express = require("express");
const router = express.Router();
const {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

// Create a new book
router.post("/books", createBook);

// Get all books
router.get("/books", getBooks);

// Update a book by ID
router.put("/books/:id", updateBook);

// Delete a book by ID
router.delete("/books/:id", deleteBook);

module.exports = router;
