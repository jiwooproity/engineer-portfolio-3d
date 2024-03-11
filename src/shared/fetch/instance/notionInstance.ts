import axios from "axios";

const local = "http://localhost:8080";
const prod =
  "https://port-0-notion-client-proxy-dc9c2nltcr2zew.sel5.cloudtype.app";

const notionInstance = axios.create({
  baseURL: import.meta.env.DEV ? local : prod,
  headers: {
    "Content-Type": "application/json",
  },
});

export default notionInstance;
