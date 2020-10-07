import React, { useState } from "react";
import covid19 from "../../assets/covid19.png";
import zmovies from "../../assets/zmovies.png";
import socialclone from "../../assets/socialclone.png";
import quizgame from "../../assets/quizgame.png";
//material-ui
import { Button, Divider, Link, Paper, Typography } from "@material-ui/core";
import projectStyles from "./projectStyles";
import CodeIcon from "@material-ui/icons/Code";
import ArrowIcon from "@material-ui/icons/ArrowForwardIos";

function Project() {
  const classes = projectStyles();
  const [isHover, setIsHover] = useState(false);

  return (
    <section className={classes.project} id="projects">
      <div className={classes.appBarSpacer} />
      <Typography variant="h4" className={classes.title} gutterBottom>
        Some of my works.
      </Typography>
      <Divider className={classes.hr} />
      <Paper className={classes.projectItem} elevation={2}>
        <div
          className={classes.imgContainer}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onTouchStart={() => setIsHover(true)}
          onTouchEnd={() => setIsHover(false)}
        >
          <a
            href="https://zmovies.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={zmovies} alt="zmovies" />
          </a>
          {isHover && (
            <div className={classes.imgLink}>
              <Button
                href="https://zmovies.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                endIcon={<ArrowIcon />}
              >
                View Project
              </Button>
            </div>
          )}
        </div>
        <div className={classes.projectInfo}>
          <div className={classes.infoText}>
            <Typography variant="h5" gutterBottom>
              zMovies
            </Typography>
            <Typography variant="body1" gutterBottom>
              Browse your favorite movies and watch trailer. The goal of this
              project is to use dynamic components for efficiency and better
              performance.
            </Typography>
            <Typography variant="subtitle2">Built with</Typography>
            <ul>
              <li>React</li>
              <li>Material-UI</li>
              <li>The Movie Database API</li>
            </ul>
          </div>
          <div className={classes.projectButtons}>
            <Button
              href="https://zmovies.netlify.app"
              color="primary"
              variant="contained"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.demo}
            >
              Live Demo
            </Button>
            <Link
              href="https://github.com/kennethryandy/movie-app"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.code}
            >
              <CodeIcon /> View Code
            </Link>
          </div>
        </div>
      </Paper>
      <Paper className={classes.projectItem} elevation={2}>
        <div className={classes.projectInfo}>
          <div>
            <Typography variant="h5" gutterBottom>
              Covid19 Tracker
            </Typography>
            <Typography variant="body1">
              lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsum
            </Typography>
            <Typography variant="subtitle2">Built with</Typography>
            <ul>
              <li>React</li>
            </ul>
          </div>
          <div className={classes.projectButtons}>
            <Button
              href="https://covid19-status-track.netlify.app"
              color="primary"
              variant="contained"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.demo}
            >
              Live Demo
            </Button>
            <Link
              href="https://github.com/kennethryandy/Covid-19-Tracker"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.code}
            >
              <CodeIcon /> View Code
            </Link>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <a
            href="https://covid19-status-track.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={covid19} alt="covid19-tracker" />
          </a>
        </div>
      </Paper>
      <Paper className={classes.projectItem} elevation={2}>
        <div className={classes.imgContainer}>
          <a
            href="https://socialclone.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={socialclone} alt="socialclone" />
          </a>
        </div>
        <div className={classes.projectInfo}>
          <div>
            <Typography variant="h5" gutterBottom>
              Social Clone
            </Typography>
            <Typography variant="body1">
              lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsum
            </Typography>
            <Typography variant="subtitle2">Built with</Typography>
            <ul>
              <li>React</li>
            </ul>
          </div>
          <div className={classes.projectButtons}>
            <Button
              href="https://socialclone.netlify.app"
              color="primary"
              variant="contained"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.demo}
            >
              Live Demo
            </Button>
            <Link
              href="https://socialclone.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.code}
            >
              <CodeIcon /> View Code
            </Link>
          </div>
        </div>
      </Paper>
      <Paper className={classes.projectItem} elevation={2}>
        <div className={classes.projectInfo}>
          <div>
            <Typography variant="h5" gutterBottom>
              Quiz Game
            </Typography>
            <Typography variant="body1">
              lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsum
            </Typography>
            <Typography variant="subtitle2">Built with</Typography>
            <ul>
              <li>React</li>
            </ul>
          </div>
          <div className={classes.projectButtons}>
            <Button
              color="primary"
              variant="contained"
              className={classes.demo}
              href="https://quiz-clone.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
            <Link
              href="https://github.com/kennethryandy/QuizGame"
              className={classes.code}
              rel="noopener noreferrer"
            >
              <CodeIcon /> View Code
            </Link>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <a
            href="https://quiz-clone.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={quizgame} alt="Quiz Game" />
          </a>
        </div>
      </Paper>
    </section>
  );
}

export default Project;
