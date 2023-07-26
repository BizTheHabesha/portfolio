import React from "react";
import { Container } from "react-bootstrap";

const PageContent = (props) => {
	return <Container>{props.children}</Container>;
};

export default PageContent;
