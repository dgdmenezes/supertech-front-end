import React from "react";

export default function RegisterForm() {
  return (
    <div class="col-xs-12 col-sm-12  col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">
      <div class="back-outside shadow col-xl-8 offset-xl-2" role="document">
        <div class="shadow back-outside ">
          <div class="d-flex flex-column justify-content-around ">
            <h6 class="mb-0 fs-2 px-4">Cadastro</h6>
            <p class="detalhe px-4">
              <span class="detalhe-red">*</span>Campos obrigatórios
            </p>

            <div class="form-div shadow rounded-4">
              <fieldset>
                <legend>Dados da conta</legend>
                <form class="">
                  <label for="email">
                    <span class="detalhe-red">*</span>email
                  </label>
                  <input
                    type="email"
                    class="form-control rounded-3 form-grande mb-3"
                    id="email"
                    autocomplete="email"
                    placeholder="Ex.: email@mail.com"
                  />

                  <label for="inputPassword">
                    <span class="detalhe-red">*</span>senha
                  </label>
                  <input
                    type="password"
                    class="form-control rounded-3 form-grande mb-4"
                    id="inputPassword"
                    autocomplete="new-password"
                    placeholder="Digite sua senha"
                  />
                  <input
                    type="password"
                    class="form-control rounded-3 form-grande mb-4"
                    id="input-sec-password"
                    autocomplete="new-password"
                    placeholder="Digite novamente sua senha"
                  />
                </form>
              </fieldset>
            </div>

            <div class="form-div shadow rounded-4">
              <fieldset>
                <legend>Dados Pessoais</legend>

                <div class="mb-3">
                  <label for="inputNome">
                    <span class="detalhe-red">*</span>nome completo
                  </label>
                  <input
                    type="text"
                    class="form-control rounded-3 form-grande"
                    id="inputNome"
                    autocomplete="name"
                    placeholder="Ex.: joao da silva"
                  />
                </div>

                <p class="mb-2">
                  <span class="detalhe-red">*</span>gênero
                </p>

                <div class="flex-row d-flex flex-xs-wrap">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="masculino-genero"
                    />
                    <label class="form-check-label" for="masculino-genero">
                      masculino
                    </label>
                  </div>
                  <div class="form-check px-5">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="feminino-genero"
                      checked=""
                    />
                    <label class="form-check-label" for="feminino-genero">
                      feminino
                    </label>
                  </div>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="outro-genero"
                      checked=""
                    />
                    <label class="form-check-label" for="outro-genero">
                      outro
                    </label>
                  </div>
                </div>

                <label for="iputNascimento">
                  <span class="detalhe-red">*</span>Data de Nascimento
                </label>
                <input
                  type="date"
                  class="form-control rounded-3 mb-3 form-medio"
                  id="iputNascimento"
                  autocomplete="bday"
                  placeholder="Ex.: DD/MM/AAAA"
                />

                <label for="inputCPF">
                  <span class="detalhe-red">*</span>CPF
                </label>
                <input
                  type="number"
                  maxlength="14"
                  class="form-control rounded-3 mb-3 form-medio"
                  id="inputCPF"
                  placeholder="Ex.:Digite o CPF"
                />

                <label for="inputTelefone">
                  <span class="detalhe-red">*</span>Telefone
                </label>
                <input
                  type="tel"
                  class="form-control rounded-3 mb-5 form-medio"
                  id="inputTelefone"
                  autocomplete="tel"
                  placeholder="Ex.: ddd 99999-9999"
                />
              </fieldset>
            </div>
            <div class="d-flex justify-content-center">
              <a class="btn btn-primary mb-3" href="Form-Endereco.html">
                Próximo: Endereço
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
