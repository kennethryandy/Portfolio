import React from "react";
//material-ui
import contactStyles from "./contactStyles";

function Contact() {
  const classes = contactStyles();
  return (
    <div className={classes.contact} id="contact">
      <div className={classes.appBarSpacer} />
      <h1>Contact</h1>
    </div>
  );
}

export default Contact;
