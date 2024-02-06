import { BoxVariantsProps } from "../types";

export const buttonVariants: BoxVariantsProps = {
  defaults: {
    borderRadius: "s",
    padding: "m",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "mainForeground",
  },
  outlined: {
    borderWidth: 1,
    borderColor: "mainForeground",
    backgroundColor: "transparent",
  },
  disabled: {
    opacity: 0.5,
  },
};
