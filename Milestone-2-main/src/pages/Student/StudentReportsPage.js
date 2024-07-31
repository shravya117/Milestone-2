import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentReportsPage.css'; // Ensure you have this CSS file if needed for custom styling

const StudentReportsPage = () => {
  // Function to calculate the average of CIA marks
  const calculateCIAAverage = (cia1, cia2, cia3) => {
    return ((cia1 + cia2 + cia3) / 3).toFixed(2);
  };

  return (
    <div>
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
          <tr>
            <td>CS101</td>
            <td>Computer Science</td>
            <td>28</td>
            <td>30</td>
            <td>30</td>
            <td>20</td>
            <td>{calculateCIAAverage(28, 30, 30)}</td>
            <td>108</td>
          </tr>
          <tr>
            <td>MTH102</td>
            <td>Mathematics</td>
            <td>78</td>
            <td>84</td>
            <td>80</td>
            <td>85</td>
            <td>{calculateCIAAverage(78, 84, 80)}</td>
            <td>327</td>
          </tr>
          <tr>
            <td>PHY103</td>
            <td>Physics</td>
            <td>25</td>
            <td>29</td>
            <td>27</td>
            <td>15</td>
            <td>{calculateCIAAverage(25, 29, 27)}</td>
            <td>96</td>
          </tr>
          <tr>
            <td>CHE104</td>
            <td>Chemistry</td>
            <td>22</td>
            <td>24</td>
            <td>26</td>
            <td>18</td>
            <td>{calculateCIAAverage(22, 24, 26)}</td>
            <td>90</td>
          </tr>
          <tr>
            <td>ENG105</td>
            <td>English</td>
            <td>30</td>
            <td>28</td>
            <td>30</td>
            <td>20</td>
            <td>{calculateCIAAverage(30, 28, 30)}</td>
            <td>108</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default StudentReportsPage;
