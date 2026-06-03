import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="main-nav">
      <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
        Dashboard
      </NavLink>
      <NavLink to="/matricula" className={({ isActive }) => isActive ? 'active' : ''}>
        Matricula
      </NavLink>
      <NavLink to="/notas" className={({ isActive }) => isActive ? 'active' : ''}>
        Notas
      </NavLink>
      <NavLink to="/contato" className={({ isActive }) => isActive ? 'active' : ''}>
        Suporte
      </NavLink>
    </nav>
  );
}

export default NavBar;