import React, { useState } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Layout/Navbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";

const theme = createMuiTheme({
  type: "light",
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
    text: {
      primary: "#e0e0e0",
      secondary: "#FFF",
    },
  },
  typography: {
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
  },
});

function App() {
  const [navBar, setNavBar] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar navBar={navBar} />
      <Home nav={setNavBar} />
      <About />
      <Project />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
