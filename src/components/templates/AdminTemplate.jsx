import React from "react";

export default function AdminTemplate(props) {
  return (
    <div>
      <div>Página do administrador</div>
      <div>
        Cadastro Manual de produto/ Cadastro em lote de produto / Atualizar
        Produto / Apagar Produto
      </div>
      <div>{props.children}</div>
    </div>
  );
}
