import { Meta, StoryObj } from "@storybook/react";
import { List as _List, List, ListItem } from "@front/react-components-layout";
import React from "react";

const meta: Meta<typeof _List> = {
  title: "React Components/List ",
  component: _List,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof _List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultList: Story = {
  render: () => {
    return (
      <List spaceing={3}>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
      </List>
    );
  },
};

export const OrderedList: Story = {
  render: () => {
    return (
      <List variant="ordered" spaceing={3}>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
      </List>
    );
  },
};

export const UnorderedList: Story = {
  render: () => {
    return (
      <List variant="unordered" spaceing={3}>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
        <ListItem fontSize={"md"}>dsdadas</ListItem>
      </List>
    );
  },
};
