import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";

import cls from "./app-button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const AppButton: FC<AppButtonProps> = (props) => {
  const { className, children, theme, square, size = ButtonSize.M, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button className={classNames(cls.appButton, mods, [className])} {...otherProps}>
      {children}
    </button>
  );
};
