import React from "react";
import imageCard from "../../images/prodimages/product123.jpg";

export default function ModalItem() {
  return (
    <div class="modalItem row">
      <hr />
      <div class="modalItemImagem col-3">
        <img
          class="modalImagem"
          src={imageCard}
          alt="Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"
        />
      </div>
      <div class="modalItemDescricao col-5">
        <h6>Notebook HP Core i3</h6>
      </div>
      <div class="modalItemQuantidade col-2">
        <div>
          <button class="btn">+</button>
        </div>
        <div>
          <p>1</p>
        </div>
        <div>
          <button class="btn">-</button>
        </div>
      </div>
      <div class="modalItemPreco col-2">
        <h5>R$ 2.429,10</h5>
      </div>
    </div>
  );
}
