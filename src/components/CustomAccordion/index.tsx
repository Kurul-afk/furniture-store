import React, { useState } from 'react';
import './style.css'; // Подключите свой файл CSS с необходимыми стилями

interface CustomAccordionI {
    title: string,
    content: string,
}

function CustomAccordion({ title, content }: CustomAccordionI) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`icon ${isOpen ? 'open' : ''}`}>{isOpen ? '▼' : '▲'}</span>
      </div>
      <div className="accordion-content-wrapper" style={{ maxHeight: isOpen ? '1000px' : '0' }}>
        <div className="accordion-content">{content}</div>
      </div>
    </div>
  );
}

export default CustomAccordion;
