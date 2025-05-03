import { vars } from "@front/theme";
import { UseInputProps } from "@front/react-hooks-input";
import { HTMLAttributes } from "react";
type Size = "lg" | "md" | "sm" | "xs";
type Color = keyof typeof vars.colors.$scale;

export type InputProps = UseInputProps & {
  color?: Color;
  size?: Size;
  variant?: "outline" | "filled";
  errorBorderColor?: string;
  focusBorderColor?: string;
};

export type InputGroupProps = {
  color?: Color;
  size?: Size;
  children: React.ReactNode[];
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export type InputLeftAddonProps = {
  color?: Color;
  size?: Size;
  children: React.ReactNode;
};
