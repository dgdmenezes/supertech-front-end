import React from "react";

export default function ProductShow(props) {
  return (
    <div className="row ">
      <div className="offset-1 col-1 div-group-thumb-image">
        <div className="div-thumb-image">
          <img src={props.product.image} className="thumb-image" alt="" />
        </div>
        <div className="div-thumb-image">
          <img src={props.product.image} className="thumb-image" alt="" />
        </div>
        <div className="div-thumb-image">
          <img src={props.product.image} className="thumb-image" alt="" />
        </div>
        <div className="div-thumb-image">
          <img src={props.product.image} className="thumb-image" alt="" />
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
        <h6>
          {props.product.category} {props.product.brand} {props.product.name}
        </h6>
        <p>De: {props.product.price}</p>
        <p>
          {props.product.price}
          preciso ter um price com desconto ?
        </p>
        <p>
          No cartão: {props.product.price}
          em até 12x de{" "}
        </p>
        <p>
          No Boleto: {props.product.price}
          (5% OFF)
        </p>
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
              <button className="btn btn-primary mb-3" id="plusItem">
                +
              </button>
            </div>
            <div>
              <p>1</p>
            </div>
            <div>
              <button className="btn btn-primary mb-3" id="MinusItem">
                -
              </button>
            </div>
          </div>
          <div className="d-flex ">
            <div>
              <button className="btn btn-primary mb-3" id="addCarrinho">
                comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
