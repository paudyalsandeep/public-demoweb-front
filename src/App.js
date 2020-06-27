import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import HeaderComponent from "./admin/components/HeaderComponent";
import LoginComponent from "./components/login/LoginComponent";
import RegisterComponent from "./components/signup/SignUpComponent";
import {BrowserRouter} from "react-router-dom";

import NavBarComponent from "./components/navbars/NavBarComponent";

import SignUpComponent from "./components/signup/SignUpComponent";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBarComponent></NavBarComponent>
			</BrowserRouter>
		</div>
	);
}

export default App;
