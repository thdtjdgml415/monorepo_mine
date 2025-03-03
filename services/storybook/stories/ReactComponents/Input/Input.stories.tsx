import "@front/react-components-input/style.css";
import { Input } from "@front/react-components-input";

import { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "React Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
  render: () => <Input placeholder="dd" />,
};
