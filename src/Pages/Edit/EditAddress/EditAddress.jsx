import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './EditAddress.css';
import { FaSearch } from 'react-icons/fa';
import c from '../../assets/location1.jpg';
import NavBar from '../../../Component/NavBar/NavBar';
import { updateaddress } from '../../../actions/AuthAction';

export default function EditAddress() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const address = useSelector((state) => state.auth.authData.address);
    const id_user = useSelector((state) => state.auth.authData.user.user.id);
    const { loading } = useSelector((state) => state.auth);

    const initialaddress = {
        county: address?.county || "",
        city: address?.city || "",
        Governorate: address?.Governorate || ""
    };

    const [editLocation, setEditLocation] = useState(initialaddress);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditLocation((prevEditDetails) => ({
            ...prevEditDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateaddress(editLocation, id_user));
        navigate('/profile_company');
    };

    return (
        <div>
            <NavBar />
            <div className="edit-location">
                <div className="edit-location-card">
                    <div className="edit-location-left" style={{ backgroundImage: `url(${c})` }}>
                    </div>
                    <div className="edit-location-right">
                        <h1 className="edit-location-siteName">
                            j<FaSearch className="edit-location-searchIcon" />bly
                        </h1>
                        <h1 className="edit-location-title">Edit Location</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="edit-location-inputContainer">
                                <input
                                    type="text"
                                    name="county"
                                    value={editLocation.county}
                                    onChange={handleChange}
                                    placeholder="Country"
                                    required
                                />
                            </div>
                            <div className="edit-location-inputContainer">
                                <input
                                    type="text"
                                    name="city"
                                    value={editLocation.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    required
                                />
                            </div>
                            <div className="edit-location-inputContainer">
                                <input
                                    type="text"
                                    name="Governorate"
                                    value={editLocation.Governorate}
                                    onChange={handleChange}
                                    placeholder="Governorate"
                                    required
                                />
                            </div>
                            <button className="edit-location-registerButton" disabled={loading}>
                                {loading ? 'Loading...' : 'Edit Location'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
