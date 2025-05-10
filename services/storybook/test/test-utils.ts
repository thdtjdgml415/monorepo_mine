import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";

import * as globalStorybookConfig from "../.storybook/preview";

import { setProjectAnnotations } from "@storybook/react";

import "@testing-library/jest-dom";

// 스토리북 테스트 환경 세팅
setProjectAnnotations(globalStorybookConfig);

// 초기화
afterEach(() => {
  cleanup();
});

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // provider는 여기에 감싸는것이 좋음
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };
