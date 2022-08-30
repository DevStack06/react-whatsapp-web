import { Box } from "@mui/material";
import React from "react";

interface CustomAppBarProps {
  children: any;
}

export default function CustomAppBar({ children }: CustomAppBarProps) {
  return (
    <Box
      height="63px"
      sx={{
        background: "#1f2c33",
        padding: "0px 20px",
      }}
    >
      {children}
    </Box>
  );
}
