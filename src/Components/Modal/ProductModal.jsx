import React, { useState } from 'react';
import './ProductModal.css';
import AddButton from '../Button/AddButton';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setAdded(true);
  };

  return (
    <div className="product-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <AddButton onAdd={handleAddToCart} added={added} />
      </div>
    </div>
  );
};

export default ProductModal;
