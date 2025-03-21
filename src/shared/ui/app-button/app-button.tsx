import { classNames } from "shared/lib/class-names/class-names";
import { ButtonHTMLAttributes, FC } from "react";

import cls from "./app-button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const AppButton: FC<AppButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button className={classNames(cls.appButton, {}, [cls[theme], className])} {...otherProps}>
      {children}
    </button>
  );
};
