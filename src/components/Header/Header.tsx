import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg'
import ProfileButton from './ProfileButton/ProfileButton';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/products');
  }
  
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">
          <img src={Logo}></img>
        </div>
      
        <div onClick={handleClick} className="home">Home</div>
      </div>
      <div className="right-section">
        <ProfileButton user={{name: 'Fulano'}}></ProfileButton>
      </div>
    </header>
  );
};

export default Header;
