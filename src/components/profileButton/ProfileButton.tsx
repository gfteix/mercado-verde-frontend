import React from 'react';
import './ProfileButton.css';

import { VscAccount, VscChevronRight } from "react-icons/vsc";

interface ProfileButtonProps {
  user: {
    name: string;
  }
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ user }) => {
  return (
    <div className="profile-button">
        <div className="icon">
            <VscAccount size={25}/>
        </div>
        <div className="name-div">
            <p>{user.name}</p>
        </div>
        <div className="right-arrow">
            <VscChevronRight size={25} />
        </div>
    </div>
  );
};

export default ProfileButton;
