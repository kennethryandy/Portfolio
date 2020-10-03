import React from "react";
//material-ui
import navbarStyles from "./navbarStyles";
import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";

function Navbar({ navBar }) {
  const classes = navbarStyles();
  return (
    <AppBar
      color={navBar ? "transparent" : "secondary"}
      position="fixed"
      className={classes.navbar}
      // style={navBar ? { boxShadow: "none" } : {}}
    >
      <Toolbar>
        <div className={classes.nav}>
          <Link href="#home" underline="none" color="inherit">
            <Typography variant="h6" className={classes.title}>
              KD
            </Typography>
          </Link>
          <div className={classes.navlinks}>
            <Link
              href="#home"
              underline="none"
              color="inherit"
              className={classes.navlink}
            >
              home
            </Link>
            <Link
              href="#about"
              underline="none"
              color="inherit"
              className={classes.navlink}
            >
              about
            </Link>
            <Link
              href="#projects"
              underline="none"
              color="inherit"
              className={classes.navlink}
            >
              projects
            </Link>
            <Link
              href="#contact"
              underline="none"
              color="inherit"
              className={classes.navlink}
            >
              contact
            </Link>
            <Link
              href="#projects"
              underline="none"
              color="inherit"
              className={classes.navlinkScondary}
            >
              projects
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
