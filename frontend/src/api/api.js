import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000/auth/api",
  withCredentials: true,
});

export default api;