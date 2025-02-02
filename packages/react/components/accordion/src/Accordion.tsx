import * as React from "react";
import { AccordionProps } from "./type";
import { clsx } from "clsx";
import AccordionContext from "./AccordionContext";
import { accordionStyle } from "./style.css";

const Accordion = (props: AccordionProps, ref: React.Ref<HTMLDivElement>) => {
  const { children, defaultActiveItems = [], className, ...rest } = props;

  const [activeItems, setActiveItems] =
    React.useState<string[]>(defaultActiveItems);

  const handleSetActiveItem = (item: string) => {
    if (activeItems.includes(item)) {
      setActiveItems(activeItems.filter((activeItems) => activeItems !== item));
    } else {
      setActiveItems([...activeItems, item]);
    }
  };
  return (
    <AccordionContext.Provider
      value={{ activeItems, setActiveItem: handleSetActiveItem }}
    >
      <div {...rest} ref={ref} className={clsx([accordionStyle, className])}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;

const _Accordion = React.forwardRef(Accordion);
export { _Accordion as Accordion };
