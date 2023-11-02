import React from "react";

export default function RegisterForm() {
  return (
    <div className="col-xs-12 col-sm-12  col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">
      <div className="back-outside shadow col-xl-8 offset-xl-2" role="document">
        <div className="shadow back-outside ">
          <div className="d-flex flex-column justify-content-around ">
            <h6 className="mb-0 fs-2 px-4">Cadastro</h6>
            <p className="detalhe px-4">
              <span className="detalhe-red">*</span>Campos obrigatórios
            </p>

            <div className="form-div shadow rounded-4">
              <fieldset>
                <legend>Dados da conta</legend>
                <form className="">
                  <label htmlFor="email">
                    <span className="detalhe-red">*</span>email
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-3 form-grande mb-3"
                    id="email"
                    autocomplete="email"
                    placeholder="Ex.: email@mail.com"
                  />

                  <label htmlFor="inputPassword">
                    <span className="detalhe-red">*</span>senha
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-3 form-grande mb-4"
                    id="inputPassword"
                    autocomplete="new-password"
                    placeholder="Digite sua senha"
                  />
                  <input
                    type="password"
                    className="form-control rounded-3 form-grande mb-4"
                    id="input-sec-password"
                    autocomplete="new-password"
                    placeholder="Digite novamente sua senha"
                  />
                </form>
              </fieldset>
            </div>

            <div className="form-div shadow rounded-4">
              <fieldset>
                <legend>Dados Pessoais</legend>

                <div className="mb-3">
                  <label htmlFor="inputNome">
                    <span className="detalhe-red">*</span>nome completo
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-3 form-grande"
                    id="inputNome"
                    autocomplete="name"
                    placeholder="Ex.: joao da silva"
                  />
                </div>

                <p className="mb-2">
                  <span className="detalhe-red">*</span>gênero
                </p>

                <div className="flex-row d-flex flex-xs-wrap">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="masculino-genero"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="masculino-genero"
                    >
                      masculino
                    </label>
                  </div>
                  <div className="form-check px-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="feminino-genero"
                      checked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="feminino-genero"
                    >
                      feminino
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="outro-genero"
                      checked=""
                    />
                    <label className="form-check-label" htmlFor="outro-genero">
                      outro
                    </label>
                  </div>
                </div>

                <label htmlFor="iputNascimento">
                  <span className="detalhe-red">*</span>Data de Nascimento
                </label>
                <input
                  type="date"
                  className="form-control rounded-3 mb-3 form-medio"
                  id="iputNascimento"
                  autocomplete="bday"
                  placeholder="Ex.: DD/MM/AAAA"
                />

                <label htmlFor="inputCPF">
                  <span className="detalhe-red">*</span>CPF
                </label>
                <input
                  type="number"
                  maxlength="14"
                  className="form-control rounded-3 mb-3 form-medio"
                  id="inputCPF"
                  placeholder="Ex.:Digite o CPF"
                />

                <label htmlFor="inputTelefone">
                  <span className="detalhe-red">*</span>Telefone
                </label>
                <input
                  type="tel"
                  className="form-control rounded-3 mb-5 form-medio"
                  id="inputTelefone"
                  autocomplete="tel"
                  placeholder="Ex.: ddd 99999-9999"
                />
              </fieldset>
            </div>
            <div className="d-flex justify-content-center">
              <a className="btn btn-primary mb-3" href="Form-Endereco.html">
                Próximo: Endereço
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
