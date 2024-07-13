import React from 'react';
import makeImage from '../../assets/make.jpg'; 
import whatsappIcon from '../../assets/whatsapp.png'; 
const Body: React.FC = () => {
  return (
    <main className="body">
      <h1>Bem-vindo ao site de cursos de maquiagem</h1>
      <p>Natali Domingues</p>
      <p>Cursos que vão transformar a sua visão </p>
      <img src={makeImage} alt="Maquiagem" className="responsive-image" />
      {/* Conteúdo principal do site */}
      <div className="image-container">
        <a href="https://wa.me/554299103234" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" style={{ width: 32, height: 32 }} />
        </a>
      </div>
    </main>
  );
};

export default Body;
