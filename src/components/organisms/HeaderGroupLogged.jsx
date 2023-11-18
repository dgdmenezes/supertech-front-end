import React from "react";
import HeaderLogged from "../molecules/HeaderLogged";
import NavBar from "../molecules/NavBar";

export default function HeaderGroup() {
  return (
    <header className="flex-row">
      <HeaderLogged />
      <NavBar />
    </header>
  );
}
