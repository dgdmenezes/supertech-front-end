/* eslint-disable no-unused-vars */

import React from "react";
import Default from "../templates/Default";
import CartPageItem from "../molecules/CartPageItem";
import { GlobalContex } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function CartPage() {
  const { cart, cartTotalPrice, currentUser, setPaymentID } =
    React.useContext(GlobalContex);
  const [updateCart, setUpdateCart] = React.useState(0);

  const URLConnection = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const cartData = {
    userId: currentUser._id,
    products: cart,
    subTotalPrice: cartTotalPrice + 30,
    shippingPrice: 30,
    totalPrice: cartTotalPrice,
  };
  const forceRender = () => {
    setUpdateCart((prevState) => prevState + 1);
  };

  const incrementCartItem = (id) => {
    const found = cart.find((item) => item.productID === id);
    let quantidade = found.productQt;
    quantidade += 1;
    found.productQt = quantidade;
    forceRender();
  };

  const decrementCartItem = (id) => {
    const found = cart.find((item) => item.productID === id);
    let quantidade = found.productQt;
    quantidade -= 1;
    if (quantidade === 0) {
      const index = cart.findIndex((element) => element === found);
      cart.splice(index, 1);
    } else {
      found.productQt = quantidade;
    }

    forceRender();
  };

  const finalizePurchase = () => {
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify(cartData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    fetch(`${URLConnection}/purchase/`, fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        setPaymentID(data.purchase._id);
        navigate("/cart/checkout");
      })
      .catch((e) => console.log("erro", e));
  };
  return (
    <Default>
      <div>
        <h3>Meu carrinho</h3>
        {cart.map((item) => {
          return (
            <CartPageItem
              item={item}
              key={item.productId}
              incrementCartItem={incrementCartItem}
              decrementCartItem={decrementCartItem}
            />
          );
        })}
      </div>
      <hr />
      <div className="d-flex justify-content-end">
        <h5>
          Subtotal:{" "}
          {cartTotalPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h5>
      </div>

      <div className="d-flex justify-content-end">
        <div className="row">
          <div>
            <label htmlFor="frete">
              <h5>Calcular Frete: </h5>
            </label>
            <input type="text" id="frete" />
            <Button> OK</Button>
          </div>
          <div className="row">
            <div className="col">
              <h6>Frete: </h6>
            </div>
            <div className="col">
              <h6>R$30,00</h6>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-end">
        <h4>
          Total:{" "}
          {cartTotalPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h4>
      </div>
      <hr />
      {!!currentUser && (
        <div className="d-flex justify-content-end">
          <Button
            variant="primary"
            className="btn btn-primary"
            onClick={() => finalizePurchase()}
          >
            Finalizar Compra
          </Button>
        </div>
      )}
      {!currentUser && (
        <div className="d-flex justify-content-end">
          <h5 className="text-danger">
            Você precisa fazer login para finalizar a compra
          </h5>
        </div>
      )}
    </Default>
  );
}
