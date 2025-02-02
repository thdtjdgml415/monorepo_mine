import * as React from "react";
import { Flex } from "./Flex";
import { UnorderedListProps } from "./types";
import { vars } from "@front/theme";

const UnorderedList = (
  props: UnorderedListProps,
  ref: React.Ref<HTMLOListElement>,
) => {
  const { spaceing = 3, listStyleType, children, ...rest } = props;
  return (
    <Flex
      {...rest}
      ref={ref}
      direction="column"
      style={{
        gap: vars.box.spacing[spaceing],
        listStyleType: listStyleType as string,
      }}
    >
      {children}
    </Flex>
  );
};

const _UnorderedList = React.forwardRef(UnorderedList);

export { _UnorderedList as UnorderedList };
