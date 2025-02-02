import { useButton } from "@front/react-hooks-button";
import * as clsx from "clsx";
import { useCallback } from "react";
import { useAcordionContext } from "./AccordionContext";
import { accordionButtonStyle } from "./style.css";
import { AccordionButtonProps } from "./type";
import * as React from "react";

const AccordionButton = (
  props: AccordionButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const { className, itemName = "", onClick, children, ...rest } = props;

  const { setActiveItem } = useAcordionContext();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setActiveItem(itemName);
      onClick?.(event);
    },
    [itemName, onClick, setActiveItem],
  );

  const { buttonProps } = useButton({
    ...rest,
    onClick: handleClick,
    elementType: "button",
  });

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={clsx([accordionButtonStyle, className])}
    >
      {children}
    </button>
  );
};

const _AccordinButton = React.forwardRef(AccordionButton);

export { _AccordinButton as AccordionButton };
