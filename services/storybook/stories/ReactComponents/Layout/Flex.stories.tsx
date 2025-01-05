import { Flex as _Flex } from "@front/react-components-layout";
import { Meta, StoryObj } from "@storybook/react";
import "@front/react-components-layout/style.css";
import React from "react";

const meta: Meta<typeof _Flex> = {
  title: "React Components/Layout/Flex",
  component: _Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof _Flex>;

export default meta;
type Story = StoryObj<typeof meta>;
// 기본 스토리 예시
export const Default: Story = {
  args: {
    as: "div",
    padding: 5,
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    style: {
      width: "300px",
    },
  },
  render: (args) => {
    return (
      <_Flex {...args}>
        <div>테스트</div>
        <div>입니다</div>
        <div>맞나요?</div>
      </_Flex>
    );
  },
};
