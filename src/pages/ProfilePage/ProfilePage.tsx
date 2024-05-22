import BlankContainer from "../../components/BlankContainer/BlankContainer";
import Header from "../../components/Header/Header";
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import './ProfilePage.css'

const user = {
  id: 'some id',
  name: 'Fulano',
  email: 'fulano@email.com',
  address: {
      street: 'Rua A',
      houseNumber: '1',
      city: 'Campinas',
      stateCode: 'SP',
      country: 'Brasil',
      postalCode: '1234567-1',
      neighborhood: 'Centro'
  },
  paymentMethod: {
      type: 'Cartão de Crédito',
      number: '**** **** **** 4444'
  }
}
const ProfilePage = () => {
  return (
    <>
      <Header></Header>
      <BlankContainer>
        <main className="profile-page-container">
          <div className="title-container">
            <h2>Perfil</h2>
          </div>
          <div className="content-container">
            <ProfileCard user={user} key={user.id}/>
          </div>
        </main>

      </BlankContainer>
     
    </>
  );
};

export default ProfilePage;
