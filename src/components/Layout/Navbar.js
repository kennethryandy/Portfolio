import React, { useEffect, useRef } from "react";
//material-ui
import navbarStyles from "./navbarStyles";
import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";

function Navbar({ navBar, gsap }) {
  const classes = navbarStyles();
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      duration: 1.6,
      x: -100,
      opacity: 0,
      ease: "power3.inOut",
    });
    gsap.from(
      ".links",
      {
        duration: 1.2,
        opacity: 0,
        ease: "power3.in",
        delay: -0.2,
        stagger: 0.1,
      },
      "<.4"
    );
    // eslint-disable-next-line
  }, []);

  return (
    <AppBar
      color={navBar ? "transparent" : "secondary"}
      position="fixed"
      className={classes.navbar}
      style={navBar ? { color: "#e0e0e0" } : {}}
    >
      <Toolbar>
        <div className={classes.nav}>
          <Link href="#home" underline="none" color="inherit">
            <div className={classes.brandName}>
              <Typography ref={titleRef} variant="h6" className={classes.title}>
                Ken D.
              </Typography>
            </div>
          </Link>
          <div className={classes.navlinks}>
            <Link
              href="#home"
              underline="none"
              color="inherit"
              className={classes.navlink}
            >
              <span className="links">home</span>
            </Link>
            <Link
              href="#about"
              underline="none"
              color="inherit"
              className={classes.navlink}
            >
              <span className="links">about</span>
            </Link>
            <Link
              href="#projects"
              underline="none"
              color="inherit"
              className={classes.navlink}
            >
              <span className="links">projects</span>
            </Link>
            <Link
              href="#contact"
              underline="none"
              color="inherit"
              className={classes.navlink}
            >
              <span className="links">contact</span>
            </Link>
            <Link
              href="#projects"
              underline="none"
              color="inherit"
              className={classes.navlinkScondary}
            >
              <span className="links">projects</span>
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
