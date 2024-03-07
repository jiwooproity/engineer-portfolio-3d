import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Token ${import.meta.env.VITE_TOKEN}`,
  },
});

export default instance;
