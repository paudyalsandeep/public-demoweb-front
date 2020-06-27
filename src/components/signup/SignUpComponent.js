import React from "react";

class SignUpComponent extends React.Component {
	render() {
		return (
			<div>
				<div class="container">
					<p>New Customer</p>
					<div class="row">
						<div class="col-md-6">
							<label>First Name</label>
							<br />
							<input type="text" class="form-control" name="fname" id="fname" />
						</div>
						<div class="col-md-6">
							<label>Last Name</label>
							<br />
							<input type="text" class="form-control" name="lname" id="lname" />
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<label>Address</label>
							<br />
							<input type="text" class="form-control" name="text" id="text" />

							<div class="row">
								<div class="col-md-6">
									<label>Email Address</label>
									<br />
									<input
										type="email"
										class="form-control"
										name="email"
										id="email"
									/>
								</div>
								<div class="col-md-6">
									<label>Phone Number</label>
									<br />
									<input
										type="text"
										class="form-control"
										name="phone"
										id="phone"
									/>
								</div>
							</div>

							<label>Password</label>
							<br />
							<input
								type="password"
								class="form-control"
								name="password"
								id="password"
							/>
							<br />

							<button type="button" class="btn btn-primary btn-block">
								Register
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUpComponent;
