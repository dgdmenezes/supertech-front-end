import React from "react";
import { Link } from "react-router-dom";
import GoogleTPLogo from "../../images/Google__G__Logo.svg";

export default function Login() {
  return (
    <div>
      <div class="row login-div">
        <div class="col-xs-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3 col-xxl-4 offset-xxl-4">
          <div class=" login-form-div" role="document">
            <div class="rounded-4 shadow">
              <div class="p-5 pb-4 border-bottom-0">
                <h1 class="fw-bold mb-0 fs-2">Fazer login</h1>
              </div>

              <div class="p-5 pt-0">
                <form class="">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control rounded-3 form-medio"
                      id="floatingInput"
                      placeholder="Ex.: email@mail.com"
                    />
                    <label for="floatingInput">Digite seu email</label>
                  </div>
                  <div class="form-floating mb-1">
                    <input
                      type="password"
                      class="form-control rounded-3"
                      id="floatingPassword"
                      placeholder="Digite sua senha"
                    />
                    <label for="floatingPassword">Digite a sua senha</label>
                  </div>
                  <div class="texto-link-div mb-2">
                    <Link to="" class="texto-link">
                      Esqueceu a sua senha?
                    </Link>
                  </div>
                  <button
                    class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                    type="submit"
                  >
                    Continuar
                  </button>

                  <hr class="my-4" />
                  <h2 class="fs-5 fw-bold mb-3">ou entrar com...</h2>
                  <button
                    class="w-100 py-2 mb-2 btn rounded-3 btn-google"
                    type="submit"
                  >
                    <img src={GoogleTPLogo} alt="" />
                    Login com Google
                  </button>
                  <Link to="#" class="texto-link">
                    Não tem uma conta?Cadastre-se
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
