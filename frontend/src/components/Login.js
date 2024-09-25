import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const Login = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // For error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", credentials);
      localStorage.setItem("token", data.token); // Save token
      setIsAuthenticated(true); // Update authentication state
      console.log("User logged in successfully");
      navigate("/"); // Redirect to BookList (Home) page after login
    } catch (error) {
      console.error("Error logging in:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Error logging in");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Show error message */}
      <input
        type="email"
        placeholder="Email"
        value={credentials.email}
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
