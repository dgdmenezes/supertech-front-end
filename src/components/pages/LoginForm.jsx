import React from "react";
import DefaultSimple from "../templates/DefaultSimple";
import GoogleTPLogo from "../../images/Google__G__Logo.svg";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";
import { saveToken } from "../../helpers/Auth";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showError, setShowError] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const fetchOptions = {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/users/login", fetchOptions)
      .then((response) => {
        if (response.status === 403) {
          throw new Error("Unauthorized");
        }
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(({ token }) => {
        console.log(token);
        setShowSuccess(true);
        setTimeout(() => {
          saveToken(token);
          navigate("/customer");
        }, 1500);
      })
      .catch(() => {
        console.log("Deu erro");
        setEmail("");
        setPassword("");
        setShowError(true);
      });
  };
  const handleInputFocus = () => {
    setShowError(false);
  };

  return (
    <div>
      <DefaultSimple>
        <div className="row login-div">
          <div className="col-xxl-6 offset-xxl-3 col-md-8 offset-md-2 col-sm-12 offset-sm-0 col-xs-12 offset-xs-0">
            <div className=" login-form-div" role="document">
              <div className="rounded-4 shadow">
                <div className="p-5 pb-4 border-bottom-0">
                  <h1 className="fw-bold mb-0 fs-2">Fazer login</h1>
                </div>

                <div className="p-5 pt-0">
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control rounded-3 "
                        id="floatingInput"
                        placeholder="Ex.: email@mail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={handleInputFocus}
                      />
                      <label htmlFor="floatingInput">Digite seu email</label>
                    </div>
                    <div className="form-floating mb-1">
                      <input
                        type="password"
                        className="form-control rounded-3"
                        id="floatingPassword"
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={handleInputFocus}
                      />
                      <label htmlFor="floatingPassword">
                        Digite a sua senha
                      </label>
                    </div>
                    <div className="texto-link-div mb-2">
                      <Link to="" className="texto-link">
                        Esqueceu a sua senha?
                      </Link>
                    </div>
                    <button
                      className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                      type="submit"
                    >
                      Continuar
                    </button>
                    {showError && (
                      <Alert severity="error">
                        E-mail e/ou senha inválido(s)
                      </Alert>
                    )}
                    {showSuccess && (
                      <Alert severity="success">
                        Login efetuado com sucesso!
                      </Alert>
                    )}
                  </form>
                  <hr className="my-4" />
                  <h2 className="fs-5 fw-bold mb-3">ou entrar com...</h2>
                  <button
                    className="w-100 py-2 mb-2 btn rounded-3 btn-google"
                    type="submit"
                  >
                    <img src={GoogleTPLogo} alt="" />
                    Login com Google
                  </button>
                  <Link to="/register" className="texto-link">
                    Não tem uma conta?Cadastre-se
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultSimple>
    </div>
  );
}
