import React from "react";
import { Link } from "react-router-dom";
export default function NavBarDropDownMenu() {
  return (
    <div class="dropdown">
      <Link
        to="#"
        class="d-flex align-items-center py-2 px-2 dropdown-toggle link-nav-menu"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categoria
      </Link>
      <ul class="dropdown-menu text-small shadow">
        <li>
          <Link class="dropdown-item active" to="#" aria-current="page">
            Overview
          </Link>
        </li>
        <li>
          <Link class="dropdown-item" to="#">
            Ofertas
          </Link>
        </li>
        <li>
          <Link class="dropdown-item" to="#">
            Lançamentos
          </Link>
        </li>
        <li>
          <Link class="dropdown-item" to="#">
            Notebook
          </Link>
        </li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li>
          <Link class="dropdown-item" to="#">
            {" "}
            Periféricos
          </Link>
        </li>
        <li>
          <Link class="dropdown-item" to="#">
            {" "}
            Analytics
          </Link>
        </li>
      </ul>
    </div>
  );
}
