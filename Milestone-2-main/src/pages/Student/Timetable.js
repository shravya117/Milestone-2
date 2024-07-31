// src/pages/Student/Timetable.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Timetable.css';

const Timetable = () => {
  const timetable = [
    {
      day: 'Monday',
      subjects: [
        'Math', 'Science', 'English', 'History', 'Lunch', 'Physical Education'
      ],
    },
    {
      day: 'Tuesday',
      subjects: [
        'Physics', 'Chemistry', 'Math', 'Biology', 'Lunch', 'English'
      ],
    },
    {
      day: 'Wednesday',
      subjects: [
        'Computer Science', 'Math', 'Physics', 'Chemistry', 'Lunch', 'Biology'
      ],
    },
    {
      day: 'Thursday',
      subjects: [
        'Art', 'History', 'Geography', 'Math', 'Lunch', 'Science'
      ],
    },
    {
      day: 'Friday',
      subjects: [
        'Physical Education', 'Math', 'Science', 'History', 'Lunch', 'English'
      ],
    },
  ];

  const times = ['8:30-9:30', '9:30-10:30', '10:30-11:30', '11:30-12:30', '12:30-1:30','1:30-2:30'];

  return (
    <div className="container mt-4">
      <table className="table table-bordered timetable-table">
        <thead>
          <tr>
            <th>Day</th>
            {times.map((time, index) => (
              <th key={index}>{time}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timetable.map((day, index) => (
            <tr key={index}>
              <td>{day.day}</td>
              {day.subjects.map((subject, idx) => (
                <td key={idx}>{subject}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
