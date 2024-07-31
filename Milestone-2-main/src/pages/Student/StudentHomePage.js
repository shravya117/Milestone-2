import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentHomePage.css';

function StudentHomePage() {
  return (
    <div className="container student-home-page mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card profile-card">
            <div className="card-body text-center">
              <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-pic mb-3" />
              <h4>Welcome, John Doe!</h4>
              <ul className="nav flex-column mt-4">
                <li className="nav-item">
                  <Link className="nav-link" to="dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="attendance">Attendance</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="reports">Grades/Reports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="timetable">Timetable</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="announcements">Announcements</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="profile">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="main-content-card">
            <div className="card">
              <div className="card-body">
                <Outlet /> {/* Renders the matched child route */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHomePage;
