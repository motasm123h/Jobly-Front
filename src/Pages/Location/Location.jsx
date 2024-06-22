import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Location.css'
import { locationJobs } from '../../actions/jobsAction';

export default function Location() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        <div className="register">
            <div className="card">
                <div className="right">
                    <h1>Location</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="inputContainer">
                            <input
                                type="text"
                                name="county"
                                value={formData.county}
                                onChange={handleChange}
                                placeholder="country"
                                required
                            />
                        </div>
                        <div className="inputContainer">
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="city"
                                required
                            />
                        </div>
                        <div className="inputContainer">
                            <input
                                type="text"
                                name="Governorate"
                                value={formData.Governorate}
                                onChange={handleChange}
                                placeholder="Governorate"
                                required
                            />
                        </div>


                        <button className="registerButton">
                            add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
