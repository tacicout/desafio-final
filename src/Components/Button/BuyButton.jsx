import React from 'react';
import './BuyButton.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const BuyButton = ({ onClick }) => {
  return (
    <button className="buy-button" onClick={onClick}>
        <FontAwesomeIcon icon={faShoppingBag} className="icon" />
      Comprar
    </button>
  );
};

export default BuyButton;
