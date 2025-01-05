import { Divider as _Divider, Box } from "@front/react-components-layout";
import "@front/react-components-layout/style.css";
import { vars } from "@front/theme";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof _Divider> = {
  title: "React Components/Layout/Divider",
  component: _Divider,
  decorators: [
    (Story) => (
      <Box padding={3} style={{ width: "300px", height: "300px" }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: {
        type: "select",
      },
    },
    variant: {
      options: ["solid", "dashed"],
      control: {
        type: "select",
      },
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof _Divider>;

export default meta;
type Story = StoryObj<typeof meta>;
// 기본 스토리 예시
export const Default: Story = {
  args: {
    color: "gray",
    variant: "solid",
    size: 1,
    orientation: "horizontal",
  },
};
