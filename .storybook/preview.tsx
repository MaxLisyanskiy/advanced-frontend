import React from "react";
import type { Preview } from "@storybook/react";
import "app/styles/index.scss";

import { Theme } from "../src/app/providers/theme-provider";

import { RouterDecorator } from "../src/shared/config/storybook/RouterDecorator/RouterDecorator";

import { ThemeDecorator } from "../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StyleDecorator } from "../src/shared/config/storybook/StyleDecorator/StyleDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <RouterDecorator>
        <ThemeDecorator theme={Theme.LIGHT}>
          <StyleDecorator>
            <Story />
          </StyleDecorator>
        </ThemeDecorator>
      </RouterDecorator>
    ),
  ],
};

export default preview;
