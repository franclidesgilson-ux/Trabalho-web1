import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="main-footer">
      <p>2026 Instituicao Academica | <Link to="/contato">Centro de Suporte</Link></p>
    </footer>
  );
}

export default Footer;