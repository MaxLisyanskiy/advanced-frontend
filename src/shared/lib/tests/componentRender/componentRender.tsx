import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
// import { Provider } from "react-redux";
// import { RootState } from "app/providers/StoreProvider/config/store";

// import { configureStore } from "@reduxjs/toolkit";

// import { counterReducer } from "entities/Counter/model/slice/counterSlice";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

export interface componentRenderOptions {
  route?: string;
  initialState?: Partial<StateSchema>;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const { route = "/", initialState = {} } = options;

  window.history.pushState({}, "Test page", route);

  // const store = configureStore({
  //   reducer: {
  //     counter: counterReducer,
  //   },
  //   preloadedState: initialState,
  // });

  // function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
  //   return (
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
  //       </BrowserRouter>
  //     </Provider>
  //   );
  // }

  return {
    // store: store,
    user: userEvent.setup(),
    ...render(
      // component,
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </StoreProvider>,
      {
        wrapper: BrowserRouter,
      }
    ),
  };
}
