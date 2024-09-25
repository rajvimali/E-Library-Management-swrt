import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

const EditBookForm = () => {
  const { id } = useParams();
  const [book, setBook] = useState({ title: "", author: "", genre: "" });
  const navigate = useNavigate();

  // Fetch book details for editing
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const { data } = await API.get(`/books/${id}`);
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };
    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/books/${id}`, book);
      alert("Book updated successfully!");
      navigate("/"); // Redirect to BookList
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Book</h2>
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
      <button type="submit">Update Book</button>
    </form>
  );
};

export default EditBookForm;
