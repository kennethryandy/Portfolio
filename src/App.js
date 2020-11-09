import React, { useEffect, useState, lazy, Suspense } from "react";
import {theme, themeDark} from './config/theme'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import gsap from "./gsap";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
// import Home from "./components/Home/Home";
// import Navbar from "./components/Layout/Navbar";
import Loading from "./components/Layout/Loading";
const Home = lazy(() => import("./components/Home/Home"));
const Navbar = lazy(() => import("./components/Layout/Navbar"));

function App() {
  const [navBar, setNavBar] = useState(true);
  const [darkTheme, setDark] = useState(false);

  const light = createMuiTheme(theme);
  const dark = createMuiTheme(themeDark);

  useEffect(() => {
    gsap.to(document.body, { duration: 0, css: { visibility: "visible" } });
  }, []);

  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <CssBaseline />
      <Suspense fallback={<Loading/>}>
        <Navbar navBar={navBar} gsap={gsap} dark={darkTheme} setDark={setDark} />
        <Home nav={setNavBar} gsap={gsap}/>
      </Suspense>
      <About gsap={gsap} />
      <Project gsap={gsap} />
      <Contact gsap={gsap} />
    </ThemeProvider>
  );
}

export default App;
