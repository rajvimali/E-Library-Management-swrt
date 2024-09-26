import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api";

const BookDetail = () => {
  const { id } = useParams(); // Get the book ID from URL params
  const [book, setBook] = useState(null); // Initialize the book state as null
  const navigate = useNavigate();

  // Fetch book details from the API
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const { data } = await API.get(`/books/${id}`);
        setBook(data); // Set the book data once fetched
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };
    fetchBook(); // Call the fetch function when the component mounts
  }, [id]);

  // Delete the book
  const deleteBook = async () => {
    try {
      await API.delete(`/books/${id}`);
      alert("Book deleted successfully!");
      navigate("/books"); // Redirect to book list after deletion
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  // Show loading message while book data is being fetched
  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Available: {book.available ? "Yes" : "No"}</p>

      {/* Edit and Delete Buttons */}
      <button onClick={() => navigate(`/edit-book/${book._id}`)}>Edit</button>
      <button onClick={deleteBook}>Delete</button>
      <button onClick={() => navigate("/books")}>Back to Book List</button>
    </div>
  );
};

export default BookDetail;
