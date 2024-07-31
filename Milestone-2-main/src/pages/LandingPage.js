import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
import schoolImage from './school-image.jpeg'; // Your main image
import logoImage from './logo.jpg'; // Your logo image

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="image-section">
        <img src={schoolImage} alt="School" className="img-fluid" />
      </div>
      <div className="content-section">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo" />
        </div>
        <h2 className="mb-4">Welcome to the School Management System</h2>
        <p className="mb-5">Please select your role to continue</p>
        <div className="d-flex justify-content-center">
          <Link to="/login/student" className="btn btn-primary btn-lg mx-3">Student</Link>
          <Link to="/login/teacher" className="btn btn-secondary btn-lg mx-3">Teacher</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
