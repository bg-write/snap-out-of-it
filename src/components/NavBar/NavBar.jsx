import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<nav>
					<div>
						<li className="nav-link">Welcome, {user.name}</li>

						<Container>
							<Navbar fixed="bottom">
							<Container>
								<Navbar.Brand>
									<Link to="/">
										<Col xs={7}>
											<Image src="https://i.imgur.com/g5CVbro.jpg" fluid />
										</Col>
									</Link>
								</Navbar.Brand>

								<Navbar.Brand>
									<Link to="/users">
										<Col xs={7}>
											<Image src="https://i.imgur.com/eyAuiBI.png" fluid />
										</Col>
									</Link>
								</Navbar.Brand>

								<Navbar.Brand>
									<Link to="/mantrapage">
										<Col xs={7}>
											<Image src="https://i.imgur.com/5tFbdEs.png" fluid />
										</Col>
									</Link>
								</Navbar.Brand>

								<Navbar.Brand>
									<Link to="/metimepage">
										<Col xs={7}>
											<Image src="https://i.imgur.com/vhXiIjS.png" fluid />
										</Col>
									</Link>
								</Navbar.Brand>

								<Navbar.Brand>
									<Link to="/dealbreakerpage">
										<Col xs={7}>
											<Image src="https://i.imgur.com/lOzJGXp.png" fluid />
										</Col>
									</Link>
								</Navbar.Brand>

								<Navbar.Brand>
									<Link to="/playlistpage">
										<Col xs={7}>
											<Image src="https://i.imgur.com/QIWb9kI.png" fluid />
										</Col>
									</Link>
								</Navbar.Brand>

								<Navbar.Brand>
									<Link to="/">
										<Col xs={7}>
											<Image src="https://i.imgur.com/Ad14HrN.png" fluid />
										</Col>
									</Link>
								</Navbar.Brand>
								</Container>
							</Navbar>
						</Container>
					</div>
				</nav>
			) : (
				<nav>
					<div className="nav-wrapper">
						<ul id="nav-mobile" className="right">
							<li>
								<Link to="/login" className="nav-link">
									Log In
								</Link>
							</li>
							<li>
								<Link to="/signup" className="nav-link">
									Sign Up
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			)}
		</>
	);
};

export default NavBar;
