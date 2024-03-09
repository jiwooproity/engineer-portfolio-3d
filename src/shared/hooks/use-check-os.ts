import { useEffect, useState } from "react";

const useCheckOS = () => {
  const [OS, setOS] = useState("");

  useEffect(() => {
    const os = navigator.userAgent.replace(/ /g, "").toLowerCase();
    if (os.includes("macintosh")) setOS("mac");
    else if (os.includes("window")) setOS("window");
  }, []);

  return OS;
};

export default useCheckOS;
