import { useEffect, useState } from "react";
import { getAudioList } from "@/entities/music";

export interface AudioListIF {
  title: string;
  filename: string;
  cover: string;
  type: string;
}

type LoaderHooksIF = () => [AudioListIF[]];

const useLoader: LoaderHooksIF = () => {
  const [audioList, setAudioList] = useState<AudioListIF[]>([]);

  const onLoad = async () => {
    const data = await getAudioList();
    setAudioList(data);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return [audioList];
};

export default useLoader;
