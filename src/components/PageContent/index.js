import React from "react";
import { Container } from "react-bootstrap";

const PageContent = (props) => {
	return <Container className="pt-5">{props.children}</Container>;
};

export default PageContent;
