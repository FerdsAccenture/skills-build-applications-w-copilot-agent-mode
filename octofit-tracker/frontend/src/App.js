import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './octofitapp-small.svg';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Octofit Tracker Logo" className="App-logo" />
          <h1>Octofit Tracker</h1>
          <nav className="nav-menu">
            <Link className="nav-link-custom" to="/">Home</Link>
            <Link className="nav-link-custom" to="/activities">Activities</Link>
            <Link className="nav-link-custom" to="/teams">Teams</Link>
            <Link className="nav-link-custom" to="/leaderboard">Leaderboard</Link>
            <Link className="nav-link-custom" to="/workouts">Workouts</Link>
            <Link className="nav-link-custom" to="/users">Users</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<Activities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
