import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";

const CharBox = ({ char, selected, color }) => {
  const theme = useTheme();
  console.log(theme);
  let bgColor;
  switch (color) {
    case "g":
      bgColor = "success.main";
      break;
    case "y":
      bgColor = "warning.main";
      break;
    case "r":
      bgColor = "error.main";
      break;
    default:
      bgColor = "transparent";
  }

  let textColor;
  if (color) textColor = theme.palette.text.secondary;
  else if (selected) textColor = theme.palette.text.primary;
  return (
    <Box
      sx={{
        width: "50px",
        height: "50px",
        padding: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: char
          ? `1.5px solid ${theme.palette.border.full}`
          : `1px solid ${theme.palette.border.main}`,
        borderRadius: "4px",
        bgcolor: bgColor,
      }}
    >
      <Typography sx={{ fontWeight: "600" }} color={textColor} variant="h4">
        {char || ""}
      </Typography>
    </Box>
  );
};

export default CharBox;
