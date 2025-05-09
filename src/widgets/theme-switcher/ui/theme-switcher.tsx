import { classNames } from "shared/lib/classNames/classNames";

import cls from "./theme-switcher.module.scss";
import { Theme, useTheme } from "app/providers/theme-provider";

import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { AppButton } from "shared/ui/app-button/app-button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
    </AppButton>
  );
};
