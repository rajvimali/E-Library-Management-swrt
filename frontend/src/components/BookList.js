import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../api";

const BookList = () => {
  const [books, setBooks] = useState([]); // State to hold books
  const [error, setError] = useState(""); // State to hold error messages

  // Function to fetch books from backend
  const fetchBooks = async () => {
    try {
      const response = await API.get("/books"); // Fetch books from backend
      setBooks(response.data.books); // Set the books data to state
    } catch (err) {
      setError("Error fetching books");
      console.error("Error fetching books:", err); // Log the error
    }
  };

  // Fetch books when the component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  if (error) {
    return <div>{error}</div>; // Show error message if there's an error
  }

  if (!books.length) {
    return <div>Loading...</div>; // Show loading state if books haven't loaded yet
  }

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Status: {book.available ? "Available" : "Borrowed"}</p>

            {/* Link to book details */}
            <Link to={`/books/${book._id}`}>
              <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
