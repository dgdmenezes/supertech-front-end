import React from "react";
import image from "../../images/prodimages/product123.jpg";

export default function ProductShow() {
  return (
    <div class="row ">
      <div class="offset-1 col-1 div-group-thumb-image">
        <div class="div-thumb-image">
          <img src={image} class="thumb-image" alt="" />
        </div>
        <div class="div-thumb-image">
          <img src={image} class="thumb-image" alt="" />
        </div>
        <div class="div-thumb-image">
          <img src={image} class="thumb-image" alt="" />
        </div>
        <div class="div-thumb-image">
          <img src={image} class="thumb-image" alt="" />
        </div>
      </div>

      <div class="col-4 div-show-product">
        <div>
          <img src={image} class="product-show-image" alt="" />
        </div>
      </div>

      <div class="col-4">
        <h6>Monitor Dell UltraSharp de 23.8” U2422H</h6>
        <p>De: R$ 1.579,00</p>
        <p>Por: R$ 1.579,00</p>
        <p>No cartão: R$1.579,00 em até 12x de</p>
        <p>No Boleto: R$ 1.500,05 (5% OFF)</p>
        <div class="row">
          <div class="d-flex justify-content-around mb-3">
            <div class="d-flex flex-row justify-content-around align-items-center">
              <label for="inputFrete">Calcular Frete:</label>
              <input
                class="form-control rounded-3 mb-2"
                type="text"
                maxlength="9"
                id="inputFrete"
                placeholder="Digite seu cep"
              />
            </div>
            <div>
              <button class="btn btn-primary" id="inputFrete">
                OK
              </button>
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex align-items-center justify-content-evenly">
            <div>
              <p>Quantidade:</p>
            </div>
            <div>
              <button class="btn btn-primary mb-3" id="plusItem">
                +
              </button>
            </div>
            <div>
              <p>1</p>
            </div>
            <div>
              <button class="btn btn-primary mb-3" id="MinusItem">
                -
              </button>
            </div>
          </div>
          <div class="d-flex ">
            <div>
              <button class="btn btn-primary mb-3" id="addCarrinho">
                comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
