import React from 'react';
import './StudentAttendancePage.css'; // Add custom styles if needed

const StudentAttendancePage = () => {
  // Sample data
  const attendanceData = [
    { code: 'MTH101', name: 'Mathematics', attended: 20, absent: 5, total: 25 },
    { code: 'SCI102', name: 'Science', attended: 22, absent: 3, total: 25 },
    { code: 'ENG103', name: 'English', attended: 18, absent: 7, total: 25 },
    // Add more data as needed
  ];

  return (
    <div>
      <h6>Detailed Attendance Records</h6>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Classes Attended</th>
            <th>Classes Absent</th>
            <th>Total Classes</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => {
            const percentage = ((record.attended / record.total) * 100).toFixed(2);
            return (
              <tr key={index}>
                <td>{record.code}</td>
                <td>{record.name}</td>
                <td>{record.attended}</td>
                <td>{record.absent}</td>
                <td>{record.total}</td>
                <td>{percentage}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="note mt-4">
        <p><strong>Note:</strong> Minimum attendance percentage required is 75%.</p>
      </div>
    </div>
  );
};

export default StudentAttendancePage;
