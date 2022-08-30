import { Avatar, Box, IconButton, Typography } from "@mui/material";
import CustomAppBar from "../../../foundation/CustomAppBar/CustomAppBar";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import bg from "../../../assets/background.png";

export default function RightPanel() {
  return (
    <Box display="flex" flexDirection="column">
      <CustomAppBar>
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex">
            <Avatar />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              pl="10px"
            >
              <Typography variant="body1" color="white">
                Balram
              </Typography>
              <Typography variant="caption" color="#8496a0">
                online
              </Typography>
            </Box>
          </Box>
          <Box display="flex">
            <IconButton onClick={() => {}}>
              <SearchIcon
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
            <IconButton onClick={() => {}}>
              <MoreVertIcon
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </CustomAppBar>
      <Box
        height="100%"
        width="100%"
        display="inline-block"
        component="img"
        src={bg}
      >
        {/* <img src={bg} alt="" width="100%" height="110%" /> */}
      </Box>
    </Box>
  );
}
