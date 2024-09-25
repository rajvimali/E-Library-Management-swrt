import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // Fetch all books from the API
  const fetchBooks = async () => {
    try {
      const { data } = await API.get("/books");
      setBooks(data.books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []); // Empty dependency array to ensure this runs only once when component mounts

  return (
    <div>
      <h1>Available Books</h1>
      <Link to="/add-book">
        <button>Add Book</button>
      </Link>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <button onClick={() => navigate(`/books/${book._id}`)}>
              View Details
            </button>
            <button onClick={() => navigate(`/edit-book/${book._id}`)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
