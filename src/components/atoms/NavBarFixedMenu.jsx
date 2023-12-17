import React from "react";
import { Link } from "react-router-dom";

export default function NavBarFixedMenu() {
  return (
    <div>
      <ul className="nav me-auto">
        <li className="nav-item">
          <Link to="/category/monitor" className="nav-link  px-2 link-nav-menu">
            MONITORES
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/category/notebook"
            className="nav-link  px-2 link-nav-menu"
          >
            NOTEBOOKS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/game" className="nav-link  px-2 link-nav-menu">
            GAMES
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/category/smartfone"
            className="nav-link px-2 link-nav-menu"
          >
            SMARTFONE
          </Link>
        </li>
      </ul>
    </div>
  );
}
