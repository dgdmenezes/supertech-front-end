import React from "react";
import logo from "../../images/logo.webp";

export default function HeaderLogo() {
  return (
    <div class="col">
      <img
        src={logo}
        alt="Logotipo de fundo azul com letras laranjas escrito: SuperTech"
        class="img-fluid fora-img"
      />
    </div>
  );
}
