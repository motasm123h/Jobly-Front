import React, { useState, useEffect } from 'react';
import NavBar from '../../Component/NavBar/NavBar';
import './ShowJob.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const jobsData = [
  {
    id: 1,
    jobTitle: 'Software Engineer',
    companyName: 'ABC Inc.',
    jobDescription: 'We are seeking a skilled Software Engineer to join our team.',
    requirements: 'Bachelor\'s degree in Computer Science, 3+ years of experience in software development, etc.'
  },
  {
    id: 2,
    jobTitle: 'Graphic Designer',
    companyName: 'XYZ Studios',
    jobDescription: 'We are looking for a talented Graphic Designer to create amazing user experiences.',
    requirements: 'Proficiency in Adobe Creative Suite, strong visual design skills, etc.'
  },
  // Additional job data...
];

export default function ShowJob() {
  const navigate = useNavigate();
  const [borderColors, setBorderColors] = useState([]);

  const generateRandomColors = () => {
    const colors = [];
    for (let i = 0; i < jobsData.length; i++) {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      colors.push(randomColor);
    }
    setBorderColors(colors);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      generateRandomColors();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleEdit = (jobId) => {
    console.log("Edit job with ID:", jobId);
    navigate('/editjob');
  };

  const handleDelete = (jobId) => {
    console.log("Delete job with ID:", jobId);
  };

  return (
    <div>
      <NavBar />
      <div className="jobs-container">
        <h1 className="page-title">All Job Postings</h1>
        <div className="jobs-list">
          {jobsData.map((job, index) => (
            <div className="job-card" key={job.id} style={{ borderLeftColor: borderColors[index] }}>
              <div className="job-header">
                <h2 className="job-title">{job.jobTitle}</h2>
              </div>
              <p className="company-name"><strong>Company:</strong> {job.companyName}</p>
              <p className="job-description"><strong>Description:</strong> {job.jobDescription}</p>
              <p className="requirements"><strong>Requirements:</strong> {job.requirements}</p>
              <div className="action-icons">
                <EditIcon className='edit-icon' onClick={() => handleEdit(job.id)} />
                <DeleteIcon className='delete-icon' onClick={() => handleDelete(job.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
