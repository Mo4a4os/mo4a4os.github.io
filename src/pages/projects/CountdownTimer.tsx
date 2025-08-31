import moment from "moment";
import { useEffect, useState } from "react";

export const CountdownTimer = () => {
  const [currentSecond, setCurrentSecond] = useState(moment().second());
  const [currentMinute, setCurrentMinute] = useState(moment().minute());
  const [currentHour, setCurrentHour] = useState(moment().hour());
  const [currentDay, setCurrentDay] = useState(moment().date());
  const [currentMonth, setCurrentMonth] = useState(moment().month() + 1);
  const [currentYear, setCurrentYear] = useState(moment().year());

  const [inputYear, setInputYear] = useState<number>(0);
  const [inputMonth, setInputMonth] = useState<number>(0);
  const [inputDay, setInputDay] = useState<number>(0);

  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();

      setCurrentSecond(now.second());
      setCurrentMinute(now.minute());
      setCurrentHour(now.hour());
      setCurrentDay(now.date());
      setCurrentMonth(now.month() + 1);
      setCurrentYear(now.year());

      
      if (inputYear && inputMonth && inputDay) {
        const target = moment({
          year: inputYear,
          month: inputMonth - 1, 
          day: inputDay,
        });

        const duration = moment.duration(target.diff(now));

        if (duration.asMilliseconds() <= 0) {
          setTimeLeft("Already passed");
        } else {
          const days = Math.floor(duration.asDays());
          const hours = duration.hours();
          const minutes = duration.minutes();
          const seconds = duration.seconds();

          setTimeLeft(
            `${days} d. ${hours} h. ${minutes} min. ${seconds} sec.`
          );
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [inputYear, inputMonth, inputDay]);

  return (
    <div className="p-5">
      <input
        onChange={(e) => {
          const date = e.target.value; 
          const [y, m, d] = date.split("-").map(Number);
          setInputYear(y);
          setInputMonth(m);
          setInputDay(d);
        }}
        className="text-black bg-white"
        type="date"
      />

      <p>
        Current Time: {currentYear}.{currentMonth}.{currentDay}{" "}
        {currentHour}:{currentMinute}:{currentSecond}
      </p>
      {inputYear !== 0 && <p>Left: {timeLeft}</p>}
    </div>
  );
};
