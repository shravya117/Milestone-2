import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import StudentHomePage from './pages/Student/StudentHomePage';
import TeacherHomePage from './pages/Teacher/TeacherHomePage';
import StudentAttendancePage from './pages/Student/StudentAttendancePage';
import StudentReportsPage from './pages/Student/StudentReportsPage';
import StudentAnnouncementsPage from './pages/Student/StudentAnnouncementsPage';
import Timetable from './pages/Student/Timetable';
import StudentProfile from './pages/Student/StudentProfile';
import StudentDashboard from './pages/Student/StudentDashboard'; // Default dashboard component
import TeacherAttendancePage from './pages/Teacher/TeacherAttendancePage';
import TeacherAnnouncementsPage from './pages/Teacher/TeacherAnnouncementsPage';
import TeacherProfilePage from './pages/Teacher/TeacherProfilePage';
import TeacherReportPage from './pages/Teacher/TeacherReportPage';
import TeacherDashboardPage from './pages/Teacher/TeacherDashboardPage';
import TeacherTimetable from './pages/Teacher/TeacherTimetable';
import PartsTable from "./pages/PartsTable"; // Import the new component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/:role" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        {isAuthenticated ? (
          <>
            <Route path="/student" element={<StudentHomePage />}>
              <Route index element={<StudentDashboard />} /> {/* Default content */}
              <Route path="attendance" element={<StudentAttendancePage />} />
              <Route path="reports" element={<StudentReportsPage />} />
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="timetable" element={<Timetable />} />
              <Route path="announcements" element={<StudentAnnouncementsPage />} />
              <Route path="profile" element={<StudentProfile />} />
              {/* Add other student routes here */}
            </Route>
            <Route path="/teacher" element={<TeacherHomePage />}>
              <Route path="dashboard" element={<TeacherDashboardPage />} />
              <Route path="attendance" element={<TeacherAttendancePage />} />
              <Route path="report" element={<TeacherReportPage />} />
              <Route path="announcements" element={<TeacherAnnouncementsPage />} />
              <Route path="profile" element={<TeacherProfilePage />} />
              <Route path="timetable" element={<TeacherTimetable />} />

              {/* Add other teacher routes here */}
            </Route>
          </>
        ) : (
          <Route path="*" element={<LandingPage />} />
        )}
        <Route path="/parts" element={<PartsTable />} />
      </Routes>
    </Router>
  );
}

export default App;
