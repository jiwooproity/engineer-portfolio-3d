import "@/shared/assets/css/realtime.css";

import { useCheckOS, useDay } from "@/shared/hooks";

const RealTime = () => {
  const OS = useCheckOS();
  const { month, day, week, time, meridiem } = useDay();

  return (
    <div className={`realtime-box ${OS}`}>
      <span className="realtime-date">{week}</span>
      <span className="realtime-date">{day}</span>
      <span className="realtime-date">{month}</span>
      <span className="realtime-time">{`${time} ${meridiem}`}</span>
    </div>
  );
};

export default RealTime;
