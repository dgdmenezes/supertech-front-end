import React from "react";
import { Link } from "react-router-dom";
import { GlobalContex } from "../../contexts/GlobalContext";
import boxLineWhite from "../../images/login-box-line-white.svg";

export default function HeaderDropDownIconLoginLogged() {
  const { currentUser } = React.useContext(GlobalContex);
  return (
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
          <p className="dropdown-item" to="/login">
            Olá, {currentUser.name}!
          </p>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" to="/customer">
            Minha página
          </Link>
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
          <Link className="dropdown-item" to="/logout">
            Fazer Logoff
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
