// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imagenes/logoESCOM2x.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" style={{ height: '80px', marginRight: '90px' }} />
        <h2> Trabajos de titulación</h2> {/* Puedes añadir un nombre o título */}
      </div>
      <ul>
        <li>
          <Link to="/" style={{ color: 'beige' }}>Inicio</Link>
        </li>
        <li>
          <Link to="/Library" style={{ color: 'beige' }}>Biblioteca</Link>
        </li>
        <li>
          <Link to="/Search" style={{ color: 'beige' }}>Búsquedas</Link>
        </li>
        <li>
          <Link to="/Profile" style={{ color: 'beige' }}>Perfil</Link>
        </li>
        <li>
          <Link to="/Login" style={{ color: 'beige' }}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
