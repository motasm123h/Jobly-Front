import React, { useState } from 'react';
import './Section.css';
import { useSelector } from 'react-redux';

export default function Section({ setSelectedSectionId }) {
  const sections = useSelector((state) => state?.Helper?.JobsData?.section?.data);
  const [selectedSectionId, setSelectedSectionIdState] = useState(null);

  const handleSectionClick = (sectionId) => {
    setSelectedSectionIdState(sectionId);
    setSelectedSectionId(sectionId);
  };

  return (
    <div className="section-container">
      {sections && sections.map((section) => (
        <div
          key={section.id}
          onClick={() => handleSectionClick(section.id)}
          className={selectedSectionId === section.id ? 'selected-section' : ''}
        >
          <h3>{section.name}</h3>
        </div>
      ))}
    </div>
  );
}
