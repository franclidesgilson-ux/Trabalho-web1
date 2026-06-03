import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="main-header">
      <div className="header-brand">
        <h2>Instituicao Academica</h2>
      </div>
      <div className="header-user">
        {user && (
          <>
            <span>{user.nome}</span>
            <span className="eid-badge">EID: {user.eid}</span>
            <button className="btn-logout" onClick={handleLogout}>
              Sair
            </button>
          </>
        )}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}

export default Header;