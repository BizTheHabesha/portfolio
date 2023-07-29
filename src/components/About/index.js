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
							<hr />
							<h2 className="fw-bolder mb-4 mt-2">
								An Ode to Good News
							</h2>
							<p className="fs-5 mb-4">
								By the end of highschool I had dipped my hand in
								Unity an C#, which eventually led me to formal
								computer science.
							</p>
							<p className="fs-5 mb-4">
								Through all this time I had no idea the career
								viabilty of computer science. It wasn't until
								most of my friends starting delcaring it as
								their major that I realized I should consider
								it. I spent the entirety of my highschool senior
								year cramming as much knowledge as I could. At
								first it was so I could prepare myself to
								declare computer science as my major, but
								eventually I just couldn't stop.
							</p>
							<p className="fs-5 mb-4">
								At the time of writing, I'm still finishing up
								my bachelors and completing a bootcamp
								certificate. Through every project, assignment,
								and lecture, I have found myself figuring out
								how I could use to benefit the user.
							</p>
						</section>
					</article>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
