import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // TODO: remove timeout when hosting site
      //@ts-ignore
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
