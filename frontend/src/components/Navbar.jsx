// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Library">Biblioteca</Link>
        </li>
        <li>
          <Link to="/Search">Búsquedas</Link>
        </li>
        <li>
          <Link to="/Profile">Perfil</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
