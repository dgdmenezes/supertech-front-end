import React from "react";
import { Link } from "react-router-dom";

export default function NavBarFixedMenu() {
  return (
    <div>
      <ul className="nav me-auto">
        <li className="nav-item">
          <Link
            to="/category/consoles"
            className="nav-link  px-2 link-nav-menu"
          >
            CONSOLES
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/jogos" className="nav-link  px-2 link-nav-menu">
            JOGOS
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/category/acessorios"
            className="nav-link  px-2 link-nav-menu"
          >
            ACESSÓRIOS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/promo" className="nav-link px-2 link-nav-menu">
            PROMOCOES
          </Link>
        </li>
      </ul>
    </div>
  );
}
