import React from "react";
import logo from "../../images/supertechLogo3.webp";
import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <div className="col">
      <Link to="/">
        <img
          src={logo}
          alt="Logotipo de fundo azul com letras laranjas escrito: SuperTech"
          className="img-fluid fora-img"
        />
      </Link>
    </div>
  );
}
