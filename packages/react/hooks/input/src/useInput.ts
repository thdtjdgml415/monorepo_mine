import { useState } from "react";
import { UseInputProps, UseInputResult } from "./types";

const useInput = (props: UseInputProps): UseInputResult => {
  const {
    isReadOnly = false,
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    defaultValue,
    value,
    onChange,
    ...rest
  } = props;

  const isCountrolled = value !== undefined && onChange !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ?? "",
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isCountrolled) {
      onChange(event);
    } else {
      setUncontrolledValue(event.target.value);
    }
  };

  const currentValue = isCountrolled ? value : uncontrolledValue;

  return {
    inputProps: {
      ...rest,
      defaultValue,
      value: currentValue,
      onChange: handleChange,
      disabled: isDisabled,
      readOnly: isReadOnly,
      "data-disabled": isDisabled,
      "data-invalid": isInvalid,
      "aria-invalid": isInvalid,
      "aria-required": isRequired,
    },
    valueCount: currentValue.toString().length,
  };
};

export { useInput };
