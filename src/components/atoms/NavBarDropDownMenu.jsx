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
        Categoria
      </Link>
      <ul className="dropdown-menu text-small shadow">
        <li>
          <Link className="dropdown-item active" to="#" aria-current="page">
            Overview
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            Ofertas
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            Lançamentos
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            Notebook
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            {" "}
            Periféricos
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            {" "}
            Analytics
          </Link>
        </li>
      </ul>
    </div>
  );
}
