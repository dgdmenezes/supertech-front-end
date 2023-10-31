import React from "react";
import { Link } from "react-router-dom";

export default function NavBarFixedMenu() {
  return (
    <div>
      <ul className="nav me-auto">
        <li className="nav-item ">
          <Link
            to="#"
            className="nav-link link-body-emphasis px-2 link-nav-menu"
          >
            Ofertas
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="#"
            className="nav-link link-body-emphasis px-2 link-nav-menu"
          >
            Lançamentos
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="#"
            className="nav-link link-body-emphasis px-2 link-nav-menu"
          >
            Notebooks
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="#"
            className="nav-link link-body-emphasis px-2 link-nav-menu"
          >
            Smartphones
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="#"
            className="nav-link link-body-emphasis px-2 link-nav-menu"
          >
            Games
          </Link>
        </li>
      </ul>
    </div>
  );
}
