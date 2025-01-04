import "@front/theme/themes.css";
import "./style.css";

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
  },

  rootAttributes: {
    root: "body",
    attribute: "class",
    defaultState: {
      name: "light",
      value: "theme-light",
    },
    states: [
      {
        name: "dark",
        value: "theme-dark",
      },
    ],
  },
};

const initTheme = () => {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log("body class", document.body.classList);
  if (isDarkTheme) {
    document.body.classList.add("theme-dark");
  }

  const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

  mediaQueryList.addEventListener("change", (e) => {
    if (e.matches) {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }
  });
};
initTheme();

export default preview;
