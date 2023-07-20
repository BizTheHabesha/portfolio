import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import { Alert, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [pages] = useState([
		{
			name: "about me",
		},
		{ name: "portfolio" },
		{ name: "contact" },
		{
			name: "resume",
		},
	]);

	const [currentPage, setCurrentPage] = useState(pages[0]);
	return (
		<div>
			<Nav
				pages={pages}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}></Nav>

			<main>
				<Container>
					<Alert key="primary" variant="info">
						HUGE!
					</Alert>
				</Container>
				<Page currentPage={currentPage}></Page>
			</main>
			<Footer />
		</div>
	);
}

export default App;
