import { BaseButtonProps, OverloadedButtonFunction } from "./types";

// Props 로 button
export const useButton: OverloadedButtonFunction = (props: any): any => {
  const {
    elementType = "button",
    type = "button",
    isDisabled,
    isLoading,
    tabIndex,
    onKeyDown,
  } = props;

  const disabled = isDisabled || isLoading;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    onKeyDown?.(event);

    //span이나 div에서는 엔터말고 스페이스바를 사용하기 때문에 추가 필요
    if ((event.key === " ", event.key === "Spacebar" || event.key === "32")) {
      if (disabled) return;
      // 이벤트 막기
      if (event.defaultPrevented) return;
      if (elementType === "button") return;

      event.preventDefault();
      (event.currentTarget as HTMLElement).click();
    }
    if (event.key === "Enter" || event.key === "13") {
      if (disabled) return;
      // 이벤트 막기
      if (event.defaultPrevented) return;

      // 만약 input일때 submit과 같은 이벤트가 동작해야하기 때문에
      if (elementType === "input" && type !== "button") return;
      event.preventDefault();
      (event.currentTarget as HTMLElement).click();

      return;
    }
  };

  // Return 으로 Button 또는 각 컴포넌트의 속성을 반환 = 버튼에서 필요한 속성도 추가
  const baseProps = {
    ...props,
    "data-loading": isLoading,
    tabIndex: disabled ? undefined : (tabIndex ?? 0),
    onKeyDown: handleKeyDown,
  };

  let additionalProps = {};

  switch (elementType) {
    case "button": {
      additionalProps = {
        type: type ?? "button",
        disabled,
      };
      break;
    }
    case "a": {
      const { href, target, rel } = props as BaseButtonProps<"a">;

      additionalProps = {
        role: "button",
        href: disabled ? undefined : href,
        target: disabled ? undefined : target,
        rel: disabled ? undefined : rel,
        "area-disabled": isDisabled,
      };
      break;
    }
    case "input": {
      additionalProps = {
        role: "button",
        type: props.type,
        disabled,
        "area-disabled": undefined,
      };
      break;
    }
    default: {
      additionalProps = {
        role: "button",
        type: type ?? "button",
        "area-disabled": isDisabled,
      };
      break;
    }
  }
  const buttonProps = {
    ...baseProps,
    ...additionalProps,
  };

  return {
    buttonProps,
  };
};
