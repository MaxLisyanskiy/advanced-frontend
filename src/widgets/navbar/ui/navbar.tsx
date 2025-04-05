import { classNames } from "shared/lib/class-names/class-names";

import cls from "./navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return <nav className={classNames(cls.navbar, {}, [className])}></nav>;
};
