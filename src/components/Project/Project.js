import React from "react";
//material-ui
import projectStyles from "./projectStyles";

function Project() {
  const classes = projectStyles();
  return (
    <div className={classes.project} id="projects">
      <div className={classes.appBarSpacer} />
      <h1>Hello</h1>
    </div>
  );
}

export default Project;
