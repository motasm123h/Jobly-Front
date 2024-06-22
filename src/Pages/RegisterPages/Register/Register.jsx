import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Register.css';
import c from '../../assets/cccc.jpg';
import { signUp } from '../../../actions/AuthAction';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, authData } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '2',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signUp(formData));
      navigate('/register-two');
    } catch (error) {
      console.error('Sign up failed', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register">
      <div className="card-register">
        <div className="left-register">
          <img src={c} alt="background" className="background-register" />
        </div>
        <div className="right-register">
          <h1 className="siteName-register">
            j<FaSearch className="searchIcon-register" />bly
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="inputContainer-register">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            <div className="inputContainer-register">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="inputContainer-register passwordContainer-register">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <i
                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} togglePassword-register`}
                onClick={togglePasswordVisibility}
              />
            </div>
            {error && <p className="error-register">{error}</p>}
            <button className="registerButton-register" disabled={loading}>
              {loading ? 'Loading...' : 'Register'}
            </button>
          </form>
          <span>Already have an account?</span>
          <Link to="/login">
            <button className="loginButton-register">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
