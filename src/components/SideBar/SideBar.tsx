// src/components/Sidebar.tsx
import React, { useState } from "react";
import "./SideBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/search.svg";
import PersonIcon from "../../assets/person.svg";
import Logo from "../../assets/logo.svg";
import CartIcon from "../../assets/cart.svg";
import HomeIcon from "../../assets/home.svg";
import { useAuth } from "../../contexts/auth";

const Sidebar: React.FC = () => {
  const { signOut } = useAuth()
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSignOut = () => {
    signOut()
    navigate("/login");
  }

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="logo">
          <img src={Logo}></img>
        </div>
      <div className="button-container" onClick={toggleSidebar}>
        <div className="m-icon">M</div>
        <span className="text">{isSidebarOpen && "Mercado Verde"}</span>
      </div>

      <ul>
        <li className={location.pathname == "/" ? "active" : ""}>
          <Link to="/">
            <img src={HomeIcon}></img>
            <span className="text">{isSidebarOpen && "Home"}</span>
          </Link>
        </li>
        <li className={location.pathname == "/search" ? "active" : ""}>
          <Link to="/search">
            <img src={SearchIcon}></img>
            <span className="text">{isSidebarOpen && "Pesquisa"}</span>
          </Link>
        </li>
        <li className={location.pathname == "/cart" ? "active" : ""}>
          <Link to="/cart">
            <img src={CartIcon}></img>
            <span className="text">{isSidebarOpen && "Carrinho"}</span>
          </Link>
        </li>
        <li className={location.pathname == "/profile" ? "active" : ""}>
          <Link to="/profile">
            <img src={PersonIcon}></img>
            <span className="text">{isSidebarOpen && "Perfil"}</span>
          </Link>
        </li>
        <li className="exit" onClick={handleSignOut}>
          Sair
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
