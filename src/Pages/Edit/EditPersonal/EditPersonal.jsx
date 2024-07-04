import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import './EditPersonal.css';
import NavBar from '../../../Component/NavBar/NavBar';
import { updatepersonal } from '../../../actions/AuthAction';

const EditPersonal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authData.user.user);
  const id_user = useSelector((state) => state.auth.authData.user.user.id);

  const initialPersonal = {
    name: user.name || "",
    email: user.email || ""
  };

  const [editDetails, setEditDetails] = useState(initialPersonal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditDetails((prevEditDetails) => ({
      ...prevEditDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatepersonal(editDetails, id_user));
    navigate('/profile_company');
  };

  return (
    <div>
      <NavBar>
        <button className="back-button" onClick={() => navigate('/profile_company')}>
          <FaArrowLeft className="back-icon" />
          Back
        </button>
      </NavBar>
      <div className="edit-personal-page">
        <div className="edit-personal-container">
          <div className="logo-container">
            <h1 className="site-name">
              j<FaSearch className="search-icon" />bly
            </h1>
          </div>
          <h2>Edit Personal Information</h2>
          <form onSubmit={handleSubmit} className="edit-personal-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={editDetails.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={editDetails.email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn edit-btn">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPersonal;
