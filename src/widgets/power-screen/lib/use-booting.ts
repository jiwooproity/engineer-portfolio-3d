import { useCallback, useEffect, useState } from "react";
import { getRuntimeMode, timerEvents } from "@/shared/utils";

interface MessageDataType {
  booting: boolean;
}

interface MessageResponseType {
  origin: string;
  data: MessageDataType;
}

type BootingHooksType = () => [boolean, boolean];

const useBooting: BootingHooksType = () => {
  const url = getRuntimeMode("http://localhost:5173", "https://www.jiwoo.so");

  const [booting, setBooting] = useState(false);
  const [close, setClose] = useState(false);

  const bootingEvent = () => {
    setBooting(true);
    timerEvents(() => setClose(true), 3);
  };

  const playSound = () => {
    const audio = new Audio("../sound/mac-startup.mp3");
    audio.play();
  };

  const receiveMessage = useCallback(
    async (e: MessageEvent) => {
      const { origin, data } = e as MessageResponseType;

      if (origin !== url || !data.booting || booting) return;
      await timerEvents(() => bootingEvent(), 1); // booting 이벤트를 기다렸다가 부팅 사운드 실행
      playSound();
    },
    [url, booting]
  );

  useEffect(() => {
    window.addEventListener("message", receiveMessage);
    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, [receiveMessage]);

  return [booting, close];
};

export default useBooting;
