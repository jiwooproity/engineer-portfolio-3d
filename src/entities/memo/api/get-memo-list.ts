import { defaultInstance } from "@/shared/api";

const getMemoList = async () => {
  const { data } = await defaultInstance.get("/memo");
  return data;
};

export default getMemoList;
