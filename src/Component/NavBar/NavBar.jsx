import React from 'react';
import { FaSearch, FaUser, FaHome, FaPlusSquare, FaBell } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './NavBar.css';
import { getProfileForCompany } from '../../actions/AuthAction';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleprofile = async () => {
    dispatch(getProfileForCompany());
    navigate('/profile_company');
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
          <Link to="/profile_company" onClick={handleprofile}>
            <FaUser className="profileIcon" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

