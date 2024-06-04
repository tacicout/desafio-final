import React from 'react';
import './ProductCard.css'; // Importa o arquivo CSS para os estilos dos cards
import ViewButton from '../Button/ViewButton';

const ProductCard = ({ product, onViewClick }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <p>{product.category}</p>
        <h2>{product.title}</h2>
        <div className="price-container">
          <p className="price">${product.price}</p>
        </div>
      </div>
      <div className="view-button-container">
        <ViewButton onClick={() => onViewClick(product)} />
      </div>
    </div>
  );
};

export default ProductCard;
