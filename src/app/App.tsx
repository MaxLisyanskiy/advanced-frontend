import { classNames } from "shared/lib/class-names/class-names";
import { useTheme } from "app/providers/theme-provider";

import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";
import { Suspense } from "react";

import "./styles/index.scss";
import { Sidebar } from "widgets/sidebar";

const App = () => {
  const { theme } = useTheme();

  return (
    <main className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="app-content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </main>
  );
};

export default App;
