import './EditJob.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../Component/NavBar/NavBar';
import { FaSearch } from 'react-icons/fa';
import { updateJobs } from '../../actions/jobsAction';

const EditJob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { vacancyId } = useParams();

  const { data } = useSelector((state) => state.jobs.jobsForCompany);

  const initialJobDetails = data.find(job => job.vacancy_id === parseInt(vacancyId)) || {
    company_name: "",
    application_deadline: "",
    city: "",
    Governorate: "",
    county: "",
    job_type: "",
    section: "",
    salary_range: 0,
    status: "",
    description: "",
    requirements: "",
  };

  const [jobDetails, setJobDetails] = useState(initialJobDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevJobDetails) => ({
      ...prevJobDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateJobs(jobDetails, vacancyId));
    navigate('/vacancy');
  };

  return (
    <div>
      <NavBar />
      <div className="edit-container">
        <h1 className="edit-siteName">
          j<FaSearch className="edit-searchIcon" /> bly
        </h1>
        <h1 className="edit-title">Edit Job Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="company_name">Company Name:</label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              value={jobDetails.company_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="application_deadline">Application Deadline:</label>
            <input
              type="date"
              id="application_deadline"
              name="application_deadline"
              value={jobDetails.application_deadline}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={jobDetails.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Governorate">Governorate:</label>
            <input
              type="text"
              id="Governorate"
              name="Governorate"
              value={jobDetails.Governorate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="county">County:</label>
            <input
              type="text"
              id="county"
              name="county"
              value={jobDetails.county}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="job_type">Job Type:</label>
            <select
              id="job_type"
              name="job_type"
              value={jobDetails.job_type}
              onChange={handleChange}
              required
            >
              <option value="">Select Job Type</option>
              <option value="full_time">Full Time</option>
              <option value="part_time">Part Time</option>
              <option value="remotely">Remotely</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="section">Section:</label>
            <input
              type="text"
              id="section"
              name="section"
              value={jobDetails.section}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="salary_range">Salary Range:</label>
            <input
              type="text"
              id="salary_range"
              name="salary_range"
              value={jobDetails.salary_range}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={jobDetails.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="closed">Closed</option>
              <option value="open">Open</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={jobDetails.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group full-width">
            <label htmlFor="requirements">Requirements:</label>
            <textarea
              id="requirements"
              name="requirements"
              value={jobDetails.requirements}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className="edit-button" type="submit">
            <span className="edit-button-content">Save Changes</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditJob;
