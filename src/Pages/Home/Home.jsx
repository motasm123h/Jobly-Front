/* eslint-disable no-unused-vars */
import React from 'react'
import './Home'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getJobsForCompany } from
import { getJobsForCompany } from '../../actions/jobsAction';

export default function Home() {
    const user_id = useSelector((state) => state.auth.authData.user.user.id);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        // e.preventDefault();
        dispatch(getJobsForCompany(user_id));
    };

    return (
        <div>
            <Link to="/vacancy">
                <button onClick={handleSubmit}>
                    CLick on it right now
                    CLick on it right now this home 
                </button>
            </Link>
        </div>
    )
}
