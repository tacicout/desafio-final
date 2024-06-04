// src/components/main/ProductModal.jsx
import React from 'react';
import './ProductModal.css'; // Crie este arquivo para estilizar o modal


const ProductModal = ({ product, onClose }) => {
  return (
    <div className="product-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <button className="buy-button">Comprar</button>
      </div>
    </div>
  );
};

export default ProductModal;
