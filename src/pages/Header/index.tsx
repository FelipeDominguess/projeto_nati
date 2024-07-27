import React, { useState } from 'react';
import './index.css'; // Importa o arquivo CSS para estilização
import icone from '../../assets/icone.png';
import iconX from '../../assets/icon-x-.png';
import iconLogin from '../../assets/icons-entrar.png'; // Caminho relativo para a imagem do ícone de fechar
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <div className="hamburger" onClick={toggleDrawer}>
            {isOpen ? <img src={iconX} alt="Close" className="hamburger-icon" /> : <span>&#9776;</span>}
          </div>
        </div>
        <div className="navbar-center">
          <img src={icone} alt="Ícone" className="icone" />
        </div>
        <div className="navbar-right">
          <Link to="/login" onClick={closeDrawer}>
            <img src={iconLogin} alt="Login" className="login-icon" />
          </Link>
        </div>
      </nav>
      <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li className="close-icon">
            <img src={iconX} alt="Close" onClick={toggleDrawer} />
          </li>
          <li>
            <Link to="/blog" onClick={closeDrawer}>BLOG</Link>
          </li>
          <li>
            <div className="divider"></div> {/* Custom divider element */}
          </li>
          <li>
            <Link to="/inscricao" onClick={closeDrawer}>INSCRIÇÃO</Link>
          </li>
          <li>
            <div className="divider"></div> {/* Custom divider element */}
          </li>
          <li>
            <Link to="/cursos-online" onClick={closeDrawer}>CURSOS ONLINE</Link>
          </li>
          <li>
            <div className="divider"></div> {/* Custom divider element */}
          </li>
          <li>
            <Link to="/duvidas" onClick={closeDrawer}>DÚVIDAS</Link>
          </li>
          <li>
            <hr className="divider" /> {/* Optional: Add a class for further styling */}
          </li>
          <li>
            <Link to="/login" onClick={closeDrawer}>LOGIN</Link>
          </li>
        </ul>
        <Footer />
      </div>
    </header>
  );
};

export default Header;
