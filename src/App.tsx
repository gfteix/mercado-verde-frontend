import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CartPage from "./pages/CartPage/CartPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import PublicLayout from "./layouts/public-layouts";
import ApplicationLayout from "./layouts/application-layouts";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import { AuthProvider, useAuth } from "./contexts/auth";
import { CartProvider } from "./contexts/cart";
import OrdersPage from "./pages/OrdersPage/OrdersPage";

interface PrivateRouteProps {
  element: React.ReactElement;
}

function App() {
  const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const { signed } = useAuth();

    console.log("signed: " + signed);

    return signed ? element : <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route index path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
            {/* Private Routes */}
            <Route path="/" element={<ApplicationLayout />}>
              <Route
                index
                element={<PrivateRoute element={<ProductsPage />} />}
              />
              <Route
                path="search"
                index
                element={<PrivateRoute element={<SearchPage />} />}
              />
              <Route
                path="cart"
                index
                element={<PrivateRoute element={<CartPage />} />}
              />
              <Route
                path="orders"
                index
                element={<PrivateRoute element={<OrdersPage />} />}
              />
              <Route
                path="profile"
                index
                element={<PrivateRoute element={<ProfilePage />} />}
              />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
