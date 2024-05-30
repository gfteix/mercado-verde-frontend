// src/components/Sidebar.tsx
import React, { useState } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import SearchIcon from '../../assets/search.svg'
import PersonIcon from '../../assets/person.svg'
import CartIcon from '../../assets/cart.svg'
import HomeIcon from '../../assets/home.svg'

const Sidebar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="button-container">
        <button className="open-btn" onClick={toggleSidebar}>
          M
        </button>
        { isSidebarOpen ? 'Mercado Verde' : ''}
      </div> 

      <ul>
        <li>
          <Link to="/">
            <img src={HomeIcon}></img>
            <span className="text">{isSidebarOpen && 'Home'}</span> 
          </Link>
        </li>
        <li>
          <Link to="/search">
            <img src={SearchIcon}></img>
            <span className="text">{isSidebarOpen && 'Pesquisa'}</span> 
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img src={CartIcon}></img>
            <span className="text">{isSidebarOpen && 'Carrinho'}</span> 
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <img src={PersonIcon}></img>
            <span className="text">{isSidebarOpen && 'Perfil'}</span> 
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
