import React, { useState } from 'react';
import { FaSearch, FaUser, FaHome, FaPlusSquare, FaBell, FaArrowLeft, FaCog } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser, getProfileForCompany, logout } from '../../actions/AuthAction';
import './NavBar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const id_user = useSelector((state) => state.auth.authData.user.user.id);

  const handleProfile = async () => {
    dispatch(getProfileForCompany());
    navigate('/profile_company');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  const handleLogout = () => {
dispatch(logout())
  };
  const handleDeleteAccount = async () => {
    await dispatch(deleteUser(id_user));
    navigate('/register'); 
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          j<FaSearch className="searchIcon-register" />bly
        </h1>
      </div>
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <Link to="/"><FaHome /></Link>
          </li>
          <li>
            <Link to="/AddJobs"><FaPlusSquare /></Link>
          </li>
          <li>
            <Link to="/notification"><FaBell /></Link>
          </li>
        </ul>
        <div className="profile-icon-container">
          <Link to="/profile_company" onClick={handleProfile}>
            <FaUser className="profileIcon" />
          </Link>
        </div>
        <div className="settings-icon-container" onClick={toggleSettings}>
          <FaCog className="settingsIcon" />
          {settingsOpen && (
            <div className="settings-dropdown">
              <button className="button-logout" onClick={handleLogout}>Logout</button>
              <button className="button-delete-account" onClick={handleDeleteAccount}>Delete Account</button>
            </div>
          )}
        </div>
        <div className="back-icon-container" onClick={handleGoBack}>
          <FaArrowLeft className="backIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
