import { useToggle } from "@front/react-hooks-toggle";
import { useButton } from "./useButton";
import { OverloadedToggleButtonFunction } from "./types";

export const useToggleButton = (
  props: any,
  isSelected?: boolean,
): OverloadedToggleButtonFunction => {
  const { isSelected: _isSelected, toggle } = useToggle({ isSelected });

  const handleClick = (event: React.MouseEvent) => {
    toggle();
    props?.onClick?.(event);
  };

  const { buttonProps } = useButton({
    ...props,
    onClick: handleClick,
  });
  return { buttonProps, isSelected: _isSelected };
};
