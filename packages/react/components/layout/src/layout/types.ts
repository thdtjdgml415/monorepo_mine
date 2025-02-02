import { vars } from "@front/theme";
import { AsElementProps, StyleProps } from "../core/types";
import { CSSProperties } from "react";
import { TextProps } from "../typography";

export type BoxProps = AsElementProps & StyleProps;

export type DividerProps = {
  orientation?: "horizontal" | "vertical";
  color?: keyof typeof vars.colors.$scale;
  size?: number;
  variant?: "solid" | "dashed";
} & React.HTMLAttributes<HTMLHRElement>;

export type FlexProps = {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: CSSProperties["flexDirection"];
  wrap?: CSSProperties["flexWrap"];
  grow?: CSSProperties["flexGrow"];
  shrink?: CSSProperties["flexShrink"];
  basis?: CSSProperties["flexBasis"];
  gap?: number;
} & BoxProps;

export type GridProps = {
  autoFlow?: CSSProperties["gridAutoFlow"];
  autoColumns?: CSSProperties["gridAutoColumns"];
  autoRows?: CSSProperties["gridAutoRows"];
  templateColumns?: CSSProperties["gridTemplateColumns"];
  templateRows?: CSSProperties["gridTemplateRows"];
  templateAreas?: CSSProperties["gridTemplateAreas"];
  template?: CSSProperties["gridTemplate"];
  columns?: CSSProperties["gridTemplateColumns"];
  rows?: CSSProperties["gridTemplateRows"];
  gap?: CSSProperties["gap"];
  rowGap?: CSSProperties["rowGap"];
  columnGap?: CSSProperties["columnGap"];
  row?: CSSProperties["gridRow"];
  column?: CSSProperties["gridColumn"];
  area?: CSSProperties["gridArea"];
} & BoxProps;

export type GridItemProps = {
  area?: CSSProperties["gridArea"];
  colSpan?: CSSProperties["gridColumn"];
  colEnd?: CSSProperties["gridColumnEnd"];
  colStart?: CSSProperties["gridColumnStart"];
  rowSpan?: CSSProperties["gridRow"];
  rowEnd?: CSSProperties["gridRowEnd"];
  rowStart?: CSSProperties["gridRowStart"];
} & BoxProps;

export type ListProps = {
  variant?: "ordered" | "unordered";
  spaceing: keyof typeof vars.box.spacing;
} & BoxProps;

export type OrderListProps = Omit<ListProps, "variant">;

export type ListItemProps = TextProps;

export type UnorderedListProps = OrderListProps & {
  listStyleType?: CSSProperties["listStyleType"];
};
