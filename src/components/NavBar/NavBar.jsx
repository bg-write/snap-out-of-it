import React from 'react';
import { Link } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li className="nav-link">Welcome, {user.name}</li>
              <li><Link to="/users" className="nav-link">Users</Link></li>
              <Link to='' className='nav-link' onClick={handleLogout}>Log Out</Link>
              <li><Link to="/mantrapage" className="nav-link">Mantra Page</Link></li>
              <li><Link to="/metimepage" className="nav-link">Me Time Page</Link></li>
              <li><Link to="/dealbreakerpage" className="nav-link">Dealbreaker Page</Link></li>
              <li><Link to="/playlistpage" className="nav-link">Playlist Page</Link></li>
              <li><Link to="/" className="nav-link">Home</Link></li>
            </ul>
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
