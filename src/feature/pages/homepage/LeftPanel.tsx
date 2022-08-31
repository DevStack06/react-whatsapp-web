import { Avatar, Box, IconButton, Typography } from "@mui/material";
import CustomAppBar from "../../../foundation/CustomAppBar/CustomAppBar";
import CustomMenuButton from "../../../foundation/CustomMenuButton/CustomMenuButton";
import { leftPanelMenuItem } from "./utils/constant";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatCard from "../../../foundation/ChatCard/ChatCard";

export default function LeftPanel() {
  return (
    <Box height="100%" width="30%">
      <CustomAppBar>
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Avatar />

          <Box display="flex">
            <IconButton
              onClick={() => {}}
              sx={{
                paddingRight: "15px",
              }}
            >
              <DonutLargeIcon
                sx={{
                  color: "#afbac0",
                }}
              />
            </IconButton>
            <IconButton
              onClick={() => {}}
              sx={{
                paddingRight: "10px",
              }}
            >
              <ChatIcon
                sx={{
                  color: "#afbac0",
                }}
              />
            </IconButton>
            <CustomMenuButton menuItems={leftPanelMenuItem} />
          </Box>
        </Box>
      </CustomAppBar>
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      {/* <ChatCard /> */}
    </Box>
  );
}
