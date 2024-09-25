const Book = require("../models/book");

// Borrow Book
exports.borrowBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book.available) {
      return res.status(400).json({ message: "Book is not available" });
    }
    book.available = false;
    book.borrowedBy = req.user.id;
    await book.save();
    res.status(200).json({ message: "Book borrowed", book });
  } catch (error) {
    res.status(500).json({ message: "Error borrowing book", error });
  }
};

// Return Book
exports.returnBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book.borrowedBy.toString() !== req.user.id) {
      return res
        .status(400)
        .json({ message: "Not authorized to return this book" });
    }
    book.available = true;
    book.borrowedBy = null;
    await book.save();
    res.status(200).json({ message: "Book returned", book });
  } catch (error) {
    res.status(500).json({ message: "Error returning book", error });
  }
};
