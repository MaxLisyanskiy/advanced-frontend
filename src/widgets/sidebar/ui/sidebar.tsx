import { useState } from "react";
import { ThemeSwitcher } from "widgets/theme-switcher";
import { LangSwitcher } from "widgets/lang-switcher";

import cls from "./sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { BugButton } from "app/providers/error-boundary";
import { AppButton, ButtonSize, ButtonTheme } from "shared/ui/app-button/app-button";
import { AppLink } from "shared/ui/app-link/app-link";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/route-config/route-config";

import AboutIcon from "shared/assets/icons/about-page.svg";
import MainIcon from "shared/assets/icons/main-page.svg";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <AppButton
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND}
        size={ButtonSize.L}
        square
      >
        {collapsed ? ">" : "<"}
      </AppButton>
      <div className={cls.items}>
        <AppLink to={RoutePath.main} className={cls.item}>
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t("Главная страница")}</span>
        </AppLink>
        <AppLink to={RoutePath.about} className={cls.item}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t("О сайте")}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <BugButton />
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
