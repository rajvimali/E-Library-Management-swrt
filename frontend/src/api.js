import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5800/api",
});

// Interceptor to attach token to every request (if authenticated)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
