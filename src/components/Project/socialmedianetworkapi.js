import React from "react";
import { Card, ListGroup, Badge } from "react-bootstrap";
import { ProjectContent } from "../ProjectContent";
import { uuid } from "../../utils/helpers";

function Project(props) {
	return (
		<ProjectContent
			active
			key={uuid}
			github="https://github.com/BizTheHabesha/Social-Network-API"
			showcase="https://www.youtube.com/watch?v=k1rzMj1TdCM&feature=youtu.be"
			badges={["Available", "Express", "MongoDB"]}
			img="img/social-media-api-preview.png">
			<Card.Body>
				<Card.Title>Social Network API</Card.Title>
				<Card.Text>
					A backend express server to host, store, and serve users,
					thoughts, and reactions.
				</Card.Text>
			</Card.Body>
		</ProjectContent>
	);
}

export { Project };
