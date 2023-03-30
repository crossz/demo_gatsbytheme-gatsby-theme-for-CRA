import { useTranslation } from "react-i18next";
import { LANGUAGE_LIST, DEFAULT_LANG } from "../i18n/utils";

const useImageTranslation = () => {
  const { i18n } = useTranslation();
  const languagesSuffix = LANGUAGE_LIST.map((language) => language.suffix);
  const currentLangObj = LANGUAGE_LIST.find(
    (language) => language.lang === (i18n.language || DEFAULT_LANG)
  );
  let nullImagesSuffix = [];

  const tImage = (key, format) => {
    let result = null;
    const getImage = (suffix) => {
      try {
        const image = require(`../assets/images/${key}_${suffix}.${format}`);
        result = image?.default;
      } catch (error) {
        nullImagesSuffix.push(suffix);
        const nextSuffix = languagesSuffix?.find(
          (languageSuffix) =>
            !nullImagesSuffix?.find(
              (nullImageSuffix) => nullImageSuffix === languageSuffix
            )
        );
        if (!nextSuffix) return result;
        getImage(nextSuffix);
      }
    };
    getImage(currentLangObj?.suffix);

    return result;
  };

  return [tImage];
};

export {
  useImageTranslation,
  // useDateFnsLocale,
  // useQuery,
  // useTranslateFormErrors,
  // useAddressFormat,
};
