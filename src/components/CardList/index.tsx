import React, { useState } from 'react';
import './index.css';

const CardList = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const toggleCard = (index: any) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  const cards = [
    {
      question: "Aprender Maquiagem Online é possível?",
      answer: "Com certeza! Utilize uma didática ainda mais aprimorada e detalhada para que você consiga compreender todos os passos necessários. Todos os vídeos foram produzidos em alta definição com o uso de enquadramentos detalhados do passo a passo das demonstrações. Além disso, o curso online possui a vantagem de permitir que você assista às aulas no seu próprio ritmo, onde e quando quiser. As avaliações práticas também irão validar o seu desempenho e minha equipe estará pronta para te auxiliar e tirar qualquer dúvida."
    },
    {
      question: "Quando o meu Material Didático será enviado?",
      answer: "Seu material didático será enviado em até 3 dias úteis após a confirmação do pagamento."
    },
    // Adicione mais cartões conforme necessário
  ];

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <div key={index} className={`card ${openCardIndex === index ? 'open' : ''}`} onClick={() => toggleCard(index)}>
          <div className="card-question">{card.question}</div>
          {openCardIndex === index && <div className="card-answer">{card.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default CardList;
