import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { ErrorFallback } from "./error-fallback";
import { Theme } from "app/providers/theme-provider";

const meta: Meta<typeof ErrorFallback> = {
  title: "widget/ErrorFallback",
  component: ErrorFallback,
  args: {},
};

export default meta;

type Story = StoryObj<typeof ErrorFallback>;

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
