import axios from "axios";

const notionInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28",
    Authorization: `Bearer ${import.meta.env.VITE_NOTION_TOKEN}`,
  },
});

export default notionInstance;
