import React from "react";
import { Box } from "../../atoms/Box.atom";

type FormInputBoxProps = {
  children: React.ReactNode;
};

export default function FormInputRoot({
  children,
}: FormInputBoxProps): JSX.Element {
  return (
    <Box gap="s" width="100%">
      {children}
    </Box>
  );
}
