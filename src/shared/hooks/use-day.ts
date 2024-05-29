import { useState } from "react";
import { useInterval } from "usehooks-ts";

import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import "dayjs/locale/en";

dayjs.extend(isLeapYear);
dayjs.locale("en");

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

const useDay = () => {
  const month = dayjs().get("M");
  const day = dayjs().get("D");
  const dayIndex = dayjs().get("d");

  const [time, setTime] = useState("00:00");
  const [meridiem, setMeridiem] = useState("AM");

  useInterval(() => {
    const hours = dayjs(new Date()).format("h");
    const minutes = dayjs().get("minutes").toString().padStart(2, "0");
    const newMeridiem = dayjs().get("h") >= 12 ? "PM" : "AM";

    if (`${hours}:${minutes}` !== time) setTime(`${hours}:${minutes}`);
    if (meridiem !== newMeridiem) setMeridiem(newMeridiem);
  }, 1);

  return {
    month: months[month],
    day: day,
    week: dayOfWeek[+dayIndex],
    time: time,
    meridiem: meridiem,
  };
};

export default useDay;
