import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import VendorDashboard from './pages/VendorDashboard';
import UserHome from './pages/UserHome';
import './App.css';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          <Route path="/admin" element={
            user?.role === 'ADMIN' ? <AdminDashboard /> : <Navigate to="/login" />
          } />

          <Route path="/vendor" element={
            user?.role === 'VENDOR' ? <VendorDashboard user={user} /> : <Navigate to="/login" />
          } />

          <Route path="/" element={<UserHome user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
