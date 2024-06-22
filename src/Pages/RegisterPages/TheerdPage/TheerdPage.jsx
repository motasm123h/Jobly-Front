import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  addCompany } from '../../../actions/AuthAction';
import { uploadIma } from '../../../actions/HelperAction';

import './TheerdPage.css';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import backgroundImage from '../../assets/cccc.jpg'; // Importing the background image

export default function TheerdPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, authData } = useSelector((state) => state.auth);
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({
        Date_of_Establishment: '',
        employe_number: '',
        Commercial_Record: '',
        company_name: '',
        contact_phone: '',
        industry: '',
        company_description: '',
        company_website: '',
        contact_person: '',
        contact_email: '',
    });
    const imageRef = useRef();

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (image) {
            const formDataImage = new FormData();
            const fileName = Date.now() + image.name;
            formDataImage.append('name', fileName);
            formDataImage.append('image', image);

            formData.Commercial_Record = fileName;
            try {
                await dispatch(uploadIma(formDataImage));
            } catch (err) {
                console.log(err);
            }
        }

        // Convert employe_number to an integer
        const formDataWithInteger = { ...formData, employe_number: parseInt(formData.employe_number, 10) };

        try {
             dispatch(addCompany(formDataWithInteger));
             if (!loading) {
                navigate('/');
              }
        } catch (error) {
            console.error('Sign up failed', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="register">
            <div className="card">
                <div className="left" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    {/* Background image applied through inline styles */}
                </div>
                <div className="right">
                    <h1 className="siteName">
                        j<FaSearch className="searchIcon" />bly
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="inputRow">
                            <div className="inputContainer">
                                <input
                                    type="text"
                                    name="Date_of_Establishment"
                                    value={formData.Date_of_Establishment}
                                    onChange={handleChange}
                                    placeholder="Date of Establishment"
                                    required
                                />
                            </div>
                            <div className="inputContainer">
                                <input
                                    type="text"
                                    name="employe_number"
                                    value={formData.employe_number}
                                    onChange={handleChange}
                                    placeholder="Employee number"
                                    required
                                />
                            </div>
                        </div>
                        <div className="inputRow">
                            <div className="inputContainer">
                                <input
                                    type="text"
                                    name="contact_email"
                                    value={formData.contact_email}
                                    onChange={handleChange}
                                    placeholder="Contact email"
                                    required
                                />
                            </div>
                            <div className="inputContainer">
                                <input
                                    type="text"
                                    name="company_name"
                                    value={formData.company_name}
                                    onChange={handleChange}
                                    placeholder="Company name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="inputRow">
                            <div className="inputContainer">
                                <input
                                    type="text"
                                    name="contact_phone"
                                    value={formData.contact_phone}
                                    onChange={handleChange}
                                    placeholder="Contact phone"
                                    required
                                />
                            </div>
                            <div className="inputContainer">
                                <input
                                    type="text"
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    placeholder="Industry"
                                    required
                                />
                            </div>
                        </div>
                        <div className="inputRow">
                            <div className="inputContainer">
                                <input
                                    type="text"
                                    name="company_description"
                                    value={formData.company_description}
                                    onChange={handleChange}
                                    placeholder="Company description"
                                    required
                                />
                            </div>
                            <div className="inputContainer">
                                <input
                                    type="text"
                                    name="company_website"
                                    value={formData.company_website}
                                    onChange={handleChange}
                                    placeholder="Company website"
                                    required
                                />
                            </div>
                        </div>
                        <div className="inputRow">
                            <div className="inputContainer">
                                <input
                                    type="text"
                                    name="contact_person"
                                    value={formData.contact_person}
                                    onChange={handleChange}
                                    placeholder="Contact person"
                                    required
                                />
                            </div>
                            <div className="inputContainer">
                                <input
                                    type="file"
                                    id="file"
                                    style={{ display: 'none' }}
                                    ref={imageRef}
                                    onChange={onImageChange}
                                />
                                <label htmlFor="file">
                                    <div className="item">
                                        <span>Add Commercial Record</span>
                                    </div>
                                </label>
                                {image && (
                                    <div className="shar-image">
                                        <button type="button" onClick={() => setImage(null)}>X</button>
                                        <img src={URL.createObjectURL(image)} alt="preview" />
                                    </div>
                                )}
                            </div>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button className="registerButton" disabled={loading}>
                            {loading ? 'Loading...' : 'Add Company info'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
