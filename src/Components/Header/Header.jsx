import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/I.Commerce1.png';
import './Header.css'; // Importa o arquivo CSS

const Header = ({ onSearch, cartItemCount }) => {
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
      <div className='header-container'>

        <div className="header-left">
          <img src={logo} alt="Logo" className="header-logo" />
        </div>

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

        <div className="header-cart">
          <FontAwesomeIcon icon={faCartShopping} className="header-cart-icon" />
          <div className="header-container-icone">
          <span className="cart-count">{cartItemCount}</span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;

