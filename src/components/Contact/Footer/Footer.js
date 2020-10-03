import React from "react";
import { Typography, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  footer: {
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
    display: "flex",
    alignItems: "center",
    margin: "0 16px",
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
          <GitHubIcon />
          <Typography variant="subtitle2">Github</Typography>
        </div>
        <div className={classes.socialmedia}>
          <LinkedInIcon />
          <Typography variant="subtitle2">LinkedIn</Typography>
        </div>
        <div className={classes.socialmedia}>
          <FacebookIcon />
          <Typography variant="subtitle2">Facebook</Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default Footer;
