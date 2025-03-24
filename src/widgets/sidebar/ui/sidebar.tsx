import { useState } from "react";
import { ThemeSwitcher } from "widgets/theme-switcher";
import { LangSwitcher } from "widgets/lang-switcher";

import cls from "./sidebar.module.scss";
import { classNames } from "shared/lib/class-names/class-names";
import { BugButton } from "app/providers/error-boundary";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <button data-testid="sidebar-toggle" onClick={onToggle}>
        toggle
      </button>
      <div className={cls.switchers}>
        <BugButton />
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
