import React from "react";
import imageCard from "../../images/prodimages/product123.jpg";

export default function ModalItem() {
  return (
    <div className="modalItem row">
      <hr />
      <div className="modalItemImagem col-3">
        <img
          className="modalImagem"
          src={imageCard}
          alt="Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"
        />
      </div>
      <div className="modalItemDescricao col-5">
        <h6>Notebook HP Core i3</h6>
      </div>
      <div className="modalItemQuantidade col-2">
        <div>
          <button className="btn">+</button>
        </div>
        <div>
          <p>1</p>
        </div>
        <div>
          <button className="btn">-</button>
        </div>
      </div>
      <div className="modalItemPreco col-2">
        <h5>R$ 2.429,10</h5>
      </div>
    </div>
  );
}
