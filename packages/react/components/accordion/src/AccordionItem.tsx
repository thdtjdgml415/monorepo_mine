import * as React from "react";
import { AccordionItemType } from "./type";
import * as clsx from "clsx";
import { accordionItemStyle } from "./style.css";

const AccordionItem = (
  props: AccordionItemType,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { itemName, children, className, ...rest } = props;

  const childrenWithProps = React.Children.toArray(children);

  const accordionItemChildren = childrenWithProps.map((child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...child.props, itemName });
    }
  });

  return (
    <div {...rest} ref={ref} className={clsx([className, accordionItemStyle])}>
      {accordionItemChildren}
    </div>
  );
};

const _AccordionItem = React.forwardRef(AccordionItem);

export { _AccordionItem as AccordionItem };
