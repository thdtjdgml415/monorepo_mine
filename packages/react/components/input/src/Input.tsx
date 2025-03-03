import { vars } from "@front/theme";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as clsx from "clsx";
import * as React from "react";
import {
  colorVariant,
  errorBorderColorVariant,
  focusBorderColorVariant,
  inputStyle,
} from "./style.css";
import { InputProps } from "./types";
import { useInput } from "@front/react-hooks-input";

const Input = (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    color = "gray",
    size = "lg",
    variant = "outline",
    errorBorderColor = "#E53E3E",
    focusBorderColor = "#3182CE",
    className,
    style,
    ...rest
  } = props;
  const { inputProps } = useInput(rest);
  return (
    <input
      {...inputProps}
      className={clsx([
        inputStyle({
          size,
          variant,
        }),
        className,
      ])}
      style={{
        ...assignInlineVars({
          [colorVariant]: vars.colors.$scale[color][900],
          [errorBorderColorVariant]: errorBorderColor,
          [focusBorderColorVariant]: focusBorderColor,
        }),
        ...style,
      }}
      {...rest}
      ref={ref}
      type="text"
    />
  );
};

const _Input = React.forwardRef(Input);

export { _Input as Input };
