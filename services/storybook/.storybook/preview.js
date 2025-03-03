import "@front/theme/themes.css";
import "./style.css";
import { withThemeByClassName } from "@storybook/addon-themes";
/**
 * 다크모드 적용이 안됨
 */

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      default: "light",
      list: [
        { name: "light", class: "theme-light", color: "#ffffff" },
        { name: "dark", class: "theme-dark", color: "#000000" },
      ],
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "theme-light",
        dark: "theme-dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
