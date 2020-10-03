import React from "react";
//material-ui
import { Typography, TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import contactStyles from "./contactStyles";
import Footer from "./Footer/Footer";

function Contact() {
  const classes = contactStyles();
  return (
    <>
      <div className={classes.contact} id="contact">
        <div className={classes.appBarSpacer} />
        <Typography variant="h4" className={classes.title}>
          Let's talk!
        </Typography>
        <div className={classes.formContainer}>
          <form className={classes.form}>
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Name"
              placeholder="Your name"
              color="secondary"
              fullWidth
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Email"
              placeholder="Your email adress"
              color="secondary"
              fullWidth
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Message"
              placeholder="Type your message here..."
              color="secondary"
              multiline
              rows={4}
              fullWidth
            ></TextField>
            <div style={{ textAlignLast: "center" }}>
              <Button
                endIcon={<SendIcon />}
                variant="outlined"
                color="secondary"
                size="large"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
