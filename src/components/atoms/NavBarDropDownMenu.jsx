import React from "react";
import { Link } from "react-router-dom";
export default function NavBarDropDownMenu() {
  return (
    <div className="dropdown">
      <Link
        to="#"
        className="d-flex align-items-center py-2 px-2 dropdown-toggle link-nav-menu"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categorias
      </Link>
      <ul className="dropdown-menu text-small shadow">
        <li>
          <Link className="dropdown-item active" to="#" aria-current="page">
            Consoles
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            Jogos
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            Acessórios
          </Link>
        </li>
      </ul>
    </div>
  );
}
