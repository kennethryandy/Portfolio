import React, { useState } from "react";
import Typed from "react-typed";
import VisibilitySensor from "react-visibility-sensor";
//material-ui
import homeStyles from "./homeStyles";
import { Button, IconButton, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import withWidth from "@material-ui/core/withWidth";

function Home({ nav, width }) {
  const classes = homeStyles();
  const [hover, setHover] = useState(false);
  const [hoverRsm, setHoverRsm] = useState(false);
  return (
    <section className={classes.home} id="home">
      <VisibilitySensor onChange={(vis) => nav(vis)}>
        <div className={classes.container}>
          <div className={classes.introduction}>
            <Typography variant="body1">Hello, I'm</Typography>
            <Typography className={classes.name} variant="h1">
              KENNETH RYAN DY
            </Typography>
            <Typography className={classes.desc} variant="body2">
              <Typed
                strings={["CREATIVE FULLSTACK WEB DEVELOPER"]}
                typeSpeed={25}
                showCursor={false}
              />
            </Typography>
            <div className={classes.CTA}>
              <div className={classes.btns}>
                <Button
                  variant={!hoverRsm ? "contained" : "outlined"}
                  className={classes.btnResume}
                  size={
                    width === "xs"
                      ? "small"
                      : width === "sm"
                      ? "medium"
                      : "large"
                  }
                  onMouseEnter={() => setHoverRsm(true)}
                  onMouseLeave={() => setHoverRsm(false)}
                >
                  Download Resume
                </Button>
                <Button
                  href="#projects"
                  variant={hover ? "contained" : "outlined"}
                  className={classes.btnProject}
                  size={
                    width === "xs"
                      ? "small"
                      : width === "sm"
                      ? "medium"
                      : "large"
                  }
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  View Portfolio
                </Button>
              </div>
              <div className={classes.icons}>
                <IconButton color="inherit">
                  <GitHubIcon fontSize={width === "xs" ? "medium" : "large"} />
                </IconButton>
                <IconButton color="inherit">
                  <LinkedInIcon
                    fontSize={width === "xs" ? "medium" : "large"}
                  />
                </IconButton>
                <IconButton color="inherit">
                  <FacebookIcon
                    fontSize={width === "xs" ? "medium" : "large"}
                  />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    </section>
  );
}

export default withWidth()(Home);
