import React from "react";
import { Link } from "react-router-dom";
import boxLineWhite from "../../images/login-box-line-white.svg";
export default function HeaderDropDownIconLogin() {
  return (
    <div>
      <Link
        to="#"
        className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={boxLineWhite}
          alt="mdo"
          width="32"
          height="32"
          className="rounded-circle"
        />
      </Link>
      <ul className="dropdown-menu text-small shadow">
        <li>
          <Link className="dropdown-item" to="#">
            Olá, Dante!
          </Link>
        </li>
        <li>
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
      </ul>
    </div>
  );
}
