import React from "react";
import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <h5>Página do Administrador</h5>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/admin">
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gestão de Produtos
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      class="dropdown-item"
                      to="/admin/products/manualregistration"
                    >
                      Cadastro Manual de Produto
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item nav-link disabled"
                      to="/admin/products/batchregistration"
                    >
                      Cadastro de Produto em Lote
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      class="dropdown-item nav-link disabled"
                      to="/admin/products/update"
                    >
                      Atualizar Produto
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                    <Link
                      class="dropdown-item nav-link disabled"
                      to="/admin/products/delete"
                    >
                      Deletar Produto
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle nav-link disabled"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gestão de Usuários
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/admin/users/update">
                      Atualizar Usuário
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                    <Link class="dropdown-item" to="/admin/users/delete">
                      Deletar Usuário
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
