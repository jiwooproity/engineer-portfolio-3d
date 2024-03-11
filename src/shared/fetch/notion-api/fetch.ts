import { notionInstance } from "@/shared/fetch/instance";

export const getNotionMemo = async () => {
  const { data } = await notionInstance.get("/memo-list");
  return data;
};
