import { vars } from "@front/theme";
import { style } from "@vanilla-extract/css";

export const blockStyles = style({
  width: "100px",
  height: "100px",
  backgroundColor: vars.colors.$scale.pink[900],
});
