import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContex } from "../../contexts/GlobalContext";

export default function ProductShow(props) {
  const { cart, setCart } = React.useContext(GlobalContex);
  const [qtItem, setQtItem] = React.useState(1);

  const navigate = useNavigate();

  const incrementItem = () => {
    let quantidade = qtItem;
    quantidade += 1;
    setQtItem(quantidade);
  };

  const decrementItem = () => {
    let quantidade = qtItem;
    quantidade -= 1;
    if (quantidade === 0) {
      setQtItem(1);
    } else {
      setQtItem(quantidade);
    }
  };

  const handleAddToCart = (product) => {
    const isProduct = cart.find((item) => item.productID === product._id);
    if (isProduct) {
      // Se o produto já está no carrinho, incrementa a quantidade
      setCart((prevState) =>
        prevState.map((item) =>
          item.productID === product._id ? { ...item, productQt: qtItem } : item
        )
      );
    } else {
      setCart((prevState) => [
        ...prevState,
        {
          productID: product._id,
          productName: product.name,
          productDescription: `${product.category} ${product.brand} ${product.name}`,
          productPrice: product.price,
          productQt: qtItem,
          productImage: product.image,
          productCategory: product.category,
        },
      ]);
    }
    navigate("/cart");
  };

  const continueShopping = () => {
    navigate("/");
  };
  return (
    <div className="row ">
      <div className="offset-1 col-1 div-group-thumb-image">
        <div className="div-thumb-image">
          <img
            src={props.product.image}
            onClick={() => console.log("btn-1")}
            className="thumb-image"
            alt=""
          />
        </div>
        <div className="div-thumb-image">
          <img
            src={props.product.image}
            onClick={() => console.log("btn-2")}
            className="thumb-image"
            alt=""
          />
        </div>
        <div className="div-thumb-image">
          <img
            src={props.product.image}
            onClick={() => console.log("btn-3")}
            className="thumb-image"
            alt=""
          />
        </div>
        <div className="div-thumb-image">
          <img
            src={props.product.image}
            onClick={() => console.log("btn-4")}
            className="thumb-image"
            alt=""
          />
        </div>
      </div>

      <div className="col-4 div-show-product">
        <div>
          <img
            src={props.product.image}
            className="product-show-image"
            alt=""
          />
        </div>
      </div>

      <div className="col-4">
        <h5>
          {props.product.category} {props.product.brand} {props.product.name}
        </h5>
        <h6>
          <del>De: {props.product.price}</del>
        </h6>
        <br />
        <h6>Por: {props.product.price}</h6>
        <br />
        <br />

        <div className="row">
          <div className="d-flex justify-content-around mb-3">
            <div className="d-flex flex-row justify-content-around align-items-center">
              <label htmlFor="inputFrete">Calcular Frete:</label>
              <input
                className="form-control rounded-3 mb-2"
                type="text"
                maxLength={9}
                id="inputFrete"
                placeholder="Digite seu cep"
              />
            </div>
            <div>
              <button className="btn btn-primary" id="inputFrete">
                OK
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-evenly">
            <div>
              <p>Quantidade:</p>
            </div>
            <div>
              <button
                className="btn btn-primary mb-3"
                id="plusItem"
                onClick={() => incrementItem()}
              >
                +
              </button>
            </div>
            <div>
              <p>{qtItem}</p>
            </div>
            <div>
              <button
                className="btn btn-primary mb-3"
                id="MinusItem"
                onClick={() => decrementItem()}
              >
                -
              </button>
            </div>
          </div>
          <div className="d-flex ">
            <div>
              <button
                className="btn btn-primary mb-3"
                id="addCarrinho"
                onClick={() => continueShopping()}
              >
                Continuar comprando
              </button>
            </div>
            <div>
              <button
                className="btn btn-primary mb-3"
                id="addCarrinho"
                onClick={() => handleAddToCart(props.product)}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
