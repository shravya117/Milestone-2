// src/pages/Teacher/TeacherTimetablePage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeacherTimetable.css';

const TeacherTimetable = () => (
  <div>
    <table className="table table-bordered mt-4">
      <thead>
        <tr>
          <th>8:30 - 9:30</th>
          <th>9:30 - 10:30</th>
          <th>10:30 - 11:30</th>
          <th>11:30 - 12:30</th>
          <th>12:30 - 1:30</th>
          <th>1:30 - 2:30</th>
          <th>2:30 - 3:30</th>
          <th>3:30 - 4:30</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Math</td>
          <td>Science</td>
          <td>Computer</td>
          <td>English</td>
          <td>Lunch Break</td>
          <td>Math</td>
          <td>History</td>
          <td>Physics</td>
        </tr>
        <tr>
          <td>English</td>
          <td>Math</td>
          <td>Science</td>
          <td>Computer</td>
          <td>Lunch Break</td>
          <td>History</td>
          <td>Math</td>
          <td>Biology</td>
        </tr>
        <tr>
          <td>Physics</td>
          <td>Math</td>
          <td>English</td>
          <td>Computer</td>
          <td>Lunch Break</td>
          <td>Science</td>
          <td>Math</td>
          <td>English</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
);

export default TeacherTimetable;
