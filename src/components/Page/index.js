import React from "react";
import PageContent from "../PageContent";
import { capitalize } from "../../utils/helpers";
import Home from "../Home";
import Projects from "../Projects";
import About from "../About";
import Contact from "../Contact";
import Resume from "../Resume";

function Page({ currentPage }) {
	const renderPage = () => {
		switch (currentPage.name) {
			case "home":
				return <Home />;
			case "projects":
				return <Projects />;
			case "about":
				return <About />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
		}
	};
	return <PageContent>{renderPage()}</PageContent>;
}

export default Page;
