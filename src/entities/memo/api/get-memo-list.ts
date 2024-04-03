import { notionInstance } from "@/shared/api";

const getMemoList = async () => {
  const { data } = await notionInstance.get("/memo");
  return data;
};

export default getMemoList;
