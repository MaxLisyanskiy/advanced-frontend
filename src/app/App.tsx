import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import { classNames } from "shared/lib/class-names/class-names";
import { useTheme } from "app/providers/theme-provider";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/main">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>{theme}</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
