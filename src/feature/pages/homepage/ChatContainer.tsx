import Box from "@mui/material/Box";
import React from "react";
import OwnMessageCard from "../../../foundation/ChatCard/OwnMessageCard";
import ReplyMessageCard from "../../../foundation/ChatCard/ReplyCard";

const ChatContainer = () => {
  return (
    <Box
      sx={{
        height: "98%",
        // width: "100%",
        position: "absolute",
        top: 0,
        display: "flex",
        flexDirection: "column",
        padding: "1% 6%",
        gap: ".5rem",
        overflow: "auto",
      }}
    >
      <OwnMessageCard />
      <ReplyMessageCard />

      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
    </Box>
  );
};

export default ChatContainer;
