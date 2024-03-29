import { notionInstance } from "@/shared/fetch/instance";

export const getNotionMemo = async () => {
  const { data } = await notionInstance.get("/memo");
  return data;
};

export const createNotionMemo = async (body: {
  title: string;
  content: string;
}) => {
  return await notionInstance.post("/memo", { ...body });
};
