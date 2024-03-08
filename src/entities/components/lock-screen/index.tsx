import "@/shared/assets/css/lock-screen.css";
import profile from "@/shared/assets/images/my-profile.png";

import { useDay } from "@/shared/hooks";
import { useState } from "react";

const LockScreen = () => {
  const { time } = useDay();
  const [open, setOpen] = useState(false);

  const openScreen = () => setOpen(true);

  return (
    <div className={`lock-screen-container ${open ? "open" : ""}`}>
      <span className="lock-screen-time">{time}</span>
      <div className="lock-screen-access-box">
        <img src={profile} className="lock-screen-profile" />
        <span className="lock-screen-name">소지우</span>
        <button onClick={openScreen}>Open</button>
      </div>
    </div>
  );
};

export default LockScreen;
