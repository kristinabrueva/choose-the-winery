import * as lowdash from "lodash";

export const groupByMonths = (
  data: {
    temperature_2m_max: number;
    time: string;
  }[]
) =>
  lowdash.groupBy(data, function (item) {
    return item.time.substring(0, 7);
  });

export const displayMonthAndYear = (original: string) => {
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
    "Jan",
  ];

  const dateAsArray = original.split("-");
  return `${months[parseInt(dateAsArray[1]) - 1]}, ${dateAsArray[0]}`;
};
