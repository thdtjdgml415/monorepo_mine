import { classes } from "@front/theme";
import { recipe } from "@vanilla-extract/recipes";

export const textStyle = recipe({
  variants: {
    fontSize: {
      ...classes.typography.text,
    },
    defaultVariants: {
      fontSize: "xl",
    },
  },
});
