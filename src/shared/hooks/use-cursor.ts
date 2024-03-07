import { useEffect, useState } from "react";

const useCursor = () => {
  const [hovered, setHovered] = useState(false);

  const pointerOver = () => {
    setHovered(true);
  };

  const pointerOut = () => {
    setHovered(false);
  };

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "";
  }, [hovered]);

  return { pointerOver, pointerOut };
};

export default useCursor;
