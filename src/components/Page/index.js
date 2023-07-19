import React from "react";
import PageContent from "../PageContent";
import { capitalize } from "../../utils/helpers";

import Contact from "../Contact";
import Resume from "../Resume";

function Page({ currentPage }) {
	const renderPage = () => {
		switch (currentPage.name) {
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
		}
	};
	return (
		<section>
			<h2>{capitalize(currentPage.name)}</h2>
			<PageContent>{renderPage()}</PageContent>
		</section>
	);
}

export default Page;
