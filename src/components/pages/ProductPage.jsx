import React from "react";
import Default from "../templates/Default";
import Card from "../molecules/Card";
import image from "../../images/prodimages/product123.jpg";

export default function ProductPage() {
  return (
    <Default>
      <div className="bg-light">
        <div class="base-produto-div">
          <div class="faixa">
            <ul>
              <li>Inicio</li>
              <li>Hardware</li>
              <li>Monitores</li>
              <li>Full HD</li>
            </ul>
          </div>
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
          <h2>Características do produto</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
              illo dolore, impedit autem facere corrupti doloremque culpa, odio
              quaerat asperiores iure nam odit. Possimus deleniti magnam
              reprehenderit at quam fugit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              maiores possimus ad, accusantium nisi dolorum ducimus maxime rerum
              nostrum delectus deserunt ipsam eaque porro molestiae quos quas
              quod adipisci minima.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              eius accusamus sed temporibus itaque voluptates nobis velit dicta
              corrupti nihil debitis natus, harum iure vero quod laborum
              voluptatibus illum nemo?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              eius accusamus sed temporibus itaque voluptates nobis velit dicta
              corrupti nihil debitis natus, harum iure vero quod laborum
              voluptatibus illum nemo?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              eius accusamus sed temporibus itaque voluptates nobis velit dicta
              corrupti nihil debitis natus, harum iure vero quod laborum
              voluptatibus illum nemo?
            </p>
            <h2>Você também pode se interessar por:</h2>
          </div>
        </div>
        <div class="px-5">
          <div class="row g-3 container-card">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div>
          <h2>Avaliações dos usuários</h2>
          <h5>2 clientes avaliaram esse produto:</h5>
          <div>
            <hr />
            <p>
              Usuário: <span>Dante</span>
            </p>

            <p>(20/10/2023) - 5/5 estrelas</p>
            <p>
              Esse monitor é incrível, a fidelidade de suas cores me fez ser
              mais acertivo no meu trabalho. Excelente produto, recomendo.{" "}
            </p>
            <hr />
            <p>
              Usuário: <span>João</span>
            </p>
            <p>(15/05/2023) 4/5 estrelas</p>
            <p>
              O monitor é bom, cumpre o que promete, mas não superou minhas
              espectativas.{" "}
            </p>
          </div>
        </div>
      </div>
    </Default>
  );
}
