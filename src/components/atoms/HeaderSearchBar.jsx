import React from "react";

export default function HeaderSearchBar() {
  return (
    <form class="w-100 me-3" role="search">
      <input
        type="search"
        class="form-control"
        placeholder="Buscar..."
        aria-label="Search"
      />
    </form>
  );
}
