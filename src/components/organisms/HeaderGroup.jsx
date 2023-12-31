import React from "react";
import Header from "../molecules/Header";
import NavBar from "../molecules/NavBar";

export default function HeaderGroup() {
  return (
    <header className="flex-row">
      <Header />
      <NavBar />
    </header>
  );
}
