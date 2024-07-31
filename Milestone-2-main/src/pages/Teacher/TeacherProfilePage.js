// src/pages/Teacher/TeacherProfilePage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeacherProfilePage.css';

const TeacherProfilePage = () => {
  const teacherInfo = {
    name: 'Jane Doe',
    teacherId: 'T12345',
    email: 'jane.doe@example.com',
    department: 'Computer Science',
    phone: '+1234567890',
    address: '123 Main St, City, Country'
  };

  return (
    <div className="container mt-4 profile-container">
      <div className="card profile-card">
        <div className="card-body">
          <div className="text-center mb-4">
            <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-pic mb-3" />
            <h3>{teacherInfo.name}</h3>
            <p className="text-muted">{teacherInfo.department}</p>
          </div>
          <div className="profile-info">
            <p><strong>Teacher ID:</strong> {teacherInfo.teacherId}</p>
            <p><strong>Email:</strong> {teacherInfo.email}</p>
            <p><strong>Phone:</strong> {teacherInfo.phone}</p>
            <p><strong>Address:</strong> {teacherInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfilePage;
