import { vars } from "@front/theme";
import { clsx } from "clsx";
import * as React from "react";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { FlexProps } from "./types";

const Flex = (props: FlexProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "div",
    color,
    background,
    align,
    justify,
    direction,
    wrap,
    grow,
    shrink,
    basis,
    gap,
    children,
  } = props;

  return React.createElement(
    as,
    {
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      ...props,
      style: {
        display: "flex",
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        gap: gap,
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Flex = React.forwardRef(Flex);

export { _Flex as Flex };
