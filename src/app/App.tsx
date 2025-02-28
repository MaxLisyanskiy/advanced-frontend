import { classNames } from "shared/lib/class-names/class-names";
import { useTheme } from "app/providers/theme-provider";

import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
