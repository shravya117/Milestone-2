import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeacherAttendancePage.css';

const TeacherAttendancePage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleToggle = (index) => {
    setStudents(prevStudents =>
      prevStudents.map((student, i) =>
        i === index ? { ...student, present: !student.present } : student
      )
    );
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/attendance', students);
      console.log('Attendance data submitted');
    } catch (error) {
      console.error('Error submitting attendance:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h5>Manage Attendance</h5>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>USN</th>
            <th>Present/Absent</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.usn}</td>
              <td>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`toggle-${index}`}
                    checked={student.present || false}
                    onChange={() => handleToggle(index)}
                  />
                </div>
              </td>
              <td>{student.present ? 'Present' : 'Absent'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mt-3" onClick={handleSubmit}>
        Submit Attendance
      </button>
    </div>
  );
};

export default TeacherAttendancePage;
