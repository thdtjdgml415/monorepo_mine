import { clsx } from "clsx";
import * as React from "react";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { TextProps } from "./types";
import { vars } from "@front/theme";
import { textStyle } from "./style.css";

const Text = (props: TextProps, ref: React.Ref<HTMLElement>) => {
  const { as = "p", color = "gray", background, children, fontSize } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        textStyle({
          fontSize,
        }),
        props.className,
      ]),
      style: {
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Text = React.forwardRef(Text);
export { _Text as Text };
