import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<nav>
					<div>
						<Navbar id="NavBar" fixed="bottom">
							{/* Main logo */}
							<Navbar.Brand>
								<Link to="/">
									<Image className="Logo" src="images/logo_nav.jpg" fluid />
								</Link>
							</Navbar.Brand>

							{/* Mantra logo */}
							<Navbar.Brand>
								<Link to="/mantra-page">
									<Image className="Logo" src="images/mantra_nav.png" fluid />
								</Link>
							</Navbar.Brand>

							{/* MeTime logo */}
							<Navbar.Brand>
								<Link to="/metimepage">
									<Image className="Logo" src="images/metime_nav.png" fluid />
								</Link>
							</Navbar.Brand>

							{/* dealBreaker logo */}
							<Navbar.Brand>
								<Link to="/dealbreakerpage">
									<Image
										className="Logo"
										src="images/dealbreaker_nav.png"
										fluid
									/>
								</Link>
							</Navbar.Brand>

							{/* Game logo */}
							<Navbar.Brand>
								<Link to="/snakepage">
									<Image className="Logo" src="images/game_nav.png" fluid />
								</Link>
							</Navbar.Brand>

							{/* Spiraling logo */}
							<Navbar.Brand>
								<Link to="/affirmationpage">
									<Image
										className="Logo"
										src="images/spiraling_nav.png"
										fluid
									/>
								</Link>
							</Navbar.Brand>

							{/* Logout logo */}
							<Navbar.Brand>
								<Link to="" className="nav-link" onClick={handleLogout}>
									<Image className="Logo" src="images/logout_nav.png" fluid />
								</Link>
							</Navbar.Brand>
						</Navbar>
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
