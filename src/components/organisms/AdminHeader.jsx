import React from "react";
import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h5>Página do Administrador</h5>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/admin"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gestão de Produtos
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/admin/products/manualregistration"
                    >
                      Cadastro Manual de Produto
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav-link disabled"
                      to="/admin/products/batchregistration"
                    >
                      Cadastro de Produto em Lote
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav-link disabled"
                      to="/admin/products/update"
                    >
                      Atualizar Produto
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                    <Link
                      className="dropdown-item nav-link disabled"
                      to="/admin/products/delete"
                    >
                      Deletar Produto
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle nav-link disabled"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gestão de Usuários
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/admin/users/update">
                      Atualizar Usuário
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                    <Link className="dropdown-item" to="/admin/users/delete">
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
