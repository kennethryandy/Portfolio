import React from "react";
import { Typography, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: "#e0e0e0",
    height: "100%",
    padding: 16,
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: { justifyContent: "center" },
    [theme.breakpoints.only("sm")]: { justifyContent: "space-around" },
  },
  footerNavLink: {
    textDecoration: "none",
    color: "#e0e0e0",
    margin: `0 ${theme.spacing(2)}px`,
  },
  socialmedia: {
    "& svg": { margin: "0 8px" },
  },
  socialmediaLinks: {
    display: "flex",
    alignItems: "center",
    margin: "0 16px",
    textDecoration: "none",
    color: "#e0e0e0",
    "&:hover": {
      textDecoration: "underline",
      "& svg": {
        color: "#4dabf5",
      },
    },
  },
  email: {
    textDecoration: "underline",
  },
  col: {
    [theme.breakpoints.down("sm")]: { margin: `${theme.spacing(1)}px 0` },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Grid className={classes.col} item>
        <Link className={classes.footerNavLink} href="#about">
          <Typography gutterBottom display="inline" variant="subtitle2">
            About
          </Typography>
        </Link>
        <Link className={classes.footerNavLink} href="#projects">
          <Typography gutterBottom display="inline" variant="subtitle2">
            Portfolio
          </Typography>
        </Link>
      </Grid>
      <Grid className={classes.col} item>
        <span>Email: </span>
        <Typography
          display="inline"
          className={classes.email}
          variant="subtitle2"
        >
          dykennethryan@gmail.com
        </Typography>
      </Grid>
      <Grid className={classes.col} item style={{ display: "flex" }}>
        <div className={classes.socialmedia}>
          <a
            href="https://github.com/kennethryandy"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialmediaLinks}
          >
            <GitHubIcon />
            <Typography variant="subtitle2">Github</Typography>
          </a>
        </div>
        <div className={classes.socialmedia}>
          <a
            href="https://www.linkedin.com/in/kennethryan-dy-593709147/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialmediaLinks}
          >
            <LinkedInIcon />
            <Typography variant="subtitle2">LinkedIn</Typography>
          </a>
        </div>
        <div className={classes.socialmedia}>
          <a
            href="https://www.facebook.com/Slickwit21"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialmediaLinks}
          >
            <FacebookIcon />
            <Typography variant="subtitle2">Facebook</Typography>
          </a>
        </div>
      </Grid>
    </Grid>
  );
}

export default Footer;
