/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Location.css'
import { locationJobs } from '../../actions/jobsAction';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import c from '../../Assets/images/location1.jpg'; // Importing the background image
import NavBar from '../../Component/NavBar/NavBar'
export default function Location() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, authData } = useSelector((state) => state.auth);

    // const navigate = useNavigate();
    const { data } = useSelector((state) => state?.jobs?.jobs || {});
    // console.log(data);
    const [formData, setFormData] = useState({
        county: '',
        city: '',
        Governorate: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(locationJobs(formData, data.id));
        console.log(formData);
        navigate('/vacancy');

    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
        <NavBar/>

        <div className="location">
        <div className="location-card">
          <div className="location-left" style={{ backgroundImage: `url(${c})` }}>
            {/* Background image applied through inline styles */}
          </div>
          <div className="location-right">
            <h1 className="location-siteName">
              j<FaSearch className="location-searchIcon" />bly
            </h1>
            <h1>Work Location</h1>
            <form onSubmit={handleSubmit}>
              <div className="location-inputContainer">
                <input
                  type="text"
                  name="county"
                  value={formData.county}
                  onChange={handleChange}
                  placeholder="Country"
                  required
                />
              </div>
              <div className="location-inputContainer">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                />
              </div>
              <div className="location-inputContainer">
                <input
                  type="text"
                  name="Governorate"
                  value={formData.Governorate}
                  onChange={handleChange}
                  placeholder="Governorate"
                  required
                />
              </div>
              {error && <p className="location-error">{error}</p>}
              <button className="location-registerButton" disabled={loading}>
                {loading ? 'Loading...' : 'Add'}
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
}
