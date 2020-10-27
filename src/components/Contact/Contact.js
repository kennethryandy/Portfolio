import React,{useState} from "react";
import emailjs from 'emailjs-com';
//material-ui
import { Typography, TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import contactStyles from "./contactStyles";
import Footer from "./Footer/Footer";

function Contact() {
  const classes = contactStyles();
  const [showMsg, setShowMsg] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    emailjs.sendForm('service_8uy6oii', 'template_c3kuanm', e.target, 'user_lwR1O0HcFGB2BCnsNBfVw')
      .then((result) => {
          console.log(result.text);
          if(result.text === 'OK'){
            setShowMsg(true)
            setTimeout(() => {
              setShowMsg(false)
            }, 5000)
            setLoading(false)
          }
      }, (error) => {
          console.log(error.text);
          setLoading(false)
      });
    e.target.reset()
  }

  return (
    <>
      <div className={classes.contact} id="contact">
        <div className={classes.appBarSpacer} />
        <Typography variant="h4" className={classes.title}>
          Let's talk!
        </Typography>
        <div className={classes.formContainer}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Name"
              placeholder="Your name"
              color="secondary"
              fullWidth
              required
              name="name"
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Email"
              placeholder="Your email adress"
              color="secondary"
              fullWidth
              required
              type="email"
              name="email"
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
              required
              name="message"
            ></TextField>
            <div style={{ textAlignLast: "center" }}>
              <Button
                endIcon={<SendIcon />}
                variant="outlined"
                color="secondary"
                size="large"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </Button>
            </div>
          </form>
        </div>
        {showMsg && <Typography gutterBottom align="center" className={classes.msg}>Thank you for your email. I will get back to you shortly!</Typography>}
      </div>
      <Footer />
    </>
  );
}

export default Contact;
