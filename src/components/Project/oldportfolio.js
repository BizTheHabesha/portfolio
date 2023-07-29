import React from "react";
import { ProjectContent } from "../ProjectContent";
import { Card, Badge } from "react-bootstrap";
import { uuid } from "../../utils/helpers";

function Project(props) {
	return (
		<ProjectContent
			active
			key={uuid()}
			github="https://github.com/BizTheHabesha/bisratgebrekidan-portfolio-old"
			deploy="https://bizthehabesha.github.io/bisratgebrekidan-portfolio-old/"
			badges={["Deprecated", "jQuery"]}
			img="img/oldport-preview.png">
			<Card.Body>
				<Card.Title>My Old Portfolio</Card.Title>
				<Card.Text>
					A simple one-page portfolio built with vanilla CSS and HTML,
					and makes use of the jQuery API{" "}
				</Card.Text>
			</Card.Body>
		</ProjectContent>
	);
}

export { Project };
