import { Box } from "@/presenter/components/atoms/Box.atom";
import React, { ReactNode } from "react";

export default function CardIconButtonBox({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Box gap="m" alignItems="center">
      {children}
    </Box>
  );
}
