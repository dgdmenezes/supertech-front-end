import React from "react";
//import NavBarDropDownMenu from "../atoms/NavBarDropDownMenu";
import NavBarFixedMenu from "../atoms/NavBarFixedMenu";

export default function NavBar() {
  return (
    <nav className="navBar row">
      <div className="container d-flex justify-content-center ">
        <NavBarFixedMenu />
      </div>
    </nav>
  );
}
