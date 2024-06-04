import React from 'react'; // Importe apenas o React como um namespace
import './Nav.css';
import NavButton from '../Button/NavButton';  // Certifique-se de que o caminho está correto

const Nav = ({ onCategorySelect }) => {
  return (
    <nav>
      <div className="nav-container">
        <NavButton
          label="Roupa Masculina"
          onClick={() => onCategorySelect("men's clothing")}
        />
        <NavButton
          label="Roupa Feminina"
          onClick={() => onCategorySelect("women's clothing")}
        />
        <NavButton
          label="Jóias"
          onClick={() => onCategorySelect('jewelery')}
        />
        <NavButton
          label="Eletrônicos"
          onClick={() => onCategorySelect('electronics')}
        />
      </div>
    </nav>
  );
};

export default Nav;