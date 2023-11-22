import React from "react";
import image from "../../images/404.webp";
import VerifyValidToken from "../atoms/VerifyValidToken";

export default function Err404() {
  return (
    <div className="bg-light">
      <VerifyValidToken />
      <h1>Erro 404 - Deu Ruim Pae</h1>
      <img src={image} alt="" />
    </div>
  );
}
