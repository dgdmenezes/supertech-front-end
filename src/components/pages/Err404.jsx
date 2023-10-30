import React from "react";
import image from "../../images/404.webp";

export default function Err404() {
  return (
    <div className="bg-light">
      <h1>Erro 404 - Deu Ruim Pae</h1>
      <img src={image} alt="" />
    </div>
  );
}
