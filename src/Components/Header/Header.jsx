import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/I.Commerce1.png';
import './Header.css'; // Importa o arquivo CSS

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value === '') {
      onSearch('');
    }
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <img src={logo} alt="Logo" className="header-logo" />
        </div>
        <div className="header-center">
          <div className="header-search">
            <input
              type="text"
              placeholder="Buscar produtos"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="header-search-icon"
              onClick={handleSearch}
            />
          </div>
        </div>
        <div className="header-right">
          <FontAwesomeIcon icon={faCartShopping} className="header-cart-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
