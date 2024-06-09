import React, { useState, useEffect } from 'react';
import fetchData from './FetchData';
import ProductCard from './ProductCard';
import ProductModal from '../Modal/ProductModal';


const Main = ({ searchTerm, selectedCategory, onAddToCart, onOpenModal, onCloseModal, selectedProduct }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      try {
        const data = await fetchData();
        setItems(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    loadItems();
  }, []);

  const handleViewClick = (product) => {
    onOpenModal(product);
  };

  // Filtro de pesquisa
  const filteredItems = searchTerm
    ? items.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : items; // Se searchTerm estiver vazio, renderiza todos os itens

  // Filtro de categoria
  const categoryFilteredItems = selectedCategory
    ? filteredItems.filter(item =>
        item.category.toLowerCase() === selectedCategory.toLowerCase())
    : filteredItems; // Se selectedCategory estiver vazio, não aplica filtro de categoria

  return (
    <main className="main-container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="product-list">
        {categoryFilteredItems.map(item => (
          <ProductCard key={item.id} product={item} onViewClick={handleViewClick} />
        ))}
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={onCloseModal}
          onAddToCart={onAddToCart} // Passando a função de adicionar ao carrinho
        />
      )}
    </main>
  );
};

export default Main;
