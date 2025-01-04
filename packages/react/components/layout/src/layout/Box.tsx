import * as React from "react";
import { BoxProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@front/theme";

const Box = (props: BoxProps, ref: React.Ref<HTMLElement>) => {
  const { as = "div", color, background, children } = props;

  return React.createElement(
    as,
    {
      ref,
      className: clsx([
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      ...props,
      style: {
        color: vars.colors.$scale?.[color]?.[700] ?? color,
        backgroundColor: vars.colors.$scale[background]?.[100] ?? background,
        ...props.style,
      },
    },
    children,
  );
};

const _Box = React.forwardRef(Box);

export { _Box as Box };
