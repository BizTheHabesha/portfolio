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
			deploy="https://tech-blog-bizthehabesha.herokuapp.com/"
			badges={["Active", "SEHN", "Handlebars", "Express", "MySQL"]}
			img="img/tech-blog-preview.ico">
			<Card.Body>
				<Card.Title>
					Tech Blog <Badge bg="info">New</Badge>{" "}
				</Card.Title>
				<Card.Text>
					Full stack web application where users can create accounts
					and upload and blog posts.
				</Card.Text>
			</Card.Body>
		</ProjectContent>
	);
}

export { Project };
