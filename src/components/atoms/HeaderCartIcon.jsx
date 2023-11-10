import React from "react";
import shoppingCartLineWhite from "../../images/shopping-cart-line-white.svg";
import CartModal from "../organisms/CartModal";

export default function HeaderCartIcon() {
  const [show, setShow] = React.useState(false);
  return (
    <div className="">
      <CartModal show={show} setShow={setShow} />
      <img
        src={shoppingCartLineWhite}
        alt="mdo"
        width="32"
        height="32"
        className=""
        onClick={() => setShow(true)}
      />

      <div id="contadorCarrinhoDiv">
        <p id="contadorCarrinho" className="">
          00
        </p>
      </div>
    </div>
  );
}
