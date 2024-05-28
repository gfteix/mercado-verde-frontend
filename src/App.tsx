import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import CartPage from './pages/CartPage/CartPage'
import SearchPage from './pages/SearchPage/SearchPage'
import PublicLayout from './layouts/public-layouts'
import ApplicationLayout from './layouts/application-layouts'
import ProfilePage from './pages/ProfilePage/ProfilePage'

interface PrivateRouteProps {
  element: React.ReactElement;
}

const isAuthenticated = () => { return true }

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" replace />;
};

function App() {
  return (
   <BrowserRouter >
      <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      {/* Private Routes */}
      <Route element={<ApplicationLayout />}>
        <Route path="/products" index element={<PrivateRoute element={<ProductsPage />} />} />
        <Route path="/search" index element={<PrivateRoute element={<SearchPage />} />} />
        <Route path="/cart" index element={<PrivateRoute element={<CartPage />} />} />
        <Route path="/profile" index element={<PrivateRoute element={<ProfilePage />} />} />
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
