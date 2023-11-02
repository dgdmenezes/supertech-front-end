import React from "react";

export default function HeaderSearchBar() {
  return (
    <form className="w-100 me-3" role="search">
      <input
        type="search"
        className="form-control"
        placeholder="Buscar..."
        aria-label="Search"
      />
    </form>
  );
}
