// import { Decorator } from "@storybook/react";
// import { BrowserRouter } from "react-router-dom";

// export const RouterDecorator: Decorator = (Story) => (
//   <BrowserRouter>
//     <Story />
//   </BrowserRouter>
// );

import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
interface Props {
  children?: React.ReactNode;
}

export const RouterDecorator: FC<Props> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);
