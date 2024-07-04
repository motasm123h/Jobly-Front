import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAddress } from '../../../actions/AuthAction';
import './SecondPage.css';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import c from '../../assets/location1.jpg'; // Importing the background image

const SecondPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, authData } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    county: '',
    city: '',
    Governorate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAddress(formData));
    if (!loading) {
      navigate('/register-three');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="secondPage-addaddress">
      <div className="secondPage-card-address">
        <div className="secondPage-left-address" style={{ backgroundImage: `url(${c})` }}>
          {/* Background image applied through inline styles */}
        </div>
        <div className="secondPage-right-address">
          <h1 className="secondPage-siteName-address">
            j<FaSearch className="secondPage-searchIcon-address" />bly
          </h1>
          <h1>Address</h1>
          <form onSubmit={handleSubmit}>
            <div className="secondPage-inputContainer-address">
              <input
                type="text"
                name="county"
                value={formData.county}
                onChange={handleChange}
                placeholder="Country"
                required
              />
            </div>
            <div className="secondPage-inputContainer-address">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
              />
            </div>
            <div className="secondPage-inputContainer-address">
              <input
                type="text"
                name="Governorate"
                value={formData.Governorate}
                onChange={handleChange}
                placeholder="Governorate"
                required
              />
            </div>
            {error && <p className="secondPage-error-address">{error}</p>}
            <button className="secondPage-registerButton-address" disabled={loading}>
              {loading ? 'Loading...' : 'Add'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
