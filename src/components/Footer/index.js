import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
function Footer() {
	return (
		<footer>
			<Container className="d-flex justify-content-center">
				<Button
					className="mx-4 my-4"
					size="lg"
					variant="dark"
					as="a"
					href="https://github.com/BizTheHabesha">
					<VscGithubInverted />
				</Button>
				<Button className="mx-4 my-4" size="lg" variant="dark">
					<AiFillLinkedin />
				</Button>
			</Container>
		</footer>
	);
}

export default Footer;
