import React from "react";
//import NavBarDropDownMenu from "../atoms/NavBarDropDownMenu";
import NavBarFixedMenu from "../atoms/NavBarFixedMenu";

export default function NavBar() {
  return (
    <nav className="py-2  border-bottom">
      <div className="container d-flex flex-wrap">
        <NavBarFixedMenu />
      </div>
    </nav>
  );
}
