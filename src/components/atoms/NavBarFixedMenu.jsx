import React from "react";
import { Link } from "react-router-dom";

export default function NavBarFixedMenu() {
  return (
    <div>
      <ul class="nav me-auto ">
        <li class="nav-item">
          <Link to="#" class="nav-link link-body-emphasis px-2 link-nav-menu">
            Ofertas
          </Link>
        </li>
        <li class="nav-item">
          <Link to="#" class="nav-link link-body-emphasis px-2 link-nav-menu">
            Lançamentos
          </Link>
        </li>
        <li class="nav-item">
          <Link to="#" class="nav-link link-body-emphasis px-2 link-nav-menu">
            Notebooks
          </Link>
        </li>
        <li class="nav-item">
          <Link to="#" class="nav-link link-body-emphasis px-2 link-nav-menu">
            Smartphones
          </Link>
        </li>
        <li class="nav-item">
          <Link to="#" class="nav-link link-body-emphasis px-2 link-nav-menu">
            Games
          </Link>
        </li>
      </ul>
    </div>
  );
}
