import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../actions/AuthAction';
import './Login.css';
import c from '../assets/cccc.jpg'; // Importing the background image
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, authData } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(formData));
  };

  useEffect(() => {
    if (authData && !loading) {
      navigate('/');
    }
  }, [authData, loading, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <div className="card-login">
        <div className="left-login">
          <img src={c} alt="background" className="background-login" />
        </div>
        <div className="right-login">
          <h1 className="siteName-login">
            j<FaSearch className="searchIcon-login" />bly
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="inputContainer-login">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="inputContainer-login passwordContainer-login">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <i
                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} togglePassword-login`}
                onClick={togglePasswordVisibility}
              />
            </div>
            {error && <p className="error-login">{error}</p>}
            <button className="loginButton-login" disabled={loading}>
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button className="registerButton-login">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
