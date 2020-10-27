import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import VisibilitySensor from "react-visibility-sensor";
import resume from '../../assets/RESUME.pdf'
//material-ui
import homeStyles from "./homeStyles";
import { Button, IconButton, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import withWidth from "@material-ui/core/withWidth";

function Home({ nav, width, gsap, setLoading }) {
  const classes = homeStyles();
  const [hover, setHover] = useState(false);
  const [hoverRsm, setHoverRsm] = useState(false);

  useEffect(() => {
    gsap.from(".content", {
      y: 44,
      duration: 1,
      ease: "power3.inOut",
      stagger: 0.3,
    });
    gsap.from(".home-button", {
      duration: 1,
      y: 20,
      opacity: 0,
      ease: "power3.out",
      delay: 1,
      stagger: 0.2,
    });
    gsap.from(".home-icon-button", {
      duration: 1,
      y: 20,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.2,
      delay: 1,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <section className={classes.home} id="home">
      <VisibilitySensor onChange={(vis) => nav(vis)}>
        <div className={classes.container}>
          <div className={classes.introduction}>
            <Typography variant="body1">
              <div className="content-line">
                <div className="intro content">Hello, I'm</div>
              </div>
            </Typography>
            <Typography className={classes.name} variant="h1">
              <div className="content-line">
                <div className="name content">KENNETH RYAN DY</div>
              </div>
            </Typography>
            <Typography className={classes.desc} variant="body2">
              <div className="content-line">
                <div className="desc content">
                  <Typed
                    strings={["CREATIVE FULLSTACK WEB DEVELOPER"]}
                    typeSpeed={20}
                    showCursor={false}
                    startDelay={900}
                  />
                </div>
              </div>
            </Typography>
            <div className={classes.CTA}>
              <div className={classes.btns}>
                <div className="home-button">
                  <Button
                    variant={!hoverRsm ? "contained" : "outlined"}
                    className={classes.btnResume}
                    classes={{ root: classes.btnRoot }}
                    size={
                      width === "xs"
                        ? "small"
                        : width === "sm"
                        ? "medium"
                        : "large"
                    }
                    onMouseEnter={() => setHoverRsm(true)}
                    onMouseLeave={() => setHoverRsm(false)}
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </Button>
                </div>
                <div className="home-button">
                  <Button
                    href="#projects"
                    variant={hover ? "contained" : "outlined"}
                    className={classes.btnProject}
                    classes={{ root: classes.btnRoot }}
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
              </div>
              <div className={classes.icons}>
                <div className="home-icon-button">
                  <IconButton 
                  color="inherit" 
                  href="https://github.com/kennethryandy"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <GitHubIcon fontSize={width === "xs" ? "small" : "large"} />
                  </IconButton>
                </div>
                <div className="home-icon-button">
                  <IconButton 
                  color="inherit"
                  href="https://www.linkedin.com/in/kennethryan-dy-593709147/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      fontSize={width === "xs" ? "small" : "large"}
                    />
                  </IconButton>
                </div>
                <div className="home-icon-button">
                  <IconButton 
                  color="inherit"
                  href="https://www.facebook.com/Slickwit21"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <FacebookIcon
                      fontSize={width === "xs" ? "small" : "large"}
                    />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    </section>
  );
}

export default withWidth()(Home);
