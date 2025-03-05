import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // TODO: remove timeout when hosting site
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => resolve(import("./about-page")), 1500);
    })
);
