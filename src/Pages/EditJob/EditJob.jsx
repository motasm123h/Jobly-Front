import React from 'react';
import NavBar from '../../Component/NavBar/NavBar';
import './EditJob.css';

export default function EditJob() {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <h1 className='title'>Job Advertisement Portal</h1>
        <form>
          <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" id="jobTitle" name="jobTitle" required />

          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" name="companyName" required />

          <label htmlFor="jobDescription">Job Description:</label>
          <textarea id="jobDescription" name="jobDescription" required></textarea>

          <label htmlFor="requirements">Requirements:</label>
          <textarea id="requirements" name="requirements" required></textarea>

          {/* Replacing the submit button with the desired button */}
          <button className="button" type="submit">
            <span className="button-content">Posting..</span>
          </button>
        </form>
      </div>
    </div>
  );
}
