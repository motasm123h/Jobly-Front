/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import { uploadIma } from '../../../actions/HelperAction';
import './EditCompany.css';
import backgroundImage from '../../assets/edt4.jpg';
import Navbar from '../../../Component/NavBar/NavBar';
import { updateCompany } from '../../../actions/AuthAction';

const EditCompany = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const company = useSelector((state) => state.auth.profileforcompany?.data?.company);
  const id_user = useSelector((state) => state.auth.authData?.user?.user?.id);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const [image, setImage] = useState(null);

  const initialCompany = {
    Date_of_Establishment: company?.Date_of_Establishment || '',
    employe_number: company?.employe_number || '',
    Commercial_Record: company?.Commercial_Record || '',
    company_name: company?.company_name || '',
    contact_phone: company?.contact_phone || '',
    industry: company?.industry || '',
    company_description: company?.company_description || '',
    company_website: company?.company_website || '',
    contact_person: company?.contact_person || '',
    contact_email: company?.contact_email || '',
  };

  const [formData, setFormData] = useState(initialCompany);
  const imageRef = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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

    const formDataWithInteger = { ...formData, employe_number: parseInt(formData.employe_number, 10) };

    
       dispatch(updateCompany(formDataWithInteger, id_user));
      navigate('/profile_company');
   
    
  };

  return (
    <div>
      <Navbar>
        <button className="editCompany-back-button" onClick={() => navigate('/profile_company')}>
          <FaArrowLeft className="editCompany-back-icon" />
          Back
        </button>
      </Navbar>
      <div className="editCompany-register">
        <div className="editCompany-card">
          <div className="editCompany-left" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Background image applied through inline styles */}
          </div>
          <div className="editCompany-right">
            <h1 className="editCompany-siteName">
              j<FaSearch className="editCompany-searchIcon" />bly
            </h1>
            <h2 style={{color:"black"}}> Update Company Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="editCompany-inputRow">
                <div className="editCompany-inputContainer">
                  <input
                    type="text"
                    name="Date_of_Establishment"
                    value={formData.Date_of_Establishment}
                    onChange={handleChange}
                    placeholder="Date of Establishment"
                    required
                  />
                </div>
                <div className="editCompany-inputContainer">
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
              <div className="editCompany-inputRow">
                <div className="editCompany-inputContainer">
                  <input
                    type="text"
                    name="contact_email"
                    value={formData.contact_email}
                    onChange={handleChange}
                    placeholder="Contact email"
                    required
                  />
                </div>
                <div className="editCompany-inputContainer">
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
              <div className="editCompany-inputRow">
                <div className="editCompany-inputContainer">
                  <input
                    type="text"
                    name="contact_phone"
                    value={formData.contact_phone}
                    onChange={handleChange}
                    placeholder="Contact phone"
                    required
                  />
                </div>
                <div className="editCompany-inputContainer">
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
              <div className="editCompany-inputRow">
                <div className="editCompany-inputContainer">
                  <input
                    type="text"
                    name="company_description"
                    value={formData.company_description}
                    onChange={handleChange}
                    placeholder="Company description"
                    required
                  />
                </div>
                <div className="editCompany-inputContainer">
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
              <div className="editCompany-inputRow">
                <div className="editCompany-inputContainer">
                  <input
                    type="text"
                    name="contact_person"
                    value={formData.contact_person}
                    onChange={handleChange}
                    placeholder="Contact person"
                    required
                  />
                </div>
                <div className="editCompany-inputContainer">
                  <input
                    type="file"
                    id="file"
                    style={{ display: 'none' }}
                    ref={imageRef}
                    onChange={onImageChange}
                  />
                  <label htmlFor="file">
                    <div className="editCompany-item">
                      <span>Add Commercial Record</span>
                    </div>
                  </label>
                  {image && (
                    <div className="editCompany-shar-image">
                      <button type="button" onClick={() => setImage(null)}>X</button>
                      <img src={URL.createObjectURL(image)} alt="preview" />
                    </div>
                  )}
                </div>
              </div>
              {error && <p className="editCompany-error">{error}</p>}
              <button className="editCompany-registerButton" disabled={loading}>
                {loading ? 'Loading...' : 'Save'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCompany;
