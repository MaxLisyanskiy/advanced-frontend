// import { Decorator } from "@storybook/react";

import { FC } from "react";

// export const StyleDecorator: Decorator = (Story) => <Story />;

interface Props {
  children?: React.ReactNode;
}

export const StyleDecorator: FC<Props> = ({ children }) => <div>{children}</div>;
