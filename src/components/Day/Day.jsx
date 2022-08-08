import "./Day.css";

export const Day = (props) => {
  const dayNumber = String(props.day.getDate());
  return (
    <div className="day">
      <header>
        <div className="number-of-day">
          {dayNumber.length === 1 ? `0${dayNumber}` : dayNumber}
          {props.children}
        </div>
      </header>
    </div>
  );
};
