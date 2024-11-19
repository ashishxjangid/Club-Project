import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Teamcard from './Teamcard';
import Header from './Header';
import Calendar from './Calendar';
import Statistics from './Statistics';
import Dashboard from './Dashboard';
import CreateEventForm from './CreateEventForm';

function App() {
  const [showForm, setShowForm] = useState(false);

  // Function to toggle form visibility
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflow: 'auto' }}>
          <Routes>
            <Route path="/" element={<><Header title="CLUB ACTIVITY DASHBOARD" /><Dashboard onCreateEvent={handleShowForm} /> {showForm && <CreateEventForm onClose={() => setShowForm(false)} />} </>} />
            <Route path="/Calendar" element={<><Header title="ACTIVITY CALENDAR" /><Calendar /></>} />
            <Route path="/Teamcard" element={<><Header title="MY TEAM" /><Teamcard /></>} />
            <Route path="/Statistics" element={<><Header title="STATISTICS" /><Statistics /></>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
