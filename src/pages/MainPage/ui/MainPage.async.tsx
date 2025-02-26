import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // TODO: remove timeout when hosting site
      //@ts-ignore
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);
