import { classNames } from "shared/lib/class-names/class-names";
import { useTheme } from "app/providers/theme-provider";

import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <AppRouter />
      </div>
    </main>
  );
};

export default App;
