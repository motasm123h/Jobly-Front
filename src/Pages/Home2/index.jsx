import "./index.css";
import NavBar from "../../Component/NavBar/NavBar";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getJobsForCompany } from '../../actions/jobsAction';

const Home = () => {
  const user_id = useSelector((state) => state.auth.authData.user.user.id);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSubmit = async () => {
    dispatch(getJobsForCompany(user_id));
    navigate('/vacancy');
  };

  return (
    <>
      <NavBar />
      <div className="banner-img">
        <div className="title">
          <h3>
            Find the <span>Right Job</span> In the
            <br />
            <span> Right Companies</span>
          </h3>
          <div className="small-tagline">
            <p>Got fired..!! Get Ready to be hired</p>
          </div>
        </div>
        <div className="button" data-testid="btn" onClick={handleSubmit}>
          Browse Jobs
        </div>
      </div>
    </>
  );
};

export default Home;
