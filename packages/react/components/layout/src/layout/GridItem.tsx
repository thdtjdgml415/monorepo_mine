import { vars } from "@front/theme";
import { clsx } from "clsx";
import * as React from "react";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { GridItemProps } from "./types";

const GridItem = (props: GridItemProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "div",
    color,
    background,
    children,
    area,
    colSpan,
    colEnd,
    colStart,
    rowSpan,
    rowEnd,
    rowStart,
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
        gridArea: area,
        gridColumn: colSpan,
        gridColumnEnd: colEnd,
        gridColumnStart: colStart,
        gridRow: rowSpan,
        gridRowEnd: rowEnd,
        gridRowStart: rowStart,
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _GridItem = React.forwardRef(GridItem);

export { _GridItem as GridItem };
