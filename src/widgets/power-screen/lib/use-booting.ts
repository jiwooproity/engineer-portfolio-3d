import { useCallback, useEffect, useState } from "react";
import { getRuntimeMode } from "@/shared/utils";

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
    setTimeout(() => setClose(true), 3000);
  };

  const receiveMessage = useCallback(
    (e: MessageEvent) => {
      const { origin, data } = e as MessageResponseType;

      if (origin === url && data.booting) {
        bootingEvent();
      }
    },
    [url]
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
