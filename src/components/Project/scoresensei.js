import React from "react";
import { ProjectContent } from "../ProjectContent";
import { Card, Badge } from "react-bootstrap";
import { uuid } from "../../utils/helpers";

function Project(props) {
	return (
		<ProjectContent
			active
			key={uuid()}
			github="https://github.com/BizTheHabesha/group-1-project-2"
			deploy="https://group-1-project-2.herokuapp.com/login"
			badges={["Inactive", "Express", "MySQL", "Bootstrap"]}
			img="img/miyagilg.ico">
			<Card.Body>
				<Card.Title>ScoreSensei</Card.Title>
				<Card.Text>
					A sports tracking application where users can track their
					favorite teams and sports. Utilizes API-Football{" "}
				</Card.Text>
			</Card.Body>
		</ProjectContent>
	);
}

export { Project };
