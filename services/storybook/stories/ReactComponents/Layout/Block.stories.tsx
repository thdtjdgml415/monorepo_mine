import { Block as _Block } from "@front/react-components-layout";
import "@front/react-components-layout/style.css";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof _Block> = {
  title: "React Components/Layout/Block",
  component: _Block,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof _Block>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Box 컴포넌트의 기본 props
  },
};
