import { classNames } from "shared/lib/class-names/class-names";
import cls from "./sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/theme-switcher";
import { LangSwitcher } from "widgets/lang-switcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
