import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../store/settings/settingSlice";
import { useTranslation } from "react-i18next";
export default function Header() {
  const { t, i18n } = useTranslation();
  const getLang = useSelector((state) => state.settings.language);
  console.log(getLang);
  const dispatch = useDispatch();
  function handleLanguageSwitch() {
    const newLang = getLang === "en" ? "ar" : "en";
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    i18n.changeLanguage(newLang);
    dispatch(setLanguage(newLang));
  }
  return (
    <>
      Header - Current Language: {getLang}
      <button onClick={handleLanguageSwitch}>
        {getLang} - {t("Welcome")}
      </button>
    </>
  );
}
