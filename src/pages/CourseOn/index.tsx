import React from 'react';
import './index.css';
// import courseImage from '../../assets/course-image.jpg'; // Importe a imagem do curso

const CursosOnline = () => {
  return (
    <div className="courses-container">
      <h1>OS CURSOS</h1>
      <p>Quero te apresentar um novo mundo na maquiagem. Escolha o seu curso e descubra.</p>
      <div className="course-card">
        {/* <img src={courseImage} alt="Curso" className="course-image" /> */}
        <h1>IMAGEM AQUI FOTMA MAKE FODA</h1>
        <div className="course-info">
          <h2>APRIMORAMENTO INTENSIVO</h2>
          <p>Fundamentos da Beleza e Maquiagem Avançada.</p>
          <span>DURAÇÃO 14H00</span>
        </div>
      </div>
    </div>
  );
};

export default CursosOnline;
