// src/components/Button/ViewButton.jsx
import React from 'react';
import './ViewButton.css';

const ViewButton = ({ onClick }) => {
  return (
    <button className="view-button" onClick={onClick}>
      Ver Item
    </button>
  );
};

export default ViewButton;
