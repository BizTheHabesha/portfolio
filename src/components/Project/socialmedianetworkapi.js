import React from "react";
import { Card, ListGroup, Badge } from "react-bootstrap";
import { ProjectContent } from "../ProjectContent";
import { uuid } from "../../utils/helpers";

function Project(props) {
	// return <h1 key={props.key}>Social Media Network API</h1>;
	return (
		// <Card key={props.key} style={{ width: "18rem" }}>
		// 	<Card.Header>Featured</Card.Header>
		// 	<Card.Img variant="top" src="img/social-media-api-preview.png" />
		// 	<Card.Body>
		// 		<Card.Title>
		// 			Social Network API <Badge bg="info">New</Badge>{" "}
		// 		</Card.Title>
		// 		<Card.Text>
		// 			A backend express server to host, store, and serve users,
		// 			thoughts, and reactions.
		// 		</Card.Text>
		// 	</Card.Body>
		// 	<ListGroup className="list-group-flush">
		// 		<ListGroup.Item>Cras justo odio</ListGroup.Item>
		// 	</ListGroup>
		// 	<Card.Body>
		// 		<Card.Link href="https://github.com/BizTheHabesha/Social-Network-API">
		// 			GitHub
		// 		</Card.Link>
		// 		<Card.Link href="https://www.youtube.com/watch?v=k1rzMj1TdCM&feature=youtu.be">
		// 			Showcase
		// 		</Card.Link>
		// 	</Card.Body>
		// </Card>
		<ProjectContent
			featured
			active
			key={uuid}
			github="https://github.com/BizTheHabesha/Social-Network-API"
			deploy="https://www.youtube.com/watch?v=k1rzMj1TdCM&feature=youtu.be"
			badges={["Active", "Express", "MongoDB"]}
			img="img/social-media-api-preview.png">
			<Card.Body>
				<Card.Title>
					Social Network API <Badge bg="info">New</Badge>{" "}
				</Card.Title>
				<Card.Text>
					A backend express server to host, store, and serve users,
					thoughts, and reactions.
				</Card.Text>
			</Card.Body>
		</ProjectContent>
	);
}

export { Project };
