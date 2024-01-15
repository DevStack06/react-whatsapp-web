import { Box } from "@mui/material";
import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default function Homepage() {
  return (
    <Box display="flex" flexDirection="row" height="100vh">
      <LeftPanel />
      <Box
        sx={{
          border: ".05px solid #2f3b44",
        }}
      />
      <RightPanel />
    </Box>
  );
}
