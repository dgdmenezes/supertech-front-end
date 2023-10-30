import React from "react";
import { Link } from "react-router-dom";
import AppLoading from "./AppLoading";

const URI = "http://localhost:3001/products/";

export default function CardGroup() {
  const [products, setProducts] = React.useState([]);
  const [isLoading, SetIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`${URI}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        SetIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <AppLoading />
  ) : (
    <div className="px-2 py-3">
      <div className="row g-3 container-card">
        {products.map((product) => (
          <div
            className="col-sm-6 col-md-4 col-lg-3"
            id={product._id}
            key={product._id}
          >
            <div className="card border-primary card-back-style shadow">
              <img
                className="card-img-top card-img-dimensions"
                src={product.image}
                alt=""
              />
              <div className="card-body d-grid gap-2 card-body-custom">
                <h5>{product.name}</h5>
                <p className="card-text">
                  {product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <Link
                  className="btn btn-primary card-button-color"
                  id={product._id}
                  key={product._id}
                  to={`/product/${product._id}`}
                >
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
