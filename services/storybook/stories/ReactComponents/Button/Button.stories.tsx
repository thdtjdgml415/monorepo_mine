import { Button as _Button } from "@front/react-components-button";
import "@front/react-components-button/style.css";
import { Text } from "@front/react-components-layout";
import { useButton, useToggleButton } from "@front/react-hooks-button";
import { vars } from "@front/theme";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

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
  decorators: [
    (Story) => {
      const methods = useButton({
        elementType: "div",
        onClick: () => {
          console.log("tttt");
        },
      });
      return <Story args={methods} />;
    },
  ],
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
    color: "gray",
    leftIcon: "🤫",
    rightIcon: "🫥",
    isLoading: false,
  },
};

export const TextButtonStory: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { buttonProps } = useButton({
      elementType: "div",
      onClick: () => {
        console.log("tttt");
      },
    });
    return (
      <Text
        {...buttonProps}
        as="div"
        fontSize={"md"}
        color="green"
        style={{ userSelect: "none", cursor: "pointer" }}
      >
        텍스트 버튼 입니다.
      </Text>
    );
  },
};

export const ToggleButtonStory: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { buttonProps, isSelected } = useToggleButton(
      {
        elementType: "div",
      },
      false,
    );

    return (
      <_Button
        {...buttonProps}
        variant={isSelected ? "solid" : "outline"}
        color="green"
      >
        {isSelected ? "😀" : "😂"}
      </_Button>
    );
  },
};
