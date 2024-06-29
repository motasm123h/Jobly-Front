import React from 'react'
import './Vacancy.css';
import { useSelector } from 'react-redux'

export default function Vacancy() {
    // jobsForCompany.data.vacancy
    const category = useSelector((state) => state.jobs.jobsForCompany.data.vacancy);
    
    return (
        <div>
            <button>category</button>
        </div>
    )
}
