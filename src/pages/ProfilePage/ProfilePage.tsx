import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useAuth } from "../../contexts/auth";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { user } = useAuth();

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
      </div>
    </main>
  );
};

export default ProfilePage;
