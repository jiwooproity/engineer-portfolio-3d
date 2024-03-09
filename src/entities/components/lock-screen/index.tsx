import "@/shared/assets/css/lock-screen.css";
import profile from "@/shared/assets/images/my-profile.png";

import { useDay } from "@/shared/hooks";
import { useEffect, useState } from "react";

const LockScreen = () => {
  const { month, day, week, time } = useDay();
  const [open, setOpen] = useState(false);

  const openKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !open) setOpen(true);
  };

  useEffect(() => {
    document.addEventListener("keydown", openKeydown);
    return () => document.removeEventListener("keydown", openKeydown);
  }, []);

  return (
    <div className={`lock-screen-container ${open ? "open" : ""}`}>
      <span className="lock-screen-date">{`${week}, ${day} ${month}`}</span>
      <span className="lock-screen-time">{time}</span>
      <div className="lock-screen-access-box">
        <img src={profile} className="lock-screen-profile" />
        <span className="lock-screen-name">소지우</span>
        <button onClick={() => setOpen(true)}>
          <span>OPEN</span>
        </button>
      </div>
    </div>
  );
};

export default LockScreen;
