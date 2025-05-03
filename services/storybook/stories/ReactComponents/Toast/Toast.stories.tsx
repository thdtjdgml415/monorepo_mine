import { Button as _Button, Button } from "@front/react-components-button";
import "@front/react-components-button/style.css";
import { ToastProvider, useToast } from "@front/react-components-toast";
import "@front/react-components-toast/style.css";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof _Button> = {
  title: "React Components/Toast",
  component: _Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof _Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Example = () => {
  const { toast } = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "hello world",
            duration: 3000,
          },
        })
      }
    >
      Toast Button
    </Button>
  );
};

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

  render: () => {
    return (
      <ToastProvider>
        <Example />
      </ToastProvider>
    );
  },
};
