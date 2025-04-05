import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

export interface componentRenderOptions {
  route?: string;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const { route = "/" } = options;

  // return render(
  //   // <MemoryRouter initialEntries={[route]}>
  //   <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>,
  //   // </MemoryRouter>
  //   { wrapper: BrowserRouter }
  // );

  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(<I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>, {
      wrapper: BrowserRouter,
    }),
  };
}
