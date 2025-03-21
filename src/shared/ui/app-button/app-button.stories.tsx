import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { AppButton, ThemeButton } from "./app-button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/theme-provider";

const meta = {
  title: "shared/AppButton",
  component: AppButton,
  // parameters: {
  //   layout: "centered",
  // },
  tags: ["autodocs"],
  args: { children: "Text", onClick: fn() },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
  },
};
export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
  },
};
export const OutlineDark: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
