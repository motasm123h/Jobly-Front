import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Component/NavBar/NavBar";
import "./Jobs.css";
import { deleteJobs } from "../../actions/jobsAction";

const Jobs = () => {
  const { data } = useSelector((state) => state.jobs.jobsForCompany);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!data || data.length === 0) {
    return (
      <>
        <NavBar />
        <div className="jobs-for-you">
          <div className="job-background">
            <div className="title">
              <h2>No Jobs Available</h2>
            </div>
          </div>
        </div>
      </>
    );
  }

  const handleEditJob = (vacancyId) => {
    navigate(`/editjob/${vacancyId}`);
  };

  const handleDeleteJob = (vacancyId) => {
        dispatch(deleteJobs(vacancyId));
  };

  return (
    <>
      <NavBar />
      <div className="jobs-for-you">
        <div className="job-background"></div>
        <div className="job-section">
          <div className="job-page">
            {data.map((job) => (
              <motion.div
                className="job-list"
                key={job.vacancy_id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="job-card">
                  <div className="job-name">
                    <img
                      alt="logo"
                      className="job-profile"
                      src={`http://localhost:8000/images/${job.vacancy_image}`}
                    />
                    <div className="job-detail">
                      <h4>{job.company_name}</h4>
                      <div>
                        <h3>Application Deadline: {job.application_deadline}</h3>
                        <div className="category">
                          <p><strong>Location:</strong> {job.city}, {job.Governorate}, {job.county}</p>
                          <p><strong>Job Type:</strong> {job.job_type}</p>
                          <p><strong>Section:</strong> {job.section}</p>
                          <p><strong>Salary Range:</strong> {job.salary_range}</p>
                          <p><strong>Status:</strong> {job.status}</p>
                          <p><strong>Description:</strong> {job.description}</p>
                          <p><strong>Requirements:</strong> {job.requirements}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="job-button">
                    <div className="job-posting">
                      <button onClick={() => handleEditJob(job.vacancy_id)}>Edit</button>
                    </div>
                    <div className="save-button">
                      <button onClick={() => handleDeleteJob(job.vacancy_id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
