import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { capitalize, uuid } from "../../utils/helpers";

function BSNav(props) {
	const { pages = [], setCurrentPage, currentPage } = props;
	const ldmode = document.getElementById("nilfirst").dataset["bsTheme"];

	useEffect(() => {
		document.title = capitalize(currentPage.name);
	}, [currentPage]);

	return (
		<Navbar
			expand="lg"
			className="bg-body-tertiary mx-auto justify-content-center fixed-top">
			<Container>
				<Navbar.Brand
					className={`navbar-brand ${
						currentPage.name === "home" && "actve"
					}`}
					onClick={() => setCurrentPage(pages[0])}>
					<img
						alt="logo"
						src="img/logo64.png"
						width="30"
						height="30"
						className={`${
							ldmode === "dark" ? "toggle-dark-mode" : ""
						}d-inline-bock align-top`}
						// use a space here to seperate the logo from the text
					/>{" "}
					Portfolio
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav ">
					<Nav className="me-auto">
						{pages.map((Page) => {
							if (Page.name !== "home")
								return (
									<Nav.Link
										key={uuid()}
										className={`${
											currentPage.name === Page.name &&
											"active"
										}`}
										onClick={() => setCurrentPage(Page)}>
										{capitalize(Page.name)}
									</Nav.Link>
								);
						})}
						<NavDropdown title="Feedback" id="basic-nav-dropdown">
							<NavDropdown.Item
								href="https://github.com/BizTheHabesha/portfolio/labels/enhancement"
								target="_blank">
								See what's next!
							</NavDropdown.Item>
							<NavDropdown.Item
								href="https://github.com/BizTheHabesha/portfolio/issues/new"
								target="_blank">
								Report Issues/Suggestions
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item
								href="https://opensource.com/resources/what-open-source"
								target="_blank">
								What's Open Source?
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default BSNav;
