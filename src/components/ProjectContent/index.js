import React from "react";
import { Card, ListGroup, Badge, Stack } from "react-bootstrap";
import { uuid } from "../../utils/helpers";

export function ProjectContent(props) {
	const bgStatic = (name) => {
		switch (name) {
			case "Deprecated":
				return "danger";
				break;

			case "WIP":
				return "warning";
				break;

			case "Invactive":
				return "warning";
				break;

			case "Active":
				return "success";
				break;

			case "Available":
				return "success";
				break;

			case "Unvailable":
				return "danger";
				break;

			default:
				return "secondary";
				break;
		}
	};

	return (
		<Card key={uuid()} style={{ width: "18rem" }}>
			{props.featured ? (
				<Card.Header>
					{" "}
					<Badge bg="info">Featured</Badge>{" "}
				</Card.Header>
			) : (
				<></>
			)}
			<Card.Img variant="top" src={props.img} />
			{props.children}
			<ListGroup className="list-group-flush">
				<ListGroup.Item gap={2}>
					{/* {props.badges ? (
						props.badges.map((name) => {
							return (
								<Badge
									key={uuid()}
									pill
									className="ml-2 mr-2"
									gap={2}
									bg={bgStatic(name)}>
									{name}
								</Badge>
							);
						})
					) : (
						<Badge key={uuid()} pill gap={2} bg="warning">
							WIP
						</Badge>
					)} */}
					<Stack
						direction="horizontal"
						gap={1}
						className="overflow-auto badge-stack-ovf">
						{props.badges ? (
							props.badges.map((name) => {
								return (
									<Badge
										key={uuid()}
										pill
										className="ml-2 mr-2"
										gap={2}
										bg={bgStatic(name)}>
										{name}
									</Badge>
								);
							})
						) : (
							<Badge key={uuid()} pill gap={2} bg="warning">
								WIP
							</Badge>
						)}
					</Stack>
				</ListGroup.Item>
			</ListGroup>
			<Card.Body>
				<Card.Link href={props.github}>GitHub</Card.Link>
				<Card.Link href={props.deploy}>Deployment</Card.Link>
			</Card.Body>
		</Card>
	);
}
