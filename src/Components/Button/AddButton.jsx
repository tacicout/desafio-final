import React from 'react';
import './AddButton.css';

const AddButton = ({ onAdd, added }) => {
  return (
    <button
      onClick={onAdd}
      className={`add-button ${added ? 'added' : ''}`}
      disabled={added}
    >
      {added ? 'Adicionado' : 'Adicionar ao Carrinho'}
    </button>
  );
};

export default AddButton;
