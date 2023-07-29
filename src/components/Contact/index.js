import React, { useState } from "react";
import { Alert, Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

function Contact() {
	return (
		<section className="mb-4">
			<h2 className="font-weight-bold text-center my-4">Contact Me</h2>
			<p className="text-center w-resposnive mx-auto mb-5">
				Questions? Inquiries? Leave your email, name, and a short,
				descriptive message and I'll get back to you.
			</p>
			<Row className="justify-content-center">
				<Col className="md-5" xs={6}>
					<Form>
						<Form.Group>
							<FloatingLabel
								controlId="floatingInput"
								label="Email address"
								className="mb-3">
								<Form.Control
									type="email"
									placeholder="name@example.com"
								/>
								<Form.Text className="text-muted">
									I will not share your email with anyone
									else.
								</Form.Text>
							</FloatingLabel>
						</Form.Group>
						<Form.Group>
							<FloatingLabel
								controlId="floatingInput"
								label="Your name"
								className="mb-3">
								<Form.Control
									type="name"
									placeholder="Enter name"
								/>
							</FloatingLabel>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control
								as="textarea"
								rows={5}
								placeholder="Message"
							/>
						</Form.Group>
						<Button type="submit">Submit form</Button>
					</Form>
				</Col>
			</Row>
		</section>
	);
}

export default Contact;
