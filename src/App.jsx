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
import ChartPage from "./components/pages/ChartPage";
import Checkout from "./components/pages/Checkout";
import CustomerPage from "./components/pages/CustomerPage";
import ProductPage from "./components/pages/ProductPage";
import RegisterForm from "./components/pages/RegisterForm";
import Home from "./components/pages/Home";
import Err404 from "./components/pages/Err404";
import AdminRegisterProduct from "./components/pages/AdminRegisterProduct";
import Footer from "./components/organisms/Footer";
import LoginForm from "./components/pages/LoginForm";
import HomeLogged from "./components/pages/HomeLogged";

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/register/address" element={<AddressForm />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/test" element={<Footer />} />
        <Route path="/admin" element={<AdminRegisterProduct />} />
        <Route path="/login" element={<LoginForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/logged" element={<HomeLogged />} />
        </Route>
        <Route path="*" element={<Err404 />} />
      </Routes>
    </BrowserRouter>
  );
}
