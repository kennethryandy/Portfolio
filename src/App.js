import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Layout/Navbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import gsap from "./gsap";

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
    // text: {
    //   primary: "#e0e0e0",
    //   secondary: "#FFF",
    // },
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
  useEffect(() => {
    gsap.to(document.body, { duration: 1, css: { visibility: "visible" } });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar navBar={navBar} gsap={gsap} />
      <Home nav={setNavBar} gsap={gsap} />
      <About gsap={gsap} />
      <Project gsap={gsap} />
      <Contact gsap={gsap} />
    </ThemeProvider>
  );
}

export default App;
