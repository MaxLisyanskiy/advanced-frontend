import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "app/providers/theme-provider";
import { Navbar } from "./navbar";

const meta: Meta<typeof Navbar> = {
  title: "widget/Navbar",
  component: Navbar,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Navbar>;

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
