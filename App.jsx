import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Teamcard from './Teamcard';
import Header from './Header';
import Calendar from './Calendar';
import Statistics from './Statistics';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflow: 'auto' }}>
          <Routes>
            <Route path="/" element={<><Header title="Club Activity Dashboard" /><Dashboard /></>} />
            <Route path="/Calendar" element={<><Header title="Activity Calendar" /><Calendar /></>} />
            <Route path="/Teamcard" element={<><Header title="My Team" /><Teamcard /></>} />
            <Route path="/Statistics" element={<><Header title="Statistics" /><Statistics /></>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
