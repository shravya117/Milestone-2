import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PartsTable() {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/parts')
     .then(response => {
        setParts(response.data);
      })
     .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Here is a table</h1>
      <table>
        <thead>
          <tr>
            <th>Part ID</th>
            <th>Part Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {parts.map(part => (
            <tr key={part._id}>
              <td>{part.partId}</td>
              <td>{part.partName}</td>
              <td>{part.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {parts.length > 0 && <p>Data loaded successfully!</p>}
    </div>
  );
}

export default PartsTable;