import { Theme } from "@/presenter/theme";
import React from "react";
import { Text } from "../../atoms/Text.atom";

type Props = {
  children: string;
  variant?: keyof Omit<Theme["textVariants"], "defaults">;
};

export default function ButtonTitle({
  children,
  variant = "buttonTitle",
}: Props) {
  return <Text variant={variant}>{children}</Text>;
}
