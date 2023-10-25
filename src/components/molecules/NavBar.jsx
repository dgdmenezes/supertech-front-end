import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav class="py-2 bg-body-tertiary border-bottom">
        <div class="container d-flex flex-wrap">
          <div class="dropdown">
            <a
              href="#"
              class="d-flex align-items-center py-2 px-2 dropdown-toggle link-nav-menu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categoria
            </a>
            <ul class="dropdown-menu text-small shadow">
              <li>
                <a class="dropdown-item active" href="#" aria-current="page">
                  Overview
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Ofertas
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Lançamentos
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Notebook
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Periféricos
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <ul class="nav me-auto ">
            <li class="nav-item">
              <a
                href="#"
                class="nav-link link-body-emphasis px-2 link-nav-menu"
              >
                Ofertas
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link link-body-emphasis px-2 link-nav-menu"
              >
                Lançamentos
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link link-body-emphasis px-2 link-nav-menu"
              >
                Notebooks
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link link-body-emphasis px-2 link-nav-menu"
              >
                Smartphones
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link link-body-emphasis px-2 link-nav-menu"
              >
                Games
              </a>
            </li>
          </ul>
          <div></div>
        </div>
      </nav>
    </div>
  );
}
