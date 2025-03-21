import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "app/providers/theme-provider";
import { PageLoader } from "./page-loader";

const meta: Meta<typeof PageLoader> = {
  title: "widget/PageLoader",
  component: PageLoader,
  args: {},
};

export default meta;

type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
