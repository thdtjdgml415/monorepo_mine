import {
  Accordion as _Accordion,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@front/react-components-accordion";
import type { Meta, StoryObj } from "@storybook/react";
import "@front/react-components-accordion/style.css";
import { Heading, Text } from "@front/react-components-layout";
import "@front/react-components-layout/style.css";
import React from "react";

const meta: Meta<typeof _Accordion> = {
  title: "React Components/Accordion",
  component: _Accordion,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof _Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultAccordion: Story = {
  render: () => {
    return (
      <Accordion defaultActiveItems={["목록1"]} style={{ width: "500px" }}>
        <AccordionItem itemName="목록1">
          <AccordionButton>
            <Heading color="gray" fontSize="lg">
              목록 1
            </Heading>
          </AccordionButton>
          <AccordionPanel>
            <Text color="gray" fontSize="md">
              내용입니다.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem itemName="목록2">
          <AccordionButton>
            <Heading color="gray" fontSize="lg">
              목록 2
            </Heading>
          </AccordionButton>
          <AccordionPanel>
            <Text color="gray" fontSize="md">
              내용입니다.
              <br />
              내용입니다.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  },
};
