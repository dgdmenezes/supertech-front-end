import React from "react";
import shoppingCartLineWhite from "../../images/shopping-cart-line-white.svg";
import CartModal from "../organisms/CartModal";
import { GlobalContex } from "../../contexts/GlobalContext";

export default function HeaderCartIcon() {
  const [show, setShow] = React.useState(false);
  const { cart, cartTotalItens, setCartTotalPrice } =
    React.useContext(GlobalContex);

  const totalPrice = () => {
    let total = 0;
    cart.map((item) => {
      total += item.productQt * item.productPrice;
      return setCartTotalPrice(total);
    });
  };

  totalPrice();
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
          {cartTotalItens}
        </p>
      </div>
    </div>
  );
}
