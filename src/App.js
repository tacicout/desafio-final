// src/App.js
import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container">
      <Header onSearch={handleSearch} cartItemCount={cart.length} />
      <Nav onCategorySelect={handleCategorySelect} />
      <Main
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
        onOpenModal={handleOpenModal}
        onCloseModal={handleCloseModal}
        selectedProduct={selectedProduct}
      />
      <Footer />
    </div>
  );
};

export default App;

