import { defaultInstance } from "@/shared/api";

const getAudioList = async () => {
  const { data } = await defaultInstance.get("/audio");
  return data;
};

export default getAudioList;
