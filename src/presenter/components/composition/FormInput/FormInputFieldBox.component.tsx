import { Box } from "@/presenter/components/atoms/Box.atom";
import React from "react";

type Props = {
  children: React.ReactNode;
  isError?: boolean;
};

export default function FormInputFieldBox({
  children,
  isError = false,
}: Props) {
  return (
    <Box
      backgroundColor="primaryCardBackground"
      flexDirection="row"
      paddingVertical="m"
      paddingHorizontal="s"
      gap="s"
      borderRadius="m"
      borderColor={isError ? "error" : "primaryCardBorderColor"}
      borderWidth={1}
    >
      {children}
    </Box>
  );
}
