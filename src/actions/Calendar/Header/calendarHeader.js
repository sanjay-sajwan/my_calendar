import moment from "moment";
import { generateDates } from "../../time";

export const goYearBack = (date, setDate, setDays) => {
  const update = moment(date).subtract(1, "years").toDate();
  setDate(update);
  setDays(generateDates(update));
};
export const goMonthBack = (date, setDate, setDays) => {
  const update = moment(date).subtract(1, "months").toDate();
  setDate(update);
  setDays(generateDates(update));
};
export const goMonthForward = (date, setDate, setDays) => {
  const update = moment(date).add(1, "months").toDate();
  setDate(update);
  setDays(generateDates(update));
};
export const goYearForward = (date, setDate, setDays) => {
  const update = moment(date).add(1, "years").toDate();
  setDate(update);
  setDays(generateDates(update));
};
