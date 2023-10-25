import React from "react";
import { Link } from "react-router-dom";
import imageCard from "../../images/prodimages/product123.jpg";

export default function Card() {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3" id="125">
      <div className="card border-primary card-back-style shadow">
        <img
          className="card-img-top card-img-dimensions"
          src={imageCard}
          alt="Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"
        />
        <div className="card-body d-grid gap-2 card-body-custom">
          <h5 className="card-title">Monitor Dell 450083</h5>
          <p className="card-text">R$&nbsp;1.500,00</p>
          <Link className="btn btn-primary card-button-color" id="prod125">
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
}
