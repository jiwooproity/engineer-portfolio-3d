import { useInterval } from "usehooks-ts";

import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import "dayjs/locale/en";
import { useMemo, useState } from "react";

dayjs.extend(isLeapYear);
dayjs.locale("en");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const dayOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

const useDay = () => {
  const month = dayjs().get("M");
  const day = dayjs().get("D");
  const dayIndex = dayjs().get("d");

  const [time, setTime] = useState("00:00 AM");
  const updateTime = useMemo(() => time, [time]);

  useInterval(() => {
    const hours = dayjs(new Date()).format("h");
    const minutes = dayjs().get("minutes").toString().padStart(2, "0");
    const meridiem = dayjs().get("h") >= 12 ? "PM" : "AM";

    setTime(`${hours}:${minutes} ${meridiem}`);
  }, 1);

  return {
    month: months[month],
    day: day,
    week: dayOfWeek[+dayIndex],
    time: updateTime,
  };
};

export default useDay;
