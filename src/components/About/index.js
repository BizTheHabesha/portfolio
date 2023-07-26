import React from "react";
import { Col, Figure, Row, Container } from "react-bootstrap";
function About() {
	return (
		<Container className="container-lg page-container justify-content-center">
			<Row className="justify-content-center no-gutters">
				<Col lg={6}>
					<article>
						<header className="mb-4 mt-4">
							<h1 className="fw-bolder mb-1">About Bisrat</h1>
							<div className="text-muted fst-italic mb-2">
								I am Biz, son of Biz!
							</div>
						</header>
						<Figure>
							<Figure.Image
								src="img/profilesquare.jpg"
								alt="..."
								rounded
							/>
							<Figure.Caption>
								Trying to hit that Steve Jobs aesthetic.
							</Figure.Caption>
						</Figure>
						<section className="mb-5">
							<p className="fs-5 mb-4">
								My name ብስራት, in english, translates to 'good
								news'. It is a moniker I try to live by
								everyday. Most folks, however, know me as Biz.
							</p>
							<p className="fs-5 mb-4">
								I've been making things since I was a wee lad.
								Stem and robotics were my main interests in
								element ary and middle school which was evident
								by the fact that I'd spend summers at the GT
								summer camp getting to jump into all many of
								projects.
							</p>
							<p className="fs-5 mb-4">
								Once I made to highschool, I discovered the
								world of video game development. It started with
								me and a childhood friend discovering Roblox
								Studio. We'd been playing Roblox for year at
								that point, but only then did we decide to delve
								into the world of development.
							</p>
							<p className="fs-5 mb-4">
								You may recall such blockbuster hits like
								"Ro-Scale Centeral" and "Swindle's Frozen
								Yogurt". Making these games felt like I was
								really adding back to the community that had
								given me so much. As I grew up and began to
								mature in both studies and myself, I countied to
								carry that sentiment throughout my work.
							</p>
							<h2 className="fw-bolder mb-4 mt-5">
								An Ode to Good News
							</h2>
							<p className="fs-5 mb-4">
								By the time I made to university, I had already
								dipped my hand in formal game design. I learned
								C# with Unity.
							</p>
							<p className="fs-5 mb-4">
								Venus has a runaway greenhouse effect. I kind of
								want to know what happened there because we're
								twirling knobs here on Earth without knowing the
								consequences of it. Mars once had running water.
								It's bone dry today. Something bad happened
								there as well.
							</p>
						</section>
					</article>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
