import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3" id={props.product._id}>
      <div className="card border-primary card-back-style shadow">
        <img
          className="card-img-top card-img-dimensions"
          src={props.product.image}
          alt=""
        />
        <div className="card-body d-grid gap-2 card-body-custom">
          <h5>{props.product.name}</h5>
          <p className="card-text">
            {props.product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <Link
            className="btn btn-primary card-button-color"
            id={props.product._id}
            key={props.product._id}
            to={`/product/${props.product._id}`}
          >
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
}
