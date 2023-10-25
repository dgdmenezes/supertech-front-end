/* eslint jsx-a11y/anchor-is-valid:0 */
import logo from "../../images/logo.webp";
import boxLineWhite from "../../images/login-box-line-white.svg";
import shoppingCartLineWhite from "../../images/shopping-cart-line-white.svg";
import React from "react";

export default function Header() {
  return (
    <div class="container shadow">
      <header class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 col-xl-2 fora-logo">
          <div class="col">
            <img
              src={logo}
              alt="Logotipo de fundo azul com letras laranjas escrito: SuperTech"
              class="img-fluid fora-img"
            />
          </div>
        </div>

        <div class="d-flex col-xs-6 col-sm-12 col-md-5 col-xl-8 align-items-center py-4">
          <form class="w-100 me-3" role="search">
            <input
              type="search"
              class="form-control"
              placeholder="Buscar..."
              aria-label="Search"
            />
          </form>
        </div>

        <div class="col-xs-1 col-sm-1 col-md-1 col-xl-1 header-icon-button py-4">
          <a
            href="#"
            class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={boxLineWhite}
              alt="mdo"
              width="32"
              height="32"
              class="rounded-circle"
            />
          </a>
          <ul class="dropdown-menu text-small shadow">
            <li>
              <a class="dropdown-item" href="#">
                Olá, Dante!
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Últimos pedidos
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Alterar Cadastro
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Fazer Logoff
              </a>
            </li>
          </ul>
        </div>

        <div class="col-xs-1 col-sm-1 col-md-1 col-xl-1 header-icon-button py-4">
          <a href="#" class="d-block">
            <img
              src={shoppingCartLineWhite}
              alt="mdo"
              width="32"
              height="32"
              class=""
              data-bs-toggle="modal"
              data-bs-target="#modalExibirCarrinho"
            />
          </a>
          <div id="contadorCarrinhoDiv">
            <p id="contadorCarrinho" class="">
              00
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}
