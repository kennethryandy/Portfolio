import React, { useEffect, useRef, useState } from "react";
//material-ui
import navbarStyles from "./navbarStyles";
import {
	AppBar,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from "@material-ui/core";
import DarkIcon from "@material-ui/icons/Brightness4";
import LightIcon from "@material-ui/icons/Brightness7";

function Navbar ({ gsap, dark, setDark }) {
	const classes = navbarStyles();
	const titleRef = useRef(null);
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		gsap.from(titleRef.current, {
			duration: 1.6,
			x: -100,
			opacity: 0,
			ease: "power3.inOut",
		});
		gsap.from(
			".links",
			{
				duration: 1.2,
				opacity: 0,
				ease: "power3.in",
				delay: -0.2,
				stagger: 0.1,
			},
			"<.4"
		);

		window.addEventListener('scroll', handleScroll);
		// eslint-disable-next-line
	}, []);

	const handleScroll = () => {
		if (window.pageYOffset) {
			setScroll(window.pageYOffset + 72);
		}
	}

	return (
		<AppBar
			color={(scroll <= window.innerHeight) ? "transparent" : "secondary"}
			position="fixed"
			className={`${classes.navbar} ${(scroll <= window.innerHeight) ? "" : "expanded"}`}
			style={(scroll <= window.innerHeight) ? { color: "#e0e0e0" } : {}}
			elevation={(scroll <= window.innerHeight) ? 0 : 4}
		>
			<Toolbar>
				<div className={classes.nav + ` ${(scroll <= window.innerHeight) ? "" : "nav-expanded"}`}>
					<Link href="#home" underline="none" color="inherit">
						<div className={classes.brandName}>
							<Typography ref={titleRef} variant="h6" className={classes.title}>
								KD
							</Typography>
						</div>
					</Link>
					<div className={classes.navlinks}>
						<Link
							href="#home"
							underline="none"
							color="inherit"
							className={classes.navlink}
						>
							<span className="links">home</span>
						</Link>
						<Link
							href="#about"
							underline="none"
							color="inherit"
							className={classes.navlink}
						>
							<span className="links">about</span>
						</Link>
						<Link
							href="#projects"
							underline="none"
							color="inherit"
							className={classes.navlink}
						>
							<span className="links">portfolio</span>
						</Link>
						<Link
							href="#contact"
							underline="none"
							color="inherit"
							className={classes.navlink}
						>
							<span className="links">contact</span>
						</Link>

						<IconButton
							color="inherit"
							className={`${classes.navlink} ${classes.navIcon} ${(scroll <= window.innerHeight) ? "hidden" : ""}`}
							onClick={() => setDark(!dark)}
						>
							<span className="links">
								{dark ? (<LightIcon />) : (<DarkIcon />)}
							</span>
						</IconButton>

						<Link
							href="#projects"
							underline="none"
							color="inherit"
							className={classes.navlinkScondary}
						>
							<span className="links">portfolio</span>
						</Link>
						<IconButton
							color="inherit"
							className={classes.navlinkScondary}
							onClick={() => setDark(!dark)}
						>
							{dark ? (
								<span className="links">
									<LightIcon />
								</span>
							) : (
								<span className="links">
									<DarkIcon />
								</span>
							)}
						</IconButton>
					</div>
				</div>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
