import React from "react";
import { Card, ListGroup, Badge, Stack } from "react-bootstrap";
import { uuid } from "../../utils/helpers";
import { AiOutlineCheck } from "react-icons/ai";
import { HiBeaker } from "react-icons/hi";
import { ImPowerCord } from "react-icons/im";
import { GrReactjs } from "react-icons/gr";
import { SlMustache } from "react-icons/sl";
import { BsDownload } from "react-icons/bs";

export function ProjectContent(props) {
	const bgStatic = (name) => {
		switch (name) {
			case "Deprecated":
				return { bg: "danger", ico: ImPowerCord };
				break;

			case "WIP":
				return { bg: "warning", ico: HiBeaker };
				break;

			case "Inactive":
				return { bg: "warning", ico: ImPowerCord };
				break;

			case "Active":
				return { bg: "success", ico: AiOutlineCheck };
				break;

			case "Available":
				return { bg: "success", ico: BsDownload };
				break;

			case "Unvailable":
				return { bg: "danger" };
				break;

			case "MERN":
				return { bg: "primary", ico: GrReactjs };
				break;

			case "MEHN":
				return { bg: "primary", ico: SlMustache };
				break;

			case "SEHN":
				return { bg: "primary", ico: SlMustache };
				break;

			default:
				return { bg: "secondary" };
				break;
		}
	};

	return (
		<Card className="project-card" key={uuid()} style={{ width: "18rem" }}>
			{props.featured ? (
				<Card.Header>
					{" "}
					<Badge bg="info">Featured</Badge>{" "}
				</Card.Header>
			) : (
				<></>
			)}
			<Card.Img
				variant="top"
				src={props.img}
				height={256}
				className="project-card-img"
			/>
			{props.children}
			<ListGroup className="list-group-flush">
				<ListGroup.Item gap={2}>
					<Stack
						direction="horizontal"
						gap={1}
						className="overflow-auto badge-stack-ovf">
						{props.badges ? (
							props.badges.map((name) => {
								const stat = bgStatic(name);
								return (
									<Badge
										key={uuid()}
										pill
										className="ml-2 mr-2 mb-1 mt-1"
										gap={2}
										bg={stat.bg}>
										{name} {stat.ico ? stat.ico() : ""}
									</Badge>
								);
							})
						) : (
							<Badge key={uuid()} pill gap={2} bg="warning">
								WIP
							</Badge>
						)}
					</Stack>
				</ListGroup.Item>
			</ListGroup>
			<Card.Body>
				<Card.Link href={props.github}>GitHub</Card.Link>
				{props.deploy ? (
					<Card.Link href={props.deploy}>Deployment</Card.Link>
				) : (
					<></>
				)}
				{props.showcase ? (
					<Card.Link href={props.showcase}>Showcase</Card.Link>
				) : (
					<></>
				)}
			</Card.Body>
		</Card>
	);
}
