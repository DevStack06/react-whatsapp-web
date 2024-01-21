import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { colors } from "../../theme";

const OwnMessageCard = () => {
  return (
    <Paper
      sx={{
        background: colors.green1,
        display: "flex",
        alignSelf: "flex-end",
        maxWidth: "60%",
        textAlign: "start",
        padding: ".35rem .8rem",
        flexDirection: "column",
        borderRadius: ".625rem",
        position: "relative",
        "&::after": {
          content: '" "',
          border: "20px solid transparent",
          position: "absolute",
          top: 0,
          right: "-1.25rem",
          borderTopRightRadius: ".5rem",
          borderTopColor: colors.green1,
        },
      }}
    >
      <Typography
        color={colors.white1}
        sx={{
          fontSize: "1rem",
        }}
      >
        OwnMessage Card Nulla enim ut pari atur magna. OwnMessa geCard Nulla
        enim ut OwnM es sageCard Nulla enim ut pariatur sit consectetur magna.
      </Typography>
      <Typography
        color={colors.grey1}
        sx={{
          fontSize: ".85rem",
          display: "flex",
          alignSelf: "flex-end",
        }}
      >
        4:59
      </Typography>
    </Paper>
  );
};

export default OwnMessageCard;
