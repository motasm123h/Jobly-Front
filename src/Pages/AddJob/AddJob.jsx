/* eslint-disable no-unused-vars */
import './AddJob.css';
import React, { useState } from 'react';
import NavBar from '../../Component/NavBar/NavBar';
import Section from '../../Component/Section/Section';
import Category from '../../Component/Category/Category';
import { createJobs } from '../../actions/jobsAction';
import { useDispatch } from 'react-redux';
import { uploadIma } from '../../actions/HelperAction';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const [formData, setFormData] = useState({
    description: '',
    image: '',
    job_type: '',
    requirements: '',
    salary_range: '',
    application_deadline: '',
    status: '',
    jops_section_id: '',
  });

  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0]
      setImage(img);
    }
  }
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (image) {
      const formDataImage = new FormData();
      const fileName = Date.now() + image.name;
      formDataImage.append("name", fileName);
      formDataImage.append('image', image);

      formData.image = fileName;
      try {
        dispatch(uploadIma(formDataImage))
      } catch (err) {
        console.log(err)
      }
    }

    dispatch(createJobs(formData));
    // console.log(formData);


    // if (!loading) {
    navigate('/location');
    // }
  };

  const setSelectedSectionId = (sectionId) => {
    setFormData({ ...formData, jops_section_id: sectionId });
  };

  console.log(formData.jops_section_id);

  return (
    <div className="main">
      <Category setSelectedSectionId={setSelectedSectionId} />
      <Section setSelectedSectionId={setSelectedSectionId} />

      
      <div className="container">
        <h1 className="title">Job Advertisement Portal</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>

          <label htmlFor="file">Image:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={onImageChange}
            required
          />

          <label htmlFor="job_type">Job Type:</label>
          <select
            id="job_type"
            name="job_type"
            value={formData.job_type}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Job Type</option>
            <option value="full_time">Full Time</option>
            <option value="part_time">Part Time</option>
            <option value="remotely">Remotely</option>
          </select>

          <label htmlFor="requirements">Requirements:</label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleInputChange}
            required
          ></textarea>

          <label htmlFor="salary_range">Salary Range:</label>
          <input
            type="text"
            id="salary_range"
            name="salary_range"
            value={formData.salary_range}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="application_deadline">Application Deadline:</label>
          <input
            type="text"
            id="application_deadline"
            name="application_deadline"
            value={formData.application_deadline}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Status</option>
            <option value="closed">Closed</option>
            <option value="open">Open</option>
          </select>

          <label htmlFor="jops_section_id">Section ID:</label>
          <input
            type="text"
            id="jops_section_id"
            name="jops_section_id"
            value={formData.jops_section_id}
            onChange={handleInputChange}
            required
          />

          <button className="button" type="submit">
            <span className="button-content">Post Job</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;