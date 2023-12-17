import React from "react";
import { Link } from "react-router-dom";
export default function NavBarDropDownMenuItem(props) {
  return (
    <li>
      <Link
        className="dropdown-item"
        to={`/category/${props.item._id}`}
        aria-current="page"
      >
        {props.item._id}
      </Link>
    </li>
  );
}
