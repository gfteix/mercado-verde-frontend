import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg'
import ProfileButton from '../profileButton/ProfileButton';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">
          <img src={Logo}></img>
        </div>
      
        <div className="home">Home</div>
      </div>
      <div className="right-section">
        <ProfileButton user={{name: 'Fulano'}}></ProfileButton>
      </div>
    </header>
  );
};

export default Header;
