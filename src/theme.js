import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const getTheme = (prefersDarkMode) => {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      success: {
        main: "#099409",
        light: "#099409",
        contrastText: "#fff",
      },
      warning: {
        main: "#cdcd27",
        light: "#cdcd27",
        contrastText: "#fff",
      },
      error: {
        main: "#655c5c",
        light: "#655c5c",
        contrastText: "#fff",
      },
      text: {
        primary: "#000",
        secondary: "#fff",
      },
      border: {
        main: "#d3d6da",
        full: "#3f3838",
      },
      key: {
        main: "#d3d6da",
        error: "#655c5c",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      success: {
        main: "#099409",
        light: "#099409",
        contrastText: "#fff",
      },
      warning: {
        main: "#cdcd27",
        light: "#cdcd27",
        contrastText: "#fff",
      },
      error: {
        main: "#201E1E",
        light: "#655c5c",
        contrastText: "#fff",
      },
      text: {
        primary: "#fff",
        secondary: "#fff",
      },
      border: {
        main: "#3f3838",
        full: "#d3d6da",
      },
      key: {
        main: "#655c5c",
        error: "#201E1E",
      },
    },
  });

  return responsiveFontSizes(prefersDarkMode ? darkTheme : lightTheme);
};

export default getTheme;
