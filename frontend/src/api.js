import axios from "axios";

// Make sure the base URL matches your backend server
const API = axios.create({
  baseURL: "http://localhost:5800/api", // Replace with your actual backend URL if different
});

export default API;
