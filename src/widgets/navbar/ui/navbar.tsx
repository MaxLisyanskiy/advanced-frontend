import { classNames } from "shared/lib/class-names/class-names";

import cls from "./navbar.module.scss";
import AppLink from "shared/ui/app-link/app-link";
import { ThemeSwitcher } from "widgets/theme-switcher";

interface NavbarProps {
  className?: string;
}

const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.navbarLinks}>
        <AppLink to="/main">Main</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </nav>
  );
};

export default Navbar;
