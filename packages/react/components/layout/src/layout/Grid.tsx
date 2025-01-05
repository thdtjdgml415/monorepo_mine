import { vars } from "@front/theme";
import { clsx } from "clsx";
import * as React from "react";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { GridProps } from "./types";

const Grid = (props: GridProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "div",
    color,
    background,
    children,
    autoFlow,
    autoColumns,
    autoRows,
    templateColumns,
    templateRows,
    templateAreas,
    template,
    columns,
    rows,
    gap,
    rowGap,
    columnGap,
    row,
    column,
    area,
  } = props;

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
        display: "grid",
        gridAutoFlow: autoFlow,
        gridAutoColumns: autoColumns,
        gridAutoRows: autoRows,
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        gridTemplateAreas: templateAreas,
        gridTemplate: template,
        gridColumns: columns,
        gridRows: rows,
        gap: gap,
        rowGap: rowGap,
        columnGap: columnGap,
        gridRow: row,
        gridColumn: column,
        gridArea: area,
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Grid = React.forwardRef(Grid);

export { _Grid as Grid };
