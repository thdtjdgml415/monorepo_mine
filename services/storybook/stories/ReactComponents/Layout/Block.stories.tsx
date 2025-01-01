import { Block as _Block } from "@front/react-components-layout";
import "@front/react-components-layout/style.css";
import React from "react";

export default {
  title: "React Components/Layout/Block",

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BlockStory = () => {
  return <_Block />;
};
