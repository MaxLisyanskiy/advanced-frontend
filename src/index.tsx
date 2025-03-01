import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import "./index.scss";
import { ThemeProvider } from "app/providers/theme-provider";

import "shared/config/i18n/i18n";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
