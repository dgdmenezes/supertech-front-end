import React from "react";
import { Link } from "react-router-dom";
import boxLineWhite from "../../images/login-box-line-white.svg";
import HeaderDropDownIconLoginLogged from "./HeaderDropDownIconLoginLogged";

export default function HeaderDropDownIconLogin() {
  return !!localStorage.getItem("token") ? (
    <HeaderDropDownIconLoginLogged />
  ) : (
    <div>
      <Link
        to="#"
        className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="d-flex align-items-end">
          <div>
            <div>
              <img
                src={boxLineWhite}
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle d-flex"
              />
            </div>
          </div>
        </div>
      </Link>
      <ul className="dropdown-menu text-small shadow">
        <li>
          <Link className="dropdown-item" to="/login">
            Fazer Login
          </Link>
        </li>
        <hr />
        <li>
          <Link className="dropdown-item" to="/register">
            Cadastre-se!
          </Link>
        </li>
      </ul>
    </div>
  );
}
/*<li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            Últimos pedidos
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            Alterar Cadastro
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            Fazer Logoff
          </Link>
        </li>
*/
