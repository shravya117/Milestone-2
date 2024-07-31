// StudentProfile.js
import React, { useState, useEffect } from 'react';

const StudentProfile = () => {
  const [studentInfo, setStudentInfo] = useState({});

  useEffect(() => {
    fetch('/api/student/profile')
     .then(response => response.json())
     .then(data => setStudentInfo(data))
     .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4 profile-container">
      <div className="card profile-card">
        <div className="card-body">
          <div className="text-center mb-4">
            <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-pic mb-3" />
            <h3>{studentInfo.name}</h3>
            <p className="text-muted">{studentInfo.branch}</p>
          </div>
          <div className="profile-info">
            <p><strong>Student ID:</strong> {studentInfo.studentId}</p>
            <p><strong>Email:</strong> {studentInfo.email}</p>
            <p><strong>Year:</strong> {studentInfo.year}</p>
            <p><strong>Phone:</strong> {studentInfo.phone}</p>
            <p><strong>Address:</strong> {studentInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;