import { notionInstance } from "@/shared/api";

const addMemoList = async (body: { title: string; content: string }) => {
  return await notionInstance.post("/memo", { ...body });
};

export default addMemoList;
