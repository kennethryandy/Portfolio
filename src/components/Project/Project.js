import React, { useEffect } from "react";
import covid19 from "../../assets/covid19.png";
import zmovies from "../../assets/zmovies.png";
import socialclone from "../../assets/socialclone.png";
import quizgame from "../../assets/quizgame.png";
//material-ui
import { Button, Divider, Link, Paper, Typography } from "@material-ui/core";
import projectStyles from "./projectStyles";
import CodeIcon from "@material-ui/icons/Code";
import scrollTriggers from "./scrollTriggers";

function Project({ gsap }) {
  const classes = projectStyles();

  useEffect(() => {
    scrollTriggers(gsap);
    //eslint-disable-next-line
  }, []);

  return (
    <section className={classes.project} id="projects">
      <div className={classes.appBarSpacer} />
      <Typography variant="h4" className={classes.title} gutterBottom>
        My Latest Works.
      </Typography>
      <Divider className={classes.hr} />
      <Paper className={classes.projectItem} elevation={2}>
        <div className={classes.imgContainer}>
          <a
            href="https://zmovies.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="link1"
          >
            <div className="project-img1">
              <img src={zmovies} alt="zmovies" />
            </div>
          </a>
        </div>
        <div className={classes.projectInfo}>
          <div className={classes.infoText}>
            <Typography className="project-title1" variant="h5" gutterBottom>
              zMovies
            </Typography>
            <Typography variant="body1" className="project-body1" gutterBottom>
            Browse your favorite movies and watch trailers it is a single page application that was built in React and React Router for easy and fast routing.. The goal of this project is to use dynamic components for efficiency and better performance.
            </Typography>
            <div className={classes.listItem}>
              <Typography className="lists1" variant="subtitle2">
                Built with
              </Typography>
            </div>
            <ul>
              <div className={classes.listItem}>
                <li className="lists1">React</li>
              </div>
              <div className={classes.listItem}>
                <li className="lists1">Material-UI</li>
              </div>
              <div className={classes.listItem}>
                <li className="lists1">The Movie Database API</li>
              </div>
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
          <div className={classes.infoText}>
            <Typography variant="h5" className="project-title2" gutterBottom>
              Covid-19 Tracker
            </Typography>
            <Typography variant="body1" className="project-body2">
              An app that tracks coronavirus cases, recoveries and deaths world wide. It lets the user check covid19 cases in any country, it also has a map and graph on it.
            </Typography>
            <div className={classes.listItem}>
              <Typography className="lists2" variant="subtitle2">
                Built with
              </Typography>
            </div>
            <ul>
              <div className={classes.listItem}>
                <li className="lists2">React</li>
              </div>
              <div className={classes.listItem}>
                <li className="lists2">Material-UI</li>
              </div>
              <div className={classes.listItem}>
                <li className="lists2">Leaflet</li>
              </div>
              <div className={classes.listItem}>
                <li className="lists2">ChartJs</li>
              </div>
              <div className={classes.listItem}>
                <li className="lists2">Covid19 API</li>
              </div>
              <div className={classes.listItem}>
                <li className="lists2">Disease API</li>
              </div>
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
            className="link2"
          >
            <div className="project-img2">
              <img src={covid19} alt="covid19-tracker" />
            </div>
          </a>
        </div>
      </Paper>
      <Paper className={classes.projectItem} elevation={2}>
        <div className={classes.imgContainer}>
          <a
            href="https://socialclone.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="link3"
          >
            <div className="project-img3">
              <img src={socialclone} alt="socialclone" />
            </div>
          </a>
        </div>
        <div className={classes.projectInfo}>
          <div className={classes.infoText}>
            <Typography variant="h5" gutterBottom className="project-title3">
              Social Clone
            </Typography>
            <Typography variant="body1" className="project-body3">
              A social social media app that let users post, like and comment. It has a RESTFUL API that is hosted in a separate server.
            </Typography>
            <div className={classes.listItem}>
              <Typography variant="subtitle2" className="lists3">
                Built with
              </Typography>
            </div>
            <ul>
              <div className={classes.listItem}>
                <li className="lists3">React</li>
              </div>
              <div className={classes.listItem}>
                <li className="lists3">Redux</li>
              </div>
              <div className={classes.listItem}>
                <li className="lists3">Material-UI</li>
              </div>
              <div className={classes.listItem}>
                <li className="lists3">Express</li>
              </div>
              <div className={classes.listItem}>
                <li className="lists3">Graphql</li>
              </div>
              <div className={classes.listItem}>
                <li className="lists3">MongoDB</li>
              </div>
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
          <div className={classes.infoText}>
            <Typography variant="h5" gutterBottom className="project-title4">
              Quiz Game
            </Typography>
            <Typography variant="body1" className="project-body4">
            A trivia game that lets the user select a category and difficulties that is pulled through the open trivia API. It then randomly selects ten random questions depending on the category that user's choose and tracks the correct answers.
            </Typography>
            <div className={classes.listItem}>
              <Typography variant="subtitle2" className="lists4">
                Built with
              </Typography>
            </div>
            <ul>
              <div className={classes.listItem}>
                <li className="lists4">React</li>
              </div>
              <div className={classes.listItem}>
                <li className="lists4">Material-UI</li>
              </div>
              <div className={classes.listItem}>
                <li className="lists4">Open Trivia API</li>
              </div>
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
              target="_blank"
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
            className="link4"
          >
            <div className="project-img4">
              <img src={quizgame} alt="Quiz Game" />
            </div>
          </a>
        </div>
      </Paper>
    </section>
  );
}

export default Project;
