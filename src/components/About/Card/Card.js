import React from "react";
//material-ui
import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
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
  lists: {
    textAlignLast: "center",
  },
  paper: {
    textAlign: "center",
    minWidth: 250,
  },
}));

function Card() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.item}>
        <Paper className={classes.paper}>
          <i class="fas fa-laptop-code" />
          <Typography variant="h6">Front-end</Typography>
          <List className={classes.lists}>
            <ListItem>
              <ListItemIcon>
                <i class="fab fa-html5"></i>
              </ListItemIcon>
              <ListItemText primary="HTML5" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i class="fab fa-css3"></i>
              </ListItemIcon>
              <ListItemText primary="CSS3/SASS/JSS" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i class="fab fa-js-square"></i>
              </ListItemIcon>
              <ListItemText primary="Javascript" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="- Frameworks" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i class="fab fa-react" />
              </ListItemIcon>
              <ListItemText primary="REACT" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i class="fab fa-vuejs"></i>
              </ListItemIcon>
              <ListItemText primary="VUE" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item className={classes.item}>
        <Paper className={classes.paper}>
          <i class="fas fa-database" />
          <Typography variant="h6">Back-end</Typography>
          <List className={classes.lists}>
            <ListItem>
              <ListItemIcon>
                <i class="fab fa-php"></i>
              </ListItemIcon>
              <ListItemText primary="PHP" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i class="fab fa-node"></i>
              </ListItemIcon>
              <ListItemText primary="Node Js" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i class="fab fa-java"></i>
              </ListItemIcon>
              <ListItemText primary="Java" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i class="fab fa-python"></i>
              </ListItemIcon>
              <ListItemText primary="Python" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i class="fab fa-node-js"></i>
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
      <Grid ite className={classes.item}>
        <Paper className={classes.paper}>
          <i class="fas fa-cogs" />
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
    </Grid>
  );
}

export default Card;
