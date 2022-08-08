import { useState } from "react";

import "./Calendar.css";
import { Day } from "../Day/Day";
import { daysBefore, generateDates } from "../../actions/time";
import { capitalizeFirstLetter } from "../../actions/string";
import { CalendarHeader } from "./Header/CalendarHeader";

export const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [days, setDays] = useState(generateDates(date));

  return (
    <div>
      <CalendarHeader date={date} setDate={setDate} setDays={setDays} />
      <div className="calendar">
        <div className="dayNamesRow">
          <div className="dayNames">
            {Object.keys(daysBefore).map((day) => (
              <div>{capitalizeFirstLetter(day)}</div>
            ))}
          </div>
        </div>
        <div className="parent">
          {days.map((day) => (
            <Day key={day.toISOString()} day={day}></Day>
          ))}
        </div>
      </div>
    </div>
  );
};
