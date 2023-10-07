import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CharBox = ({ char, selected, color }) => {
  let bgColor;
  switch (color) {
    case "g":
      bgColor = "green";
      break;
    case "y":
      bgColor = "yellow";
      break;
    case "r":
      bgColor = "red";
      break;
    default:
      bgColor = "transparent";
  }

  let textColor;
  if (color) textColor = "white";
  else if (selected) textColor = "black";
  else textColor = "#2b2b2a";

  return (
    <Box
      sx={{
        width: "40px",
        height: "40px",
        padding: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2px",
        border: char ? "1.5px solid black" : "1px solid #2b2b2a",
        borderRadius: "4px",
        bgcolor: bgColor,
      }}
    >
      <Typography sx={{ fontWeight: "600", color: textColor }} variant="h4">
        {char || ""}
      </Typography>
    </Box>
  );
};

export default CharBox;
