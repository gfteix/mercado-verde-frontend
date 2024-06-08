import React from "react";
import "./ProfileCard.css";

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
    };
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <div className="profile-card">
      <div className="name-container">
        <h3>{user.name}</h3>
      </div>
      <div className="data-container">
        <h4>Dados Pessoais</h4>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
      <div className="data-container">
        <h4>Endereço para entrega</h4>
        <p>
          {user.address.street}, {user.address.houseNumber}
        </p>
        <p>
          {user.address.city}, {user.address.country}
        </p>
      </div>
      <div className="data-container">
        <h4>Dados de pagamento</h4>
        <p>Cartão de Crédito</p>
        <p>**** **** **** 4444</p>
      </div>
    </div>
  );
};

export default ProfileCard;
