import React from "react";

export default function AddressForm() {
  return (
    <div class="col-xs-12 col-sm-12  col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">
      <div class="back-outside shadow col-xl-8 offset-xl-2" role="document">
        <div class="shadow back-outside ">
          <div class="d-flex flex-column justify-content-around ">
            <h6 class="mb-0 fs-2 px-4">Cadastro</h6>
            <p class="detalhe px-4">
              <span class="detalhe-red">*</span>Campos obrigatórios
            </p>

            <div class="form-div form-div form-div shadow rounded-4">
              <fieldset>
                <form>
                  <legend>Endereço</legend>

                  <label for="inputApelido">
                    <span class="detalhe-red">*</span>Apelido do endereço
                  </label>
                  <input
                    type="text"
                    class="form-control rounded-3 mb-3 form-grande"
                    id="inputApelido"
                    placeholder="Ex.: Casa, trabalho etc..."
                  />

                  <label for="inputCEP">
                    <span class="detalhe-red">*</span>cep
                  </label>
                  <input
                    type="text"
                    maxlength="9"
                    class="form-control rounded-3 mb-3 form-pequeno"
                    id="inputCEP"
                    placeholder="Ex.: 00000-000"
                  />

                  <label for="inputEndereco">
                    <span class="detalhe-red">*</span>endereço
                  </label>
                  <input
                    type="text"
                    class="form-control rounded-3 mb-3 form-grande"
                    id="inputEndereco"
                    autocomplete="street-address"
                    placeholder="Ex.: Rua das flores"
                  />

                  <label for="inputNumero">
                    <span class="detalhe-red">*</span>número
                  </label>
                  <input
                    type="text"
                    maxlength="6"
                    class="form-control rounded-3 mb-3 form-pequeno"
                    id="inputNumero"
                    autocomplete=""
                    placeholder="Ex.: 99"
                  />

                  <label for="inputReferencia">informações de referência</label>
                  <input
                    type="text"
                    class="form-control rounded-3 mb-3 form-grande"
                    id="inputReferencia"
                    autocomplete=""
                    placeholder="Ex.: próximo à padaria"
                  />

                  <label for="inputBairro">
                    <span class="detalhe-red">*</span>bairro
                  </label>
                  <input
                    type="text"
                    class="form-control rounded-3 mb-3 form-medio"
                    id="inputBairro"
                    autocomplete="address-level3"
                    placeholder="Ex.: Centro"
                  />

                  <label for="inputCidade">
                    <span class="detalhe-red">*</span>cidade
                  </label>
                  <input
                    type="text"
                    class="form-control rounded-3 mb-3 form-medio"
                    id="inputCidade"
                    autocomplete="address-level2"
                    placeholder="Ex.: São Paulo - SP"
                  />

                  <label for="inputEstado">
                    <span class="detalhe-red">*</span>Estado
                  </label>
                  <input
                    type="text"
                    class="form-control rounded-3 mb-3 form-minusculo"
                    id="inputEstado"
                    autocomplete="address-level1"
                    placeholder="Ex.: SP"
                  />
                </form>
              </fieldset>
            </div>
            <div class="d-flex justify-content-center">
              <a class="btn btn-primary mb-3" href="Form-Endereco.html">
                Salvar Endereço
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
