import React from "react";
//material-ui
import { Grid, Typography, Paper, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "space-evenly",
  },
  item: {
    "& i": {
      fontSize: "2.3rem",
    },
    "& .MuiPaper-root": { color: "black" },
  },
  title: {
    textAlign: "center",
  },
  skills: {
    margin: theme.spacing(2),
  },
  paper: {
    padding: 1,
    textAlign: "center",
    margin: theme.spacing(2),
    minHeight: 260,
    minWidth: 320,
    display: "flex",
    flexDirection: "column",
  },
  hr: {
    backgroundColor: "rebeccapurple",
    width: "40%",
    alignSelf: "center",
  },
}));

function Card() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid md={4} sm={6} item className={classes.item}>
        <Paper className={classes.paper}>
          <i className="fas fa-laptop-code" />
          <Typography className={classes.title} variant="h6">
            Front-end
          </Typography>
          <Divider className={classes.hr} variant="middle" />
          <Typography className={classes.skills} variant="body1">
            HTML5, CSS/SASS/JSS, Javascript, Jquery, Ajax
          </Typography>
          <Typography className={classes.title} variant="subtitle2">
            Frameworks
          </Typography>
          <Typography className={classes.skills} variant="body1">
            REACT, VUE
          </Typography>
        </Paper>
      </Grid>
      <Grid md={4} sm={6} item className={classes.item}>
        <Paper className={classes.paper}>
          <i className="fas fa-database" />
          <Typography className={classes.title} variant="h6">
            Back-end
          </Typography>
          <Divider className={classes.hr} variant="middle" />
          <Typography className={classes.skills} variant="body1">
            PHP, NodeJs, Express, Graphql, REST, Python, Java
          </Typography>
          <Typography className={classes.title} variant="subtitle2">
            Database
          </Typography>
          <Typography className={classes.skills} variant="body1">
            MongoDB, Firebase, SQL
          </Typography>
        </Paper>
      </Grid>
      <Grid md={4} sm={12} item className={classes.item}>
        <Paper className={classes.paper}>
          <i className="fas fa-cogs" />
          <Typography className={classes.title} variant="h6">
            Others
          </Typography>
          <Divider className={classes.hr} variant="middle" />
          <Typography className={classes.skills} variant="body1">
            Git/Github, CLI, VS Code,
          </Typography>
          <Typography className={classes.title} variant="subtitle2">
            Design
          </Typography>
          <Typography className={classes.skills} variant="body1">
            Adobe Photoshop, Adobe Illustrator, COREL Draw,
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Card;

/* <Grid container className={classes.container}>
      <Grid item className={classes.item}>
        <Paper className={classes.paper}>
          <i className="fas fa-laptop-code" />
          <Typography variant="h6">Front-end</Typography>
          <List className={classes.lists}>
            <ListItem>
              <ListItemIcon>
                <i className="fab fa-html5"></i>
              </ListItemIcon>
              <ListItemText primary="HTML5" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i className="fab fa-css3"></i>
              </ListItemIcon>
              <ListItemText primary="CSS3/SASS/JSS" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i className="fab fa-js-square"></i>
              </ListItemIcon>
              <ListItemText primary="Javascript" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="- Frameworks" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i className="fab fa-react" />
              </ListItemIcon>
              <ListItemText primary="REACT" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i className="fab fa-vuejs"></i>
              </ListItemIcon>
              <ListItemText primary="VUE" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item className={classes.item}>
        <Paper className={classes.paper}>
          <i className="fas fa-database" />
          <Typography variant="h6">Back-end</Typography>
          <List className={classes.lists}>
            <ListItem>
              <ListItemIcon>
                <i className="fab fa-php"></i>
              </ListItemIcon>
              <ListItemText primary="PHP" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i className="fab fa-node"></i>
              </ListItemIcon>
              <ListItemText primary="Node Js" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i className="fab fa-java"></i>
              </ListItemIcon>
              <ListItemText primary="Java" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i className="fab fa-python"></i>
              </ListItemIcon>
              <ListItemText primary="Python" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i className="fab fa-node-js"></i>
              </ListItemIcon>
              <ListItemText primary="Express Js" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="- Database" />
            </ListItem>
            <ListItem>
              <ListItemText primary="MongoDB" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Firebase" />
            </ListItem>
            <ListItem>
              <ListItemText primary="SQL" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item className={classes.item}>
        <Paper className={classes.paper}>
          <i className="fas fa-cogs" />
          <Typography variant="h6">Others</Typography>
          <List className={classes.lists}>
            <ListItem>
              <ListItemText primary="Git/Github" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bootstrap" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Material-ui" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Tools" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Visual Studio Code" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Adobe Photoshop" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Adobo Illustrator" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid> */
