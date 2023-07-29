import React, { useState } from "react";
import { Card, Carousel, Button, Container } from "react-bootstrap";

function Home() {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Container className="home-carousel-container">
			<Carousel className="home-carousel">
				<Carousel.Item>
					<img src="img/tech-blog-preview.ico" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
}

export default Home;
