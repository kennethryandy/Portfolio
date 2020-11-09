const typography = {
  fontFamily: [
    '"Poppins"',
    '"Montserrat"',
    '"Roboto"',
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    '"Helvetica Neue"',
    '"Oxygen"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
};

export const theme = {
  palette: {
    // primary: {
    //   light: "#434d63",
    //   main: "#14213d",
    //   dark: "#0e172a",
    //   contrastText: "#ffffff",
    // },
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#b2b2b2",
      contrastText: "#040411",
    },
    background: {
      default: "#e5e5e5",
    },
    // text: {
    //   primary: "#e0e0e0",
    //   secondary: "#FFF",
    // },
  },
  typography,
};

export const themeDark = {
  palette: {
    type: "dark",
    primary: {
      light: "#272b31",
      main: "#393e46",
      dark: "#60646b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#a6a6a6",
      main: "#eeeeee",
      dark: "#f1f1f1",
      contrastText: "#000",
    },
  },
  typography,
}