import React from "react";
import RawProjects from "../Project";
import { uuid } from "../../utils/helpers";
import { Container, Stack } from "react-bootstrap";

function Projects() {
	return (
		<Stack className="pt-4 d-flex flex-wrap" direction="horizontal" gap={3}>
			{RawProjects.map((el) => el({ key: uuid() }))}
		</Stack>
	);
}

export default Projects;
