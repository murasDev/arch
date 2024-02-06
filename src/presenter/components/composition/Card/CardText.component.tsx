import React, { ReactNode } from "react";
import { Text } from "../../atoms/Text.atom";

type Props = {
  children: ReactNode;
};

export default function CardText({ children }: Props) {
  return <Text variant="primaryColorCardText">{children}</Text>;
}
