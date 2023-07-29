import React from "react";
import {
	Accordion,
	Container,
	Card,
	ListGroup,
	Stack,
	Button,
} from "react-bootstrap";
import { BsDownload } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";

function Resume(props) {
	const { setCurrentPage } = props;
	return (
		<Container className="mt-4 border border-secondary-subtle">
			<Accordion
				className="mx-1"
				defaultActiveKey={["0", "1", "2", "3", "4"]}
				flush>
				<div className="mt-2 d-flex align-items-end justify-content-between">
					<h1>Bisrat Gebrekidan</h1>
					<h3>Full-stack Developer</h3>
				</div>

				<Accordion.Item eventKey="0">
					<Accordion.Header>Education</Accordion.Header>
					<Accordion.Body>
						<Stack
							className="d-flex flex-wrap justify-content-center align-items-start"
							direction="horizontal"
							gap={3}>
							<Card style={{ width: "18rem" }}>
								<Card.Body>
									<Card.Title>
										Eaglecrest High School
									</Card.Title>
									<Card.Subtitle className="mb-2 mt-3 text-muted">
										2016-2024
									</Card.Subtitle>
								</Card.Body>
								<ListGroup className="list-group-flush">
									<ListGroup.Item>
										High School Diploma: 3.33
									</ListGroup.Item>
									<ListGroup.Item>
										Calculus BC, Diff. Eq., AP Physics C
									</ListGroup.Item>
									<ListGroup.Item>
										Cetennial, Colorado
									</ListGroup.Item>
								</ListGroup>
							</Card>
							<Card style={{ width: "18rem" }}>
								<Card.Body>
									<Card.Title>
										MSU Denver{" "}
										<img
											src="img/metro-logo.ico"
											height={35}
										/>
									</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">
										2020-2023
									</Card.Subtitle>
								</Card.Body>
								<ListGroup className="list-group-flush">
									<ListGroup.Item>
										Ba. S. - Computer Science: 3.85
									</ListGroup.Item>
									<ListGroup.Item>
										OS, Data Structures, Algos
									</ListGroup.Item>
									<ListGroup.Item>
										Denver, Colorado
									</ListGroup.Item>
								</ListGroup>
							</Card>
							<Card style={{ width: "18rem" }}>
								<Card.Body>
									<Card.Title>
										University of Denver{" "}
										<img
											src="img/du-logo.ico"
											height={40}
										/>
									</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">
										2023
									</Card.Subtitle>
								</Card.Body>
								<ListGroup className="list-group-flush">
									<ListGroup.Item>
										Bootcamp Certificate - Full-stack
										Development
									</ListGroup.Item>
									<ListGroup.Item>
										Full-stack development, MERN, PWAs
									</ListGroup.Item>
									<ListGroup.Item>
										Denver, Colorado
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Stack>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header>Skills</Accordion.Header>
					<Accordion.Body>
						<Stack
							className="d-flex flex-wrap justify-content-center align-items-start"
							direction="horizontal"
							gap={3}>
							<Card style={{ width: "18rem" }}>
								<Card.Body>
									<Card.Title>Languages</Card.Title>
								</Card.Body>
								<ListGroup variant="flush">
									<ListGroup.Item>Javascript</ListGroup.Item>
									<ListGroup.Item>Java</ListGroup.Item>
									<ListGroup.Item>Python</ListGroup.Item>
									<ListGroup.Item>C</ListGroup.Item>
									<ListGroup.Item>C++</ListGroup.Item>
									<ListGroup.Item>C#</ListGroup.Item>
									<ListGroup.Item>Lua</ListGroup.Item>
								</ListGroup>
							</Card>
							<Card style={{ width: "18rem" }}>
								<Card.Body>
									<Card.Title>Frameworks</Card.Title>
								</Card.Body>
								<ListGroup variant="flush">
									<ListGroup.Item>TensorFlow</ListGroup.Item>
									<ListGroup.Item>React</ListGroup.Item>
									<ListGroup.Item>MERN</ListGroup.Item>
									<ListGroup.Item>Django</ListGroup.Item>
									<ListGroup.Item>Node.js</ListGroup.Item>
									<ListGroup.Item>Express.js</ListGroup.Item>
								</ListGroup>
							</Card>
							<Card style={{ width: "18rem" }}>
								<Card.Body>
									<Card.Title>Tools</Card.Title>
								</Card.Body>
								<ListGroup variant="flush">
									<ListGroup.Item>Git</ListGroup.Item>
									<ListGroup.Item>Node</ListGroup.Item>
									<ListGroup.Item>MySQL</ListGroup.Item>
									<ListGroup.Item>MongoDB</ListGroup.Item>
								</ListGroup>
							</Card>
							<Card style={{ width: "18rem" }}>
								<Card.Body>
									<Card.Title>Platforms</Card.Title>
								</Card.Body>
								<ListGroup variant="flush">
									<ListGroup.Item>Linux</ListGroup.Item>
									<ListGroup.Item>Windows</ListGroup.Item>
									<ListGroup.Item>Arduino</ListGroup.Item>
									<ListGroup.Item>Node</ListGroup.Item>
									<ListGroup.Item>Docker</ListGroup.Item>
								</ListGroup>
							</Card>
						</Stack>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header>Projects</Accordion.Header>
					<Accordion.Body className="d-flex">
						<Button variant="secondary">
							<RiArrowGoBackFill /> Projects Tab
						</Button>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header>Honors and Awards</Accordion.Header>
					<Accordion.Body>
						<Stack
							className="d-flex flex-wrap justify-content-center align-items-start"
							direction="horizontal"
							gap={3}>
							<Card style={{ width: "18rem" }}>
								<Card.Body>
									<Card.Title>Sci-Tech: MEVP</Card.Title>
									<Card.Subtitle className="mb-3 text-muted">
										2019
									</Card.Subtitle>
									<Card.Text>
										The Flux Ways: Light up the Road!
										project was the most economically viable
										of my peers.
									</Card.Text>
								</Card.Body>
							</Card>
						</Stack>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="4">
					<Accordion.Header>Volunteer Experience</Accordion.Header>
					<Accordion.Body>
						<Stack
							className="d-flex flex-wrap justify-content-center align-items-start"
							direction="horizontal"
							gap={3}>
							<Card style={{ width: "18rem" }}>
								<Card.Body>
									<Card.Title>Go, Baby, Go!</Card.Title>
									<Card.Subtitle className="mb-3 text-muted">
										2019-2020
									</Card.Subtitle>
									<Card.Text>
										Our Sci-Tech team developed toys for
										paraplegic children in the CCSD area.
									</Card.Text>
								</Card.Body>
							</Card>
						</Stack>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<hr className="mt-1" />

			<Container className=" mb-3 d-flex justify-content-center">
				<Button
					as="a"
					variant="secondary"
					size="lg"
					download
					target="_blank"
					href="misc\bisrat-gebrekidan-resume.pdf">
					Download as PDF <BsDownload></BsDownload>
				</Button>
			</Container>
		</Container>
	);
}

export default Resume;
