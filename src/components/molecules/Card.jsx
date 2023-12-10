import React from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { GlobalContex } from "../../contexts/GlobalContext";

export default function Card(props) {
  const { cart, setCart } = React.useContext(GlobalContex);

  const iconStyle = {
    background: "lightGrey",
    color: "#000",
    fontSize: "30",
    borderRadius: "15%",
    margin: "5px 0 0 0",
  };

  const handleAddToCart = (product) => {
    const isProduct = cart.find((item) => item.productID === product._id);
    if (isProduct) {
      // Se o produto já está no carrinho, incrementa a quantidade
      setCart((prevState) =>
        prevState.map((item) =>
          item.productID === product._id
            ? { ...item, productQt: item.productQt + 1 }
            : item
        )
      );
    } else {
      setCart((prevState) => [
        ...prevState,
        {
          productID: product._id,
          productName: product.name,
          productPrice: product.price,
          productQt: 1,
          productImage: product.image,
          productCategory: product.category,
        },
      ]);
    }
    console.log();
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3" id={props.product._id}>
      <div className="card border-primary card-back-style shadow">
        <div className="d-flex container justify-content-end CardIconDiv">
          <div>
            <AddShoppingCartIcon
              style={iconStyle}
              onClick={() => handleAddToCart(props.product)}
            ></AddShoppingCartIcon>
          </div>
        </div>

        <img
          className="card-img-top card-img-dimensions"
          src={props.product.image}
          alt=""
        />
        <div className="card-body d-grid gap-2 card-body-custom">
          <h5>{props.product.name}</h5>
          <h6 className="card-text text-center">
            {props.product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h6>
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
