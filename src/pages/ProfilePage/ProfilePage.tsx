import { Link, useNavigate } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useAuth } from "../../contexts/auth";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut()
    navigate("/login");
  }
  
  const formattedUser = {
    email: user?.email ?? "",
    name: user?.name ?? "",
    address: {
      city: user?.city ?? "",
      country: user?.country ?? "",
      houseNumber: user?.houseNumber ?? "",
      neighborhood: user?.neighborhood ?? "",
      postalCode: user?.zipCode ?? "",
      street: user?.street ?? "",
    },
  };

  return (
    <main className="profile-page-container">
      <div className="title-container">
        <h2>Perfil</h2>
      </div>
      <div className="content-container">
        <ProfileCard user={formattedUser} key={user?.id ?? ""} />
        <div className="options-container">
          <Link className="options-btn" to="/orders">Histórico de Pedidos</Link>
          <a className="options-btn" onClick={handleSignOut}>Sair</a>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
function signOut() {
  throw new Error("Function not implemented.");
}

