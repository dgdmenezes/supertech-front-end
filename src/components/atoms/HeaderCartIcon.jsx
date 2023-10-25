import React from "react";
import { Link } from "react-router-dom";
import shoppingCartLineWhite from "../../images/shopping-cart-line-white.svg";
export default function HeaderCartIcon() {
  return (
    <div>
      <Link to="#" className="d-block">
        <img
          src={shoppingCartLineWhite}
          alt="mdo"
          width="32"
          height="32"
          className=""
          data-bs-toggle="modal"
          data-bs-target="#modalExibirCarrinho"
        />
      </Link>
      <div id="contadorCarrinhoDiv">
        <p id="contadorCarrinho" className="">
          00
        </p>
      </div>
    </div>
  );
}
