import "@front/react-components-input/style.css";
import {
  Input,
  InputGroup,
  InputLeftAddon,
} from "@front/react-components-input";

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

export const InputStory: Story = {
  render: () => <Input placeholder="dd" />,
};

export const InputGroupStory: Story = {
  render: () => (
    <InputGroup color="green" size="lg">
      <InputLeftAddon>$</InputLeftAddon>
      <Input placeholder="dd" />
    </InputGroup>
  ),
};
