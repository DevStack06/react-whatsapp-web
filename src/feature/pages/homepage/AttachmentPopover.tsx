import React, { useState } from "react";
import { Avatar, Box, IconButton, Popover } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PersonIcon from "@mui/icons-material/Person";
import PhotoFilterIcon from "@mui/icons-material/PhotoFilter";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { colors } from "../../../theme";

const AttachmentPopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const globalIconStyle = {
    color: "#8696a1",
    height: "28px",
    width: "28px",
  };
  const globalIconStyle2 = {
    height: "2rem",
    width: "2rem",
  };
  const options = [
    {
      id: "person",
      backgroundColor: colors.blue2,
      icon: (
        <PersonIcon
          sx={{
            ...globalIconStyle2,
          }}
        />
      ),
    },
    {
      id: "document",
      backgroundColor: colors.purple1,
      icon: (
        <InsertDriveFileIcon
          sx={{
            ...globalIconStyle2,
          }}
        />
      ),
    },
    {
      id: "camera",
      backgroundColor: colors.red1,
      icon: (
        <CameraAltIcon
          sx={{
            ...globalIconStyle2,
          }}
        />
      ),
    },
    {
      id: "sticker",
      backgroundColor: colors.blue1,
      icon: (
        <PhotoFilterIcon
          sx={{
            ...globalIconStyle2,
          }}
        />
      ),
    },
    {
      id: "gallery",
      backgroundColor: colors.pink1,
      icon: (
        <InsertPhotoIcon
          sx={{
            ...globalIconStyle2,
          }}
        />
      ),
    },
  ];
  const open = Boolean(anchorEl);

  return (
    <Box>
      <IconButton
        onClick={(event: any) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <AttachFileIcon
          sx={{
            ...globalIconStyle,
            transform: "rotateY(0deg) rotate(45deg)",
          }}
        />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
        PaperProps={{
          sx: {
            background: "transparent",
            paddingBottom: "1rem",
          },
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        elevation={0}
      >
        <Box display="flex" flexDirection="column" gap="1.2rem">
          {options.map((item) => (
            <Avatar
              sx={{
                background: item.backgroundColor,
                height: "3.8rem",
                width: "3.8rem",
              }}
            >
              {item.icon}
            </Avatar>
          ))}
        </Box>
      </Popover>
    </Box>
  );
};

export default AttachmentPopover;
