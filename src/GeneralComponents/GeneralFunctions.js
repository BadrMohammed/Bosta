import { getLanguage, local } from "../Localization/local";

export const getLocalDate = (datetime) => {
  let date = new Date(datetime);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = local[days[date.getDay()]];

  if (getLanguage() === "en") {
    return day + local.at + date.toLocaleString("en-US");
  } else {
    return day + local.at + date.toLocaleString("ar-EG");
  }
};
