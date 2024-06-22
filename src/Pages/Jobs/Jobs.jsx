/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import "./Jobs.css";
import { useSelector } from "react-redux";



const Jobs = () => {
  // const jobs = useSelector((state) => );
  const { data } = useSelector((state) => state.jobs.jobsForCompany);
  console.log(data);
  // console.log(vacancy);
  return (
    <>
      <Navbar />
      <div className="jobs-for-you">
        <div className="job-background">
          <div className="title">
            <h2>Our Jobs</h2>
          </div>
        </div>
        <div className="job-section">
          <div className="job-page">
            {/* {filteredJobs.map(
              ({ id, logo, company, position, location, posted, role }) => { */}
            {/* return ( */}
            {/* {companies.map((company) => (
              <div key={company.id}>
                <h2>{company.name}</h2>
                <ul>
                  {company.vacancies.map((vacancy) => (
                    <li key={vacancy.id}>
                      <h3>{vacancy.description}</h3>
                      <p>Salary Range: {vacancy.salary_range}</p>
                      <p>Status: {vacancy.status}</p>
                    </li>
                  ))} */}

            {
              data.map((company) => (
                <div className="job-list" key={company.id}>
                  <div className="job-card">
                    <div className="job-name">
                      <img
                        alt="logo"
                        className="job-profile"
                        src={`http://localhost:8000/images/${company.vacancy_image}`}
                      />
                      <div className="job-detail">
                        <h4>{company.company_name}</h4>
                        {/* {company.vacancies.map((vacancy) => ( */}
                        <div key={company.vacancy_id}>
                          <h3>{company.application_deadline}</h3>
                          <div className="category">
                            <p>{company.location}</p>
                            <p>{company.requirements}</p>
                          </div>
                        </div>
                        {/* ))} */}
                      </div>
                    </div>
                    <div className="job-button">
                      <div className="job-posting">
                        <Link to="/apply-jobs">delet</Link>
                      </div>
                      <div className="save-button">
                        <Link to="/Jobs">
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }


          </div>


        </div>
      </div>
    </>
  );
};

export default Jobs;
