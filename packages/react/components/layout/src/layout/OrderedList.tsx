import { vars } from "@front/theme";
import { Flex } from "./Flex";
import { OrderListProps } from "./types";
import { forwardRef } from "react";

const OrderedList = (
  props: OrderListProps,
  ref: React.Ref<HTMLOListElement>,
) => {
  const { spaceing = 3, children, ...rest } = props;
  return (
    <Flex
      {...rest}
      as="ol"
      ref={ref}
      direction="column"
      style={{ gap: vars.box.spacing[spaceing], listStyleType: "decimal" }}
    >
      {children}
    </Flex>
  );
};

const _OrderedList = forwardRef(OrderedList);
export { _OrderedList as OrderedList };
