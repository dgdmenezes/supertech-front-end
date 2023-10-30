import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importação de páginas
import AddressForm from "./components/pages/AddressForm";
import CategoryPage from "./components/pages/CategoryPage";
import ChartPage from "./components/pages/ChartPage";
import Checkout from "./components/pages/Checkout";
import CustomerPage from "./components/pages/CustomerPage";
import Login from "./components/pages/Login";
import ProductPage from "./components/pages/ProductPage";
import RegisterForm from "./components/pages/RegisterForm";
import Home from "./components/pages/Home";
import Err404 from "./components/pages/Err404";
import BreadCrumbsI from "./components/organisms/BreadCrumbsI";

// importação de estilo
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "remixicon/fonts/remixicon.css";
import "./styles/cadastro.css";
import "./styles/login.css";
import "./styles/pagina_produto.css";
import "./styles/style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/register/address" element={<AddressForm />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/test" element={<BreadCrumbsI />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </BrowserRouter>
  );
}
