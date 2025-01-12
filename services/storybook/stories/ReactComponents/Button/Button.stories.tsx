import { Button as _Button } from "@front/react-components-button";
import { Meta, StoryObj } from "@storybook/react";
import "@front/react-components-button/style.css";
import { vars } from "@front/theme";

const meta: Meta<typeof _Button> = {
  title: "React Components/Button/button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof _Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
  args: {
    size: "lg",
    children: "Button",
    variant: "outline",
    isDisabled: false,
    color: "red",
  },
};
