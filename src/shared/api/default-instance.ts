import axios from "axios";
import { getRuntimeMode } from "../utils";

const baseURL = getRuntimeMode("http://localhost:8080", "https://api.jiwoo.so");

const defaultInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default defaultInstance;
