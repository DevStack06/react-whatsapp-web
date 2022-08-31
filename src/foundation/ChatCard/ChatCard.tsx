import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { ChatCardType } from "../../feature/pages/homepage/utils/LeftPanel.types";

interface ChatCardProps {
  item: ChatCardType;
}

export default function ChatCard({ item }: ChatCardProps) {
  const { name, lastSeen, lastText, selected } = item;
  return (
    <Box
      display="flex"
      sx={{
        background: selected ? "#2b3943" : "#101b20",
        padding: "8px 12px",
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
            {name}
          </Typography>
          <Typography variant="caption" color="#d1d7db">
            {lastSeen}
          </Typography>
        </Box>
        <Typography variant="subtitle2" color="#d1d7db">
          {lastText}
        </Typography>
        <Box
          width="100%"
          mt="13px"
          sx={{
            border: ".05px solid #2f3b44",
          }}
        />
      </Box>
    </Box>
  );
}
