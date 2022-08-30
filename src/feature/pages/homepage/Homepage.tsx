import { Box } from "@mui/material";
import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default function Homepage() {
  return (
    <Box display="flex" flexDirection="row" height="100vh">
      <Box
        width="30%"
        sx={{
          background: "red",
        }}
      >
        <LeftPanel />
      </Box>
      <Box
        sx={{
          border: ".05px solid #2f3b44",
        }}
      />
      <Box
        width="70%"
        sx={{
          background: "yellow",
        }}
      >
        <RightPanel />
      </Box>
    </Box>
  );
}
