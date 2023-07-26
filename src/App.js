import React, { useState } from "react";
import Footer from "./components/Footer";
import BSNav from "./components/Nav";
import Page from "./components/Page";
import { Alert, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [pages] = useState([
		{ name: "home" },
		{ name: "projects" },
		{ name: "about" },
		{ name: "contact" },
		{ name: "resume" },
	]);

	const [currentPage, setCurrentPage] = useState(pages[0]);
	return (
		<div>
			<BSNav
				pages={pages}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}></BSNav>
			<Page currentPage={currentPage}></Page>
			<Footer />
		</div>
	);
}

export default App;
