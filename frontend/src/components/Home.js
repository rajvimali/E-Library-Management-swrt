import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the E-Library</h1>
      <p>Explore our collection of books!</p>
      <Link to="/books">
        <button>Go to Books</button>
      </Link>
    </div>
  );
};

export default Home;
