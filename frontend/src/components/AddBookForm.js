import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const AddBookForm = () => {
  const [book, setBook] = useState({ title: "", author: "", genre: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/books", book);
      alert("Book added successfully!");
      navigate("/"); // Redirect to BookList after adding
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
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
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
