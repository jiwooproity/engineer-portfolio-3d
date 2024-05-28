import { useCallback, useEffect, useState } from "react";

type UnLockHooks = () => [boolean, () => void];

const useUnLock: UnLockHooks = () => {
  const [open, setOpen] = useState(false);

  const unlockScreen = () => setOpen(true);

  const openKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" && !open) unlockScreen();
    },
    [open]
  );

  useEffect(() => {
    document.addEventListener("keydown", openKeydown);
    return () => document.removeEventListener("keydown", openKeydown);
  }, [openKeydown]);

  return [open, unlockScreen];
};

export default useUnLock;
