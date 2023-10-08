import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { colors } from "../../../../constants";

const CharBox = ({ char, selected, color }) => {
  let bgColor;
  switch (color) {
    case "g":
      bgColor = colors.tileGreen;
      break;
    case "y":
      bgColor = colors.tileYellow;
      break;
    case "r":
      bgColor = colors.tileWrong;
      break;
    default:
      bgColor = "transparent";
  }

  let textColor;
  if (color) textColor = colors.textWhite;
  else if (selected) textColor = colors.textBlack;
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
        border: char
          ? "1.5px solid black"
          : `1px solid ${colors.tileBorderGeneral}`,
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
