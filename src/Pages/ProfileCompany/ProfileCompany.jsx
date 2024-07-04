import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Component/NavBar/NavBar";
import "./ProfileCompany.css";

const ProfileCompany = () => {
  const profileData = useSelector((state) => state.auth.profileforcompany.data);
  const navigate = useNavigate();

  if (!profileData) {
    return (
      <>
        <NavBar />
        <div className="profile-company-page">
          <div className="no-data-message">
            <h2>No information available</h2>
          </div>
        </div>
      </>
    );
  }

  const { name, email, address, company } = profileData;
  const { county, city, Governorate } = address || {};
  const { 
    company_name, company_description, company_website, 
    Date_of_Establishment, employe_number, industry, 
    contact_email, contact_phone, contact_person 
  } = company || {};

  const handleEditPersonalInfo = () => {
    navigate("/edit-personal-info");
  };

  const handleEditAddress = () => {
    navigate("/edit-address");
  };

  const handleEditCompanyInfo = () => {
    navigate("/edit-company-info");
  };

  return (
    <>
      <NavBar />
      <div className="profile-company-page">
        <div className="profile-company">
          <div className="profile-header">
            <h2>Company Profile</h2>
          </div>
          <div className="profile-details">
            <section className="profile-section">
              <h3>Personal Information</h3>
              <div className="profile-item">
                <strong>Name:</strong> {name}
              </div>
              <div className="profile-item">
                <strong>Email:</strong> {email}
              </div>
              <button className="btn edit-btn" onClick={handleEditPersonalInfo}>
                Edit Personal Information
              </button>
            </section>
            <section className="profile-section">
              <h3>Address</h3>
              <div className="profile-item">
                <strong>County:</strong> {county}
              </div>
              <div className="profile-item">
                <strong>City:</strong> {city}
              </div>
              <div className="profile-item">
                <strong>Governorate:</strong> {Governorate}
              </div>
              <button className="btn edit-btn" onClick={handleEditAddress}>
                Edit Address
              </button>
            </section>
            <section className="profile-section">
              <h3>Company Information</h3>
              <div className="profile-item">
                <strong>Company Name:</strong> {company_name}
              </div>
              <div className="profile-item">
                <strong>Description:</strong> {company_description}
              </div>
              <div className="profile-item">
                <strong>Website:</strong>{" "}
                <a
                  href={`http://${company_website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company_website}
                </a>
              </div>
              <div className="profile-item">
                <strong>Date of Establishment:</strong> {Date_of_Establishment}
              </div>
              <div className="profile-item">
                <strong>Number of Employees:</strong> {employe_number}
              </div>
              <div className="profile-item">
                <strong>Industry:</strong> {industry}
              </div>
              <div className="profile-item">
                <strong>Contact Email:</strong> {contact_email}
              </div>
              <div className="profile-item">
                <strong>Contact Phone:</strong> {contact_phone}
              </div>
              <div className="profile-item">
                <strong>Contact Person:</strong> {contact_person}
              </div>
              <button
                className="btn edit-btn"
                onClick={handleEditCompanyInfo}
              >
                Edit Company Information
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCompany;
