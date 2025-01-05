import { Text as _Text } from "@front/react-components-layout";
import { Meta, StoryObj } from "@storybook/react";
import "@front/react-components-layout/style.css";
import { classes, vars } from "@front/theme";

const meta: Meta<typeof _Text> = {
  title: "React Components/Layout/Typography/Text",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fontSize: {
      options: Object.keys(classes.typography.text),
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
  tags: ["autodocs"],
} satisfies Meta<typeof _Text>;

export default meta;
type Story = StoryObj<typeof meta>;
// 기본 스토리 예시
export const Default: Story = {
  args: {
    as: "p",
    fontSize: "sm",
    children: "Hello World",
    color: "gray",
  },
};
