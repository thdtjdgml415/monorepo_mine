import { ToastPayload } from "./types";

export const Toast = (props: ToastPayload) => {
  return <div>{props.message}</div>;
};
