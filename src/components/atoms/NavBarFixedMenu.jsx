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
            Consoles
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/jogos" className="nav-link  px-2 link-nav-menu">
            Jogos
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/category/acessorios"
            className="nav-link  px-2 link-nav-menu"
          >
            Acessórios
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/promo" className="nav-link px-2 link-nav-menu">
            Promoções
          </Link>
        </li>
      </ul>
    </div>
  );
}
