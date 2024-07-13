import React, { useState } from 'react';
import './index.css'; // Importa o arquivo CSS para estilização

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="hamburger" onClick={toggleDrawer}>
          &#9776;
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#blog">BLOG</a></li>
          <li><a href="#inscricao">INSCRIÇÃO</a></li>
          <li><a href="#cursos-online">CURSOS ONLINE</a></li>
          <li><a href="#login">LOGIN</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
