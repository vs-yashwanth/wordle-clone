import React from "react";

import Home from "./components/home";

import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import getTheme from "./theme";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  return (
    <ThemeProvider theme={getTheme(prefersDarkMode)}>
      <CssBaseline enableColorScheme />
      <Home style={{ userSelect: "none" }} />
    </ThemeProvider>
  );
};

export default App;
