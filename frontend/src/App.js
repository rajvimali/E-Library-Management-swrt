import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import AddBookForm from "./components/AddBookForm"; // For adding/editing books
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Book List Page */}
        <Route path="/books" element={<BookList />} />

        {/* Book Details Page */}
        <Route path="/books/:id" element={<BookDetail />} />

        {/* Add/Edit Book Form */}
        <Route path="/edit-book/:id" element={<AddBookForm />} />
        <Route path="/add-book" element={<AddBookForm />} />
      </Routes>
    </Router>
  );
}

export default App;
