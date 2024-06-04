import React, { useState} from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import './App.css';


const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleSearch = (term) => {
      setSearchTerm(term);
    };

    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
    };
  
    return (
      <div className="container">
        <Header onSearch={handleSearch} />
       
        <Nav onCategorySelect={handleCategorySelect} />
       
        <Main searchTerm={searchTerm} selectedCategory={selectedCategory} className="main-content" />
        <Footer />
      </div>
    );
  };
  
  export default App;