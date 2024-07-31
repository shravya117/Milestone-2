import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentAnnouncementsPage.css'; // Ensure you have this CSS file if needed for custom styling

const StudentAnnouncementsPage = () => {
  const announcements = [
    {
      subject: 'Mathematics',
      date: '2024-07-20',
      description: 'Math Homework - Complete exercises on page 45.',
    },
    {
      subject: 'Physics',
      date: '2024-07-22',
      description: 'Lab report on experiments conducted in class.',
    },
    {
      subject: 'Chemistry',
      date: '2024-07-23',
      description: 'Upcoming quiz on chemical reactions.',
    },
  ];

  const assignments = [
    {
      subject: 'English',
      date: '2024-07-21',
      description: 'Write an essay on "The Impact of Technology".',
    },
    {
      subject: 'Computer Science',
      date: '2024-07-24',
      description: 'Project on building a simple web application.',
    },
    {
      subject: 'History',
      date: '2024-07-25',
      description: 'Read chapter 6 and prepare for a discussion on ancient civilizations.',
    },
  ];

  return (
    <div className="container student-announcements-page mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Announcements</h5>
              <ul className="list-group">
                {announcements.map((announcement, index) => (
                  <li key={index} className="list-group-item">
                    <h6 className="mb-1">{announcement.subject}</h6>
                    <small className="text-muted">{announcement.date}</small>
                    <p className="mt-2">{announcement.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Assignments</h5>
              <ul className="list-group">
                {assignments.map((assignment, index) => (
                  <li key={index} className="list-group-item">
                    <h6 className="mb-1">{assignment.subject}</h6>
                    <small className="text-muted">{assignment.date}</small>
                    <p className="mt-2">{assignment.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAnnouncementsPage;
