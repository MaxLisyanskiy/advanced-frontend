import { AppButton, ButtonTheme } from "shared/ui/app-button/app-button";

import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/class-names/class-names";

interface LangSwitcherProps {
  className?: string;
}

import cls from "./lang-switcher.module.scss";

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <AppButton
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t("Язык")}
    </AppButton>
  );
};
