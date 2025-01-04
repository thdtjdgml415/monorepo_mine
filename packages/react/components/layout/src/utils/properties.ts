export const extractSprinkleProps = <T extends Object>(
  props: T,
  keys: (keyof T)[],
) => {
  console.log("extractSprinkleProps", props, keys);
  const result: any = {};

  keys.forEach((key) => {
    if (props?.[key]) {
      result[key] = props[key];
    }
  });

  return result;
};
