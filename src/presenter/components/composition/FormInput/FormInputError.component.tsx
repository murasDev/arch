import React from "react";
import { Text } from "../../atoms/Text.atom";

export default function FormInputError({ children }: { children: string }) {
  return <Text color="error">{children}</Text>;
}
