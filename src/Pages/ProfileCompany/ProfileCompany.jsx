import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../../Component/NavBar/NavBar";
import "./ProfileCompany.css";

const ProfileCompany = () => {
  const profileData = useSelector((state) => state.auth.profileforcompany.data);

  if (!profileData) {
    return (
      <>
        <NavBar />
        <div className="jobs-for-you">
          <div className="job-background">
            <div className="title">
              <h2>No information available</h2>
            </div>
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

  return (
    <>
      <NavBar />
      <div className="profile-company">
        <div className="profile-details">
          <h2>Company Profile</h2>
          <div className="profile-section">
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
          </div>
          <div className="profile-section">
            <h3>Address</h3>
            <p><strong>County:</strong> {county}</p>
            <p><strong>City:</strong> {city}</p>
            <p><strong>Governorate:</strong> {Governorate}</p>
          </div>
          <div className="profile-section">
            <h3>Company Information</h3>
            <p><strong>Company Name:</strong> {company_name}</p>
            <p><strong>Description:</strong> {company_description}</p>
            <p><strong>Website:</strong> <a href={`http://${company_website}`} target="_blank" rel="noopener noreferrer">{company_website}</a></p>
            <p><strong>Date of Establishment:</strong> {Date_of_Establishment}</p>
            <p><strong>Number of Employees:</strong> {employe_number}</p>
            <p><strong>Industry:</strong> {industry}</p>
            <p><strong>Contact Email:</strong> {contact_email}</p>
            <p><strong>Contact Phone:</strong> {contact_phone}</p>
            <p><strong>Contact Person:</strong> {contact_person}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCompany;
