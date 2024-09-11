import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Find from './Find.js';
import Report from './Report.js';
import VerifyPage from './VerifyPage.js';
import IdInfoPage from './IdInfoPage.js';
import flagIcon from './icons/flag.png';
import searchIcon from './icons/search.png';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink 
              exact 
              to="/" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Home
            </NavLink>
            <NavLink 
              to="/find" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Find
            </NavLink>
            <NavLink 
              to="/report" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Report
            </NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find" element={<Find />} />
          <Route path="/report" element={<Report />} />
          <Route path="/verify/:id" element={<VerifyPage />} />
          <Route path="/id-info/:idNumber" element={<IdInfoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="content">
      <div className="option">
        <div className="icon">
          <img src={searchIcon} alt="Search Icon" className="icon-image" />
        </div>
        <button className="nav-button" onClick={() => window.location.href='/find'}>Find Your ID</button>
      </div>

      <div className="option">
        <div className="icon">
          <img src={flagIcon} alt="Flag Icon" className="icon-image" />
        </div>
        <button className="nav-button" onClick={() => window.location.href='/report'}>Report A Lost ID</button>
      </div>
    </div>
  );
}

export default App;
