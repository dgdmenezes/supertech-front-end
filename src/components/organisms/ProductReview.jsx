import React from "react";

export default function ProductReview() {
  return (
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
          Esse monitor é incrível, a fidelidade de suas cores me fez ser mais
          acertivo no meu trabalho. Excelente produto, recomendo.{" "}
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
  );
}
