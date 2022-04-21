import React, { useState, forwardRef } from "react";
import emailjs from 'emailjs-com';
//material-ui
import { Typography, TextField, Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close"
import contactStyles from "./contactStyles";
import Footer from "./Footer/Footer";

const Transition = forwardRef(function Transition (props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function Contact () {
	const classes = contactStyles();
	const [loading, setLoading] = useState(false);
	const [openDia, setOpenDia] = useState(false);

	const handleCloseDia = () => setOpenDia(false);

	const handleSubmit = e => {
		e.preventDefault()
		setLoading(true)
		emailjs.sendForm('service_8uy6oii', 'template_c3kuanm', e.target, 'user_lwR1O0HcFGB2BCnsNBfVw')
			.then((result) => {
				if (result.text === 'OK') {
					setOpenDia(true);
					setLoading(false)
				}
			}, (error) => {
				setOpenDia(true);
				// console.log(error.text);
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
							autoComplete="off"
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
							autoComplete="off"
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
							autoComplete="off"
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
			</div>
			<Footer />
			<Dialog open={openDia} TransitionComponent={Transition} keepMounted onClose={handleCloseDia} aria-describedby="thank-you-message">
				<DialogTitle className={classes.dialogTitle} id="thank-you-message"><span>Thank you!</span><CloseIcon onClick={handleCloseDia} /></DialogTitle>
				<DialogContent>
					<DialogContentText>Your message has been successfully sent. We will contact you very soon!</DialogContentText>
				</DialogContent>
			</Dialog>
		</>
	);
}

export default Contact;
