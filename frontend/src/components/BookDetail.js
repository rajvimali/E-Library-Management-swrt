import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

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

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Available: {book.available ? "Yes" : "No"}</p>
    </div>
  );
};

export default BookDetail;

/* <p>Available: {book.available ? "Yes" : "No"}</p>
  
        {book.available ? (
          <button onClick={borrowBook}>Borrow</button>
        ) : (
          <button onClick={returnBook}>Return</button>
        )} */
