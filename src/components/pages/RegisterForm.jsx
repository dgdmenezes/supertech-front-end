import React from "react";
import DefaultSimple from "../templates/DefaultSimple";
import { useNavigate } from "react-router-dom";
import VerifyValidToken from "../atoms/VerifyValidToken";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const fetchOptions = {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      name,
      gender,
      birthDate,
      cpf,
      phoneNumber,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/users", fetchOptions)
      .then(() => {
        setEmail("");
        setPassword("");
        setName("");
        setGender("");
        setBirthDate("");
        setCpf("");
        setPhoneNumber("");
        navigate("/login");
      })
      .catch((e) => console.log("erro", e));
  };

  return (
    <div>
      <DefaultSimple>
        <VerifyValidToken />
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
                <form onSubmit={handleFormSubmit}>
                  <div className="form-div shadow rounded-4">
                    <fieldset>
                      <legend>Dados da conta</legend>

                      <label htmlFor="email">
                        <span className="detalhe-red">*</span>email
                      </label>
                      <input
                        type="email"
                        className="form-control rounded-3 form-grande mb-3"
                        id="email"
                        autoComplete="email"
                        placeholder="Ex.: email@mail.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <label htmlFor="inputPassword">
                        <span className="detalhe-red">*</span>senha
                      </label>
                      <input
                        type="password"
                        className="form-control rounded-3 form-grande mb-4"
                        id="inputPassword"
                        autoComplete="new-password"
                        placeholder="Digite sua senha"
                      />
                      <input
                        type="password"
                        className="form-control rounded-3 form-grande mb-4"
                        id="input-sec-password"
                        autoComplete="new-password"
                        placeholder="Digite novamente sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                      />
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
                          autoComplete="name"
                          placeholder="Ex.: joao da silva"
                          onChange={(e) => setName(e.target.value)}
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
                            value="male"
                            onClick={(e) => setGender(e.target.value)}
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
                            value="female"
                            onClick={(e) => setGender(e.target.value)}
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
                            value="other"
                            onClick={(e) => setGender(e.target.value)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="outro-genero"
                          >
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
                        autoComplete="bday"
                        placeholder="Ex.: DD/MM/AAAA"
                        onChange={(e) => setBirthDate(e.target.value)}
                      />

                      <label htmlFor="inputCPF">
                        <span className="detalhe-red">*</span>CPF
                      </label>
                      <input
                        type="number"
                        maxLength="14"
                        className="form-control rounded-3 mb-3 form-medio"
                        id="inputCPF"
                        placeholder="Ex.:Digite o CPF"
                        onChange={(e) => setCpf(e.target.value)}
                      />

                      <label htmlFor="inputTelefone">
                        <span className="detalhe-red">*</span>Telefone
                      </label>
                      <input
                        type="tel"
                        className="form-control rounded-3 mb-5 form-medio"
                        id="inputTelefone"
                        autoComplete="tel"
                        placeholder="Ex.: ddd 99999-9999"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </fieldset>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary mb-3">Salvar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DefaultSimple>
    </div>
  );
}
