import axios from "axios";

const notionInstance = axios.create({
  baseURL:
    "https://port-0-notion-client-proxy-dc9c2nltcr2zew.sel5.cloudtype.app",
});

export default notionInstance;
