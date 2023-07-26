import React from "react";
import * as RawProjects from "../Project";

function Projects() {
	return <h1>Projects</h1>;
	//wip
	{
		return Object.keys(RawProjects).forEach((projectName) => {
			return RawProjects[projectName];
		});
	}
}

export default Projects;
