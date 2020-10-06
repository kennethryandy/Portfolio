import React from "react";
import covid19 from "../../assets/covid19.png";
import zmovies from "../../assets/zmovies.png";
import socialclone from "../../assets/socialclone.png";
import quizgame from "../../assets/quizgame.png";
//material-ui
import { Paper, Typography } from "@material-ui/core";
import projectStyles from "./projectStyles";

function Project() {
  const classes = projectStyles();
  return (
    <section className={classes.project} id="projects">
      <div className={classes.appBarSpacer} />
      <Typography variant="h4" className={classes.title} gutterBottom>
        Some of my works.
      </Typography>
      <Paper className={classes.projectItem}>
        <div className={classes.imgContainer}>
          <img src={zmovies} alt="zmovies" />
        </div>
        <div className={classes.projectInfo}>
          <div>
            <Typography variant="h5">zMovies</Typography>
            <Typography variant="body1">
              lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsum
            </Typography>
            <Typography variant="subtitle2">Built with</Typography>
            <ul>
              <li>React</li>
            </ul>
          </div>
        </div>
      </Paper>
      <Paper className={classes.projectItem}>
        <div className={classes.projectInfo}>
          <div>
            <Typography variant="h5">Covid19 Tracker</Typography>
            <Typography variant="body1">
              lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsum
            </Typography>
            <Typography variant="subtitle2">Built with</Typography>
            <ul>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <img src={covid19} alt="covid19-tracker" />
        </div>
      </Paper>
      <Paper className={classes.projectItem}>
        <div className={classes.imgContainer}>
          <img src={socialclone} alt="socialclone" />
        </div>
        <div className={classes.projectInfo}>
          <div>
            <Typography variant="h5">Social Clone</Typography>
            <Typography variant="body1">
              lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsum
            </Typography>
            <Typography variant="subtitle2">Built with</Typography>
            <ul>
              <li>React</li>
            </ul>
          </div>
        </div>
      </Paper>
      <Paper className={classes.projectItem}>
        <div className={classes.projectInfo}>
          <div>
            <Typography variant="h5">Quiz Game</Typography>
            <Typography variant="body1">
              lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsum
            </Typography>
            <Typography variant="subtitle2">Built with</Typography>
            <ul>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <img src={quizgame} alt="Quiz Game" />
        </div>
      </Paper>
    </section>
  );
}

export default Project;
