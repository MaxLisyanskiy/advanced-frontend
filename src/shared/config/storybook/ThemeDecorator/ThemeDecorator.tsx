import { Theme } from "app/providers/theme-provider";
import { FC } from "react";

interface Props {
  children?: React.ReactNode;
  theme: Theme;
}

export const ThemeDecorator: FC<Props> = ({ children, theme }) => {
  return <div className={`app ${theme}`}>{children}</div>;
};
