import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { classNames } from "shared/lib/class-names/class-names";
import { useTheme } from "app/providers/theme-provider";

import "./styles/index.scss";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/main">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>{theme}</button>
      <AppRouter />
    </div>
  );
};

export default App;
