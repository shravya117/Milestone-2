import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeacherReportPage.css'; // Ensure you have this CSS file for custom styling

const subjectData = {
  'CS101': 'Computer',
  'MTH102': 'Math',
  'PHY103': 'Physics',
  'CHE104': 'Chemistry',
  'ENG105': 'English'
};

const TeacherReportPage = () => {
  // Initialize state with empty values
  const [marks, setMarks] = useState({});

  // State for error messages
  const [errors, setErrors] = useState({});

  // Function to calculate the average of CIA marks
  const calculateCIAAverage = (cia1, cia2, cia3) => {
    return ((cia1 + cia2 + cia3) / 3).toFixed(2);
  };

  // Handle input change
  const handleChange = (subjectCode, field, value) => {
    const numberValue = value === '' ? '' : parseInt(value);

    // Update the error state
    let errorMessage = '';
    if (numberValue !== '' && (isNaN(numberValue) || numberValue < 0 || numberValue > 30)) {
      errorMessage = `Value must be between 0 and 30`;
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [subjectCode]: errorMessage
    }));

    // Update the marks state
    setMarks(prevMarks => {
      const updatedMarks = { ...prevMarks };
      if (!updatedMarks[subjectCode]) {
        updatedMarks[subjectCode] = {};
      }
      if (value !== '') {
        updatedMarks[subjectCode][field] = numberValue;
        updatedMarks[subjectCode].total = 
          (updatedMarks[subjectCode].cia1 || 0) + 
          (updatedMarks[subjectCode].cia2 || 0) + 
          (updatedMarks[subjectCode].cia3 || 0) + 
          (updatedMarks[subjectCode].assignment || 0);
      } else {
        delete updatedMarks[subjectCode][field];
        updatedMarks[subjectCode].total = 
          (updatedMarks[subjectCode].cia1 || 0) + 
          (updatedMarks[subjectCode].cia2 || 0) + 
          (updatedMarks[subjectCode].cia3 || 0) + 
          (updatedMarks[subjectCode].assignment || 0);
      }
      return updatedMarks;
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to server
    alert('Marks submitted successfully!');
  };

  return (
    <div className="container mt-4">

      <form onSubmit={handleSubmit}>
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <th>Subject Code</th>
              <th>Subject Name</th>
              <th>CIA-1 Marks</th>
              <th>CIA-2 Marks</th>
              <th>CIA-3 Marks</th>
              <th>Assignment Marks</th>
              <th>Average CIA Marks</th>
              <th>Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(subjectData).map((subjectCode) => {
              const { cia1 = '', cia2 = '', cia3 = '', assignment = '', total = 0 } = marks[subjectCode] || {};
              return (
                <tr key={subjectCode}>
                  <td>{subjectCode}</td>
                  <td>{subjectData[subjectCode]}</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={cia1}
                      onChange={(e) => handleChange(subjectCode, 'cia1', e.target.value)}
                    />
                    {errors[subjectCode] && <div className="text-danger">{errors[subjectCode]}</div>}
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={cia2}
                      onChange={(e) => handleChange(subjectCode, 'cia2', e.target.value)}
                    />
                    {errors[subjectCode] && <div className="text-danger">{errors[subjectCode]}</div>}
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={cia3}
                      onChange={(e) => handleChange(subjectCode, 'cia3', e.target.value)}
                    />
                    {errors[subjectCode] && <div className="text-danger">{errors[subjectCode]}</div>}
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={assignment}
                      onChange={(e) => handleChange(subjectCode, 'assignment', e.target.value)}
                    />
                    {errors[subjectCode] && <div className="text-danger">{errors[subjectCode]}</div>}
                  </td>
                  <td>{calculateCIAAverage(cia1, cia2, cia3)}</td>
                  <td>{total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TeacherReportPage;
