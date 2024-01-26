import dayjs from "dayjs";

export function formateMonthDay(date) {
  return dayjs(date).format("MM月DD日")
}