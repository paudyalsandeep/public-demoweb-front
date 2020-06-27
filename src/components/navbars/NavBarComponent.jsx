import React, { Component } from "react";

import { Route, NavLink, Switch } from "react-router-dom";

import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import logo from "./drdesktop.png";
import LoginComponent from "../login/LoginComponent";
import SignUpComponent from "../signup/SignUpComponent";
import DashboardComponent from "../dashboard/DashboardComponent";
import PrivateRoute from "../../PrivateRoute";
import App from "../../App";

class NavBarComponent extends Component {
	state = {};

	render() {
		return (
			<div>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="/">
						<img
							src={logo}
							width="50"
							height="50"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/category">Category</Nav.Link>
							<Nav.Link href="/about">About Us</Nav.Link>
							<Nav.Link href="/login">Login</Nav.Link>
							<Nav.Link href="/profile">Profile</Nav.Link>
						</Nav>
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
				<switch>
					<Route exact path="/" component={DashboardComponent} />

					<Route path="/login" component={LoginComponent} />

					<Route path="/register" component={SignUpComponent} />
				</switch>
			</div>
		);
	}
}

export default NavBarComponent;
