import React from "react";
//material-ui
import aboutStyles from "./aboutStyles";
import { Typography } from "@material-ui/core";
import Card from "./Card/Card";

function About() {
  const classes = aboutStyles();
  return (
    <section className={classes.about} id="about">
      <div className={classes.appBarSpacer} />
      <div className={classes.info}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography gutterBottom variant="body1" className={classes.aboutMe}>
          "Hello, my name is Kenneth Ryan Dy a web developer. As I enjoy
          exploring new things I never back down from any challenges that comes.
          Seeking ideas and concepts are my favorite part of being a developer.
          I constantly learning to shrapen my skills that I already have."
        </Typography>
      </div>
      <div className={classes.skills}>
        <Typography gutterBottom variant="h5">
          Skills & Tools
        </Typography>
        <Card />
      </div>
    </section>
  );
}

export default About;
