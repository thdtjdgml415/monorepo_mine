import * as React from "react";
import { InputGroupProps } from "./types";
import { clsx } from "clsx";
import { inputGroupStyle } from "./style.css";

const InputGroup = (props: InputGroupProps, ref: React.Ref<HTMLDivElement>) => {
  const { children, className, color = "gray", size = "md", ...rest } = props;

  const childrenWithProps = React.Children.toArray(children);
  const inputStyle: React.CSSProperties = {};
  //  Input displayName 속성에 따라 radius 값 변경
  childrenWithProps.forEach((child) => {
    //@ts-ignore
    if (child.type.displayName === "InputLeftAddon") {
      inputStyle.borderStartStartRadius = 0;
      inputStyle.borderEndStartRadius = 0;
    }
  });

  const inputGroupChildren = childrenWithProps.map((child) => {
    if (React.isValidElement(child)) {
      //@ts-ignore
      if (child.type.displayName === "Input") {
        return React.cloneElement(child, {
          ...child.props,
          color,
          size,
          style: {
            ...child.props.style,
            ...inputStyle,
          },
        });
      }
      return React.cloneElement(child, { ...child.props, color, size });
    }
    return null;
  });
  return (
    <div {...rest} ref={ref} className={clsx([inputGroupStyle, className])}>
      {inputGroupChildren}
    </div>
  );
};

const _InputGroup = React.forwardRef(InputGroup);

export { _InputGroup as InputGroup };
