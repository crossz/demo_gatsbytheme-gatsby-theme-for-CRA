/**
 * References:
 * - https://react.i18next.com/guides/quick-start#configure-i-18-next
 * - https://react.i18next.com/latest/using-with-hooks#configure-i-18-next
 * - https://react.i18next.com/latest/i18next-instance
 */
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Cookies from "js-cookie";
// import { LANGUAGE_LIST } from './utils'
import translationEn from "../assets/locales/en/translation.json";
import translationZhCn from "../assets/locales/zh-CN/translation.json";
import translationZhHk from "../assets/locales/zh-HK/translation.json";
import commonEn from "../assets/locales/en/common.json";
import commonZhCn from "../assets/locales/zh-CN/common.json";
import commonZhHk from "../assets/locales/zh-HK/common.json";

const ONE_YEAR = 365;

const resources = {
  "zh-HK": {
    translation: translationZhHk,
    common: commonZhHk,
  },
  "zh-CN": {
    translation: translationZhCn,
    common: commonZhCn,
  },
  en: {
    translation: translationEn,
    common: commonEn,
  },
};

i18next
  .use(initReactI18next) // bind react-i18next to the instance
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: ["zh-HK", "zh-CN", "en"],
    returnEmptyString: false,
    defaultNS: "translation",
    // debug: true,
    // whitelist: LANGUAGE_LIST.map((i) => i.lang),
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
    parseMissingKeyHandler: (key) => {
      // return empty space if missing keys or loading translation
      return key.split(".").slice(-1);
    },
  });

const setLang = (nextLang, callBack) => {
  Cookies.set("lang", nextLang, { expires: ONE_YEAR });
  i18next.changeLanguage(nextLang);
  callBack && callBack();
};

const getLang = () => i18next.language;

export { i18next, setLang, getLang };
