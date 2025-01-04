import { Box as _Box } from "@front/react-components-layout";
import { Meta, StoryObj } from "@storybook/react";
import "@front/react-components-layout/style.css";

const meta: Meta<typeof _Box> = {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof _Box>;

export default meta;
type Story = StoryObj<typeof meta>;
// 기본 스토리 예시
export const Default: Story = {
  args: {
    as: "button",
    padding: 20,
    background: "pink",
    boxShadow: "xl",
    borderRadius: "full",
  },
};
