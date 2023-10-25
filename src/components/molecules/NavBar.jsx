import React from "react";
import NavBarDropDownMenu from "../atoms/NavBarDropDownMenu";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav class="py-2 bg-body-tertiary border-bottom">
        <div class="container d-flex flex-wrap">
          <NavBarDropDownMenu />
          <ul class="nav me-auto ">
            <li class="nav-item">
              <Link
                to="#"
                class="nav-link link-body-emphasis px-2 link-nav-menu"
              >
                Ofertas
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="#"
                class="nav-link link-body-emphasis px-2 link-nav-menu"
              >
                Lançamentos
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="#"
                class="nav-link link-body-emphasis px-2 link-nav-menu"
              >
                Notebooks
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="#"
                class="nav-link link-body-emphasis px-2 link-nav-menu"
              >
                Smartphones
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="#"
                class="nav-link link-body-emphasis px-2 link-nav-menu"
              >
                Games
              </Link>
            </li>
          </ul>
          <div></div>
        </div>
      </nav>
    </div>
  );
}
