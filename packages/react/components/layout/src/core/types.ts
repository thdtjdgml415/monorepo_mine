import { vars } from "@front/theme";
import { StyleSprinkles } from "./style.css";

type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

// as를 제외한 나머지 속성
type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, keyof "as">;

export type AsElementProps = AsProps & ElementProps;

export type ColorProps = {
  color?: keyof typeof vars.colors.$scale;
  background?: keyof typeof vars.colors.$scale;
};

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
