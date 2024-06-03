import React from "react";
import "./ProfileButton.css";

import { VscAccount, VscChevronRight } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

interface ProfileButtonProps {
  user: {
    name: string;
  };
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ user }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/profile");
  }

  return (
    <div onClick={handleClick} className="profile-button">
      <div className="icon">
        <VscAccount size={25} />
      </div>
      <div className="name-container">
        <p>{user.name}</p>
      </div>
      <div className="right-arrow">
        <VscChevronRight size={25} />
      </div>
    </div>
  );
};

export default ProfileButton;
