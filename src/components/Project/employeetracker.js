import React from "react";
import { ProjectContent } from "../ProjectContent";
import { Card, Badge } from "react-bootstrap";
import { uuid } from "../../utils/helpers";

function Project(props) {
	return (
		<ProjectContent
			active
			key={uuid()}
			github="https://github.com/BizTheHabesha/Tech-Blog"
			showcase="https://tech-blog-bizthehabesha.herokuapp.com/"
			badges={["Available", "Express", "MySQL"]}
			img="img/social-media-api-preview.png">
			<Card.Body>
				<Card.Title>Employee Tracker</Card.Title>
				<Card.Text>
					A database API for storing employees, roles, departments,
					and managers plus some utilities{" "}
				</Card.Text>
			</Card.Body>
		</ProjectContent>
	);
}

export { Project };
