import LocalizedStrings from "react-localization";
import { BOSTA_LANGUAGE } from "../GeneralComponents/StaticKeys";
import { en } from "./en";
import { ar } from "./ar";

export const local = new LocalizedStrings({
  en: en,
  ar: ar,
});

export const toogleLanguage = (lang) => {
  if (lang === "en") {
    localStorage.removeItem(BOSTA_LANGUAGE);

    local.setLanguage("en");
    localStorage.setItem(BOSTA_LANGUAGE, "en");
  } else {
    localStorage.removeItem(BOSTA_LANGUAGE);

    local.setLanguage("ar");
    localStorage.setItem(BOSTA_LANGUAGE, "ar");
  }
  window.location.href = "";
  window.location.reload();
};

export const changeLanguage = () => {
  let lang = localStorage.getItem(BOSTA_LANGUAGE);
  if (lang !== null) {
    if (lang === "en") {
      local.setLanguage("en");
      document.documentElement.setAttribute("lang", "en");
      document.title = "Bosta";
    } else {
      local.setLanguage("ar");
      document.documentElement.setAttribute("lang", "ar");
      document.title = "بوسطة";
    }
  } else {
    local.setLanguage("en");
    localStorage.setItem(BOSTA_LANGUAGE, "en");
    document.documentElement.setAttribute("lang", "en");
    document.title = "Bosta";
  }
};

export const getLanguage = () => {
  let lang = localStorage.getItem(BOSTA_LANGUAGE);
  if (lang !== null) {
    return lang;
  }
};

export const changeDirection = () => {
  let dir = getLanguage() === "en" ? "ltr" : "rtl";
  return dir;
};
