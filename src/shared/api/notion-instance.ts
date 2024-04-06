import axios from "axios";

const local = "http://localhost:8080";
const prod = "https://api.jiwoo.so";

const notionInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? local : prod,
  headers: {
    "Content-Type": "application/json",
  },
});

export default notionInstance;
