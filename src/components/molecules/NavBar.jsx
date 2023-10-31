import React from "react";
import NavBarDropDownMenu from "../atoms/NavBarDropDownMenu";
import NavBarFixedMenu from "../atoms/NavBarFixedMenu";

export default function NavBar() {
  return (
    <nav class="py-2  border-bottom ">
      <div class="container d-flex flex-wrap">
        <NavBarDropDownMenu />
        <NavBarFixedMenu />
      </div>
    </nav>
  );
}
