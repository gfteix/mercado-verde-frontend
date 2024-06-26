import React from "react";
import "./Header.css";
import ProfileButton from "./ProfileButton/ProfileButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

const Header: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <header className="header">
      <div className="left-section">
        <div onClick={handleClick} className="home">
          Home
        </div>
      </div>
      <div className="right-section">
        <ProfileButton user={{ name: user?.name ?? "" }}></ProfileButton>
      </div>
    </header>
  );
};

export default Header;
