import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export default function ChatCard() {
  return (
    <Box
      display="flex"
      sx={{
        background: "#101b20",
        padding: "12px 12px",
      }}
    >
      <Avatar />
      <Box
        display="flex"
        flexDirection="column"
        pl="15px"
        width="100%"
        alignItems="flex-start"
      >
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="body1" color="#d1d7db">
            Balram 1
          </Typography>
          <Typography variant="caption" color="#d1d7db">
            4:21 PM
          </Typography>
        </Box>
        <Typography variant="subtitle2" color="#d1d7db">
          Let me check ok 12 3 4kjbj hg u guy
        </Typography>
      </Box>
    </Box>
  );
}
