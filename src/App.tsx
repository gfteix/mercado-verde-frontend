import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import CartPage from './pages/CartPage/CartPage'
import SearchPage from './pages/SearchPage/SearchPage'
import PublicLayout from './layouts/public-layouts'
import ApplicationLayout from './layouts/application-layouts'
import ProfilePage from './pages/ProfilePage/ProfilePage'

import { AuthProvider, useAuth } from "./contexts/auth";


/*
interface PrivateRouteProps {
  element: React.ReactElement;
}


const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" replace />;
};*/


const AppRoutes: React.FC = () => {
  const { signed } = useAuth();
  console.log(signed)
  return signed ? 
    <Routes>
      <Route path="/" element={<ApplicationLayout />}>
        <Route path="products" index element={<ProductsPage />} />
        <Route path="search" index element={<SearchPage />} />
        <Route path="cart" index element={<CartPage />} />
        <Route path="profile" index element={<ProfilePage />} />
      </Route>
    </Routes>
    : 
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
};

function App() {
  return (
   <BrowserRouter >
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
   </BrowserRouter>
  )
}

export default App
