import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { LangSwitcher } from "./lang-switcher";
import { Theme } from "app/providers/theme-provider";

const meta: Meta<typeof LangSwitcher> = {
  title: "widget/LangSwitcher",
  component: LangSwitcher,
  args: {},
};

export default meta;

type Story = StoryObj<typeof LangSwitcher>;

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
