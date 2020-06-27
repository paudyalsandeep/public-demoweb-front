import React, { Component } from "react";

import { Card, Carousel,ListGroup } from "react-bootstrap";

import cardimage from "./cardimage.jpg";
import carimage from "./carousel.jpg";
import carimage1 from "./car2.jpg";
import carimage2 from "./car3.jpg";

class DashboardComponent extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-2 ">
							<ListGroup>
								<ListGroup.Item>No style</ListGroup.Item>
								<ListGroup.Item variant="primary">Primary</ListGroup.Item>
								<ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
								<ListGroup.Item variant="success">Success</ListGroup.Item>
								<ListGroup.Item variant="danger">Danger</ListGroup.Item>
								<ListGroup.Item variant="warning">Warning</ListGroup.Item>
								<ListGroup.Item variant="info">Info</ListGroup.Item>
								<ListGroup.Item variant="light">Light</ListGroup.Item>
								<ListGroup.Item variant="dark">Dark</ListGroup.Item>
							</ListGroup>
						</div>
						<div className="col-md-2 ">hello</div>
						<div className="col-md-10">
							<Carousel>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={carimage}
										alt="First slide"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={carimage1}
										alt="Third slide"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={carimage2}
										alt="Third slide"
									/>
								</Carousel.Item>
							</Carousel>
						</div>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src={cardimage} />
							<Card.Body>
								<Card.Title style={{ color: "#f57224" }}>Rs. 5000</Card.Title>
								<Card.Text>
									WD Red 10TB NAS Hard Disk Drive - 5400 RPM Class SATA 6Gb/s
									256MB Cache 3.5 Inch - WD100EFAX
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src={cardimage} />
						<Card.Body>
							<Card.Title style={{ color: "#f57224" }}>Rs. 5000</Card.Title>
							<Card.Text>
								WD Red 10TB NAS Hard Disk Drive - 5400 RPM Class SATA 6Gb/s
								256MB Cache 3.5 Inch - WD100EFAX
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</React.Fragment>
		);
	}
}

export default DashboardComponent;
