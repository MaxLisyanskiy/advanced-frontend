import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import { ThemeProvider } from "app/providers/theme-provider";
import { ErrorBoundary } from "app/providers/error-boundary";
import { StoreProvider } from "app/providers/StoreProvider";

import "shared/config/i18n/i18n";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
);
