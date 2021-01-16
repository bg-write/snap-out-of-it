import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import {FaUserCircle } from 'react-icons/fa';


const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <div >
            
            <ul classNmae="ul-nav">
              <li><Link to="/" class="navbar-brand" href="">SnapOutOfIt</Link></li>

              <li><Link to="/users" className="nav-link"><FaUserCircle color="lightgrey" size="2rem" /></Link></li>

              <li><Link to="/mantrapage" className="nav-link">🧘‍♀️</Link></li>

              <li><Link to="/metimepage" className="nav-link">❤️</Link></li>

              <li><Link to="/dealbreakerpage" className="nav-link">💔</Link></li>
              <li><Link to="/playlistpage" className="nav-link">🎧</Link></li>
              <li><Link to='' className='nav-link' onClick={handleLogout}>🚪</Link></li>
              
            </ul>
            {/* <li className="nav-link">Welcome, {user.name}</li> */}
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><Link to="/login" className="nav-link">Log In</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>


            </ul>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
