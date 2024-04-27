import { defaultInstance } from "@/shared/api";

const addMemoList = async (body: { title: string; content: string }) => {
  return await defaultInstance.post("/memo", { ...body });
};

export default addMemoList;
