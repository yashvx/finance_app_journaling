// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Expense from './pages/Expense';
import Signup from './pages/Signup';  // Import Signup page

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link> {/* Link to Signup page */}
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/expense">Expense</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Add route for Signup */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </Router>
  );
}

export default App;
