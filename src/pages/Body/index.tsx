import React from 'react';
import makeImage from '../../assets/make.jpg'; 
import whatsappIcon from '../../assets/whatsapp.png'; 
import CardList from '../../components/CardList';
import './Body.css'; // Ensure you import the CSS file

const Body = () => {
  return (
    <main className="body">
      <h1>Bem-vindo ao site de cursos de maquiagem</h1>
      <p>Natali Domingues</p>
      <p>Cursos que vão transformar a sua visão</p>
      <img src={makeImage} alt="Maquiagem" className="responsive-image" />
      {/* Conteúdo principal do site */}
      <div className="image-container">
        <CardList />
      </div>
      <a href="https://wa.me/554299103234?text=Ola,%20gostaria%20de%20marcar%20um%20horario%20para%20maquiagem." target="_blank" rel="noopener noreferrer" className="whatsapp-link">
        <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
      </a>
    </main>
  );
};

export default Body;
