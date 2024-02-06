import { Text } from "@/presenter/components/atoms/Text.atom";
import React from "react";

export default function FormInputLabel({ children }: { children: string }) {
  return <Text variant="label">{children}</Text>;
}
