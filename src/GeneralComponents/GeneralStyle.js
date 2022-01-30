import { getLanguage } from "../Localization/local";

export const alignTextRight = () => {
  if (getLanguage() === "ar") {
    return "text-right";
  } else {
    return "text-left";
  }
};

export const rightFloat = {
  float: getLanguage() === "ar" ? "left" : "left",
};
