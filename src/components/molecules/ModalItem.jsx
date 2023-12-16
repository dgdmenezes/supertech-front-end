import React from "react";
//import { GlobalContex } from "../../contexts/GlobalContext";

export default function ModalItem(props) {
  return (
    <div className="modalItem row">
      <hr />
      <div className="modalItemImagem col-3">
        <img
          className="modalImagem"
          src={props.item.productImage}
          alt="Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"
        />
      </div>
      <div className="modalItemDescricao col-5">
        <h6>
          {props.item.productCategory} {props.item.productName}
        </h6>
      </div>
      <div className="modalItemQuantidade col-2">
        <div>
          <button
            className="btn"
            onClick={() => props.incrementCartItem(props.item.productID)}
          >
            +
          </button>
        </div>
        <div>
          <p>{props.item.productQt}</p>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => props.decrementCartItem(props.item.productID)}
          >
            -
          </button>
        </div>
      </div>
      <div className="modalItemPreco col-2">
        <h5>
          {props.item.productPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h5>
      </div>
    </div>
  );
}
