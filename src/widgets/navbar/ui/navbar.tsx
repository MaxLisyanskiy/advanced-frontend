import { classNames } from "shared/lib/class-names/class-names";

import cls from "./navbar.module.scss";
import AppLink from "shared/ui/app-link/app-link";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.navbarLinks}>
        <AppLink to="/">{t("Главная страница")}</AppLink>
        <AppLink to="/about">{t("О сайте")}</AppLink>
      </div>
    </nav>
  );
};

export default Navbar;
