import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import Register from "./components/Register";
import Login from "./components/Login";
import AddBookForm from "./components/AddBookForm";
import EditBookForm from "./components/EditBookForm";
import BookDetail from "./components/BookDetail";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated by verifying if the token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <div className="App">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/add-book" element={<AddBookForm />} />
          <Route path="/edit-book/:id" element={<EditBookForm />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
