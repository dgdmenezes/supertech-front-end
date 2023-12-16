import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

//importação de páginas
import AddressForm from "./components/pages/AddressForm";
import CategoryPage from "./components/pages/CategoryPage";
import Checkout from "./components/pages/Checkout";
import CustomerPage from "./components/pages/CustomerPage";
import ProductPage from "./components/pages/ProductPage";
import RegisterForm from "./components/pages/RegisterForm";
import Home from "./components/pages/Home";
import Err404 from "./components/pages/Err404";
import AdminRegisterProduct from "./components/pages/AdminRegisterProduct";
import Logout from "./components/pages/Logout";
import LoginForm from "./components/pages/LoginForm";
import Logged from "./components/pages/Logged";
import SearchPage from "./components/pages/SearchPage";
import CartPage from "./components/pages/CartPage";
import PaymentSuccess from "./components/pages/PaymentSuccess";
import PaymentError from "./components/pages/PaymentError";

import { GlobalContex } from "./contexts/GlobalContext";

// importação de estilo
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "remixicon/fonts/remixicon.css";
import "./styles/cadastro.css";
import "./styles/login.css";
import "./styles/pagina_produto.css";
import "./styles/style.css";
import { isLogged } from "./helpers/Auth";

const ProtectedRoute = () => {
  if (!isLogged()) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default function App() {
  const [currentUser, setCurrentUser] = React.useState("");
  const [cart, setCart] = React.useState([]);
  const [cartTotalPrice, setCartTotalPrice] = React.useState(0);
  const [cartTotalItens, setCartTotalItens] = React.useState(0);
  const [paymentID, setPaymentID] = React.useState("");

  const contextValues = {
    currentUser,
    setCurrentUser,
    cart,
    setCart,
    cartTotalPrice,
    setCartTotalPrice,
    cartTotalItens,
    setCartTotalItens,
    paymentID,
    setPaymentID,
  };

  return (
    <GlobalContex.Provider value={contextValues}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/search/:searchTag" element={<SearchPage />} />
          <Route path="/register" element={<RegisterForm />} />

          <Route path="/cart/checkout/success" element={<PaymentSuccess />} />
          <Route path="/cart/checkout/error" element={<PaymentError />} />

          <Route path="/cart" element={<CartPage />} />
          <Route element={<Checkout />} path="/cart/checkout" />

          <Route
            path="/login"
            element={
              <LoginForm
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminRegisterProduct />} />
            <Route element={<Checkout />} path="/cart/checkout" />
            <Route
              path="/register/address"
              element={
                <AddressForm
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />

            <Route
              path="/customer"
              element={
                <CustomerPage
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route element={<Logout />} path="/logout" />
            <Route
              element={
                <Logged
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
              path="/logged"
            />
          </Route>
          <Route path="*" element={<Err404 />} />
        </Routes>
      </BrowserRouter>
    </GlobalContex.Provider>
  );
}
