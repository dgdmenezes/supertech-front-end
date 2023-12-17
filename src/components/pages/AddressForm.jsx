import React from "react";
import DefaultSimple from "../templates/DefaultSimple";
import { useNavigate } from "react-router-dom";
import { GlobalContex } from "../../contexts/GlobalContext";
import { getToken, removeToken } from "../../helpers/Auth";
import { Alert } from "@mui/material";

export default function AddressForm() {
  const { currentUser, setCurrentUser } = React.useContext(GlobalContex);

  /*const [buscaCep, setBuscaCep] = React.useState("");
  const [dadosCep, setDadosCep] = React.useState({});*/

  const [nameAddress, setNameAddress] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [complement, setComplement] = React.useState("");
  const [referencePoint, setReferencePoint] = React.useState("");
  const [neighborhood, setNeighborhood] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("AC");
  const [userId, setUserId] = React.useState("");

  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);

  const URLConnection = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const token = getToken();

  React.useEffect(() => {
    const fetchOptionsToken = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`${URLConnection}/users/token`, fetchOptionsToken)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCurrentUser(data);
        setUserId(data._id);
      })
      .catch(() => {
        removeToken();
        navigate("/");
      });
  }, [navigate, setCurrentUser, token, URLConnection]);

  /* React.useEffect(() => {
    fetch(`https://viacep.com.br/ws/${buscaCep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setDadosCep(data);
      })
      .catch((err) => console.log(err));
  }, [buscaCep, dadosCep]);*/

  const fetchOptions = {
    method: "POST",
    body: JSON.stringify({
      nameAddress,
      cep,
      address,
      number,
      complement,
      referencePoint,
      neighborhood,
      city,
      state,
      userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${URLConnection}/address/create`, fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(fetchOptions);
        return response.json();
      })
      .then(() => {
        setTimeout(() => {
          navigate("/logged");
        }, 1000);
        setShowSuccess(true);
        console.log(fetchOptions.body);
      })
      .catch((e) => {
        setTimeout(() => {
          navigate("/logged");
        }, 1000);
        console.log("erro", e);
        setShowError(true);
      });
  };
  /*const handleCepChange = async (newCep) => {
    const debounce = (func, delay) => {
      clearTimeout(debounce.timer);
      debounce.timer = setTimeout(() => func(), delay);
    };

    const execute = async () => {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${newCep}/json/`
        );
        const data = await response.json();
        setAddress(data.logradouro);
        setCity(data.localidade);
        setState(data.uf);
      } catch (error) {}
    };
    debounce(execute, 5000);
  };*/
  /*const autoFillAddress = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        let inputEndereco = document.querySelector("#inputEndereco");
        inputEndereco.value = data.logradouro;
        let inputBairro = document.querySelector("#inputBairro");
        inputBairro.value = data.bairro;
        let inputCidade = document.querySelector("#inputCidade");
        inputCidade.value = data.localidade;
        let optionEstado = document.querySelector("#optionEstado");
        optionEstado.value = data.uf;
      })
      .catch((err) => console.log(err));
  };*/
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

                <h6 className="mb-0 px-4">Olá, {currentUser.name}</h6>

                <div className="form-div form-div form-div shadow rounded-4">
                  <fieldset>
                    <form onSubmit={handleFormSubmit}>
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
                        onChange={(e) => setNameAddress(e.target.value)}
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
                        //onChange={(e) => handleCepChange(e.target.value)}
                        onChange={(e) => setCep(e.target.value)}
                        /*onBlur={(e) => autoFillAddress(e.target.value)}*/
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
                        onChange={(e) => setAddress(e.target.value)}
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
                        onChange={(e) => setNumber(e.target.value)}
                      />

                      <label htmlFor="inputComplemento">
                        <span className="detalhe-red"></span>Complemento
                      </label>
                      <input
                        type="text"
                        maxlength="6"
                        className="form-control rounded-3 mb-3 form-pequeno"
                        id="inputComplemento"
                        autocomplete=""
                        placeholder="Ex.: apto 202"
                        onChange={(e) => setComplement(e.target.value)}
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
                        onChange={(e) => setReferencePoint(e.target.value)}
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
                        onChange={(e) => setNeighborhood(e.target.value)}
                      />

                      <label htmlFor="inputCidade">
                        <span className="detalhe-red">*</span>cidade
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-3 mb-3 form-medio"
                        id="inputCidade"
                        value={city}
                        autocomplete="address-level2"
                        placeholder="Ex.: São Paulo - SP"
                        onChange={(e) => setCity(e.target.value)}
                      />

                      <label htmlFor="inputEstado">
                        <span className="detalhe-red">*</span>Estado
                      </label>
                      <select
                        name="optionEstado"
                        id="optionEstado"
                        onChange={(e) => {
                          setState(e.target.value);
                          console.log(e.target.value);
                        }}
                      >
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                      </select>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-primary mb-3">
                          Salvar Endereço
                        </button>
                      </div>
                      {showError && (
                        <Alert severity="error">
                          Houve algum erro no cadastro, tente novamente.
                        </Alert>
                      )}
                      {showSuccess && (
                        <Alert severity="success">
                          Cadastro de endereço efetuado com sucesso.
                        </Alert>
                      )}
                    </form>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultSimple>
    </div>
  );
}
