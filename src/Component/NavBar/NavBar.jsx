import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function NavBar() {
  const [companyColor, setCompanyColor] = useState('#000');

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random color
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setCompanyColor(randomColor);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <nav className="nav">
        <div className="navbar-container">
          <div className="navbar-left">
            <ul>
              <li>
                <NavLink to="/" className="nav-link">
                  <HomeIcon/> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/addjob" className="nav-link">
                  <AddBoxIcon/> Add Job
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link">
                  <InfoIcon/> About
                </NavLink>
              </li>
              <li>
                <NavLink to="/notifications" className="nav-link">
                  <NotificationsIcon/> Notifications
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <h1 style={{ color: companyColor }}>Company Name</h1>
          </div>
        </div>
      </nav>
    </div>
  );
}
