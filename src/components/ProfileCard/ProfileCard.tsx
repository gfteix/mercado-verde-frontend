import React from 'react';
import { VscEdit } from "react-icons/vsc";

interface ProfileCardProps {
  user: {
    name: string;
    email: string;
    address: {
        street: string;
        houseNumber: string;
        neighborhood: string;
        city: string;
        country: string;
        postalCode: string;
    },
    paymentMethod: {
        type: string;
        number: string;
    }
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <div className="profile-card">
      <div className="name-container">
        <h3>{user.name}</h3>
        <VscEdit/>
     </div>
     <div className="personal-data">
        <p>{user.name}</p>
        <p>{user.email}</p>
     </div>
     <div className="address-data">
        <p>{user.address.street}, {user.address.houseNumber}</p>
        <p>{user.address.city}, {user.address.country}</p>
     </div>
     <div className="payment-method">
      <p>{user.paymentMethod.type}</p>
      <p>{user.paymentMethod.number}</p>
     </div>
    </div>
  );
};

export default ProfileCard;
