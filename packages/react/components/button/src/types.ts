import { vars } from "@front/theme";

export type ButtonProps = {
  color?: keyof typeof vars.colors.$scale;
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
