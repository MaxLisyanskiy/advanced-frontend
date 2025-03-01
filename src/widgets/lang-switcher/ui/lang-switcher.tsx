import { AppButton, ThemeButton } from "shared/ui/app-button/app-button";
import cls from "./lang-switcher.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/class-names/class-names";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <AppButton
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("Язык")}
    </AppButton>
  );
};
