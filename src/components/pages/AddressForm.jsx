import React from "react";
import DefaultSimple from "../templates/DefaultSimple";

export default function AddressForm() {
  const [buscaCep, setBuscaCep] = React.useState("");
  const [dadosCep, setDadosCep] = React.useState({});

  React.useEffect(() => {
    fetch(`https://viacep.com.br/ws/${buscaCep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setDadosCep(data);
      })
      .catch((err) => console.log(err));
  }, [buscaCep, dadosCep]);

  return (
    <div>
      <DefaultSimple>
        <div className="col-xs-12 col-sm-12  col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">
          <div
            className="back-outside shadow col-xl-8 offset-xl-2"
            role="document"
          >
            <div className="shadow back-outside ">
              <div className="d-flex flex-column justify-content-around ">
                <h6 className="mb-0 fs-2 px-4">Cadastro</h6>
                <p className="detalhe px-4">
                  <span className="detalhe-red">*</span>Campos obrigatórios
                </p>

                <h6 className="mb-0 px-4">Olá Usuário(a)</h6>

                <div className="form-div form-div form-div shadow rounded-4">
                  <fieldset>
                    <form>
                      <legend>Endereço</legend>

                      <label htmlFor="inputApelido">
                        <span className="detalhe-red">*</span>Apelido do
                        endereço
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-3 mb-3 form-grande"
                        id="inputApelido"
                        placeholder="Ex.: Casa, trabalho etc..."
                      />

                      <label htmlFor="inputCEP">
                        <span className="detalhe-red">*</span>cep
                      </label>
                      <input
                        type="text"
                        maxlength="9"
                        className="form-control rounded-3 mb-3 form-pequeno"
                        id="inputCEP"
                        placeholder="Ex.: 00000-000"
                        onBlur={(cep) => setBuscaCep(cep.target.value)}
                      />

                      <label htmlFor="inputEndereco">
                        <span className="detalhe-red">*</span>endereço
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-3 mb-3 form-grande"
                        id="inputEndereco"
                        autocomplete="street-address"
                        placeholder="Ex.: Rua das flores"
                        value={dadosCep.logradouro}
                      />

                      <label htmlFor="inputNumero">
                        <span className="detalhe-red">*</span>número
                      </label>
                      <input
                        type="text"
                        maxlength="6"
                        className="form-control rounded-3 mb-3 form-pequeno"
                        id="inputNumero"
                        autocomplete=""
                        placeholder="Ex.: 99"
                      />

                      <label htmlFor="inputReferencia">
                        informações de referência
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-3 mb-3 form-grande"
                        id="inputReferencia"
                        autocomplete=""
                        placeholder="Ex.: próximo à padaria"
                      />

                      <label htmlFor="inputBairro">
                        <span className="detalhe-red">*</span>bairro
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-3 mb-3 form-medio"
                        id="inputBairro"
                        autocomplete="address-level3"
                        placeholder="Ex.: Centro"
                        value={dadosCep.bairro}
                      />

                      <label htmlFor="inputCidade">
                        <span className="detalhe-red">*</span>cidade
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-3 mb-3 form-medio"
                        id="inputCidade"
                        autocomplete="address-level2"
                        placeholder="Ex.: São Paulo - SP"
                        value={dadosCep.localidade}
                      />

                      <label htmlFor="inputEstado">
                        <span className="detalhe-red">*</span>Estado
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-3 mb-3 form-minusculo"
                        id="inputEstado"
                        autocomplete="address-level1"
                        placeholder="Ex.: SP"
                        value={dadosCep.uf}
                      />
                    </form>
                  </fieldset>
                </div>
                <div className="d-flex justify-content-center">
                  <a className="btn btn-primary mb-3" href="Form-Endereco.html">
                    Salvar Endereço
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultSimple>
    </div>
  );
}
