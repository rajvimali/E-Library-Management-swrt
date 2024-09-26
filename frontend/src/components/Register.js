import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api"; // Ensure API points to your backend

const Register = ({ setIsAuthenticated }) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(""); // For showing error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the API to register the user
      const response = await API.post("/auth/register", user);

      // Check if the registration was successful
      if (response.status === 201) {
        alert("User registered successfully!");
        setIsAuthenticated(true); // Update authentication state if needed
        navigate("/login"); // Redirect to login page after registration
      }
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.data || error.message
      );
      // Show error message on frontend
      setError(
        error.response?.data?.message ||
          "Error registering user. Please try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Show error message */}
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
