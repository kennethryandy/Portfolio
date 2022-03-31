import React, { useEffect, useState, lazy, Suspense } from "react";
import { theme, themeDark } from "./config/theme";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import gsap from "./gsap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from "./components/Layout/Loading";
const Navbar = lazy(() => import("./components/Layout/Navbar"));
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Project = lazy(() => import("./components/Project/Project"));

function App () {
	const [darkTheme, setDark] = useState(false);

	const light = createMuiTheme(theme);
	const dark = createMuiTheme(themeDark);

	useEffect(() => {
		AOS.init();
		AOS.refresh();
		gsap.to(document.body, { duration: 0, css: { visibility: "visible" } });
	}, []);


	return (
		<ThemeProvider theme={darkTheme ? dark : light}>
			<CssBaseline />
			<Suspense fallback={<Loading />}>
				<Navbar
					gsap={gsap}
					dark={darkTheme}
					setDark={setDark}
				/>
				<Home gsap={gsap} />
				<About gsap={gsap} />
				<Project gsap={gsap} />
				<Contact gsap={gsap} />
			</Suspense>
		</ThemeProvider>
	);
}

export default App;
