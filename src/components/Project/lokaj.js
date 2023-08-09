import React from "react";
import { ProjectContent } from "../ProjectContent";
import { Card, Badge } from "react-bootstrap";
import { uuid } from "../../utils/helpers";

function Project(props) {
	return (
		<ProjectContent
			featured
			active
			key={uuid()}
			github="https://github.com/BizTheHabesha/lokaj"
			deploy="https://lokaj-26931e88545d.herokuapp.com/"
			badges={["WIP", "MERN", "React", "Express", "MongoDB"]}
			img="img/logo.svg">
			<Card.Body>
				<Card.Title>
					Lokaj Valet <Badge bg="info">New</Badge>{" "}
				</Card.Title>
				<Card.Text>
					A valet managment and tracking system that can be used with
					many garages and many cars.
				</Card.Text>
			</Card.Body>
		</ProjectContent>
	);
}

export { Project };
