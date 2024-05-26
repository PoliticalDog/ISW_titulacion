// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Library from './pages/Library';
import Search from './pages/Search';
import UserProfile from './pages/UserProfile';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Profile" element={<UserProfile />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
