// Section.js
import React from 'react';
import './Section.css';
import { useSelector } from 'react-redux';

export default function Section({ setSelectedSectionId }) {
    const sections = useSelector((state) => state?.Helper?.JobsData?.section?.data);

    return (
        <div>
            {sections && sections.map((section) => (
                <div key={section.id} onClick={() => setSelectedSectionId(section.id)}>
                    <h3>{section.name}</h3>
                </div>
            ))}
        </div>
    );
}