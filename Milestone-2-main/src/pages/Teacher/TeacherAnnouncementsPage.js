import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeacherAnnouncementsPage.css'; // Import the custom CSS file

const TeacherAnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState('');
  const [newAssignment, setNewAssignment] = useState('');

  useEffect(() => {
    // Fetch existing announcements and assignments when the component mounts
    const fetchData = async () => {
      try {
        const announcementResponse = await fetch('/api/announcements');
        const announcementData = await announcementResponse.json();
        setAnnouncements(announcementData);

        // Fetch assignments (you need to set up the assignments model and routes similarly)
        // const assignmentResponse = await fetch('/api/assignments');
        // const assignmentData = await assignmentResponse.json();
        // setAssignments(assignmentData);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  const handlePostAnnouncement = async () => {
    try {
      const response = await fetch('/api/announcements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: newAnnouncement }),
      });
      const data = await response.json();
      if (response.ok) {
        setAnnouncements([...announcements, data]);
        setNewAnnouncement('');
      } else {
        console.error('Error posting announcement:', data);
      }
    } catch (err) {
      console.error('Error posting announcement:', err);
    }
  };

  const handlePostAssignment = async () => {
    try {
      const response = await fetch('/api/assignments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: newAssignment }),
      });
      const data = await response.json();
      if (response.ok) {
        setAssignments([...assignments, data]);
        setNewAssignment('');
      } else {
        console.error('Error posting assignment:', data);
      }
    } catch (err) {
      console.error('Error posting assignment:', err);
    }
  };

  return (
    <div className="container mt-4">
      <div className="mb-4">
        <h4>Announcements</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            value={newAnnouncement}
            onChange={(e) => setNewAnnouncement(e.target.value)}
            placeholder="Write a new announcement"
          />
        </div>
        <button className="btn btn-primary" onClick={handlePostAnnouncement}>
          Post Announcement
        </button>
        <ul className="list-group mt-3">
          {announcements.map((announcement, index) => (
            <li key={index} className="list-group-item announcement-item">{announcement.description}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Assignments</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            value={newAssignment}
            onChange={(e) => setNewAssignment(e.target.value)}
            placeholder="Write a new assignment"
          />
        </div>
        <button className="btn btn-primary" onClick={handlePostAssignment}>
          Post Assignment
        </button>
        <ul className="list-group mt-3">
          {assignments.map((assignment, index) => (
            <li key={index} className="list-group-item">{assignment.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherAnnouncementsPage;
