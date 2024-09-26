import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api";

const AddBookForm = () => {
  const { id } = useParams(); // Get the book ID from URL if editing
  const [book, setBook] = useState({ title: "", author: "", genre: "" });
  const navigate = useNavigate();

  // Fetch book details if editing
  useEffect(() => {
    if (id) {
      const fetchBook = async () => {
        try {
          const response = await API.get(`/books/${id}`);
          setBook(response.data);
        } catch (error) {
          console.error("Error fetching book details:", error);
        }
      };
      fetchBook();
    }
  }, [id]);

  // Handle form submission (add or edit book)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await API.put(`/books/${id}`, book); // Update book
        alert("Book updated successfully!");
      } else {
        await API.post("/books", book); // Add new book
        alert("Book added successfully!");
      }
      navigate("/"); // Redirect to book list
    } catch (error) {
      console.error("Error submitting book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Book" : "Add New Book"}</h2>
      <input
        type="text"
        placeholder="Title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
      />
      <input
        type="text"
        placeholder="Genre"
        value={book.genre}
        onChange={(e) => setBook({ ...book, genre: e.target.value })}
      />
      <button type="submit">{id ? "Update Book" : "Add Book"}</button>
    </form>
  );
};

export default AddBookForm;
