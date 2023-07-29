import React from "react";
import { ProjectContent } from "../ProjectContent";
import { Card, Badge } from "react-bootstrap";
import { uuid } from "../../utils/helpers";

function Project(props) {
	return (
		<ProjectContent
			active
			key={uuid()}
			github="https://github.com/BizTheHabesha/group-6-project-1"
			deploy="https://bizthehabesha.github.io/group-6-project-1/"
			badges={["Deprecated", "jQuery"]}
			img="img/bossfight-preview.png">
			<Card.Body>
				<Card.Title>Boss Fight!</Card.Title>
				<Card.Text>
					A small game where users can pit their favorite bosses from
					fiction against one another.
				</Card.Text>
			</Card.Body>
		</ProjectContent>
	);
}

export { Project };
