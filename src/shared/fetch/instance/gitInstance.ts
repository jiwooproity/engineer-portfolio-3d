import axios from "axios";

const gitInstance = axios.create({
  baseURL: "https://api.github.com/repos",
});

export default gitInstance;
