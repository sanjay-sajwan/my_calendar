import {
  goMonthBack,
  goMonthForward,
  goYearBack,
  goYearForward,
} from "../../../actions/Calendar/Header/calendarHeader";
import "./CalendarHeader.css";

export const CalendarHeader = ({ date, setDate, setDays }) => {
  return (
    <div className="calendar-header">
      <div
        className="button-handler"
        onClick={() => {
          goYearBack(date, setDate, setDays);
        }}
      >
        {"<<"}
      </div>
      <div
        className="button-handler"
        onClick={() => {
          goMonthBack(date, setDate, setDays);
        }}
      >
        {"<"}
      </div>
      <div>{date.toISOString().substring(0, 7)}</div>

      <div
        className="button-handler"
        onClick={() => {
          goMonthForward(date, setDate, setDays);
        }}
      >
        {">"}
      </div>
      <div
        className="button-handler"
        onClick={() => {
          goYearForward(date, setDate, setDays);
        }}
      >
        {">>"}
      </div>
    </div>
  );
};
