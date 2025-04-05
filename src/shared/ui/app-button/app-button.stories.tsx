import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { AppButton, ButtonSize, ButtonTheme } from "./app-button";
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
    theme: ButtonTheme.CLEAR,
  },
};
export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
};
export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
export const BackgroundTheme: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
};
export const Square: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    square: true,
  },
};
export const SquareSizeL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.L,
  },
};
export const SquareSizeXl: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.XL,
  },
};
